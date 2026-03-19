#!/usr/bin/env node

/**
 * Test Stream Call Initialization
 * This script helps debug Stream call issues
 */

console.log('🔍 Testing Stream Call Initialization...\n');

// Test environment variables
console.log('📋 Environment Variables:');
console.log('NEXT_PUBLIC_STREAM_API_KEY:', process.env.NEXT_PUBLIC_STREAM_API_KEY ? '✅ Set' : '❌ Missing');
console.log('STREAM_API_SECRET:', process.env.STREAM_API_SECRET ? '✅ Set' : '❌ Missing');

// Check if we can create a test token
if (process.env.NEXT_PUBLIC_STREAM_API_KEY && process.env.STREAM_API_SECRET) {
    try {
        const jwt = require('jsonwebtoken');
        const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
        const secret = process.env.STREAM_API_SECRET;
        
        const testUserId = 'test-user-123';
        const testCallId = 'test-call-456';
        
        const payload = {
            user_id: testUserId,
            iss: apiKey,
            sub: `user/${testUserId}`,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + (60 * 60), // 1 hour
            call_cids: [`default:${testCallId}`]
        };
        
        const token = jwt.sign(payload, secret, { algorithm: 'HS256' });
        
        console.log('\n✅ Token Generation Test: SUCCESS');
        console.log('Test Token (first 50 chars):', token.substring(0, 50) + '...');
        
    } catch (error) {
        console.log('\n❌ Token Generation Test: FAILED');
        console.log('Error:', error.message);
    }
} else {
    console.log('\n❌ Cannot test token generation - missing environment variables');
}

console.log('\n🔧 Common Issues & Solutions:');
console.log('');
console.log('1. "No permission to publish VIDEO"');
console.log('   → Must join call BEFORE enabling camera/microphone');
console.log('   → Use call.join({ create: true }) first');
console.log('');
console.log('2. "call not found"');
console.log('   → Call ID must exist in Stream dashboard');
console.log('   → Or use { create: true } when joining');
console.log('');
console.log('3. "call.startScreenShare is not a function"');
console.log('   → Use call.screenShare.enable() instead');
console.log('   → Or check Stream SDK version');
console.log('');
console.log('🚀 Recommended Flow:');
console.log('1. User clicks "Join Webinar"');
console.log('2. Call call.join({ create: true })');
console.log('3. Wait for join to complete');
console.log('4. Then enable camera/microphone');
console.log('5. Screen sharing only for hosts');
console.log('');
console.log('📱 Browser Requirements:');
console.log('• HTTPS (required for camera/microphone)');
console.log('• Camera/microphone permissions');
console.log('• Modern browser (Chrome, Firefox, Safari, Edge)');
console.log('');
console.log('🎯 Next Steps:');
console.log('1. Refresh the webinar page');
console.log('2. Click "Join Webinar" FIRST');
console.log('3. Allow camera/microphone permissions');
console.log('4. Then try camera/microphone controls');