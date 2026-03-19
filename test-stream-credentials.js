// Test Stream Credentials
// Run this with: node test-stream-credentials.js

// Clear require cache and reload environment
delete require.cache[require.resolve('dotenv')];
require('dotenv').config({ override: true });
const { StreamChat } = require('stream-chat');

async function testStreamCredentials() {
  console.log('🔧 Testing Stream Credentials...\n');
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  const apiSecret = process.env.STREAM_API_SECRET;
  
  console.log('API Key:', apiKey ? `${apiKey.substring(0, 8)}...` : 'MISSING');
  console.log('API Secret:', apiSecret ? `${apiSecret.substring(0, 8)}...` : 'MISSING');
  
  if (!apiKey || !apiSecret) {
    console.log('\n❌ ERROR: Missing Stream API credentials');
    console.log('Please update your .env file with valid Stream API keys');
    return;
  }
  
  if (apiKey === 'YOUR_NEW_STREAM_API_KEY_HERE' || apiSecret === 'YOUR_NEW_STREAM_SECRET_HERE') {
    console.log('\n❌ ERROR: Please replace placeholder values with actual Stream API keys');
    console.log('Get your keys from: https://dashboard.getstream.io/');
    return;
  }
  
  try {
    console.log('\n🧪 Testing token generation...');
    
    const serverClient = StreamChat.getInstance(apiKey, apiSecret);
    const testUserId = 'test-user-' + Date.now();
    const token = serverClient.createToken(testUserId);
    
    console.log('✅ SUCCESS: Token generated successfully');
    console.log('Test User ID:', testUserId);
    console.log('Token (first 30 chars):', token.substring(0, 30) + '...');
    
    console.log('\n🎉 Stream credentials are working correctly!');
    console.log('You can now start your development server with: npm run dev');
    
  } catch (error) {
    console.log('\n❌ ERROR: Token generation failed');
    console.log('Error:', error.message);
    console.log('\nPossible issues:');
    console.log('1. Invalid API key or secret');
    console.log('2. Keys don\'t match (key from one app, secret from another)');
    console.log('3. Network connectivity issues');
  }
}

testStreamCredentials();