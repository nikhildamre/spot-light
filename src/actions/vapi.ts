'use server'

// VAPI API Integration for AI Voice Agents
const VAPI_PRIVATE_KEY = process.env.VAPI_PRIVATE_KEY || process.env.VAPI_API_KEY
const VAPI_BASE_URL = 'https://api.vapi.ai'

export interface VapiAssistant {
  id: string
  name: string
  model: any
  voice: any
  firstMessage: string
  createdAt: string
  updatedAt: string
}

export interface CreateAssistantParams {
  name: string
  firstMessage: string
  systemPrompt: string
  model?: {
    provider: string
    model: string
    temperature?: number
  }
  voice?: {
    provider: string
    voiceId: string
  }
}

export async function createVapiAssistant(params: CreateAssistantParams) {
  try {
    if (!VAPI_PRIVATE_KEY || VAPI_PRIVATE_KEY === 'your_vapi_api_key_here') {
      throw new Error('VAPI_PRIVATE_KEY is not configured')
    }

    // Construct the request body according to VAPI API v2 format
    const requestBody: any = {
      name: params.name,
      firstMessage: params.firstMessage,
      model: {
        provider: params.model?.provider || 'openai',
        model: params.model?.model || 'gpt-4',
        temperature: params.model?.temperature || 0.7,
        messages: [
          {
            role: 'system',
            content: params.systemPrompt
          }
        ]
      },
      voice: {
        provider: params.voice?.provider || '11labs',
        voiceId: params.voice?.voiceId || '21m00Tcm4TlvDq8ikWAM'
      }
    }

    console.log('Creating VAPI assistant with:', JSON.stringify(requestBody, null, 2))

    const response = await fetch(`${VAPI_BASE_URL}/assistant`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${VAPI_PRIVATE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })

    const responseText = await response.text()
    console.log('VAPI Response:', response.status, responseText)

    if (!response.ok) {
      let errorMessage = 'Failed to create assistant'
      try {
        const error = JSON.parse(responseText)
        errorMessage = error.message || errorMessage
      } catch (e) {
        errorMessage = responseText || errorMessage
      }
      throw new Error(errorMessage)
    }

    const assistant = JSON.parse(responseText)
    return {
      success: true,
      assistant,
    }
  } catch (error: any) {
    console.error('Error creating VAPI assistant:', error)
    return {
      success: false,
      error: error.message || 'Failed to create assistant',
    }
  }
}

export async function getVapiAssistants() {
  try {
    if (!VAPI_PRIVATE_KEY) {
      console.warn('VAPI_PRIVATE_KEY is not configured')
      return {
        success: true,
        assistants: [],
        warning: 'VAPI_PRIVATE_KEY not configured. Please add it to your .env file.'
      }
    }

    const response = await fetch(`${VAPI_BASE_URL}/assistant`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${VAPI_PRIVATE_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('VAPI API Error:', response.status, errorText)
      return {
        success: true,
        assistants: [],
        error: `Failed to fetch assistants: ${response.status}`
      }
    }

    const assistants = await response.json()
    console.log('Fetched assistants:', assistants.length)
    return {
      success: true,
      assistants,
    }
  } catch (error: any) {
    console.error('Error fetching VAPI assistants:', error)
    return {
      success: true,
      error: error.message || 'Failed to fetch assistants',
      assistants: [],
    }
  }
}

export async function updateVapiAssistant(assistantId: string, params: Partial<CreateAssistantParams>) {
  try {
    if (!VAPI_PRIVATE_KEY) {
      throw new Error('VAPI_PRIVATE_KEY is not configured')
    }

    const updateBody: any = {}
    
    if (params.name) updateBody.name = params.name
    if (params.firstMessage) updateBody.firstMessage = params.firstMessage
    if (params.model) updateBody.model = params.model
    if (params.voice) updateBody.voice = params.voice

    const response = await fetch(`${VAPI_BASE_URL}/assistant/${assistantId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${VAPI_PRIVATE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateBody),
    })

    if (!response.ok) {
      throw new Error('Failed to update assistant')
    }

    const assistant = await response.json()
    return {
      success: true,
      assistant,
    }
  } catch (error: any) {
    console.error('Error updating VAPI assistant:', error)
    return {
      success: false,
      error: error.message || 'Failed to update assistant',
    }
  }
}

export async function deleteVapiAssistant(assistantId: string) {
  try {
    if (!VAPI_PRIVATE_KEY) {
      throw new Error('VAPI_PRIVATE_KEY is not configured')
    }

    const response = await fetch(`${VAPI_BASE_URL}/assistant/${assistantId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${VAPI_PRIVATE_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to delete assistant')
    }

    return {
      success: true,
    }
  } catch (error: any) {
    console.error('Error deleting VAPI assistant:', error)
    return {
      success: false,
      error: error.message || 'Failed to delete assistant',
    }
  }
}

export async function createVapiPhoneCall(assistantId: string, phoneNumber: string) {
  try {
    if (!VAPI_PRIVATE_KEY) {
      throw new Error('VAPI_PRIVATE_KEY is not configured')
    }

    const response = await fetch(`${VAPI_BASE_URL}/call/phone`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${VAPI_PRIVATE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        assistantId,
        customer: {
          number: phoneNumber,
        },
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to create phone call')
    }

    const call = await response.json()
    return {
      success: true,
      call,
    }
  } catch (error: any) {
    console.error('Error creating VAPI phone call:', error)
    return {
      success: false,
      error: error.message || 'Failed to create phone call',
    }
  }
}

export async function createVapiWebCall(assistantId: string) {
  try {
    if (!VAPI_PRIVATE_KEY) {
      throw new Error('VAPI_PRIVATE_KEY is not configured')
    }

    const response = await fetch(`${VAPI_BASE_URL}/call/web`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${VAPI_PRIVATE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        assistantId,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to create web call')
    }

    const call = await response.json()
    return {
      success: true,
      call,
      webCallUrl: call.webCallUrl,
    }
  } catch (error: any) {
    console.error('Error creating VAPI web call:', error)
    return {
      success: false,
      error: error.message || 'Failed to create web call',
    }
  }
}