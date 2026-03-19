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
        setIsJoined(state === 'joined')
      }
      
      checkCallState()
      
      // Listen for call state changes - simplified approach
      const interval = setInterval(checkCallState, 1000)
      
      return () => {
        clearInterval(interval)
      }
    }
  }, [call])

  const toggleCamera = async () => {
    if (!isJoined) {
      alert('Please join the webinar first by clicking "Join Webinar"')
      return
    }
    
    try {
      if (isCameraMuted) {
        await camera.enable()
      } else {
        await camera.disable()
      }
    } catch (error) {
      console.error('Error toggling camera:', error)
      alert('Camera error: ' + (error instanceof Error ? error.message : 'Unknown error'))
    }
  }

  const toggleMicrophone = async () => {
    if (!isJoined) {
      alert('Please join the webinar first by clicking "Join Webinar"')
      return
    }
    
    try {
      if (isMicMuted) {
        await microphone.enable()
      } else {
        await microphone.disable()
      }
    } catch (error) {
      console.error('Error toggling microphone:', error)
      alert('Microphone error: ' + (error instanceof Error ? error.message : 'Unknown error'))
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
        // Stop screen sharing
        await call.screenShare.disable()
        setIsScreenSharing(false)
        onScreenShare?.(false)
      } else {
        // Start screen sharing
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
      // First join the call with create option and proper permissions
      await call.join({ 
        create: true,
        data: {
          // Ensure user has proper permissions
          members: [
            {
              user_id: call.currentUserId,
              role: 'admin' // Give admin role for publishing permissions
            }
          ]
        }
      })
      setIsJoined(true)
      
      // Auto-enable camera and microphone after joining (with delay)
      setTimeout(async () => {
        try {
          if (camera && !isCameraMuted) {
            await camera.enable()
          }
          if (microphone && !isMicMuted) {
            await microphone.enable()
          }
        } catch (error) {
          console.log('Auto-enable media failed (this is normal):', error)
        }
      }, 2000) // Increased delay for better reliability
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