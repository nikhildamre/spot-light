'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { createAIAgent } from '@/actions/aiAgent'
import { Loader2, X } from 'lucide-react'
import { toast } from 'sonner'

type Props = {
  userId: string
  onClose: () => void
  onSuccess: () => void
}

const CreateAgentDialog = ({ userId, onClose, onSuccess }: Props) => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    firstMessage: 'Hi there! This is test PQ Assistant team customer support. How can I help you today?',
    systemPrompt: `You are Morgan, a business development voice assistant for ArrowManufacture, a B2B software solutions provider. Your primary purpose is to identify qualified leads, understand their business challenges, and connect them with the appropriate sales representatives for solutions (An AI-powered CRM, help-center).

## Identity & Purpose

You are an AI business development voice assistant for ArrowManufacture. Your primary purpose is to identify qualified leads, understand their business challenges, and connect them with the appropriate sales representatives for solutions (An AI-powered CRM, help-center).

## Personality

- Convey confidence and expertise without being pushy or aggressive
- Project a helpful, consultative approach rather than a traditional "sales persona"
- Keep your pacing even more deliberate when discussing important points
- Include thoughtful pauses before responding to complex questions

## Voice & Persona

### Personality
- Professional yet approachable
- Consultative rather than pushy
- Confident and knowledgeable
- Patient and attentive

### Speech Characteristics
- Use natural conversational flow with occasional "ums" and "ahs" for authenticity
- Vary pacing: speak more deliberately when discussing important points
- Include thoughtful pauses before responding to complex questions
- Keep sentences concise and clear

## Conversation Flow

### Opening
- Introduce yourself and ArrowManufacture briefly
- Ask open-ended questions to understand their business context
- Listen actively and acknowledge their responses

### Discovery
- Probe gently about current challenges
- Ask about their team size and current tools
- Understand their decision-making process
- Identify pain points related to customer management or support

### Qualification
- Determine if they're a good fit for our solutions
- Assess their timeline and urgency
- Understand their budget considerations (without being direct)
- Gauge their authority in the decision-making process

### Next Steps
- For qualified leads: Schedule a demo or call with sales
- For unqualified leads: Offer helpful resources and maintain goodwill
- Always end on a positive note`,
    modelProvider: 'openai',
    modelName: 'gpt-4',
    temperature: 0.7,
    voiceProvider: '11labs',
    voiceId: '21m00Tcm4TlvDq8ikWAM',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await createAIAgent({
        name: formData.name,
        description: formData.description,
        firstMessage: formData.firstMessage,
        systemPrompt: formData.systemPrompt,
        userId,
        model: {
          provider: formData.modelProvider,
          model: formData.modelName,
          temperature: formData.temperature,
        },
        voice: {
          provider: formData.voiceProvider,
          voiceId: formData.voiceId,
        },
      })

      if (result.success) {
        toast.success('AI Agent created successfully!')
        onSuccess()
        onClose()
      } else {
        toast.error(result.error || 'Failed to create AI agent')
      }
    } catch (error) {
      console.error('Error creating agent:', error)
      toast.error('Failed to create AI agent')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Create AI Agent</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Basic Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="name">Agent Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Sales Assistant"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Brief description of what this agent does"
                rows={2}
                required
              />
            </div>
          </div>

          {/* Voice Configuration */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Voice Configuration</h3>
            
            <div className="space-y-2">
              <Label htmlFor="firstMessage">First Message *</Label>
              <Textarea
                id="firstMessage"
                value={formData.firstMessage}
                onChange={(e) => setFormData({ ...formData, firstMessage: e.target.value })}
                placeholder="What the agent says when the call starts"
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="voiceProvider">Voice Provider</Label>
                <Select
                  value={formData.voiceProvider}
                  onValueChange={(value) => setFormData({ ...formData, voiceProvider: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="11labs">ElevenLabs</SelectItem>
                    <SelectItem value="playht">PlayHT</SelectItem>
                    <SelectItem value="azure">Azure</SelectItem>
                    <SelectItem value="openai">OpenAI</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="voiceId">Voice ID</Label>
                <Input
                  id="voiceId"
                  value={formData.voiceId}
                  onChange={(e) => setFormData({ ...formData, voiceId: e.target.value })}
                  placeholder="Voice ID from provider"
                />
              </div>
            </div>
          </div>

          {/* AI Model Configuration */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">AI Model Configuration</h3>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="modelProvider">Model Provider</Label>
                <Select
                  value={formData.modelProvider}
                  onValueChange={(value) => setFormData({ ...formData, modelProvider: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="openai">OpenAI</SelectItem>
                    <SelectItem value="anthropic">Anthropic</SelectItem>
                    <SelectItem value="groq">Groq</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="modelName">Model</Label>
                <Select
                  value={formData.modelName}
                  onValueChange={(value) => setFormData({ ...formData, modelName: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                    <SelectItem value="gpt-4-turbo">GPT-4 Turbo</SelectItem>
                    <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="temperature">Temperature</Label>
                <Input
                  id="temperature"
                  type="number"
                  min="0"
                  max="2"
                  step="0.1"
                  value={formData.temperature}
                  onChange={(e) => setFormData({ ...formData, temperature: parseFloat(e.target.value) })}
                />
              </div>
            </div>
          </div>

          {/* System Prompt */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">System Prompt *</h3>
            <Textarea
              value={formData.systemPrompt}
              onChange={(e) => setFormData({ ...formData, systemPrompt: e.target.value })}
              placeholder="Define the agent's behavior, personality, and instructions"
              rows={12}
              className="font-mono text-sm"
              required
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create AI Agent
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateAgentDialog