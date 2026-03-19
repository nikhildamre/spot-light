'use server'

import { prismaClient } from '@/lib/prismaClient'
import { createVapiWebCall } from './vapi'

export async function assignAIAgentToWebinar(webinarId: string, aiAgentId: string) {
  try {
    const webinar = await prismaClient.webinar.update({
      where: { id: webinarId },
      data: { aiAgentId },
      include: {
        presenter: true,
      }
    })

    return {
      success: true,
      webinar,
    }
  } catch (error: any) {
    console.error('Error assigning AI agent to webinar:', error)
    return {
      success: false,
      error: error.message || 'Failed to assign AI agent',
    }
  }
}

export async function removeAIAgentFromWebinar(webinarId: string) {
  try {
    const webinar = await prismaClient.webinar.update({
      where: { id: webinarId },
      data: { aiAgentId: null },
    })

    return {
      success: true,
      webinar,
    }
  } catch (error: any) {
    console.error('Error removing AI agent from webinar:', error)
    return {
      success: false,
      error: error.message || 'Failed to remove AI agent',
    }
  }
}

export async function startAIAgentInWebinar(webinarId: string) {
  try {
    // Get webinar with AI agent
    const webinar = await prismaClient.webinar.findUnique({
      where: { id: webinarId },
      include: {
        presenter: true,
      }
    })

    if (!webinar || !webinar.aiAgentId) {
      throw new Error('Webinar not found or no AI agent assigned')
    }

    // Get AI agent details
    const aiAgent = await prismaClient.aIAgent.findUnique({
      where: { id: webinar.aiAgentId }
    })

    if (!aiAgent) {
      throw new Error('AI agent not found')
    }

    // Create VAPI web call for the AI agent
    const vapiCall = await createVapiWebCall(aiAgent.vapiAssistantId)

    if (!vapiCall.success) {
      throw new Error(vapiCall.error || 'Failed to create VAPI call')
    }

    return {
      success: true,
      webCallUrl: vapiCall.webCallUrl,
      callId: vapiCall.call?.id,
      aiAgent,
    }
  } catch (error: any) {
    console.error('Error starting AI agent in webinar:', error)
    return {
      success: false,
      error: error.message || 'Failed to start AI agent',
    }
  }
}

export async function getWebinarWithAIAgent(webinarId: string) {
  try {
    console.log('🤖 Loading webinar with AI agent:', webinarId)
    const webinar = await prismaClient.webinar.findUnique({
      where: { id: webinarId },
      include: {
        presenter: true,
      }
    })

    if (!webinar) {
      throw new Error('Webinar not found')
    }

    console.log('🤖 Webinar found:', webinar.title)
    console.log('🤖 Webinar aiAgentId:', webinar.aiAgentId)

    let aiAgent = null
    if (webinar.aiAgentId) {
      console.log('🤖 Loading AI agent with ID:', webinar.aiAgentId)
      aiAgent = await prismaClient.aIAgent.findUnique({
        where: { id: webinar.aiAgentId }
      })
      console.log('🤖 AI agent loaded:', aiAgent ? aiAgent.name : 'Not found')
    } else {
      console.log('🤖 No AI agent ID assigned to webinar')
    }

    return {
      success: true,
      webinar,
      aiAgent,
    }
  } catch (error: any) {
    console.error('Error getting webinar with AI agent:', error)
    return {
      success: false,
      error: error.message || 'Failed to get webinar',
    }
  }
}

export async function createBreakoutRoomWithAI(
  webinarId: string,
  name: string,
  aiAgentId?: string,
  maxParticipants: number = 10
) {
  try {
    const breakoutRoom = await prismaClient.breakoutRoom.create({
      data: {
        webinarId,
        name,
        aiAgentId,
        maxParticipants,
        status: 'WAITING',
      },
      include: {
        aiAgent: true,
      }
    })

    return {
      success: true,
      breakoutRoom,
    }
  } catch (error: any) {
    console.error('Error creating breakout room:', error)
    return {
      success: false,
      error: error.message || 'Failed to create breakout room',
    }
  }
}

export async function joinBreakoutRoom(
  breakoutRoomId: string,
  userId: string,
  userName: string
) {
  try {
    // Check if room exists and has space
    const breakoutRoom = await prismaClient.breakoutRoom.findUnique({
      where: { id: breakoutRoomId },
      include: {
        participants: true,
        aiAgent: true,
      }
    })

    if (!breakoutRoom) {
      throw new Error('Breakout room not found')
    }

    if (breakoutRoom.participants.length >= breakoutRoom.maxParticipants) {
      throw new Error('Breakout room is full')
    }

    // Add participant
    const participant = await prismaClient.breakoutParticipant.create({
      data: {
        breakoutRoomId,
        userId,
        userName,
      }
    })

    // Update room status to active if first participant
    if (breakoutRoom.participants.length === 0) {
      await prismaClient.breakoutRoom.update({
        where: { id: breakoutRoomId },
        data: { status: 'ACTIVE' }
      })
    }

    return {
      success: true,
      participant,
      breakoutRoom,
    }
  } catch (error: any) {
    console.error('Error joining breakout room:', error)
    return {
      success: false,
      error: error.message || 'Failed to join breakout room',
    }
  }
}