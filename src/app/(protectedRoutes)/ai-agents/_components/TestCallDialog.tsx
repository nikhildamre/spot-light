'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { X, Phone, PhoneOff, Mic, MicOff } from 'lucide-react'

type Props = {
  agentId: string
  agentName: string
  onClose: () => void
}

const TestCallDialog = ({ agentId, agentName, onClose }: Props) => {
  const [isCallActive, setIsCallActive] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [callStatus, setCallStatus] = useState('Initializing...')
  const vapiRef = useRef<any>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Get public key from environment
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || process.env.NEXT_PUBLIC_VAPI_API_KEY

    if (!publicKey) {
      setCallStatus('Error: VAPI public key not configured')
      return
    }

    console.log('🔧 Initializing VAPI SDK')
    console.log('📋 Agent ID:', agentId)
    console.log('🔑 Public Key:', publicKey?.substring(0, 15) + '...')

    // Load VAPI SDK script
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js'
    script.async = true
    
    script.onload = () => {
      console.log('✅ VAPI SDK script loaded')
      
      // Wait a bit for SDK to be fully initialized
      setTimeout(() => {
        // Check if SDK is available
        if (typeof window !== 'undefined' && (window as any).vapiSDK) {
          try {
            console.log('🚀 Creating VAPI instance...')
            console.log('Config: Using assistant object format')
            
            // Initialize VAPI with assistant configuration object
            vapiRef.current = (window as any).vapiSDK.run({
              apiKey: publicKey,
              assistant: {
                firstMessage: "Hello! I'm your AI assistant. How can I help you today?",
                model: {
                  provider: "openai",
                  model: "gpt-3.5-turbo",
                  messages: [{
                    role: "system",
                    content: "You are a helpful AI assistant."
                  }]
                },
                voice: {
                  provider: "11labs",
                  voiceId: "21m00Tcm4TlvDq8ikWAM"
                },
                // Override with the actual assistant ID from VAPI
                assistantOverrides: {
                  assistantId: agentId
                }
              }
            })

            if (!vapiRef.current) {
              throw new Error('VAPI instance is null')
            }

            console.log('✅ VAPI instance created:', vapiRef.current)

            // Set up event listeners
            vapiRef.current.on('call-start', () => {
              console.log('📞 Call started')
              setIsCallActive(true)
              setCallStatus('Connected - AI is listening')
            })

            vapiRef.current.on('call-end', () => {
              console.log('📞 Call ended')
              setIsCallActive(false)
              setCallStatus('Call ended')
            })

            vapiRef.current.on('speech-start', () => {
              console.log('🎤 User speaking')
              setCallStatus('Listening to you...')
            })

            vapiRef.current.on('speech-end', () => {
              console.log('🎤 User stopped')
              setCallStatus('AI is thinking...')
            })

            vapiRef.current.on('message', (message: any) => {
              console.log('💬 Message:', message)
              if (message.type === 'transcript' && message.role === 'assistant') {
                setCallStatus(`AI: ${message.transcript}`)
              }
            })

            vapiRef.current.on('error', (error: any) => {
              console.error('❌ VAPI error:', error)
              const errorMsg = error?.message || error?.error || JSON.stringify(error) || 'Unknown error'
              setCallStatus(`Error: ${errorMsg}`)
              setIsCallActive(false)
            })

            setCallStatus('Ready to call')
            console.log('✅ All event listeners set up')
          } catch (error: any) {
            console.error('❌ Error initializing VAPI:', error)
            setCallStatus(`Error: ${error.message || 'Failed to initialize'}`)
          }
        } else {
          console.error('❌ VAPI SDK not found on window')
          setCallStatus('Error: SDK not loaded')
        }
      }, 500) // Wait 500ms for SDK to be ready
    }

    script.onerror = (error) => {
      console.error('❌ Failed to load VAPI SDK:', error)
      setCallStatus('Error: Failed to load SDK')
    }

    document.body.appendChild(script)

    return () => {
      // Cleanup
      console.log('🧹 Cleaning up VAPI')
      if (vapiRef.current) {
        try {
          if (isCallActive) {
            vapiRef.current.stop()
          }
        } catch (e) {
          console.error('Error during cleanup:', e)
        }
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script)
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
      setCallStatus('Starting call...')
      console.log('📞 Calling vapiRef.current.start()')
      
      // Start without parameters (assistant configured in init)
      await vapiRef.current.start()
      
      console.log('✅ Start call completed')
    } catch (error: any) {
      console.error('❌ Error starting call:', error)
      const errorMsg = error?.message || error?.error || 'Failed to start call'
      setCallStatus(`Error: ${errorMsg}`)
      setIsCallActive(false)
    }
  }

  const endCall = async () => {
    if (!vapiRef.current) return

    try {
      setCallStatus('Ending call...')
      await vapiRef.current.stop()
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
      if (isMuted) {
        vapiRef.current.unmute()
        setIsMuted(false)
      } else {
        vapiRef.current.mute()
        setIsMuted(true)
      }
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
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-colors ${
              isCallActive ? 'bg-green-500/20 animate-pulse' : 'bg-primary/10'
            }`}>
              <Phone className={`h-10 w-10 ${isCallActive ? 'text-green-500' : 'text-primary'}`} />
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
                  ref={buttonRef}
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