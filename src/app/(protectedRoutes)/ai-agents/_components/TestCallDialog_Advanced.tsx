'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { X, Phone, PhoneOff } from 'lucide-react'
import Vapi from '@vapi-ai/web'
import { getVapiAssistants } from '@/actions/vapi'

type Props = {
  agentId: string
  agentName: string
  onClose: () => void
}

const TestCallDialog_Advanced = ({ agentId, agentName, onClose }: Props) => {
  const [isCallActive, setIsCallActive] = useState(false)
  const [callStatus, setCallStatus] = useState('Initializing...')
  const [assistantConfig, setAssistantConfig] = useState<any>(null)
  const vapiRef = useRef<Vapi | null>(null)

  useEffect(() => {
    const initializeVapi = async () => {
      const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY

      if (!publicKey) {
        setCallStatus('Error: VAPI public key not configured')
        return
      }

      console.log('🔧 Advanced VAPI Test - Fetching Assistant Config')
      console.log('📋 Agent ID:', agentId)
      console.log('🔑 Public Key:', publicKey.substring(0, 15) + '...')

      try {
        // Fetch assistant configuration from VAPI
        setCallStatus('📡 Fetching assistant configuration...')
        const result = await getVapiAssistants()
        
        if (result.success && result.assistants) {
          const assistant = result.assistants.find((a: any) => a.id === agentId)
          
          if (!assistant) {
            setCallStatus('❌ Assistant not found in VAPI dashboard')
            return
          }
          
          setAssistantConfig(assistant)
          console.log('✅ Assistant config loaded:', assistant)
          
          // Create VAPI instance
          const vapi = new Vapi(publicKey)
          vapiRef.current = vapi

          console.log('✅ VAPI instance created')

          // Event listeners
          vapi.on('call-start', () => {
            console.log('📞 ✅ CALL STARTED SUCCESSFULLY!')
            setIsCallActive(true)
            setCallStatus('🎉 Call Active - Speak now!')
            
            // Reminder for free tier limitations
            setTimeout(() => {
              if (isCallActive) {
                setCallStatus('⚡ Free tier: Call may end in ~30 seconds')
              }
            }, 5000)
          })

          vapi.on('call-end', () => {
            console.log('📞 Call ended')
            setIsCallActive(false)
            setCallStatus('✅ Call completed')
          })

          vapi.on('speech-start', () => {
            console.log('🎤 ✅ SPEECH DETECTED!')
            setCallStatus('🎤 Listening...')
          })

          vapi.on('speech-end', () => {
            console.log('🎤 Speech ended')
            setCallStatus('🤖 AI processing...')
          })

          vapi.on('message', (message: any) => {
            console.log('💬 ✅ AI MESSAGE:', message)
            if (message.type === 'transcript' && message.role === 'assistant') {
              setCallStatus(`🤖 AI: "${message.transcript}"`)
            }
          })

          vapi.on('error', (error: any) => {
            console.error('❌ VAPI ERROR:', error)
            
            let errorMsg = 'Unknown error'
            if (error?.message?.includes('Meeting ended due to ejection')) {
              errorMsg = 'Call ended (normal for free tier)'
            } else if (error?.message) {
              errorMsg = error.message
            }
            
            setCallStatus(`❌ ${errorMsg}`)
            setIsCallActive(false)
          })

          setCallStatus('✅ Ready - Click Start Advanced Test')
          console.log('✅ Advanced VAPI setup complete')
        } else {
          setCallStatus('❌ Failed to fetch assistant configuration')
        }
      } catch (error: any) {
        console.error('❌ Setup error:', error)
        setCallStatus(`Setup Error: ${error.message}`)
      }
    }

    initializeVapi()

    return () => {
      if (vapiRef.current) {
        try {
          vapiRef.current.stop()
        } catch (e) {
          console.log('Cleanup completed')
        }
      }
    }
  }, [agentId])

  const startCall = async () => {
    console.log('🎯 STARTING ADVANCED TEST CALL')
    
    if (!vapiRef.current) {
      setCallStatus('❌ VAPI not ready')
      return
    }

    if (!assistantConfig) {
      setCallStatus('❌ Assistant configuration not loaded')
      return
    }

    try {
      setCallStatus('🚀 Starting call with full config...')
      
      // Method 1: Try with assistant ID first
      console.log('📞 Method 1: Using assistant ID')
      await vapiRef.current.start(agentId)
      
      console.log('✅ Call started successfully')
      setCallStatus('⏳ Connecting...')
      
    } catch (error: any) {
      console.error('❌ Method 1 failed, trying Method 2')
      
      try {
        // Method 2: Use full assistant configuration
        console.log('📞 Method 2: Using full assistant config')
        const fullConfig = {
          name: assistantConfig.name,
          firstMessage: assistantConfig.firstMessage,
          model: assistantConfig.model,
          voice: assistantConfig.voice
        }
        
        console.log('Full config:', fullConfig)
        await vapiRef.current.start(fullConfig)
        
        console.log('✅ Call started with full config')
        setCallStatus('⏳ Connecting...')
        
      } catch (error2: any) {
        console.error('❌ Both methods failed:', error2)
        setCallStatus(`❌ Failed: ${error2.message || 'Unknown error'}`)
        setIsCallActive(false)
      }
    }
  }

  const endCall = () => {
    if (!vapiRef.current) return
    
    try {
      vapiRef.current.stop()
      setIsCallActive(false)
      setCallStatus('Call ended')
    } catch (error) {
      console.error('End call error:', error)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-border rounded-lg max-w-md w-full">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h2 className="text-lg font-semibold">Advanced Test - {agentName}</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div className="text-center space-y-4">
            {/* Status Indicator */}
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-colors ${
              isCallActive ? 'bg-green-500/20 animate-pulse' : 'bg-primary/10'
            }`}>
              <Phone className={`h-10 w-10 ${isCallActive ? 'text-green-500' : 'text-primary'}`} />
            </div>
            
            {/* Status Text */}
            <div>
              <h3 className="font-semibold mb-1">
                {isCallActive ? '🎉 Call Active!' : '🔬 Advanced Test'}
              </h3>
              <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                {callStatus}
              </p>
            </div>

            {/* Controls */}
            <div className="flex space-x-3">
              {!isCallActive ? (
                <Button 
                  onClick={startCall} 
                  className="flex-1"
                  disabled={callStatus.includes('Error') || !assistantConfig}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Start Advanced Test
                </Button>
              ) : (
                <Button 
                  onClick={endCall} 
                  variant="destructive" 
                  className="flex-1"
                >
                  <PhoneOff className="h-4 w-4 mr-2" />
                  End Call
                </Button>
              )}
            </div>

            {/* Assistant Info */}
            {assistantConfig && (
              <div className="text-xs text-muted-foreground space-y-1 bg-muted/50 p-3 rounded">
                <p><strong>Assistant Info:</strong></p>
                <p>Name: {assistantConfig.name}</p>
                <p>Model: {assistantConfig.model?.model || 'Unknown'}</p>
                <p>Voice: {assistantConfig.voice?.provider || 'Unknown'}</p>
                <p>ID: {agentId.substring(0, 8)}...</p>
              </div>
            )}

            {/* Debug Info */}
            <div className="text-xs text-muted-foreground space-y-1 bg-muted/50 p-3 rounded">
              <p><strong>Debug Info:</strong></p>
              <p>Config Loaded: {assistantConfig ? '✅' : '❌'}</p>
              <p>Status: {isCallActive ? 'Active' : 'Inactive'}</p>
              <p>This test tries multiple methods</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestCallDialog_Advanced