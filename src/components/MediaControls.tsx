'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Camera, 
  CameraOff, 
  Mic, 
  MicOff, 
  Monitor, 
  MonitorOff,
  Phone,
  PhoneOff,
  Settings
} from 'lucide-react'
import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk'

type Props = {
  isHost: boolean
  onScreenShare?: (isSharing: boolean) => void
}

const MediaControls = ({ isHost, onScreenShare }: Props) => {
  const call = useCall()
  const { useCameraState, useMicrophoneState } = useCallStateHooks()
  const { camera, isMute: isCameraMuted } = useCameraState()
  const { microphone, isMute: isMicMuted } = useMicrophoneState()
  
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [isJoined, setIsJoined] = useState(false)

  useEffect(() => {
    if (call) {
      // Check if already joined
      const checkCallState = () => {
        const state = call.state.callingState
        const wasJoined = isJoined
        const nowJoined = state === 'joined'
        
        if (!wasJoined && nowJoined) {
          console.log('✅ Successfully joined the call - media controls now available')
        }
        
        setIsJoined(nowJoined)
      }
      
      checkCallState()
      
      // Listen for call state changes
      const subscription = call.state.callingState$.subscribe(() => {
        checkCallState()
      })
      
      return () => {
        if (subscription && subscription.unsubscribe) {
          subscription.unsubscribe()
        }
      }
    }
  }, [call, isJoined])

  const toggleCamera = async () => {
    if (!isJoined) {
      alert('Please join the webinar first by clicking "Join Webinar"')
      return
    }
    
    try {
      if (isCameraMuted) {
        // Request browser camera permission first
        try {
          await navigator.mediaDevices.getUserMedia({ video: true })
        } catch (permissionError) {
          alert('Camera permission denied. Please allow camera access in your browser settings and try again.')
          return
        }
        
        await camera.enable()
      } else {
        await camera.disable()
      }
    } catch (error) {
      console.error('Error toggling camera:', error)
      
      if (error instanceof Error) {
        if (error.message.includes('Permission denied')) {
          alert('Camera permission denied. Please allow camera access in your browser and try again.')
        } else if (error.message.includes('No permission to publish')) {
          alert('Video publishing not allowed. Please check your webinar permissions.')
        } else {
          alert('Camera error: ' + error.message)
        }
      } else {
        alert('Camera error: Unknown error occurred')
      }
    }
  }

  const toggleMicrophone = async () => {
    if (!isJoined) {
      alert('Please join the webinar first by clicking "Join Webinar"')
      return
    }
    
    try {
      if (isMicMuted) {
        // Request browser microphone permission first
        try {
          await navigator.mediaDevices.getUserMedia({ audio: true })
        } catch (permissionError) {
          alert('Microphone permission denied. Please allow microphone access in your browser settings and try again.')
          return
        }
        
        await microphone.enable()
      } else {
        await microphone.disable()
      }
    } catch (error) {
      console.error('Error toggling microphone:', error)
      
      if (error instanceof Error) {
        if (error.message.includes('Permission denied')) {
          alert('Microphone permission denied. Please allow microphone access in your browser and try again.')
        } else if (error.message.includes('No permission to publish')) {
          alert('Audio publishing not allowed. Please check your webinar permissions.')
        } else {
          alert('Microphone error: ' + error.message)
        }
      } else {
        alert('Microphone error: Unknown error occurred')
      }
    }
  }

  const toggleScreenShare = async () => {
    if (!call || !isJoined) {
      alert('Please join the webinar first')
      return
    }

    try {
      // Use the correct Stream SDK API for screen sharing
      if (isScreenSharing) {
        // Stop screen sharing - use the correct API
        await call.screenShare.disable()
        setIsScreenSharing(false)
        onScreenShare?.(false)
      } else {
        // Start screen sharing - use the correct API
        await call.screenShare.enable()
        setIsScreenSharing(true)
        onScreenShare?.(true)
      }
    } catch (error) {
      console.error('Error toggling screen share:', error)
      alert('Screen sharing error: ' + (error instanceof Error ? error.message : 'Screen sharing not available'))
    }
  }

  const joinCall = async () => {
    if (!call) return

    try {
      console.log('Joining call with token permissions...')
      
      // Check if already joined
      const callState = call.state.callingState
      if (callState === 'joined') {
        console.log('Already joined the call')
        setIsJoined(true)
        return
      }
      
      // Join the existing call - permissions come from JWT token
      await call.join({ 
        create: true, // Allow creation if needed
      })
      
      setIsJoined(true)
      console.log('Successfully joined call with token permissions')
      
    } catch (error) {
      console.error('Error joining call:', error)
      alert('Failed to join webinar: ' + (error instanceof Error ? error.message : 'Unknown error'))
    }
  }

  const leaveCall = async () => {
    if (!call) return

    try {
      await call.leave()
      setIsJoined(false)
    } catch (error) {
      console.error('Error leaving call:', error)
    }
  }

  if (!call) {
    return (
      <Card className="w-full">
        <CardContent className="p-4">
          <div className="text-center text-muted-foreground">
            <Settings className="h-8 w-8 mx-auto mb-2" />
            <p>Media controls unavailable</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="space-y-4">
          {/* Join/Leave Call */}
          <div className="flex justify-center">
            {!isJoined ? (
              <Button onClick={joinCall} className="w-full" size="lg">
                <Phone className="h-4 w-4 mr-2" />
                Join Webinar
              </Button>
            ) : (
              <Button onClick={leaveCall} variant="destructive" className="w-full" size="lg">
                <PhoneOff className="h-4 w-4 mr-2" />
                Leave Webinar
              </Button>
            )}
          </div>

          {/* Media Controls */}
          {isJoined && (
            <div className="grid grid-cols-2 gap-2">
              {/* Camera Toggle */}
              <Button
                onClick={toggleCamera}
                variant={isCameraMuted ? "destructive" : "default"}
                className="flex-1"
              >
                {isCameraMuted ? (
                  <>
                    <CameraOff className="h-4 w-4 mr-2" />
                    Camera Off
                  </>
                ) : (
                  <>
                    <Camera className="h-4 w-4 mr-2" />
                    Camera On
                  </>
                )}
              </Button>

              {/* Microphone Toggle */}
              <Button
                onClick={toggleMicrophone}
                variant={isMicMuted ? "destructive" : "default"}
                className="flex-1"
              >
                {isMicMuted ? (
                  <>
                    <MicOff className="h-4 w-4 mr-2" />
                    Mic Off
                  </>
                ) : (
                  <>
                    <Mic className="h-4 w-4 mr-2" />
                    Mic On
                  </>
                )}
              </Button>

              {/* Screen Share (Host Only) */}
              {isHost && (
                <Button
                  onClick={toggleScreenShare}
                  variant={isScreenSharing ? "secondary" : "outline"}
                  className="col-span-2"
                >
                  {isScreenSharing ? (
                    <>
                      <MonitorOff className="h-4 w-4 mr-2" />
                      Stop Screen Share
                    </>
                  ) : (
                    <>
                      <Monitor className="h-4 w-4 mr-2" />
                      Share Screen
                    </>
                  )}
                </Button>
              )}
            </div>
          )}

          {/* Status */}
          <div className="text-center text-sm text-muted-foreground">
            {!isJoined ? (
              <div className="space-y-2">
                <p>Click &quot;Join Webinar&quot; to enable camera and microphone</p>
                <p className="text-xs text-yellow-600">⚠️ You must join first before using media controls</p>
              </div>
            ) : (
              <div className="space-y-1">
                <p className="text-green-600">✅ Connected to webinar</p>
                <p>📹 Camera: {isCameraMuted ? 'Off' : 'On'}</p>
                <p>🎤 Microphone: {isMicMuted ? 'Off' : 'On'}</p>
                {isHost && <p>🖥️ Screen Share: {isScreenSharing ? 'Active' : 'Inactive'}</p>}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default MediaControls