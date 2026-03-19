'use client'

import React, { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

type Props = {
  agentId: string
  agentName: string
  onClose: () => void
}

const TestCallDialog = ({ agentId, agentName, onClose }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || process.env.NEXT_PUBLIC_VAPI_API_KEY

    if (!publicKey || !containerRef.current) {
      return
    }

    console.log('🔧 Setting up VAPI button')
    console.log('📋 Agent ID:', agentId)
    console.log('🔑 Public Key:', publicKey.substring(0, 15) + '...')

    // Create VAPI button element
    const vapiButton = document.createElement('vapi-button')
    vapiButton.setAttribute('assistant', agentId)
    vapiButton.setAttribute('api-key', publicKey)
    vapiButton.setAttribute('button-label', 'Start Call')
    
    // Style the button
    vapiButton.style.width = '100%'
    vapiButton.style.marginTop = '20px'

    // Add to container
    containerRef.current.appendChild(vapiButton)

    console.log('✅ VAPI button created')

    return () => {
      // Cleanup
      if (containerRef.current && containerRef.current.contains(vapiButton)) {
        containerRef.current.removeChild(vapiButton)
      }
    }
  }, [agentId])

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-border rounded-lg max-w-md w-full">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h2 className="text-lg font-semibold">Test Call - {agentName}</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 space-y-4">
          <div className="text-center space-y-4">
            <h3 className="font-semibold">Test Your AI Agent</h3>
            <p className="text-sm text-muted-foreground">
              Click the button below to start a voice call with your AI agent.
              Make sure your microphone is enabled.
            </p>

            {/* VAPI button will be inserted here */}
            <div ref={containerRef} className="min-h-[60px]" />

            <div className="text-xs text-muted-foreground space-y-1 pt-4 border-t">
              <p>• Allow microphone access when prompted</p>
              <p>• Speak clearly after the call connects</p>
              <p>• The AI will respond to your voice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestCallDialog
