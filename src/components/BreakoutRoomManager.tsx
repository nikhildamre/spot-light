'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Users, Bot, Plus, Settings, UserPlus, LogOut } from 'lucide-react'
import { createBreakoutRoomWithAI, joinBreakoutRoom } from '@/actions/webinarAgent'
import { getVapiAssistants } from '@/actions/vapi'
import { toast } from 'sonner'

type BreakoutRoom = {
  id: string
  name: string
  description?: string
  maxParticipants: number
  status: string
  participants: Array<{
    id: string
    userName: string
    joinedAt: string
  }>
  aiAgent?: {
    id: string
    name: string
    vapiAssistantId: string
  }
}

type Props = {
  webinarId: string
  isHost: boolean
  userId: string
  userName: string
  breakoutRooms: BreakoutRoom[]
  onRoomUpdate: () => void
}

const BreakoutRoomManager = ({ 
  webinarId, 
  isHost, 
  userId, 
  userName, 
  breakoutRooms, 
  onRoomUpdate 
}: Props) => {
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [roomName, setRoomName] = useState('')
  const [maxParticipants, setMaxParticipants] = useState(10)
  const [selectedAIAgent, setSelectedAIAgent] = useState<string>('')
  const [aiAgents, setAiAgents] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isHost) {
      loadAIAgents()
    }
  }, [isHost])

  const loadAIAgents = async () => {
    try {
      const result = await getVapiAssistants()
      if (result.success && result.assistants) {
        setAiAgents(result.assistants)
      }
    } catch (error) {
      console.error('Error loading AI agents:', error)
    }
  }

  const createRoom = async () => {
    if (!roomName.trim()) {
      toast.error('Please enter a room name')
      return
    }

    setLoading(true)
    try {
      const result = await createBreakoutRoomWithAI(
        webinarId,
        roomName,
        selectedAIAgent || undefined,
        maxParticipants
      )

      if (result.success) {
        toast.success('Breakout room created successfully')
        setShowCreateDialog(false)
        setRoomName('')
        setSelectedAIAgent('')
        setMaxParticipants(10)
        onRoomUpdate()
      } else {
        toast.error(result.error || 'Failed to create breakout room')
      }
    } catch (error) {
      console.error('Error creating breakout room:', error)
      toast.error('Failed to create breakout room')
    } finally {
      setLoading(false)
    }
  }

  const joinRoom = async (roomId: string) => {
    setLoading(true)
    try {
      const result = await joinBreakoutRoom(roomId, userId, userName)

      if (result.success) {
        toast.success('Joined breakout room')
        onRoomUpdate()
      } else {
        toast.error(result.error || 'Failed to join breakout room')
      }
    } catch (error) {
      console.error('Error joining breakout room:', error)
      toast.error('Failed to join breakout room')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5" />
          <h3 className="text-lg font-semibold">Breakout Rooms</h3>
        </div>
        {isHost && (
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Room
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Breakout Room</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Room Name</label>
                  <Input
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    placeholder="Enter room name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Max Participants</label>
                  <Input
                    type="number"
                    value={maxParticipants}
                    onChange={(e) => setMaxParticipants(parseInt(e.target.value) || 10)}
                    min={2}
                    max={50}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">AI Agent (Optional)</label>
                  <Select value={selectedAIAgent} onValueChange={setSelectedAIAgent}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an AI agent for this room" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">No AI Agent</SelectItem>
                      {aiAgents.map((agent) => (
                        <SelectItem key={agent.id} value={agent.id}>
                          <div className="flex items-center space-x-2">
                            <Bot className="h-4 w-4" />
                            <span>{agent.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    onClick={createRoom} 
                    disabled={loading}
                    className="flex-1"
                  >
                    Create Room
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowCreateDialog(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {breakoutRooms.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold mb-2">No Breakout Rooms</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {isHost 
                ? 'Create breakout rooms to split participants into smaller groups'
                : 'The host hasn\'t created any breakout rooms yet'
              }
            </p>
            {isHost && (
              <Button onClick={() => setShowCreateDialog(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Create First Room
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {breakoutRooms.map((room) => (
            <Card key={room.id}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{room.name}</CardTitle>
                  <Badge variant={room.status === 'ACTIVE' ? 'default' : 'secondary'}>
                    {room.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Participants:</span>
                  <span>{room.participants.length}/{room.maxParticipants}</span>
                </div>

                {room.aiAgent && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Bot className="h-4 w-4 text-purple-500" />
                    <span className="text-muted-foreground">AI Agent:</span>
                    <span className="font-medium">{room.aiAgent.name}</span>
                  </div>
                )}

                {room.participants.length > 0 && (
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Current participants:</p>
                    <div className="flex flex-wrap gap-1">
                      {room.participants.slice(0, 3).map((participant) => (
                        <Badge key={participant.id} variant="outline" className="text-xs">
                          {participant.userName}
                        </Badge>
                      ))}
                      {room.participants.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{room.participants.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex space-x-2">
                  <Button 
                    onClick={() => joinRoom(room.id)}
                    disabled={loading || room.participants.length >= room.maxParticipants}
                    className="flex-1"
                    size="sm"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Join Room
                  </Button>
                  {isHost && (
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default BreakoutRoomManager