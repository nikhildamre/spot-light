import { onAuthenticateUser } from '@/actions/auth';
import { getWebinarById } from '@/actions/webinar';
import { generateStreamVideoToken, createOrGetCall } from '@/actions/stream';
import React from 'react';
import RenderWebinar from './_components/RenderWebinar';

type Props = {
  params: Promise<{
    liveWebinarId: string;
  }>;
  searchParams: Promise<{
    error: string;
  }>;
};

const page = async ({ params, searchParams }: Props) => {
  const { liveWebinarId } = await params;
  const { error } = await searchParams;

  const webinarData = await getWebinarById(liveWebinarId);
  if (!webinarData) {
    return (
        <div className="w-full min-h-screen flex justify-center items-center text-lg sm:text-4xl">
        Webinar not found
        </div>
    );
    }

    const checkUser = await onAuthenticateUser();
    
    if (!checkUser.user) {
        return (
            <div className="w-full min-h-screen flex justify-center items-center text-lg sm:text-4xl">
                Please sign in to join the webinar
            </div>
        );
    }

    // Generate user-specific token
    const tokenResult = await generateStreamVideoToken(checkUser.user.id);
    
    if (!tokenResult.success) {
        return (
            <div className="w-full min-h-screen flex justify-center items-center text-lg sm:text-4xl">
                Error loading webinar: {tokenResult.error}
            </div>
        );
    }

    const callId = liveWebinarId; // Use webinar ID as call ID

    // Create the call server-side with proper permissions
    const callResult = await createOrGetCall(callId, checkUser.user.id);
    
    if (!callResult.success) {
        return (
            <div className="w-full min-h-screen flex justify-center items-center text-lg sm:text-4xl">
                Error setting up webinar: {callResult.error}
            </div>
        );
    }

    const apiKey = tokenResult.apiKey!;
    const token = tokenResult.token!;

    return (
    <div className="w-full min-h-screen mx-auto">
        <RenderWebinar
        error={error}
        user={checkUser.user || null}
        webinar={webinarData}
        apiKey={apiKey}
        token={token}
        callId={callId}
        />
        </div>
    );
};

export default page;