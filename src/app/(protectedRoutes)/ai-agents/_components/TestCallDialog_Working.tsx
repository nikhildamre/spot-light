'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { X, Phone, PhoneOff, Mic, MicOff, Loader2 } from 'lucide-react'

type Props = {
  agentId: string
  agentName: string
  onClose: () => void
}

const TestCallDialog = ({ agentId, agentName, onClose }: Props) => {
  const [isCallActive, setIsCallActive] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [callStatus, setCallStatus] = useState('Loading assistant...')
  const [assistantConfig, setAssistantConfig] = useState<any>(null)
  const vapiRef = useRef<any>(null)

  // Fetch assistant configuration
  useEffect(() => {
    const fetchAssistant = async () => {
      try {
        console.log('📥 Fetching assistant config for:', agentId)
        const response = await fetch(`/api/vapi/assistant/${agentId}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch assistant')
        }
        
        const data = await response.json()
        console.log('✅ Assistant config loaded:', data)
        setAssistantConfig(data)
        setCallStatus('Ready to call')
      } catch (error) {
        console.error('❌ Error fetching assistant:', error)
        setCallStatus('Error loading assistant')
      }
    }

    fetchAssistant()
  }, [agentId])

  // Initialize VAPI SDK
  useEffect(() => {
    if (!assistantConfig) return

    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || process.env.NEXT_PUBLIC_VAPI_API_KEY

    if (!publicKey) {
      setCallStatus('Error: VAPI public key not configured')
      return
    }

    console.log('🔧 Initializing VAPI SDK')

    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js'
    script.async = true
    
    script.onload = () => {
      console.log('✅ VAPI SDK loaded')
      
      setTimeout(() => {
        if (typeof window !== 'undefined' && (window as any).vapiSDK) {
          try {
            console.log('🚀 Creating VAPI instance with full config')
            
            vapiRef.current = (window as any).vapiSDK.run({
              apiKey: publicKey,
              assistant: assistantConfig, // Use full assistant config
            })

            if (!vapiRef.current) {
              throw new Error('VAPI instance is null')
            }

            console.log('✅ VAPI instance created')

            // Event listeners
            vapiRef.current.on('call-start', () => {
              console.log('📞 Call started')
              setIsCallActive(true)
              setCallStatus('Connected')
            })

            vapiRef.current.on('call-end', () => {
              console.log('📞 Call ended')
              setIsCallActive(false)
              setCallStatus('Call ended')
            })

            vapiRef.current.on('speech-start', () => {
              setCallStatus('Listening...')
            })

            vapiRef.current.on('speech-end', () => {
              setCallStatus('Processing...')
            })

            vapiRef.current.on('message', (message: any) => {
              if (message.type === 'transcript' && message.role === 'assistant') {
                setCallStatus(`AI: ${message.transcript}`)
              }
            })

            vapiRef.current.on('error', (error: any) => {
              console.error('❌ VAPI error:', error)
              setCallStatus(`Error: ${error?.message || 'Unknown'}`)
              setIsCallActive(false)
            })

            setCallStatus('Ready to call')
          } catch (error: any) {
            console.error('❌ Init error:', error)
            setCallStatus(`Error: ${error.message}`)
          }
        }
      }, 500)
    }

    document.body.appendChild(script)

    return () => {
      if (vapiRef.current && isCallActive) {
        try {
          vapiRef.current.stop()
        } catch (e) {
          console.error('Cleanup error:', e)
        }
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [assistantConfig])

  const startCall = async () => {
    if (!vapiRef.current) {
      setCallStatus('Error: Not ready')
      return
    }

    try {
      setCallStatus('Starting...')
      await vapiRef.current.start()
    } catch (error: any) {
      console.error('❌ Start error:', error)
      setCallStatus(`Error: ${error?.message || 'Failed'}`)
      setIsCallActive(false)
    }
  }

  const endCall = async () => {
    if (!vapiRef.current) return
    try {
      await vapiRef.current.stop()
      setIsCallActive(false)
      setCallStatus('Call ended')
    } catch (error) {
      console.error('End error:', error)
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
      console.error('Mute error:', error)
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
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-colors ${
              isCallActive ? 'bg-green-500/20 animate-pulse' : 'bg-primary/10'
            }`}>
              {!assistantConfig ? (
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
              ) : (
                <Phone className={`h-10 w-10 ${isCallActive ? 'text-green-500' : 'text-primary'}`} />
              )}
            </div>
            
            <div>
              <h3 className="font-semibold mb-1">
                {isCallActive ? 'Call Active' : 'Ready to Test'}
              </h3>
              <p className="text-sm text-muted-foreground">{callStatus}</p>
            </div>

            <div className="flex space-x-3">
              {!isCallActive ? (
                <Button 
                  onClick={startCall} 
                  className="flex-1"
                  disabled={!assistantConfig || callStatus.includes('Error')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Start Call
                </Button>
              ) : (
                <>
                  <Button onClick={toggleMute} variant="outline" className="flex-1">
                    {isMuted ? <MicOff className="h-4 w-4 mr-2" /> : <Mic className="h-4 w-4 mr-2" />}
                    {isMuted ? 'Unmute' : 'Mute'}
                  </Button>
                  <Button onClick={endCall} variant="destructive" className="flex-1">
                    <PhoneOff className="h-4 w-4 mr-2" />
                    End Call
                  </Button>
                </>
              )}
            </div>

            <div className="text-xs text-muted-foreground space-y-1">
              {!isCallActive && (
                <>
                  <p>• Allow microphone access when prompted</p>
                  <p>• Speak clearly after starting</p>
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
