import { NextRequest, NextResponse } from 'next/server'
import { prismaClient } from '@/lib/prismaClient'

export async function POST(request: NextRequest) {
  try {
    const { webinarId, aiAgentId } = await request.json()

    if (!webinarId || !aiAgentId) {
      return NextResponse.json({ error: 'Missing webinarId or aiAgentId' }, { status: 400 })
    }

    console.log('🤖 Assigning AI agent:', aiAgentId, 'to webinar:', webinarId)

    const updatedWebinar = await prismaClient.webinar.update({
      where: { id: webinarId },
      data: { aiAgentId },
      include: {
        presenter: true,
      }
    })

    console.log('🤖 Webinar updated successfully:', updatedWebinar.title)
    console.log('🤖 AI Agent ID now:', updatedWebinar.aiAgentId)

    return NextResponse.json({ 
      success: true, 
      webinar: updatedWebinar,
      message: 'AI agent assigned successfully'
    })
  } catch (error: any) {
    console.error('Error assigning AI agent:', error)
    return NextResponse.json({ 
      error: 'Failed to assign AI agent',
      details: error.message 
    }, { status: 500 })
  }
}