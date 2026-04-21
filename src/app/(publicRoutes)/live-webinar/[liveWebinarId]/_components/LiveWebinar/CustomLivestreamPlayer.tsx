'use client'

import { useStreamVideoClient, Call, StreamCall } from '@stream-io/video-react-sdk'
import { WebinarWithPresenter } from '@/lib/type'
import React, { useEffect, useState } from 'react'
import LiveWebinarView from '../Common/LiveWebinarView'

type Props = {
  username: string
  callId: string
  callType: string
  webinar: WebinarWithPresenter
  token: string
  userId: string
}

const CustomLivestreamPlayer = ({
  username,
  callId,
  callType,
  webinar,
  token,
  userId,
}: Props) => {
  const client = useStreamVideoClient()
  const [call, setCall] = useState<Call>()
  const [showChat, setShowChat] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!client) return

    const setupCall = async () => {
      try {
        setIsLoading(true)
        setError(null)

        console.log('Setting up call with enhanced permissions...')
        console.log('User ID:', userId)
        console.log('Call ID:', callId)
        console.log('Call Type:', callType)
        
        const myCall = client.call(callType, callId)
        setCall(myCall)

        // Use the simplest approach - just join with create
        // The JWT token should provide all necessary permissions
        await myCall.join({ create: true })

        console.log('Successfully joined call')
        console.log('Call state:', myCall.state.callingState)
        console.log('Current user ID:', myCall.currentUserId)
        
        // Check if we can access call permissions
        console.log('Call permissions:', myCall.permissionsContext)
        console.log('Can send video:', myCall.permissionsContext.hasPermission('send-video'))
        console.log('Can send audio:', myCall.permissionsContext.hasPermission('send-audio'))

        console.log('Successfully joined call with admin permissions')

        // Don't auto-enable camera/microphone - let user control manually
        // This prevents permission errors on initial load
        console.log('Call setup complete - user can now control media manually')

        setIsLoading(false)
      } catch (e) {
        console.error('Failed to setup call', e)
        setError('Failed to join webinar. Please try again.')
        setIsLoading(false)
      }
    }

    setupCall()

    return () => {
      if (call) {
        call.leave().catch((e) => {
          console.error('Failed to leave call', e)
        })
      }
      setCall(undefined)
    }
  }, [client, callId, callType, userId])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Setting up webinar...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Connection Error</h3>
          <p className="text-muted-foreground mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  if (!call) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Joining webinar...</p>
        </div>
      </div>
    )
  }

  return (
    <StreamCall call={call}>
      <LiveWebinarView
        showChat={showChat}
        setShowChat={setShowChat}
        isHost={true}
        username={username}
        userId={userId}
        userToken={token}
        webinar={webinar}
      />
    </StreamCall>
  )
}

export default CustomLivestreamPlayer