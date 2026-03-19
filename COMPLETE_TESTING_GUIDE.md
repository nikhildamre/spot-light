# Complete Testing Guide - AI Agent System 🧪

## 🎯 TESTING CHECKLIST

Follow this step-by-step guide to test every feature of the AI agent system.

---

## 📋 PRE-TESTING SETUP

### 1. Verify Environment
```bash
# Check your .env file has these keys:
VAPI_PRIVATE_KEY=d430bd29-d1df-42b4-b0d1-21b2c67ec652
NEXT_PUBLIC_VAPI_PUBLIC_KEY=3f3bf2e8-f1d3-401d-8125-3196dfa2db37
```

### 2. Restart Development Server
```bash
# Stop server (Ctrl+C)
# Then restart:
npm run dev
```

### 3. Check VAPI Credits
- Go to https://dashboard.vapi.ai
- Verify you have credits available (you should have 10)

---

## 🧪 TEST 1: AI Agent Creation & Management

### Step 1.1: Access AI Agents Page
```
✅ Navigate to: http://localhost:3000/ai-agents
✅ Should see: AI Agents dashboard
✅ Should show: Your existing agents (tets, Riley)
✅ Should have: "Create AI Agent" button
```

### Step 1.2: Create New AI Agent
```
✅ Click: "Create AI Agent" button
✅ Should open: Creation dialog
✅ Fill form:
   - Name: "Test Assistant"
   - Description: "Testing AI agent"
   - First Message: "Hello! I'm your test AI assistant."
   - System Prompt: "You are a helpful test assistant."
   - Voice Provider: "11labs" 
   - Model: "gpt-4"
✅ Click: "Create AI Agent"
✅ Should show: Success message
✅ Should appear: New agent in list
```

### Step 1.3: Verify Agent in VAPI Dashboard
```
✅ Go to: https://dashboard.vapi.ai/assistants
✅ Should see: Your new "Test Assistant" agent
✅ Should match: Same configuration as created
```

**❌ If this fails**: Check console for VAPI API errors, verify private key is correct.

---

## 🧪 TEST 2: Test Call Feature

### Step 2.1: Start Test Call
```
✅ On AI Agents page, find your agent
✅ Click: "Test Call" button
✅ Should open: Test call dialog
✅ Should show: Agent name in dialog title
✅ Should show: "Ready to call" status
```

### Step 2.2: Initialize Call
```
✅ Click: "Start Call" button
✅ Browser should: Ask for microphone permission
✅ Click: "Allow" on microphone prompt
✅ Should see: "Call started successfully" in console
✅ Status should change to: "Connected - AI is listening"
✅ Call indicator should: Turn green and animate
```

### Step 2.3: Test Voice Interaction
```
✅ Speak clearly: "Hello, can you hear me?"
✅ Should see: Status change to "Listening to you..."
✅ Should see: Status change to "AI is thinking..."
✅ Should hear: AI voice response
✅ Should see: AI response text in status
```

### Step 2.4: Test Controls
```
✅ Click: "Mute" button
✅ Should show: "Unmute" button
✅ Speak: Should not trigger AI (muted)
✅ Click: "Unmute"
✅ Click: "End Call"
✅ Should see: "Call ended" status
✅ Should return to: Ready state
```

**❌ If this fails**: Check browser console for errors, verify public key, check microphone permissions.

---

## 🧪 TEST 3: Webinar Creation with AI

### Step 3.1: Create Webinar
```
✅ Navigate to: Webinar creation page
✅ Should see: AI Agent selector section
✅ Should show: Dropdown with your AI agents
✅ Select: Your "Test Assistant" agent
✅ Should show: Agent preview card
✅ Fill: Other webinar details (title, time, etc.)
✅ Create: Webinar
✅ Should save: With AI agent assigned
```

### Step 3.2: Verify Webinar-AI Link
```
✅ Go to: Webinar details/edit page
✅ Should show: Selected AI agent
✅ Should display: Agent information
```

**❌ If this fails**: Check if AIAgentSelector component is properly imported, verify database connection.

---

## 🧪 TEST 4: Live Webinar with AI

### Step 4.1: Start Webinar
```
✅ Navigate to: Your webinar's live page
✅ Should see: Normal webinar interface
✅ Should see: "AI Agent" button in top bar (if AI assigned)
✅ Should see: "Rooms" button (if you're host)
✅ Should see: "Chat" button
```

### Step 4.2: Activate AI Agent
```
✅ Click: "AI Agent" button
✅ Should open: AI Agent panel on right side
✅ Should show: Agent name and status
✅ Should show: "Start AI Agent" button
✅ Click: "Start AI Agent"
✅ Should see: "Starting AI Agent..." status
✅ Should change to: "AI Agent is listening"
✅ Should show: Green active indicator
```

### Step 4.3: Test AI in Webinar
```
✅ Speak clearly: "Hello AI, are you there?"
✅ Should see: Status change to "Someone is speaking..."
✅ Should see: Status change to "AI is processing..."
✅ Should hear: AI voice response
✅ Should see: AI message in chat (purple colored)
✅ Should see: "🤖 AI Agent: [response]" in chat
```

### Step 4.4: Test AI Controls
```
✅ Click: "Mute AI" button
✅ Should show: "Unmute AI" button
✅ Speak: AI should not respond (muted)
✅ Click: "Unmute AI"
✅ Click: "Stop AI"
✅ Should see: "AI Agent stopped" status
✅ Should show: "Start AI Agent" button again
```

**❌ If this fails**: Check console for VAPI errors, verify webinar has AI agent assigned, check audio permissions.

---

