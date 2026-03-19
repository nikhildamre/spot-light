# 🧪 Enhanced Testing Guide - AI Agent System

## 🎯 CURRENT STATUS: System Ready for Comprehensive Testing

### ✅ LATEST FIXES:
1. **Build Error Resolved**: Fixed Prisma import issues and database schema
2. **Stream JWT Error**: Enhanced token generation with proper expiration
3. **System Status Check**: Added comprehensive health monitoring
4. **Enhanced Test Calls**: Multiple test methods with detailed logging

---

## 🧪 TEST 1: AI Agent Management System

### 📍 **WHERE TO TEST**: `/ai-agents` page

### 🔗 **Direct Link**: `http://localhost:3000/ai-agents`

### 📋 **Test Steps**:

#### 1.1: System Health Check
1. Navigate to `/ai-agents`
2. Click **"Show System Status"** button
3. **VERIFY**: All components show green checkmarks ✅
4. **CHECK**: Environment Variables, VAPI Connection, Stream Credentials, etc.

#### 1.2: Create New AI Agent
1. Click **"Create AI Agent"** button
2. Fill in the form:
   - **Name**: "Test Sales Agent"
   - **Description**: "AI agent for sales calls"
   - **First Message**: "Hello! I'm here to help you with your questions."
   - **System Prompt**: "You are a helpful sales assistant. Be friendly and professional."
   - **Model**: GPT-4 (recommended)
   - **Voice**: ElevenLabs (default voice)
3. Click **"Create Agent"**
4. **VERIFY**: Agent appears in the dashboard immediately

#### 1.3: Test Voice Calls
1. Find your created agent in the dashboard
2. Click **"Quick Test"** button (for basic test)
3. **OR** Click **"Advanced"** button (for comprehensive test)
4. Grant microphone permission when prompted
5. **Speak immediately** when call starts: "Hello, can you hear me?"
6. **LISTEN**: For AI response
7. **EXPECT**: 15-30 second conversation then automatic end (normal for free tier)

#### 1.4: Agent Management
1. **Refresh**: Click refresh button to sync latest agents
2. **Delete**: Test deleting an agent (creates confirmation dialog)
3. **Multiple Agents**: Create 2-3 agents with different configurations

---

## 🧪 TEST 2: Live Webinar System (Existing)

### 📍 **WHERE TO TEST**: Create and join webinars

### 🔗 **Navigation**: Dashboard → Create Webinar → Join Live Webinar

### 📋 **Test Steps**:

#### 2.1: Create Webinar
1. Go to main dashboard
2. Click **"Create Webinar"**
3. Fill in webinar details
4. **NOTE**: AI agent integration will be added in next phase

#### 2.2: Join Webinar
1. Navigate to webinar URL
2. **VERIFY**: Video streaming works
3. **VERIFY**: Chat functionality works
4. **VERIFY**: Device permissions granted

---

## 🧪 TEST 3: Webinar Creation with AI Integration

### 📍 **WHERE TO TEST**: Enhanced webinar creation (COMING SOON)

### 🎯 **CURRENT STATUS**: Components created, integration pending

### 📋 **Available Components**:
- ✅ `AIAgentSelector` - For selecting AI agents during webinar creation
- ✅ `WebinarAIAgent` - AI control panel for webinar hosts
- ✅ `BreakoutRoomManager` - Breakout rooms with AI assignment
- ✅ Database schema - AI agent linking to webinars

### 🚀 **TO IMPLEMENT** (Next Phase):

#### Phase 1: Basic AI-Webinar Linking
1. **Update Webinar Creation Form**:
   - Add AI agent dropdown using `AIAgentSelector`
   - Store `aiAgentId` in webinar record
   - Display assigned agent in webinar details

#### Phase 2: AI Control Panel
1. **Add to Live Webinar Interface**:
   - Include `WebinarAIAgent` component in host view
   - Add AI agent controls (start/stop, mute, settings)
   - Show AI agent status and activity

#### Phase 3: Breakout Rooms
1. **Implement Breakout Room UI**:
   - Use `BreakoutRoomManager` component
   - Allow hosts to create rooms with AI agents
   - Enable participants to join rooms

### 📁 **Files Ready for Integration**:
```
src/components/
├── AIAgentSelector.tsx      # ✅ Ready
├── WebinarAIAgent.tsx       # ✅ Ready  
└── BreakoutRoomManager.tsx  # ✅ Ready

src/actions/
├── webinarAgent.ts          # ✅ Ready
└── breakoutRoom.ts          # ✅ Ready

Database Schema:
├── AIAgent model            # ✅ Ready
├── BreakoutRoom model       # ✅ Ready
└── Webinar.aiAgentId field  # ✅ Ready
```

---

## 🧪 TEST 4: Stream JWT Error Resolution

