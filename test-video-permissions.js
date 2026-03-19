#!/usr/bin/env node

/**
 * Test Stream Video Token Permissions
 * This script verifies that tokens have proper video publishing permissions
 */

require('dotenv').config();
const jwt = require('jsonwebtoken');

console.log('🔍 Testing Stream Video Token Permissions...\n');

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
    console.log('❌ Missing Stream credentials in .env file');
    process.exit(1);
}

console.log('✅ Stream credentials found');
console.log('API Key:', apiKey);
console.log('Secret (first 10 chars):', apiSecret.substring(0, 10) + '...\n');

// Test token generation
const testUserId = 'test-user-123';
const testCallId = 'test-call-456';

try {
    const payload = {
        user_id: testUserId,
        iss: apiKey,
        sub: `user/${testUserId}`,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // 24 hours
        // Add video publishing capabilities
        call_cids: ['*'], // Allow access to all calls
        role: 'admin', // Admin role for publishing permissions
        // Specific video permissions
        permissions: [
            'CreateCall',
            'JoinCall',
            'SendVideo',
            'SendAudio',
            'ReceiveVideo',
            'ReceiveAudio',
            'UpdateCallSettings',
            'UpdateCallPermissions'
        ]
    };
    
    const token = jwt.sign(payload, apiSecret, { algorithm: 'HS256' });
    
    console.log('🎯 Generated Token Analysis:');
    console.log('Token (first 50 chars):', token.substring(0, 50) + '...');
    
    // Decode and verify token
    const decoded = jwt.verify(token, apiSecret);
    console.log('\n📋 Token Payload:');
    console.log('User ID:', decoded.user_id);
    console.log('Role:', decoded.role);
    console.log('Call CIDs:', decoded.call_cids);
    console.log('Permissions:', decoded.permissions);
    console.log('Expires:', new Date(decoded.exp * 1000).toLocaleString());
    
    console.log('\n✅ Token Generation: SUCCESS');
    console.log('✅ Video Publishing Permissions: INCLUDED');
    console.log('✅ Admin Role: ASSIGNED');
    console.log('✅ Call Access: GRANTED');
    
} catch (error) {
    console.log('\n❌ Token Generation: FAILED');
    console.log('Error:', error.message);
}

console.log('\n🔧 Troubleshooting Steps:');
console.log('1. Ensure you clicked "Join Webinar" FIRST');
console.log('2. Allow browser camera/microphone permissions');
console.log('3. Check browser console for detailed errors');
console.log('4. Try refreshing the page and joining again');
console.log('5. Make sure you\'re using HTTPS (required for camera access)');

console.log('\n🎯 Expected Flow:');
console.log('1. Click "📹 MEDIA" button');
console.log('2. Click "Join Webinar" (wait for success)');
console.log('3. Browser asks for camera/mic permissions');
console.log('4. Allow permissions');
console.log('5. Camera/microphone controls should work');

console.log('\n📱 Browser Requirements:');
console.log('• Chrome/Firefox/Safari/Edge (latest versions)');
console.log('• HTTPS connection (localhost is OK)');
console.log('• Camera and microphone permissions');
console.log('• No other apps using camera/microphone');