'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Bot, Mic, MicOff, Phone, PhoneOff } from 'lucide-react'

type Props = {
  aiAgent: {
    id: string
    name: string
    vapiAssistantId: string
    description?: string
  }
  webinarId: string
  isHost: boolean
  onAIResponse?: (message: string) => void
}

const WebinarAIAgent = ({ aiAgent, webinarId, isHost, onAIResponse }: Props) => {
  const [isActive, setIsActive] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [status, setStatus] = useState('Initializing AI Agent...')
  const [lastMessage, setLastMessage] = useState('')
  const [vapiLoaded, setVapiLoaded] = useState(false)
  const vapiRef = useRef<any>(null)
  const initAttempts = useRef(0)

  // Initialize VAPI with multiple fallback methods
  useEffect(() => {
    const initializeVAPI = async () => {
      const publicKey = '3f3bf2e8-f1d3-401d-8125-3196dfa2db37'
      
      try {
        // Method 1: Check if already loaded
        if (typeof window !== 'undefined' && (window as any).Vapi) {
          console.log('🤖 VAPI already loaded')
          setupVAPI((window as any).Vapi, publicKey)
          return
        }

        // Method 2: Try dynamic import
        try {
          const VapiModule = await import('@vapi-ai/web')
          const Vapi = VapiModule.default || VapiModule
          console.log('🤖 VAPI loaded via import')
          setupVAPI(Vapi, publicKey)
          return
        } catch (importError) {
          console.log('🤖 Import failed, trying CDN...')
        }

        // Method 3: Load from CDN with better error handling
        const loadFromCDN = () => {
          return new Promise((resolve, reject) => {
            // Remove any existing scripts first
            const existingScripts = document.querySelectorAll('script[src*="vapi"]')
            existingScripts.forEach(script => script.remove())

            const script = document.createElement('script')
            script.src = 'https://cdn.jsdelivr.net/npm/@vapi-ai/web@latest/dist/index.js'
            script.async = true
            script.crossOrigin = 'anonymous'
            
            script.onload = () => {
              console.log('🤖 VAPI CDN script loaded')
              setTimeout(() => {
                if ((window as any).Vapi) {
                  resolve((window as any).Vapi)
                } else {
                  reject(new Error('VAPI not available after script load'))
                }
              }, 2000) // Give more time for initialization
            }
            
            script.onerror = (error) => {
              console.error('🤖 VAPI CDN script failed to load:', error)
              reject(error)
            }
            
            document.head.appendChild(script)
          })
        }

        const Vapi = await loadFromCDN()
        setupVAPI(Vapi, publicKey)

      } catch (error) {
        console.error('🤖 All VAPI loading methods failed:', error)
        initAttempts.current++
        
        if (initAttempts.current < 3) {
          setStatus(`Retrying VAPI initialization... (${initAttempts.current}/3)`)
          setTimeout(initializeVAPI, 3000)
        } else {
          setStatus('VAPI initialization failed - Check network connection')
        }
      }
    }

    const setupVAPI = (Vapi: any, publicKey: string) => {
      try {
        console.log('🤖 Setting up VAPI with key:', publicKey.substring(0, 10) + '...')
        
        const vapi = new Vapi(publicKey)
        vapiRef.current = vapi
        setVapiLoaded(true)

        // Set up comprehensive event listeners
        vapi.on('call-start', () => {
          console.log('🤖 VAPI call started')
          setIsActive(true)
          setStatus('AI Agent is listening and ready to respond')
        })

        vapi.on('call-end', () => {
          console.log('🤖 VAPI call ended')
          setIsActive(false)
          setStatus('AI Agent disconnected')
        })

        vapi.on('speech-start', () => {
          console.log('🤖 Speech detected')
          setStatus('Listening to participant...')
        })

        vapi.on('speech-end', () => {
          console.log('🤖 Speech ended')
          setStatus('AI is processing and responding...')
        })

        vapi.on('message', (message: any) => {
          console.log('🤖 VAPI message received:', message)
          
          if (message.type === 'transcript') {
            if (message.role === 'user') {
              setStatus(`Heard: "${message.transcript}"`)
            } else if (message.role === 'assistant') {
              setLastMessage(message.transcript)
              setStatus('AI responded successfully')
              onAIResponse?.(message.transcript)
            }
          }
        })

        vapi.on('error', (error: any) => {
          console.error('🤖 VAPI error:', error)
          setStatus(`AI Agent error: ${error.message || 'Unknown error'}`)
          setIsActive(false)
        })

        vapi.on('volume-level', (volume: number) => {
          // Optional: Handle volume levels for visual feedback
          console.log('🤖 Volume level:', volume)
        })

        setStatus('AI Agent ready - Click Start to begin voice interaction')
        console.log('🤖 VAPI setup complete')

      } catch (error) {
        console.error('🤖 VAPI setup failed:', error)
        setStatus('VAPI setup failed')
      }
    }

    initializeVAPI()
  }, [])

  const startAIAgent = async () => {
    if (!vapiRef.current) {
      setStatus('VAPI not initialized - Please refresh the page')
      return
    }

    try {
      setStatus('Starting AI Agent...')
      console.log('🤖 Starting VAPI call with assistant:', aiAgent.vapiAssistantId)
      
      await vapiRef.current.start(aiAgent.vapiAssistantId)
      
      // The call-start event will update the status
    } catch (error: any) {
      console.error('🤖 Failed to start AI Agent:', error)
      setStatus(`Failed to start: ${error.message || 'Unknown error'}`)
    }
  }

  const stopAIAgent = () => {
    if (!vapiRef.current) return

    try {
      console.log('🤖 Stopping VAPI call')
      vapiRef.current.stop()
      setIsActive(false)
      setStatus('AI Agent stopped')
    } catch (error: any) {
      console.error('🤖 Error stopping AI Agent:', error)
      setStatus(`Error stopping: ${error.message}`)
    }
  }

  const toggleMute = () => {
    if (!vapiRef.current) return

    try {
      const newMutedState = !isMuted
      vapiRef.current.setMuted(newMutedState)
      setIsMuted(newMutedState)
      setStatus(`AI Agent ${newMutedState ? 'muted' : 'unmuted'}`)
      console.log('🤖 AI Agent mute toggled:', newMutedState)
    } catch (error: any) {
      console.error('🤖 Error toggling mute:', error)
      setStatus(`Error toggling mute: ${error.message}`)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-purple-500" />
            <CardTitle className="text-lg">{aiAgent.name}</CardTitle>
          </div>
          <Badge variant={isActive ? "default" : vapiLoaded ? "secondary" : "outline"}>
            {isActive ? 'Active' : vapiLoaded ? 'Ready' : 'Loading'}
          </Badge>
        </div>
        {aiAgent.description && (
          <p className="text-sm text-muted-foreground">{aiAgent.description}</p>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Status */}
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${
            isActive ? 'bg-green-500 animate-pulse' : 
            vapiLoaded ? 'bg-blue-500' : 'bg-orange-500 animate-pulse'
          }`} />
          <span className="text-sm text-muted-foreground">{status}</span>
        </div>

        {/* Last AI Message */}
        {lastMessage && (
          <div className="bg-muted/50 p-3 rounded-md border-l-4 border-purple-500">
            <p className="text-xs text-muted-foreground mb-1">Latest AI Response:</p>
            <p className="text-sm font-medium">{lastMessage}</p>
          </div>
        )}

        {/* Controls (Host Only) */}
        {isHost && (
          <div className="space-y-2">
            {!isActive ? (
              <Button 
                onClick={startAIAgent} 
                className="w-full"
                disabled={!vapiLoaded}
              >
                <Phone className="h-4 w-4 mr-2" />
                {vapiLoaded ? 'Start AI Voice Interaction' : 'Loading VAPI...'}
              </Button>
            ) : (
              <div className="flex space-x-2">
                <Button 
                  onClick={toggleMute} 
                  variant="outline" 
                  className="flex-1"
                >
                  {isMuted ? (
                    <>
                      <MicOff className="h-4 w-4 mr-2" />
                      Unmute AI
                    </>
                  ) : (
                    <>
                      <Mic className="h-4 w-4 mr-2" />
                      Mute AI
                    </>
                  )}
                </Button>
                <Button 
                  onClick={stopAIAgent} 
                  variant="destructive" 
                  className="flex-1"
                >
                  <PhoneOff className="h-4 w-4 mr-2" />
                  Stop AI
                </Button>
              </div>
            )}
            
            {/* Retry button if VAPI failed to load */}
            {!vapiLoaded && (
              <Button 
                onClick={() => window.location.reload()} 
                variant="outline"
                className="w-full"
              >
                Retry VAPI Loading
              </Button>
            )}
          </div>
        )}

        {/* Participant View */}
        {!isHost && (
          <div className="text-center py-2">
            <p className="text-sm text-muted-foreground">
              {isActive ? 'AI Agent is listening and can respond to your questions' : 'AI Agent is available but not active'}
            </p>
          </div>
        )}

        {/* Instructions */}
        <div className="text-xs text-muted-foreground space-y-1 bg-muted/20 p-3 rounded">
          <p className="font-medium">How to use:</p>
          {isHost ? (
            <>
              <p>• Click "Start AI Voice Interaction" to activate</p>
              <p>• AI will listen to all webinar audio</p>
              <p>• Speak naturally - AI will respond when addressed</p>
              <p>• Use mute/unmute to control AI participation</p>
            </>
          ) : (
            <>
              <p>• Speak normally during the webinar</p>
              <p>• AI will respond to questions and participate in discussions</p>
              <p>• AI responses appear in chat and as voice</p>
            </>
          )}
        </div>

        {/* Technical Info */}
        <div className="text-xs text-muted-foreground bg-muted/30 p-2 rounded">
          <p>✅ AI Agent: {aiAgent.name}</p>
          <p>✅ VAPI Assistant ID: {aiAgent.vapiAssistantId}</p>
          <p>{vapiLoaded ? '✅' : '⏳'} VAPI SDK: {vapiLoaded ? 'Loaded & Ready' : 'Loading...'}</p>
          <p>🎤 Voice Interaction: {isActive ? 'Active' : 'Inactive'}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default WebinarAIAgent