import { NextRequest, NextResponse } from 'next/server'

const VAPI_PRIVATE_KEY = process.env.VAPI_PRIVATE_KEY || process.env.VAPI_API_KEY
const VAPI_BASE_URL = 'https://api.vapi.ai'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: assistantId } = await params

    if (!VAPI_PRIVATE_KEY) {
      return NextResponse.json(
        { error: 'VAPI API key not configured' },
        { status: 500 }
      )
    }

    console.log('Fetching assistant:', assistantId)

    const response = await fetch(`${VAPI_BASE_URL}/assistant/${assistantId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${VAPI_PRIVATE_KEY}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('VAPI API error:', response.status, errorText)
      return NextResponse.json(
        { error: 'Failed to fetch assistant' },
        { status: response.status }
      )
    }

    const assistant = await response.json()
    console.log('Assistant fetched successfully')

    return NextResponse.json(assistant)
  } catch (error: any) {
    console.error('Error fetching assistant:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
