// Test Stream Video Token Generation
const { StreamClient } = require('@stream-io/node-sdk');
require('dotenv').config({ override: true });

async function testVideoTokenGeneration() {
  console.log('🔧 Testing Stream Video Token Generation...\n');
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  const apiSecret = process.env.STREAM_API_SECRET;
  
  console.log('API Key:', apiKey ? `${apiKey.substring(0, 8)}...` : 'MISSING');
  console.log('API Secret:', apiSecret ? `${apiSecret.substring(0, 8)}...` : 'MISSING');
  
  if (!apiKey || !apiSecret) {
    console.log('\n❌ ERROR: Missing Stream API credentials');
    return;
  }
  
  try {
    console.log('\n🧪 Testing video token generation...');
    
    const client = new StreamClient(apiKey, apiSecret);
    const testUserId = 'test-user-' + Date.now();
    
    // Generate token with video capabilities
    const token = client.createToken(testUserId, Math.floor(Date.now() / 1000) + (24 * 60 * 60));
    
    console.log('✅ SUCCESS: Video token generated successfully');
    console.log('Test User ID:', testUserId);
    console.log('Token (first 30 chars):', token.substring(0, 30) + '...');
    
    // Test call creation
    console.log('\n🧪 Testing call creation...');
    const callId = 'test-call-' + Date.now();
    
    const call = await client.video.call('livestream', callId).getOrCreate({
      data: {
        created_by_id: testUserId,
        members: [
          {
            user_id: testUserId,
            role: 'admin',
          }
        ],
        settings_override: {
          broadcasting: {
            enabled: true,
            hls: {
              enabled: true,
              quality_tracks: ['720p', '480p']
            }
          }
        }
      }
    });
    
    console.log('✅ SUCCESS: Call created successfully');
    console.log('Call ID:', call.call.id);
    console.log('Call Type:', call.call.type);
    console.log('Created By:', call.call.created_by.id);
    
    console.log('\n🎉 Stream Video token and call creation working correctly!');
    console.log('The permission error should now be resolved.');
    
  } catch (error) {
    console.log('\n❌ ERROR: Video token/call generation failed');
    console.log('Error:', error.message);
    console.log('\nFull error:', error);
  }
}

testVideoTokenGeneration();