'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Bot, Plus, X } from 'lucide-react'
import { getVapiAssistants } from '@/actions/vapi'

type AIAgent = {
  id: string
  name: string
  model?: any
  voice?: any
  firstMessage?: string
}

type Props = {
  selectedAgentId?: string
  onAgentSelect: (agentId: string | null) => void
  onCreateAgent?: () => void
}

const AIAgentSelector = ({ selectedAgentId, onAgentSelect, onCreateAgent }: Props) => {
  const [agents, setAgents] = useState<AIAgent[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedAgent, setSelectedAgent] = useState<AIAgent | null>(null)

  useEffect(() => {
    loadAgents()
  }, [])

  useEffect(() => {
    if (selectedAgentId && agents.length > 0) {
      const agent = agents.find(a => a.id === selectedAgentId)
      setSelectedAgent(agent || null)
    }
  }, [selectedAgentId, agents])

  const loadAgents = async () => {
    try {
      const result = await getVapiAssistants()
      if (result.success && result.assistants) {
        setAgents(result.assistants)
      }
    } catch (error) {
      console.error('Error loading AI agents:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAgentSelect = (agentId: string) => {
    if (agentId === 'none') {
      setSelectedAgent(null)
      onAgentSelect(null)
    } else {
      const agent = agents.find(a => a.id === agentId)
      setSelectedAgent(agent || null)
      onAgentSelect(agentId)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="h-5 w-5 text-purple-500" />
          <h3 className="text-lg font-semibold">AI Agent</h3>
        </div>
        {onCreateAgent && (
          <Button variant="outline" size="sm" onClick={onCreateAgent}>
            <Plus className="h-4 w-4 mr-2" />
            Create Agent
          </Button>
        )}
      </div>

      <Select onValueChange={handleAgentSelect} value={selectedAgentId || 'none'}>
        <SelectTrigger>
          <SelectValue placeholder="Select an AI agent for this webinar" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">No AI Agent</SelectItem>
          {loading ? (
            <SelectItem value="loading" disabled>Loading agents...</SelectItem>
          ) : agents.length === 0 ? (
            <SelectItem value="empty" disabled>No agents available</SelectItem>
          ) : (
            agents.map((agent) => (
              <SelectItem key={agent.id} value={agent.id}>
                <div className="flex items-center space-x-2">
                  <Bot className="h-4 w-4" />
                  <span>{agent.name}</span>
                </div>
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>

      {selectedAgent && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">{selectedAgent.name}</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handleAgentSelect('none')}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {selectedAgent.firstMessage && (
              <div>
                <p className="text-xs text-muted-foreground mb-1">First Message:</p>
                <p className="text-sm bg-muted/50 p-2 rounded">{selectedAgent.firstMessage}</p>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-muted-foreground">Model:</span>
                <p className="font-medium">{selectedAgent.model?.model || 'GPT-4'}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Voice:</span>
                <p className="font-medium">{selectedAgent.voice?.provider || 'ElevenLabs'}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Voice AI</Badge>
              <Badge variant="secondary">Real-time</Badge>
              <Badge variant="secondary">Interactive</Badge>
            </div>

            <div className="text-xs text-muted-foreground space-y-1">
              <p>• AI will join the webinar and interact with participants</p>
              <p>• Can answer questions and engage in conversations</p>
              <p>• Host can mute/unmute AI during the webinar</p>
            </div>
          </CardContent>
        </Card>
      )}

      {!loading && agents.length === 0 && (
        <Card>
          <CardContent className="text-center py-6">
            <Bot className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold mb-2">No AI Agents Available</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Create your first AI agent to add interactive voice assistance to your webinars
            </p>
            {onCreateAgent && (
              <Button onClick={onCreateAgent}>
                <Plus className="h-4 w-4 mr-2" />
                Create Your First AI Agent
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default AIAgentSelector