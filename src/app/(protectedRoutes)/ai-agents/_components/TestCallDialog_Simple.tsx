'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { X, Phone, PhoneOff } from 'lucide-react'
import Vapi from '@vapi-ai/web'

type Props = {
  agentId: string
  agentName: string
  onClose: () => void
}

const TestCallDialog = ({ agentId, agentName, onClose }: Props) => {
  const [isCallActive, setIsCallActive] = useState(false)
  const [callStatus, setCallStatus] = useState('Initializing...')
  const vapiRef = useRef<Vapi | null>(null)

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY

    if (!publicKey) {
      setCallStatus('Error: VAPI public key not configured')
      return
    }

    console.log('🔧 Simple VAPI Test')
    console.log('📋 Agent ID:', agentId)
    console.log('🔑 Public Key:', publicKey.substring(0, 15) + '...')

    try {
      // Create VAPI instance with simple configuration
      const vapi = new Vapi(publicKey)
      vapiRef.current = vapi

      console.log('✅ VAPI instance created')

      // Minimal event listeners
      vapi.on('call-start', () => {
        console.log('📞 ✅ CALL STARTED SUCCESSFULLY!')
        setIsCallActive(true)
        setCallStatus('🎉 Call Active - Say "Hello" quickly!')
        
        // Set a timer to remind user to speak quickly
        setTimeout(() => {
          if (isCallActive) {
            setCallStatus('⚡ Speak now - call may end soon!')
          }
        }, 5000)
        
        setTimeout(() => {
          if (isCallActive) {
            setCallStatus('⏰ Call ending soon - this is normal for free tier')
          }
        }, 15000)
      })

      vapi.on('call-end', () => {
        console.log('📞 Call ended - This is normal for free VAPI accounts')
        setIsCallActive(false)
        setCallStatus('✅ Test completed! Call ended (normal for free tier)')
      })

      vapi.on('speech-start', () => {
        console.log('🎤 ✅ SPEECH DETECTED!')
        setCallStatus('🎤 I can hear you!')
      })

      vapi.on('speech-end', () => {
        console.log('🎤 Speech ended')
        setCallStatus('🤖 AI is responding...')
      })

      vapi.on('message', (message: any) => {
        console.log('💬 ✅ AI RESPONSE:', message)
        if (message.type === 'transcript' && message.role === 'assistant') {
          setCallStatus(`🤖 AI said: "${message.transcript}"`)
        }
      })

      vapi.on('error', (error: any) => {
        console.error('❌ VAPI ERROR DETAILS:')
        console.error('Error object:', error)
        console.error('Error type:', typeof error)
        console.error('Error keys:', Object.keys(error || {}))
        console.error('Error message:', error?.message)
        console.error('Error code:', error?.code)
        console.error('Error status:', error?.status)
        console.error('Error details:', error?.details)
        console.error('Error response:', error?.response)
        
        let errorMsg = 'Unknown error'
        
        if (error?.message?.includes('Assistant or Squad or Workflow must be provided')) {
          errorMsg = 'Assistant not found in VAPI - check dashboard'
        } else if (error?.message?.includes('Meeting ended due to ejection')) {
          errorMsg = 'Call ended by VAPI (normal for free tier - calls are limited to ~30 seconds)'
        } else if (error?.message?.includes('Meeting has ended')) {
          errorMsg = 'Call terminated (normal for free VAPI accounts)'
        } else if (error?.message) {
          errorMsg = error.message
        } else if (error?.error) {
          errorMsg = error.error
        } else if (error?.code) {
          errorMsg = `Error code: ${error.code}`
        } else if (error?.status) {
          errorMsg = `Status: ${error.status}`
        } else {
          errorMsg = 'Call failed - check console for details'
        }
        
        setCallStatus(`❌ ${errorMsg}`)
        setIsCallActive(false)
      })

      setCallStatus('✅ Ready - Click Start Call')
      console.log('✅ Simple VAPI setup complete')
    } catch (error: any) {
      console.error('❌ Setup error:', error)
      setCallStatus(`Setup Error: ${error.message}`)
    }

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
    console.log('🎯 STARTING VAPI TEST CALL')
    
    if (!vapiRef.current) {
      setCallStatus('❌ VAPI not ready')
      return
    }

    try {
      setCallStatus('🚀 Starting call...')
      
      // First, try with just the assistant ID (recommended approach)
      console.log('📞 Calling vapi.start() with assistant ID:', agentId)
      
      // Validate assistant ID format
      if (!agentId || agentId.length < 10) {
        throw new Error('Invalid assistant ID format')
      }
      
      await vapiRef.current.start(agentId)
      
      console.log('✅ Start call request sent - waiting for connection...')
      setCallStatus('⏳ Connecting to VAPI...')
      
      // Set a timeout to detect if call doesn't start
      setTimeout(() => {
        if (!isCallActive) {
          setCallStatus('⚠️ Connection taking longer than expected...')
        }
      }, 10000)
      
    } catch (error: any) {
      console.error('❌ START CALL ERROR DETAILS:')
      console.error('Error object:', error)
      console.error('Error message:', error?.message)
      console.error('Error stack:', error?.stack)
      
      let errorMessage = 'Unknown error'
      
      if (error?.message?.includes('Assistant or Squad or Workflow must be provided')) {
        errorMessage = 'Assistant not found - check if agent exists in VAPI dashboard'
      } else if (error?.message?.includes('Invalid assistant ID')) {
        errorMessage = 'Invalid assistant ID format'
      } else if (error?.message) {
        errorMessage = error.message
      }
      
      setCallStatus(`❌ Start failed: ${errorMessage}`)
      setIsCallActive(false)
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
          <h2 className="text-lg font-semibold">Simple Test - {agentName}</h2>
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
                {isCallActive ? '🎉 Call Active!' : '🧪 Simple Test'}
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
                  disabled={callStatus.includes('Error')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Start Simple Test
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

            {/* Debug Info */}
            <div className="text-xs text-muted-foreground space-y-1 bg-muted/50 p-3 rounded">
              <p><strong>Debug Info:</strong></p>
              <p>Agent ID: {agentId.substring(0, 8)}...</p>
              <p>Status: {isCallActive ? 'Active' : 'Inactive'}</p>
              <p>Check browser console for detailed logs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestCallDialog