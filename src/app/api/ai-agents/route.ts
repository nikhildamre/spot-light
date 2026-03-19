import { NextResponse } from 'next/server'
import { prismaClient } from '@/lib/prismaClient'

export async function GET() {
  try {
    const agents = await prismaClient.aIAgent.findMany({
      select: {
        id: true,
        name: true,
        vapiAssistantId: true,
        description: true,
      }
    })

    return NextResponse.json(agents)
  } catch (error) {
    console.error('Error fetching AI agents:', error)
    return NextResponse.json({ error: 'Failed to fetch AI agents' }, { status: 500 })
  }
}