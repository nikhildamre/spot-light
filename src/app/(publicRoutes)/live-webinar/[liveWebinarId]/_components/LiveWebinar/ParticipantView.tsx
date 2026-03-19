'use client'

import { useStreamVideoClient, Call, StreamCall } from '@stream-io/video-react-sdk'
import { WebinarWithPresenter } from '@/lib/type'
import React, { useEffect, useState } from 'react'
import LiveWebinarView from '../Common/LiveWebinarView'
import DevicePermissionHandler from '@/components/DevicePermissionHandler'

type Props = {
  username: string
  callId: string
  callType: string
  webinar: WebinarWithPresenter
  token: string
  userId: string
}

const ParticipantView = ({
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
  const [permissionsGranted, setPermissionsGranted] = useState(false)

  useEffect(() => {
    if (!client || !permissionsGranted) return

    const myCall = client.call(callType, callId)
    setCall(myCall)

    // Participants join as viewers only (no camera/mic access needed)
    myCall.join({
        create: false,
        data: {
            custom: {
                role: 'viewer'
            }
        }
    }).catch((e) => {
        console.error('Failed to join call as participant', e)
    })

    return () => {
        myCall.leave().catch((e) => {
        console.error('Failed to leave call', e)
        })
        setCall(undefined)
    }
    }, [client, callId, callType, permissionsGranted])

    if (!permissionsGranted) {
        return (
            <DevicePermissionHandler 
                isHost={false}
                onPermissionsGranted={() => setPermissionsGranted(true)}
            />
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
        isHost={false}
        username={username}
        userId={userId}
        userToken={token}
        webinar={webinar}
      />
    </StreamCall>
  )
}

export default ParticipantView