## 🧪 TEST 5: Breakout Rooms

### Step 5.1: Create Breakout Room
```
✅ In live webinar, click: "Rooms" button
✅ Should open: Breakout rooms panel
✅ Should show: "Create Room" button
✅ Click: "Create Room"
✅ Should open: Create room dialog
✅ Fill:
   - Room Name: "Test Room"
   - Max Participants: 5
   - AI Agent: Select your agent
✅ Click: "Create Room"
✅ Should see: Success message
✅ Should appear: New room card
```

### Step 5.2: Join Breakout Room
```
✅ Should see: Room card with agent info
✅ Should show: "Join Room" button
✅ Click: "Join Room"
✅ Should see: Success message
✅ Should show: You in participants list
```

### Step 5.3: Test AI in Breakout Room
```
✅ Should see: AI agent active in room
✅ Speak: "Hello, I'm in the breakout room"
✅ Should hear: AI response specific to room
✅ Should work: Independent of main webinar
```

**❌ If this fails**: Check database connection, verify breakout room actions are working, check AI agent assignment.

---

## 🧪 TEST 6: Multi-User Testing

### Step 6.1: Open Multiple Browser Windows
```
✅ Window 1: Host view (your main browser)
✅ Window 2: Participant view (incognito/different browser)
✅ Both should: Join the same webinar
```

### Step 6.2: Test AI Interaction from Both Views
```
✅ Host: Activate AI agent
✅ Participant: Should see AI agent status
✅ Participant: Speak to AI
✅ Host: Should see AI response in chat
✅ Both: Should hear AI voice response
```

### Step 6.3: Test Breakout Rooms Multi-User
```
✅ Host: Create breakout room with AI
✅ Participant: Join the room
✅ Both: Should be in same room
✅ Either: Speak to AI
✅ Both: Should hear AI response
```

**❌ If this fails**: Check Stream video/chat integration, verify user permissions.

---

## 🧪 TEST 7: Error Handling

### Step 7.1: Test Without Microphone Permission
```
✅ Start test call
✅ Deny: Microphone permission
✅ Should show: "Microphone permission denied" error
✅ Should not: Break the interface
```

### Step 7.2: Test Network Issues
```
✅ Disconnect: Internet briefly
✅ Should show: Appropriate error messages
✅ Reconnect: Should recover gracefully
```

### Step 7.3: Test Invalid Configurations
```
✅ Try: Starting AI without agent assigned
✅ Should show: Appropriate error message
✅ Should not: Crash the application
```

---

## 📊 TESTING RESULTS CHECKLIST

### ✅ Core Features Working:
- [ ] AI agent creation
- [ ] Test call functionality
- [ ] VAPI integration
- [ ] Webinar AI assignment
- [ ] Live AI activation
- [ ] Voice interaction
- [ ] Chat integration
- [ ] Breakout rooms
- [ ] Multi-user support
- [ ] Error handling

### 🔍 What to Look For:

**✅ SUCCESS INDICATORS:**
- AI agents appear in VAPI dashboard
- Test calls connect and AI responds with voice
- AI agent button appears in webinars
- AI responds in real-time during webinars
- AI messages appear in chat with purple color
- Breakout rooms can be created with AI
- Multiple users can interact with same AI
- Status indicators update correctly

**❌ FAILURE INDICATORS:**
- Console errors about VAPI keys
- "Call started successfully" but no AI response
- AI agent button missing in webinars
- Breakout room creation fails
- Database connection errors
- Microphone permission issues

---

## 🐛 TROUBLESHOOTING GUIDE

### Issue: Test Call Doesn't Start
**Solutions:**
1. Check VAPI keys in .env
2. Restart development server
3. Clear browser cache
4. Try different browser
5. Check VAPI credits

### Issue: AI Doesn't Respond in Webinar
**Solutions:**
1. Verify AI agent is assigned to webinar
2. Check AI agent is started in webinar
3. Verify microphone permissions
4. Check browser console for errors
5. Ensure AI agent exists in VAPI

### Issue: Breakout Rooms Don't Work
**Solutions:**
1. Check database connection
2. Verify user authentication
3. Check server actions are working
4. Restart development server

### Issue: No Voice Response
**Solutions:**
1. Check speaker/headphone volume
2. Verify VAPI credits available
3. Check AI agent configuration
4. Try different AI agent
5. Check network connection

---

## 📞 SUPPORT

If you encounter issues:

1. **Check Console**: Look for error messages
2. **Check Network Tab**: Look for failed API calls
3. **Check VAPI Dashboard**: Verify agents exist
4. **Check Database**: Verify data is saved
5. **Restart Everything**: Server, browser, clear cache

---

## 🎉 SUCCESS CRITERIA

**The system is working correctly if:**

✅ You can create AI agents that appear in VAPI dashboard
✅ Test calls work - you can talk to AI and get voice responses
✅ AI agents can be assigned to webinars
✅ During live webinars, AI can hear participants and respond
✅ AI responses appear in chat and are spoken aloud
✅ Breakout rooms can be created with AI agents
✅ Multiple users can interact with the same AI
✅ All controls (mute, start, stop) work properly

**If all these work, your AI-powered webinar system is fully functional!** 🚀

---

## 🎯 NEXT STEPS AFTER TESTING

Once everything is working:

1. **Refine AI Prompts**: Improve AI responses based on testing
2. **Create Production Agents**: Build agents for real use cases
3. **Train Your Team**: Show others how to use the system
4. **Go Live**: Use in real webinars with clients
5. **Gather Feedback**: Improve based on user experience

**Your AI-powered webinar platform is ready for production!** 🎊