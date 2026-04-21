'use server'

import { StreamChat } from 'stream-chat'
import { StreamClient } from '@stream-io/node-sdk'

export const generateStreamToken = async (userId: string) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!
    const apiSecret = process.env.STREAM_API_SECRET!
    
    if (!apiKey || !apiSecret) {
      throw new Error('Stream API credentials are missing')
    }

    // Create a server-side Stream Chat client
    const serverClient = StreamChat.getInstance(apiKey, apiSecret)
    
    // Generate a token for the specific user
    const token = serverClient.createToken(userId)
    
    return {
      success: true,
      token,
      apiKey
    }
  } catch (error) {
    console.error('Error generating Stream token:', error)
    return {
      success: false,
      error: 'Failed to generate Stream token'
    }
  }
}

export const generateStreamVideoToken = async (userId: string) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!
    const apiSecret = process.env.STREAM_API_SECRET!
    
    if (!apiKey || !apiSecret) {
      throw new Error('Stream API credentials are missing')
    }

    console.log('Generating Stream Video token for user:', userId)

    // Create JWT token with Stream SDK format
    const jwt = require('jsonwebtoken')
    
    // Simplified payload focusing on essential permissions
    const payload = {
      user_id: userId,
      iss: apiKey,
      sub: `user/${userId}`,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // 24 hours
      
      // Essential permissions for video publishing
      call_cids: ['*'],
      
      // Core permissions that should allow video publishing
      permissions: [
        'CreateCall',
        'JoinCall',
        'SendVideo', 
        'SendAudio',
        'ReceiveVideo',
        'ReceiveAudio'
      ]
    }
    
    const token = jwt.sign(payload, apiSecret, { algorithm: 'HS256' })
    
    console.log('Generated simplified video token')
    
    return {
      success: true,
      token,
      apiKey,
      userId,
      expiresAt: new Date(payload.exp * 1000).toISOString()
    }
  } catch (error: any) {
    console.error('Error generating Stream Video token:', error)
    return {
      success: false,
      error: error.message || 'Failed to generate Stream Video token'
    }
  }
}

export const generateChatToken = async (userId: string) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!
    const apiSecret = process.env.STREAM_API_SECRET!
    
    if (!apiKey || !apiSecret) {
      throw new Error('Stream API credentials are missing')
    }

    const serverClient = StreamChat.getInstance(apiKey, apiSecret)
    const token = serverClient.createToken(userId)
    
    return {
      success: true,
      token,
      apiKey,
      userId
    }
  } catch (error) {
    console.error('Error generating chat token:', error)
    return {
      success: false,
      error: 'Failed to generate chat token'
    }
  }
}

export const createOrGetCall = async (callId: string, userId: string) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!
    const apiSecret = process.env.STREAM_API_SECRET!
    
    if (!apiKey || !apiSecret) {
      throw new Error('Stream API credentials are missing')
    }

    console.log('Creating/getting call server-side:', callId, 'for user:', userId)
    const client = new StreamClient(apiKey, apiSecret)
    
    try {
      // Try to get existing call first
      const existingCall = await client.video.call('livestream', callId).get()
      console.log('Found existing call:', callId)
      return {
        success: true,
        call: existingCall,
        created: false
      }
    } catch (error: any) {
      // If call doesn't exist, create it with proper admin permissions
      if (error.code === 16 || error.message?.includes("Can't find call")) {
        console.log('Creating new call:', callId)
        
        // Create call with server-side admin permissions
        const newCall = await client.video.call('livestream', callId).getOrCreate({
          data: {
            created_by_id: userId,
            // Add user as admin/host with full permissions
            members: [
              {
                user_id: userId,
                role: 'admin', // Give admin role for full permissions
              }
            ],
            settings_override: {
              broadcasting: {
                enabled: true,
                hls: {
                  enabled: true,
                  quality_tracks: ['1080p', '720p', '480p']
                }
              },
              audio: {
                mic_default_on: false,
                speaker_default_on: true,
                default_device: 'speaker',
                access_request_enabled: false,
                opus_dtx_enabled: true,
                redundant_coding_enabled: true,
                noise_cancellation: {
                  mode: 'available'
                }
              },
              video: {
                camera_default_on: false,
                target_resolution: {
                  width: 1280,
                  height: 720,
                  bitrate: 2000000
                },
                access_request_enabled: false,
                camera_facing: 'front'
              },
              screensharing: {
                enabled: true,
                access_request_enabled: false
              }
            }
          }
        })
        
        console.log('Created new call successfully:', callId)
        return {
          success: true,
          call: newCall,
          created: true
        }
      }
      throw error
    }
  } catch (error: any) {
    console.error('Error creating/getting call:', error)
    return {
      success: false,
      error: error.message || 'Failed to create or get call'
    }
  }
}