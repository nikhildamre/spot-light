# Debug Checklist - What's Working and What's Not

## ✅ Test Each Feature

### 1. AI Agents Page Access
**Test**: Navigate to `http://localhost:3000/ai-agents`

**Expected**: 
- Page loads without errors
- Shows "Create AI Agent" button
- Shows existing agents (if any)

**If not working**:
- Check browser console for errors
- Verify you're logged in (Clerk authentication)
- Check server logs

---

### 2. Create AI Agent
**Test**: Click "Create AI Agent" button

**Expected**:
- Dialog opens
- Form shows all fields (Name, Description, First Message, System Prompt, Voice, Model)
- Can fill out form
- "Create AI Agent" button is clickable

**If not working**:
- Check console for errors
- Verify VAPI_PRIVATE_KEY is set in .env
- Check server action logs

---

### 3. Agent Creation Submission
**Test**: Fill form and click "Create AI Agent"

**Expected**:
- Loading state shows
- Success message appears
- New agent appears in list
- Dialog closes

**If not working**:
- Open browser console
- Check Network tab for API calls
- Look for VAPI API errors
- Verify API key is correct: `d430bd29-d1df-42b4-b0d1-21b2c67ec652`

---

### 4. Agent List Display
**Test**: Refresh page or click "Refresh" button

**Expected**:
- Shows all agents from VAPI
- Each agent card shows:
  - Name
  - Model info
  - Voice provider
  - First message preview
  - Action buttons (Test Call, Settings, Delete)

**If not working**:
- Check `getVapiAssistants()` function
- Verify VAPI API is accessible
- Check for network errors
- Verify agents exist in VAPI dashboard

---

### 5. Test Call Dialog
**Test**: Click "Test Call" on any agent

**Expected**:
- Dialog opens
- Shows agent name
- Shows "Start Call" button
- Status shows "Ready - Click Start Call"
- No console errors

**If not working**:
- Check for error: "API Key and Assistant Configurations are required"
- Verify `NEXT_PUBLIC_VAPI_PUBLIC_KEY` is set
- Check agent ID is being passed correctly
- Look for VAPI SDK loading errors

---

### 6. Start Call
**Test**: Click "Start Call" button

**Expected**:
- Status changes to "Starting call..."
- Browser asks for microphone permission
- Status changes to "Call in progress..."
- Can speak and AI responds

**If not working**:
- Check browser console for errors
- Verify microphone permissions granted
- Check VAPI credits (need at least 1)
- Look for WebRTC errors
- Check VAPI dashboard for active calls

---

### 7. Live Webinar Access
**Test**: Navigate to a webinar URL

**Expected**:
- Page loads
- Video player shows
- Chat section visible
- Can join webinar

**If not working**:
- Check Stream API keys
- Verify webinar exists in database
- Check authentication
- Look for Stream SDK errors

---

### 8. Video Streaming
**Test**: Join webinar as host or participant

**Expected**:
- Camera/microphone permissions requested
- Video stream starts
- Can see own video
- Can see other participants

**If not working**:
- Check device permissions
- Verify Stream tokens are generated
- Check call ID is correct
- Look for Stream API errors

---

## 🔍 Common Issues and Solutions

### Issue: "VAPI public key not configured"
**Solution**: 
1. Check `.env` file has `NEXT_PUBLIC_VAPI_PUBLIC_KEY=3f3bf2e8-f1d3-401d-8125-3196dfa2db37`
2. Restart dev server
3. Clear browser cache

### Issue: "API Key and Assistant Configurations are required"
**Solution**:
1. Verify TestCallDialog receives `agentId` prop
2. Check VAPI SDK initialization includes both `apiKey` and `assistant`
3. Look for null/undefined values in console logs

### Issue: "Cannot read properties of null (reading 'on')"
**Solution**:
1. VAPI SDK didn't initialize properly
2. Check if `vapiRef.current` is null before calling `.on()`
3. Add null check: `if (!vapiRef.current) return`

