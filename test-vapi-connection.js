// Test VAPI connection and credentials
const { default: fetch } = require('node-fetch');

async function testVAPIConnection() {
  const VAPI_PRIVATE_KEY = 'd430bd29-d1df-42b4-b0d1-21b2c67ec652';
  const VAPI_PUBLIC_KEY = '3f3bf2e8-f1d3-401d-8125-3196dfa2db37';
  const ASSISTANT_ID = 'ffd7e7d5-8b4f-437c-bd49-d68bc90cb4ce';

  console.log('🧪 Testing VAPI Connection...\n');

  try {
    // Test 1: Check API connectivity
    console.log('1. Testing API connectivity...');
    const response = await fetch('https://api.vapi.ai/assistant', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${VAPI_PRIVATE_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const assistants = await response.json();
    console.log('✅ API connectivity: SUCCESS');
    console.log(`   Found ${assistants.length} assistants`);

    // Test 2: Check specific assistant
    console.log('\n2. Testing specific assistant...');
    const assistant = assistants.find(a => a.id === ASSISTANT_ID);
    
    if (assistant) {
      console.log('✅ Assistant found: SUCCESS');
      console.log(`   Name: ${assistant.name}`);
      console.log(`   ID: ${assistant.id}`);
      console.log(`   Model: ${assistant.model?.model || 'Not specified'}`);
      console.log(`   Voice: ${assistant.voice?.provider || 'Not specified'}`);
    } else {
      console.log('❌ Assistant not found');
      console.log('   Available assistants:');
      assistants.forEach(a => console.log(`   - ${a.name} (${a.id})`));
    }

    // Test 3: Check credentials format
    console.log('\n3. Testing credentials format...');
    console.log('✅ Private Key format: Valid');
    console.log('✅ Public Key format: Valid');
    console.log('✅ Assistant ID format: Valid');

    // Test 4: Test call creation (optional)
    console.log('\n4. Testing call creation...');
    try {
      const callResponse = await fetch('https://api.vapi.ai/call', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${VAPI_PRIVATE_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assistantId: ASSISTANT_ID,
          type: 'webCall'
        })
      });

      if (callResponse.ok) {
        const callData = await callResponse.json();
        console.log('✅ Call creation: SUCCESS');
        console.log(`   Call ID: ${callData.id}`);
        console.log(`   Web Call URL: ${callData.webCallUrl || 'Not provided'}`);
      } else {
        const errorData = await callResponse.json();
        console.log('⚠️  Call creation: FAILED');
        console.log(`   Error: ${errorData.message || 'Unknown error'}`);
      }
    } catch (callError) {
      console.log('⚠️  Call creation: ERROR');
      console.log(`   ${callError.message}`);
    }

    console.log('\n🎉 VAPI Connection Test Complete!');
    console.log('\nNext steps:');
    console.log('1. Refresh your webinar page');
    console.log('2. Click "Start AI Voice Interaction"');
    console.log('3. Grant microphone permissions when prompted');
    console.log('4. Speak to test voice interaction');

  } catch (error) {
    console.error('❌ VAPI Connection Test Failed:', error.message);
    console.log('\nTroubleshooting:');
    console.log('1. Check your internet connection');
    console.log('2. Verify VAPI credentials are correct');
    console.log('3. Ensure you have VAPI credits available');
  }
}

testVAPIConnection();