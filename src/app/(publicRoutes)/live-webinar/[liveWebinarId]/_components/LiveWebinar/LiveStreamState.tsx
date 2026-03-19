import {
  StreamVideo,
  StreamVideoClient,
  User as StreamUser,
} from '@stream-io/video-react-sdk';
import { WebinarWithPresenter } from '@/lib/type'
import { User } from '@prisma/client'
import React from 'react'
import CustomLivestreamPlayer from './CustomLivestreamPlayer';

type Props = {
  apiKey: string
  token: string
  callId: string
  webinar: WebinarWithPresenter
  user: User
}

const LiveStreamState = ({ apiKey, token, callId, webinar, user }: Props) => {
  const streamUser: StreamUser = { id: user.id, name: user.name }
  const client = new StreamVideoClient({ 
    apiKey, 
    user: streamUser, 
    token,
    options: {
      logLevel: 'warn', // Reduce console noise
    }
  })

  return (
    <StreamVideo client={client}>
      <CustomLivestreamPlayer
        callId={callId}
        callType="livestream"
        webinar={webinar}
        username={user.name}
        token={token}
        userId={user.id}
      />
    </StreamVideo>
  )
}

export default LiveStreamState