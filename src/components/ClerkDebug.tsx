'use client'

import { useAuth, useUser } from '@clerk/nextjs'
import { useEffect } from 'react'

export default function ClerkDebug() {
  const { isLoaded, userId, isSignedIn } = useAuth()
  const { user } = useUser()

  useEffect(() => {
    console.log('Clerk Debug Info:', {
      isLoaded,
      userId,
      isSignedIn,
      user: user ? user.emailAddresses?.[0]?.emailAddress : null,
      publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.substring(0, 20) + '...'
    })
  }, [isLoaded, userId, isSignedIn, user])

  if (!isLoaded) {
    return <div>Loading Clerk...</div>
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm">
      <div>Clerk Status:</div>
      <div>Loaded: {isLoaded ? '✅' : '❌'}</div>
      <div>Signed In: {isSignedIn ? '✅' : '❌'}</div>
      <div>User ID: {userId || 'None'}</div>
      <div>Email: {user?.emailAddresses?.[0]?.emailAddress || 'None'}</div>
    </div>
  )
}
