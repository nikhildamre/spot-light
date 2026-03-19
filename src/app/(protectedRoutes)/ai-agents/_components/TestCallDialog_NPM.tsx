'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { X, Phone, PhoneOff, Mic, MicOff } from 'lucide-react'
import Vapi from '@vapi-ai/web'

type Props = {
  agentId: string
  agentName: string
  onClose: () => void
}

const TestCallDialog = ({ agentId, agentName, onClose }: Props) => {
  const [isCallActive, setIsCallActive] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [callStatus, setCallStatus] = useState('Initializing...')
  const [volumeLevel, setVolumeLevel] = useState(0)
  const vapiRef = useRef<Vapi | null>(null)

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || process.env.NEXT_PUBLIC_VAPI_API_KEY

    if (!publicKey) {
      setCallStatus('Error: VAPI public key not configured')
      return
    }

    console.log('🔧 Initializing VAPI (NPM package)')
    console.log('📋 Agent ID:', agentId)

    try {
      // Create VAPI instance using npm package
      const vapi = new Vapi(publicKey)
      vapiRef.current = vapi

      console.log('✅ VAPI instance created')

      // Set up event listeners
      vapi.on('call-start', () => {
        console.log('📞 Call started')
        setIsCallActive(true)
        setCallStatus('Connected - AI is listening')
      })

      vapi.on('call-end', () => {
        console.log('📞 Call ended')
        setIsCallActive(false)
        setCallStatus('Call ended')
        setVolumeLevel(0)
      })

      vapi.on('speech-start', () => {
        console.log('🎤 User started speaking')
        setCallStatus('Listening to you...')
        setVolumeLevel(100)
      })

      vapi.on('speech-end', () => {
        console.log('🎤 User stopped speaking')
        setCallStatus('AI is thinking...')
        setVolumeLevel(0)
      })

      vapi.on('message', (message: any) => {
        console.log('💬 AI Message received:', message)
        if (message.type === 'transcript' && message.role === 'assistant') {
          setCallStatus(`AI: ${message.transcript}`)
        }
      })

      vapi.on('error', (error: any) => {
        console.error('❌ VAPI error details:', error)
        
        let errorMsg = 'Unknown error'
        if (error?.message) {
          errorMsg = error.message
        } else if (error?.error) {
          errorMsg = error.error
        } else if (error?.type) {
          errorMsg = `Error type: ${error.type}`
        } else if (typeof error === 'object') {
          errorMsg = JSON.stringify(error)
        }
        
        // Check for specific error types
        if (errorMsg.includes('Invalid key') || errorMsg.includes('private key')) {
          errorMsg = 'API Key Error: Check VAPI keys'
        } else if (errorMsg.includes('assistant') || errorMsg.includes('not found')) {
          errorMsg = 'Assistant not found'
        } else if (errorMsg.includes('credits') || errorMsg.includes('quota')) {
          errorMsg = 'Insufficient VAPI credits'
        } else if (errorMsg.includes('INSUFFICIENT_RESOURCES')) {
          errorMsg = 'System resources low - close other tabs'
        } else if (errorMsg.includes('Meeting has ended')) {
          errorMsg = 'Call session ended - try again'
        }
        
        setCallStatus(`Error: ${errorMsg}`)
        setIsCallActive(false)
        setVolumeLevel(0)
      })

      setCallStatus('Ready to call')
      console.log('✅ All event listeners set up')
    } catch (error: any) {
      console.error('❌ Error initializing VAPI:', error)
      setCallStatus(`Error: ${error.message || 'Failed to initialize'}`)
    }

    return () => {
      console.log('🧹 Cleaning up VAPI')
      if (vapiRef.current) {
        try {
          vapiRef.current.stop()
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    }
  }, [agentId])

  const startCall = async () => {
    console.log('🎯 Start call clicked')
    
    if (!vapiRef.current) {
      console.error('❌ VAPI ref is null')
      setCallStatus('Error: Call system not ready')
      return
    }

    try {
      // First, request microphone permission explicitly
      console.log('🎤 Requesting microphone permission...')
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      console.log('✅ Microphone permission granted')
      
      // Stop the test stream
      stream.getTracks().forEach(track => track.stop())
      
      // Wait a moment before starting the call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setCallStatus('Starting call...')
      console.log('📞 Calling vapi.start() with assistant ID:', agentId)
      
      // Start call with assistant ID
      await vapiRef.current.start(agentId)
      
      console.log('✅ Call start requested successfully')
      
      // Wait for call to establish
      setTimeout(() => {
        if (!isCallActive) {
          console.log('⚠️ Call may not have started properly')
          setCallStatus('Call may have failed - try again')
        }
      }, 5000)
      
    } catch (error: any) {
      console.error('❌ Error starting call:', error)
      
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        setCallStatus('Error: Microphone permission denied')
      } else if (error.message?.includes('Meeting has ended')) {
        setCallStatus('Error: Call session ended - please try again')
      } else {
        const errorMsg = error?.message || error?.error || 'Failed to start call'
        setCallStatus(`Error: ${errorMsg}`)
      }
      setIsCallActive(false)
    }
  }

  const endCall = async () => {
    if (!vapiRef.current) return

    try {
      setCallStatus('Ending call...')
      vapiRef.current.stop()
      setIsCallActive(false)
      setCallStatus('Call ended')
    } catch (error: any) {
      console.error('Error ending call:', error)
      setCallStatus('Call ended')
      setIsCallActive(false)
    }
  }

  const toggleMute = () => {
    if (!vapiRef.current) return

    try {
      vapiRef.current.setMuted(!isMuted)
      setIsMuted(!isMuted)
    } catch (error) {
      console.error('Error toggling mute:', error)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-border rounded-lg max-w-md w-full">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h2 className="text-lg font-semibold">Test Call - {agentName}</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div className="text-center space-y-4">
            {/* Call Status Indicator */}
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-colors relative ${
              isCallActive ? 'bg-green-500/20 animate-pulse' : 'bg-primary/10'
            }`}>
              <Phone className={`h-10 w-10 ${isCallActive ? 'text-green-500' : 'text-primary'}`} />
              {volumeLevel > 0 && (
                <div className="absolute inset-0 rounded-full border-4 border-green-500 animate-ping" />
              )}
            </div>
            
            {/* Status Text */}
            <div>
              <h3 className="font-semibold mb-1">
                {isCallActive ? 'Call Active' : 'Ready to Test'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {callStatus}
              </p>
            </div>

            {/* Call Controls */}
            <div className="flex space-x-3">
              {!isCallActive ? (
                <Button 
                  onClick={startCall} 
                  className="flex-1"
                  disabled={callStatus.includes('Error')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Start Call
                </Button>
              ) : (
                <>
                  <Button 
                    onClick={toggleMute} 
                    variant="outline" 
                    className="flex-1"
                  >
                    {isMuted ? (
                      <>
                        <MicOff className="h-4 w-4 mr-2" />
                        Unmute
                      </>
                    ) : (
                      <>
                        <Mic className="h-4 w-4 mr-2" />
                        Mute
                      </>
                    )}
                  </Button>
                  <Button 
                    onClick={endCall} 
                    variant="destructive" 
                    className="flex-1"
                  >
                    <PhoneOff className="h-4 w-4 mr-2" />
                    End Call
                  </Button>
                </>
              )}
            </div>

            {/* Instructions */}
            <div className="text-xs text-muted-foreground space-y-1">
              {!isCallActive && (
                <>
                  <p>• Make sure your microphone is enabled</p>
                  <p>• Allow microphone access when prompted</p>
                  <p>• Speak clearly after starting the call</p>
                </>
              )}
              {isCallActive && (
                <>
                  <p>• The AI is listening and will respond</p>
                  <p>• Speak naturally as you would in conversation</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestCallDialog
