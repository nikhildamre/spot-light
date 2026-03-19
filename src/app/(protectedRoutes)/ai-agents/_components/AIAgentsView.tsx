'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, Bot, Phone, Settings, Trash2, Loader2, RefreshCw } from 'lucide-react'
import { User } from '@prisma/client'
import CreateAgentDialog from './CreateAgentDialog'
import TestCallDialog from './TestCallDialog_Simple'
import TestCallDialog_Advanced from './TestCallDialog_Advanced'
import { getVapiAssistants, deleteVapiAssistant } from '@/actions/vapi'
import { toast } from 'sonner'

type Props = {
  user: User
}

const AIAgentsView = ({ user }: Props) => {
  const [agents, setAgents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [testCallAgent, setTestCallAgent] = useState<{id: string, name: string} | null>(null)
  const [useAdvancedTest, setUseAdvancedTest] = useState(false)

  const loadAgents = async () => {
    try {
      setRefreshing(true)
      const result = await getVapiAssistants()
      
      if (result.success && result.assistants) {
        setAgents(result.assistants)
        if (result.warning) {
          toast.warning(result.warning)
        }
      } else if (result.error) {
        toast.error(result.error)
      }
    } catch (error) {
      console.error('Error loading agents:', error)
      toast.error('Failed to load AI agents')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    loadAgents()
  }, [])

  const handleDeleteAgent = async (agentId: string, agentName: string) => {
    if (!confirm(`Are you sure you want to delete "${agentName}"? This action cannot be undone.`)) {
      return
    }

    try {
      const result = await deleteVapiAssistant(agentId)
      
      if (result.success) {
        toast.success('AI Agent deleted successfully')
        setAgents(agents.filter(agent => agent.id !== agentId))
      } else {
        toast.error(result.error || 'Failed to delete AI agent')
      }
    } catch (error) {
      console.error('Error deleting agent:', error)
      toast.error('Failed to delete AI agent')
    }
  }

  const handleTestCall = (agentId: string, agentName: string) => {
    setTestCallAgent({ id: agentId, name: agentName })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span className="text-sm text-muted-foreground">
              {agents.length} AI Agent{agents.length !== 1 ? 's' : ''} configured
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={loadAgents}
            disabled={refreshing}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
        <Button onClick={() => setShowCreateDialog(true)} className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Create AI Agent</span>
        </Button>
      </div>

      {/* AI Agents Grid */}
      {agents.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Bot className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No AI Agents Yet</h3>
            <p className="text-muted-foreground text-center mb-4 max-w-md">
              Create your first AI voice assistant powered by VAPI to handle automated sales calls and webinar interactions
            </p>
            
            {/* Setup Instructions */}
            <div className="bg-muted/50 p-4 rounded-lg mb-4 max-w-2xl text-left">
              <h4 className="font-semibold mb-2 text-sm">🔧 Setup Required:</h4>
              <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                <li>Sign up at <a href="https://vapi.ai" target="_blank" rel="noopener noreferrer" className="text-primary underline">vapi.ai</a></li>
                <li>Get your API key from the dashboard</li>
                <li>Add <code className="bg-background px-1 py-0.5 rounded">VAPI_API_KEY</code> to your .env file</li>
                <li>Restart the development server</li>
              </ol>
            </div>
            
            <Button onClick={() => setShowCreateDialog(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Create Your First AI Agent
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <Card key={agent.id} className="relative hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{agent.name}</CardTitle>
                  </div>
                  <Badge variant="default" className="capitalize">
                    Active
                  </Badge>
                </div>
                <CardDescription className="line-clamp-2">
                  {agent.model?.model || 'GPT-4'} • {agent.voice?.provider || 'ElevenLabs'}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* First Message Preview */}
                <div className="bg-muted/50 p-3 rounded-md">
                  <p className="text-xs text-muted-foreground mb-1">First Message:</p>
                  <p className="text-sm line-clamp-2">{agent.firstMessage}</p>
                </div>

                {/* Model Info */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-muted-foreground">Model:</span>
                    <p className="font-medium">{agent.model?.model || 'GPT-4'}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Voice:</span>
                    <p className="font-medium">{agent.voice?.provider || 'ElevenLabs'}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-2">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => {
                      setUseAdvancedTest(false)
                      handleTestCall(agent.id, agent.name)
                    }}
                    className="flex-1"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Quick Test
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setUseAdvancedTest(true)
                      handleTestCall(agent.id, agent.name)
                    }}
                    className="flex-1"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Advanced
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toast.info('Edit feature coming soon!')}
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteAgent(agent.id, agent.name)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                {/* Created Date */}
                <div className="text-xs text-muted-foreground pt-2 border-t">
                  Created {new Date(agent.createdAt).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Quick Stats */}
      {agents.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">Total Agents</p>
                  <p className="text-2xl font-bold">{agents.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-sm font-medium">Ready for Calls</p>
                  <p className="text-2xl font-bold">{agents.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="h-5 w-5 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">AI</span>
                </div>
                <div>
                  <p className="text-sm font-medium">VAPI Powered</p>
                  <p className="text-2xl font-bold">100%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Create Agent Dialog */}
      {showCreateDialog && (
        <CreateAgentDialog
          userId={user.id}
          onClose={() => setShowCreateDialog(false)}
          onSuccess={loadAgents}
        />
      )}

      {/* Test Call Dialog */}
      {testCallAgent && !useAdvancedTest && (
        <TestCallDialog
          agentId={testCallAgent.id}
          agentName={testCallAgent.name}
          onClose={() => setTestCallAgent(null)}
        />
      )}

      {/* Advanced Test Call Dialog */}
      {testCallAgent && useAdvancedTest && (
        <TestCallDialog_Advanced
          agentId={testCallAgent.id}
          agentName={testCallAgent.name}
          onClose={() => setTestCallAgent(null)}
        />
      )}
    </div>
  )
}

export default AIAgentsView