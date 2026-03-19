'use server'

import { StreamChat } from 'stream-chat'

export async function testStreamCredentials() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY
    const apiSecret = process.env.STREAM_API_SECRET
    
    console.log('Testing Stream credentials...')
    console.log('API Key:', apiKey?.substring(0, 8) + '...')
    console.log('API Secret:', apiSecret?.substring(0, 8) + '...')
    
    if (!apiKey || !apiSecret) {
      return {
        success: false,
        error: 'Missing Stream API credentials',
        details: {
          hasApiKey: !!apiKey,
          hasApiSecret: !!apiSecret
        }
      }
    }

    // Test token generation
    const serverClient = StreamChat.getInstance(apiKey, apiSecret)
    const testUserId = 'test-user-' + Date.now()
    const token = serverClient.createToken(testUserId)
    
    console.log('Generated test token:', token.substring(0, 20) + '...')
    
    return {
      success: true,
      apiKey,
      testToken: token,
      testUserId,
      message: 'Stream credentials are working'
    }
  } catch (error: any) {
    console.error('Stream credentials test failed:', error)
    return {
      success: false,
      error: error.message,
      details: error
    }
  }
}

export async function generateFreshStreamToken(userId: string) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!
    const apiSecret = process.env.STREAM_API_SECRET!
    
    if (!apiKey || !apiSecret) {
      throw new Error('Stream API credentials are missing')
    }

    console.log('Generating fresh token for user:', userId)
    console.log('Using API Key:', apiKey)
    
    // Create a fresh server-side Stream client
    const serverClient = StreamChat.getInstance(apiKey, apiSecret)
    
    // Generate token with longer expiration
    const token = serverClient.createToken(userId, Math.floor(Date.now() / 1000) + (24 * 60 * 60)) // 24 hours
    
    console.log('Generated fresh token:', token.substring(0, 30) + '...')
    
    return {
      success: true,
      token,
      apiKey,
      userId,
      expiresIn: '24 hours'
    }
  } catch (error: any) {
    console.error('Error generating fresh Stream token:', error)
    return {
      success: false,
      error: error.message || 'Failed to generate Stream token'
    }
  }
}