### Issue: Agents not appearing in list
**Solution**:
1. Check VAPI dashboard - are agents there?
2. Verify `getVapiAssistants()` is being called
3. Check for API errors in server logs
4. Verify VAPI_PRIVATE_KEY is correct

### Issue: Agent creation fails
**Solution**:
1. Check VAPI credits (need credits to create)
2. Verify API key is valid
3. Check request payload format
4. Look for validation errors

### Issue: Call doesn't start
**Solution**:
1. Check microphone permissions
2. Verify VAPI credits available
3. Check browser console for WebRTC errors
4. Try different browser (Chrome recommended)

### Issue: No AI response
**Solution**:
1. Check system prompt is clear
2. Verify AI model is configured (GPT-4)
3. Check VAPI dashboard for call status
4. Speak clearly and wait 2-3 seconds

---

## 🧪 Step-by-Step Testing

### Test 1: Verify Environment
```bash
# Check .env file
cat .env | grep VAPI

# Should show:
# VAPI_PRIVATE_KEY=d430bd29-d1df-42b4-b0d1-21b2c67ec652
# NEXT_PUBLIC_VAPI_PUBLIC_KEY=3f3bf2e8-f1d3-401d-8125-3196dfa2db37
```

### Test 2: Check Server is Running
```bash
# Server should be running on port 3000
# Open: http://localhost:3000
```

### Test 3: Check Authentication
```bash
# Navigate to: http://localhost:3000/ai-agents
# If redirected to sign-in, authentication is working
# If page loads, you're authenticated
```

### Test 4: Open Browser Console
```javascript
// In browser console, check for errors
// Should see VAPI SDK loading logs
// Should NOT see any red errors
```

### Test 5: Test VAPI API Directly
```bash
# Test VAPI API from command line
curl -X GET https://api.vapi.ai/assistant \
  -H "Authorization: Bearer d430bd29-d1df-42b4-b0d1-21b2c67ec652"

# Should return list of assistants
```

---

## 📊 What to Report

If something isn't working, please provide:

1. **Which test failed** (from list above)
2. **Browser console errors** (copy full error message)
3. **Network tab errors** (check for failed API calls)
4. **Server logs** (check terminal for errors)
5. **Screenshots** (if UI issue)

---

## 🎯 Priority Testing Order

1. ✅ Environment variables set
2. ✅ Server running
3. ✅ Can access /ai-agents page
4. ✅ Can open Create Agent dialog
5. ✅ Can create agent (check VAPI dashboard)
6. ✅ Agent appears in list
7. ✅ Can open Test Call dialog
8. ✅ Can start call (no console errors)
9. ✅ Microphone activates
10. ✅ AI responds to voice

Test in this order and report where it fails!

---

## 🔧 Quick Fixes

### Fix 1: Restart Everything
```bash
# Stop server (Ctrl+C)
# Clear cache
rm -rf .next
# Restart
npm run dev
```

### Fix 2: Check VAPI Dashboard
1. Go to https://dashboard.vapi.ai
2. Login with your account
3. Check "Assistants" - should see your agents
4. Check "Credits" - should have credits available
5. Check "Logs" - see recent API calls

### Fix 3: Verify API Keys
```bash
# In .env file, verify these exact values:
VAPI_PRIVATE_KEY=d430bd29-d1df-42b4-b0d1-21b2c67ec652
NEXT_PUBLIC_VAPI_PUBLIC_KEY=3f3bf2e8-f1d3-401d-8125-3196dfa2db37
```

### Fix 4: Clear Browser Cache
1. Open DevTools (F12)
2. Right-click refresh button
3. Select "Empty Cache and Hard Reload"
4. Try again

---

## ✅ Success Indicators

You'll know it's working when:

1. ✅ No red errors in console
2. ✅ Agents appear in list
3. ✅ Test Call dialog opens without errors
4. ✅ "Start Call" button is enabled
5. ✅ Status shows "Ready - Click Start Call"
6. ✅ Call starts and status changes
7. ✅ Microphone icon shows active
8. ✅ AI responds to your voice

If ALL of these work, the system is fully functional! 🎉