### 🔍 **ISSUE**: "WS failed with code: 43 and reason: JWTAuth error"

### ✅ **FIXES APPLIED**:

#### 4.1: Enhanced Token Generation
- Added proper token expiration (24 hours)
- Enhanced logging for debugging
- Added Stream credentials testing

#### 4.2: System Status Check
- Added Stream API testing to health check
- Verifies token generation works
- Shows detailed error information

### 📋 **Test Stream Fix**:

#### Method 1: System Status Check
1. Go to `/ai-agents`
2. Click **"Show System Status"**
3. **VERIFY**: "Stream Credentials" shows ✅ success
4. **CHECK**: Token generation successful message

#### Method 2: Join Live Webinar
1. Create a test webinar
2. Navigate to webinar URL
3. **VERIFY**: No JWT authentication errors
4. **VERIFY**: Video streaming connects successfully

#### Method 3: Check Console Logs
1. Open browser developer tools (F12)
2. Navigate to webinar page
3. **LOOK FOR**: Enhanced token generation logs
4. **VERIFY**: No "signature is not valid" errors

---

## 🧪 TEST 5: End-to-End Integration Testing

### 🎯 **GOAL**: Test complete AI agent workflow

### 📋 **Full Workflow Test**:

#### 5.1: Complete AI Agent Lifecycle
1. **Create Agent**: Use AI agents page
2. **Test Voice**: Verify AI responds correctly
3. **Assign to Webinar**: (Phase 1 implementation needed)
4. **Live Interaction**: AI participates in webinar
5. **Breakout Rooms**: AI handles separate conversations

#### 5.2: Multi-User Testing
1. **Host**: Creates webinar with AI agent
2. **Participants**: Join and interact with AI
3. **Breakout Rooms**: Split into AI-assisted groups
4. **Analytics**: Track AI performance

---

## 🔧 TROUBLESHOOTING GUIDE

### Stream JWT Errors:
1. **Check System Status**: Verify Stream credentials
2. **Clear Browser Cache**: Force fresh token generation
3. **Check Console**: Look for token generation logs
4. **Restart Server**: Ensure latest token logic is loaded

### VAPI Test Call Issues:
1. **Use System Status**: Check VAPI connection
2. **Try Both Test Methods**: Quick vs Advanced
3. **Check Microphone**: Grant browser permissions
4. **Expect Short Calls**: 30 seconds is normal for free tier

### Build Errors:
1. **Prisma Issues**: Run `npx prisma generate`
2. **Database Sync**: Run `npx prisma db push`
3. **Clear Cache**: Delete `.next` folder and restart

---

## 📊 SUCCESS CRITERIA

### ✅ **AI Agent System**:
- [ ] System status shows all green checkmarks
- [ ] Can create AI agents successfully
- [ ] Test calls work (15-30 seconds minimum)
- [ ] Agents appear in dashboard immediately
- [ ] Can delete agents without errors

### ✅ **Stream Integration**:
- [ ] No JWT authentication errors
- [ ] Video streaming connects successfully
- [ ] Chat functionality works
- [ ] Device permissions granted properly

### ✅ **Overall System**:
- [ ] Development server runs without build errors
- [ ] All pages load without TypeScript errors
- [ ] Database operations work correctly
- [ ] API integrations (VAPI, Stream) functional

---

## 🚀 NEXT DEVELOPMENT PHASES

### **Phase 1**: Webinar-AI Basic Integration (2-3 hours)
- Add AI agent selection to webinar creation
- Store AI agent assignment in database
- Display assigned agent in webinar interface

### **Phase 2**: AI Control Panel (3-4 hours)  
- Add AI control panel to live webinars
- Implement start/stop AI functionality
- Add AI status monitoring

### **Phase 3**: Breakout Rooms (4-6 hours)
- Implement breakout room creation UI
- Add AI agent assignment to rooms
- Enable room switching for participants

### **Phase 4**: Advanced Features (6-8 hours)
- VAPI-Stream audio integration
- Real-time AI conversation in video calls
- Call recording and analytics
- Lead qualification workflows

---

## 📞 **IMMEDIATE TESTING INSTRUCTIONS**

### **RIGHT NOW - Test These**:

1. **AI Agents**: `http://localhost:3000/ai-agents`
   - System status check
   - Create agent
   - Test voice calls

2. **Live Webinars**: Create and join webinars
   - Verify no Stream JWT errors
   - Test video/chat functionality

3. **System Health**: Monitor console for errors
   - Check token generation logs
   - Verify API connections

### **EXPECTED RESULTS**:
- ✅ AI agents create and respond correctly
- ✅ Test calls work for 15-30 seconds (normal)
- ✅ No Stream authentication errors
- ✅ All system components healthy

**The system is ready for comprehensive testing and Phase 1 webinar integration!** 🎉