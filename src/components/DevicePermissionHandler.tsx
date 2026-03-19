'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

interface DevicePermissionHandlerProps {
  onPermissionsGranted: () => void
  isHost?: boolean
}

const DevicePermissionHandler: React.FC<DevicePermissionHandlerProps> = ({
  onPermissionsGranted,
  isHost = false
}) => {
  const [permissionState, setPermissionState] = useState<'checking' | 'granted' | 'denied' | 'error'>('checking')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const checkPermissions = async () => {
    try {
      setPermissionState('checking')
      
      if (isHost) {
        // For hosts, try to get camera and microphone access
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        })
        
        // Stop the stream immediately as we just wanted to check permissions
        stream.getTracks().forEach(track => track.stop())
        setPermissionState('granted')
        onPermissionsGranted()
      } else {
        // For participants, no camera/mic needed
        setPermissionState('granted')
        onPermissionsGranted()
      }
    } catch (error: any) {
      console.log('Device permission error:', error)
      
      if (error.name === 'NotAllowedError') {
        setErrorMessage('Camera and microphone access denied. Please allow access and try again.')
      } else if (error.name === 'NotFoundError') {
        setErrorMessage('No camera or microphone found. You can still join as audio-only.')
      } else {
        setErrorMessage('Unable to access camera/microphone. You can still join the webinar.')
      }
      
      setPermissionState('denied')
      
      // For hosts with permission issues, still allow joining but with limited functionality
      if (isHost) {
        setTimeout(() => {
          onPermissionsGranted()
        }, 3000)
      } else {
        onPermissionsGranted()
      }
    }
  }

  useEffect(() => {
    checkPermissions()
  }, [])

  if (permissionState === 'granted') {
    return null
  }

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="text-center max-w-md p-6 bg-card rounded-lg border">
        {permissionState === 'checking' && (
          <>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Setting up webinar...</h3>
            <p className="text-muted-foreground">
              {isHost ? 'Checking camera and microphone access...' : 'Preparing to join...'}
            </p>
          </>
        )}
        
        {permissionState === 'denied' && (
          <>
            <div className="text-yellow-500 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.876c1.07 0 1.957-.895 1.838-1.99L18.72 5.99C18.58 4.835 17.6 4 16.426 4H7.574c-1.174 0-2.154.835-2.294 1.99L3.214 15.01c-.119 1.095.768 1.99 1.838 1.99z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Device Access Issue</h3>
            <p className="text-muted-foreground mb-4">{errorMessage}</p>
            {isHost && (
              <div className="space-y-2">
                <Button onClick={checkPermissions} className="w-full">
                  Try Again
                </Button>
                <p className="text-xs text-muted-foreground">
                  Continuing in 3 seconds with limited functionality...
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default DevicePermissionHandler