'use client'
import React from 'react'
import { useWebinarStore } from '@/store/useWebinarStore'
import AIAgentSelector from '@/components/AIAgentSelector'
import { useRouter } from 'next/navigation'

const AIAgentStep = () => {
  const { formData, updateAIAgentField } = useWebinarStore()
  const router = useRouter()

  const handleAgentSelect = (agentId: string | null) => {
    updateAIAgentField('aiAgentId', agentId)
  }

  const handleCreateAgent = () => {
    // Navigate to AI agents page to create a new agent
    router.push('/ai-agents')
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold mb-2">AI-Powered Webinar</h3>
        <p className="text-sm text-muted-foreground">
          Add an AI agent to your webinar for interactive voice assistance and automated engagement
        </p>
      </div>

      <AIAgentSelector
        selectedAgentId={formData.aiAgent?.aiAgentId || undefined}
        onAgentSelect={handleAgentSelect}
        onCreateAgent={handleCreateAgent}
      />

      <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
        <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
          How AI Agents Work in Webinars
        </h4>
        <ul className="text-sm space-y-1 list-disc list-inside text-blue-800 dark:text-blue-200">
          <li>AI joins as a participant and can speak to attendees</li>
          <li>Responds to questions in real-time during the webinar</li>
          <li>Can be muted/unmuted by the host as needed</li>
          <li>Helps with engagement and automated responses</li>
          <li>Works with VAPI voice technology for natural conversations</li>
        </ul>
      </div>

      <div className="text-xs text-muted-foreground">
        <p>
          <strong>Note:</strong> AI agents are optional. You can skip this step to create a regular webinar without AI assistance.
        </p>
      </div>
    </div>
  )
}

export default AIAgentStep