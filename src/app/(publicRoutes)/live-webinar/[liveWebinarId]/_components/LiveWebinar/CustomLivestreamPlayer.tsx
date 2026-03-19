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

        const myCall = client.call(callType, callId)
        setCall(myCall)

        // Since the call is already created server-side, just join it
        // Don't call getOrCreate() here as it requires admin permissions
        await myCall.join({
          create: false, // Don't create, just join existing call
          data: {
            custom: {
              role: 'host'
            }
          }
        })

        // Enable camera and microphone after joining
        try {
          await myCall.camera.enable()
          await myCall.microphone.enable()
        } catch (deviceError) {
          console.warn('Could not enable camera/microphone:', deviceError)
          // Continue anyway - user can enable manually
        }

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
  }, [client, callId, callType])

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