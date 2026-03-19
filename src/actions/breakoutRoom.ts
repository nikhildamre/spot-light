'use server'

import { prismaClient } from '@/lib/prismaClient'
import { createOrGetCall } from './stream'

export interface CreateBreakoutRoomParams {
  webinarId: string
  name: string
  description?: string
  aiAgentId?: string
  maxParticipants?: number
}

export async function createBreakoutRoom(params: CreateBreakoutRoomParams) {
  try {
    // Create Stream call for the breakout room
    const callResult = await createOrGetCall(
      `breakout-${params.webinarId}-${Date.now()}`,
      params.aiAgentId || 'system'
    )

    if (!callResult.success) {
      return {
        success: false,
        error: 'Failed to create Stream call for breakout room',
      }
    }

    // Create breakout room in database
    const breakoutRoom = await prismaClient.breakoutRoom.create({
      data: {
        webinarId: params.webinarId,
        name: params.name,
        description: params.description,
        aiAgentId: params.aiAgentId,
        maxParticipants: params.maxParticipants || 10,
        streamCallId: callResult.call?.id,
        status: 'WAITING',
      },
      include: {
        aiAgent: true,
        participants: true,
      },
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

export async function getBreakoutRooms(webinarId: string) {
  try {
    const breakoutRooms = await prismaClient.breakoutRoom.findMany({
      where: {
        webinarId,
      },
      include: {
        aiAgent: true,
        participants: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    })

    return {
      success: true,
      breakoutRooms,
    }
  } catch (error: any) {
    console.error('Error fetching breakout rooms:', error)
    return {
      success: false,
      error: error.message || 'Failed to fetch breakout rooms',
      breakoutRooms: [],
    }
  }
}

export async function joinBreakoutRoom(
  breakoutRoomId: string,
  userId: string,
  userName: string
) {
  try {
    // Check if room is full
    const room = await prismaClient.breakoutRoom.findUnique({
      where: { id: breakoutRoomId },
      include: {
        participants: {
          where: {
            leftAt: null, // Only count active participants
          },
        },
      },
    })

    if (!room) {
      return {
        success: false,
        error: 'Breakout room not found',
      }
    }

    if (room.participants.length >= room.maxParticipants) {
      return {
        success: false,
        error: 'Breakout room is full',
      }
    }

    // Add participant
    const participant = await prismaClient.breakoutParticipant.create({
      data: {
        breakoutRoomId,
        userId,
        userName,
      },
    })

    // Update room status to ACTIVE if it was WAITING
    if (room.status === 'WAITING') {
      await prismaClient.breakoutRoom.update({
        where: { id: breakoutRoomId },
        data: { status: 'ACTIVE' },
      })
    }

    return {
      success: true,
      participant,
    }
  } catch (error: any) {
    console.error('Error joining breakout room:', error)
    return {
      success: false,
      error: error.message || 'Failed to join breakout room',
    }
  }
}

export async function leaveBreakoutRoom(
  breakoutRoomId: string,
  userId: string
) {
  try {
    const participant = await prismaClient.breakoutParticipant.updateMany({
      where: {
        breakoutRoomId,
        userId,
        leftAt: null,
      },
      data: {
        leftAt: new Date(),
      },
    })

    return {
      success: true,
      participant,
    }
  } catch (error: any) {
    console.error('Error leaving breakout room:', error)
    return {
      success: false,
      error: error.message || 'Failed to leave breakout room',
    }
  }
}

export async function deleteBreakoutRoom(breakoutRoomId: string) {
  try {
    await prismaClient.breakoutRoom.delete({
      where: { id: breakoutRoomId },
    })

    return {
      success: true,
    }
  } catch (error: any) {
    console.error('Error deleting breakout room:', error)
    return {
      success: false,
      error: error.message || 'Failed to delete breakout room',
    }
  }
}

export async function updateBreakoutRoomStatus(
  breakoutRoomId: string,
  status: 'WAITING' | 'ACTIVE' | 'ENDED'
) {
  try {
    const room = await prismaClient.breakoutRoom.update({
      where: { id: breakoutRoomId },
      data: { status },
    })

    return {
      success: true,
      room,
    }
  } catch (error: any) {
    console.error('Error updating breakout room status:', error)
    return {
      success: false,
      error: error.message || 'Failed to update breakout room status',
    }
  }
}