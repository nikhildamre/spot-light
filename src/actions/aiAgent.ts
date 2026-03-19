'use server'

import { createVapiAssistant, deleteVapiAssistant, updateVapiAssistant } from './vapi'

export interface CreateAIAgentParams {
  name: string
  description: string
  firstMessage: string
  systemPrompt: string
  userId: string
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

export async function createAIAgent(params: CreateAIAgentParams) {
  try {
    // Create assistant in VAPI
    const vapiResult = await createVapiAssistant({
      name: params.name,
      firstMessage: params.firstMessage,
      systemPrompt: params.systemPrompt,
      model: params.model,
      voice: params.voice,
    })

    if (!vapiResult.success) {
      return {
        success: false,
        error: vapiResult.error,
      }
    }

    // Save to local database
    const { prismaClient } = await import('@/lib/prismaClient')
    
    const dbAgent = await prismaClient.aIAgent.create({
      data: {
        name: params.name,
        description: params.description,
        vapiAssistantId: vapiResult.assistant.id,
        firstMessage: params.firstMessage,
        systemPrompt: params.systemPrompt,
        userId: params.userId,
        modelProvider: params.model?.provider || 'openai',
        modelName: params.model?.model || 'gpt-3.5-turbo',
        temperature: params.model?.temperature || 0.7,
        voiceProvider: params.voice?.provider || '11labs',
        voiceId: params.voice?.voiceId || '21m00Tcm4TlvDq8ikWAM',
        status: 'ACTIVE',
      }
    })

    console.log('🤖 AI Agent saved to database:', dbAgent.name, 'ID:', dbAgent.id)

    // Return the database agent with VAPI data
    return {
      success: true,
      agent: {
        ...dbAgent,
        ...vapiResult.assistant,
      },
    }
  } catch (error: any) {
    console.error('Error creating AI agent:', error)
    return {
      success: false,
      error: error.message || 'Failed to create AI agent',
    }
  }
}

export async function updateAIAgent(agentId: string, params: Partial<CreateAIAgentParams>) {
  try {
    const vapiResult = await updateVapiAssistant(agentId, {
      name: params.name,
      firstMessage: params.firstMessage,
      systemPrompt: params.systemPrompt,
      model: params.model,
      voice: params.voice,
    })

    if (!vapiResult.success) {
      return {
        success: false,
        error: vapiResult.error,
      }
    }

    return {
      success: true,
      agent: vapiResult.assistant,
    }
  } catch (error: any) {
    console.error('Error updating AI agent:', error)
    return {
      success: false,
      error: error.message || 'Failed to update AI agent',
    }
  }
}

export async function deleteAIAgent(agentId: string) {
  try {
    const vapiResult = await deleteVapiAssistant(agentId)

    if (!vapiResult.success) {
      return {
        success: false,
        error: vapiResult.error,
      }
    }

    return {
      success: true,
    }
  } catch (error: any) {
    console.error('Error deleting AI agent:', error)
    return {
      success: false,
      error: error.message || 'Failed to delete AI agent',
    }
  }
}