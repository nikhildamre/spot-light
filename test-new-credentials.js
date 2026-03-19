// Fresh test for new Stream credentials
const fs = require('fs');
const { StreamChat } = require('stream-chat');

// Read .env file directly
const envContent = fs.readFileSync('.env', 'utf8');
const envLines = envContent.split('\n');

let apiKey = '';
let apiSecret = '';

envLines.forEach(line => {
  if (line.startsWith('NEXT_PUBLIC_STREAM_API_KEY=')) {
    apiKey = line.split('=')[1];
  }
  if (line.startsWith('STREAM_API_SECRET=')) {
    apiSecret = line.split('=')[1];
  }
});

console.log('🔧 Testing NEW Stream Credentials...\n');
console.log('API Key:', apiKey ? `${apiKey.substring(0, 8)}...` : 'MISSING');
console.log('API Secret:', apiSecret ? `${apiSecret.substring(0, 8)}...` : 'MISSING');

if (!apiKey || !apiSecret) {
  console.log('\n❌ ERROR: Missing Stream API credentials');
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
  
  console.log('\n🎉 NEW Stream credentials are working correctly!');
  console.log('API Key confirmed:', apiKey);
  
} catch (error) {
  console.log('\n❌ ERROR: Token generation failed');
  console.log('Error:', error.message);
  console.log('API Key:', apiKey);
  console.log('API Secret length:', apiSecret.length);
}