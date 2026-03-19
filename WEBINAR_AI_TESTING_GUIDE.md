# 🧪 Webinar Creation with AI - Testing Guide

## ✅ FIXED: Stream JWT Authentication Error

The Stream JWT authentication error has been **RESOLVED**! 

### What was fixed:
- ❌ **Old API Key**: `75kxp3q63j2g` (causing JWT signature errors)
- ✅ **New API Key**: `aq5uyhv83n54` (working correctly)
- ❌ **Old Secret**: `v6k3p9c7...` (invalid signature)
- ✅ **New Secret**: `jmbmkyhs...` (valid signature)
- 🗑️ **Removed**: Static `STREAM_TOKEN` (now using dynamic token generation)

### Verification:
```bash
# Test passed successfully:
🎉 NEW Stream credentials are working correctly!
API Key confirmed: aq5uyhv83n54
Token generation: ✅ SUCCESS
```

---

## 🆕 NEW FEATURE: AI Agent Integration in Webinar Creation

I've added a new **AI Agent step** to the webinar creation flow!

### What's New:
1. **4-Step Webinar Creation** (was 3 steps):
   - Step 1: Basic Information
   - Step 2: CTA
   - **Step 3: AI Assistant** ⭐ **NEW**
   - Step 4: Additional Information

2. **AI Agent Selection**:
   - Choose from existing VAPI AI agents
   - Option to create new agents
   - Preview agent details (voice, model, first message)
   - Optional - can skip for regular webinars

3. **Enhanced Store**:
   - Added `aiAgent` section to webinar form data
   - Proper validation and state management
   - Integrated with existing VAPI system

---

## 🧪 HOW TO TEST: Webinar Creation with AI

### Step 1: Start Development Server
```bash
npm run dev
# Server should start on http://localhost:3000
```

### Step 2: Navigate to Dashboard
1. Go to `http://localhost:3000`
2. Sign in with your Clerk account
3. You should see the main dashboard

### Step 3: Create AI Agents (if needed)
1. Go to `/ai-agents` page
2. Click "Create Agent" 
3. Fill out agent details:
   - **Name**: "Webinar Assistant"
   - **System Prompt**: "You are a helpful webinar assistant..."
   - **Voice Provider**: 11labs
   - **Voice ID**: Choose any voice
4. Click "Create Agent"
5. Test the agent with "Quick Test" to verify it works

### Step 4: Test Webinar Creation with AI
1. **Find the "Create Webinar" button** in the header
2. **Step 1 - Basic Information**:
   - Webinar name: "AI-Powered Demo Webinar"
   - Description: "Testing AI integration"
   - Date: Tomorrow's date
   - Time: Any future time
   - Click "Next"

3. **Step 2 - CTA**:
   - CTA Label: "Book a Call"
   - CTA Type: "BOOK_A_CALL"
   - Click "Next"

4. **Step 3 - AI Assistant** ⭐ **NEW STEP**:
   - **Select AI Agent**: Choose from dropdown
   - **Preview**: See agent details
   - **Options**: 
     - Select an existing agent
     - Click "Create Agent" to make a new one
     - Or select "No AI Agent" to skip
   - Click "Next"

5. **Step 4 - Additional Information**:
   - Configure chat/coupon settings
   - Click "Complete"

6. **Success**: You should see webinar created successfully!

### Step 5: Verify AI Integration
1. **Check Database**: Webinar should have `aiAgentId` field populated
2. **Go Live**: Navigate to the webinar page
3. **AI Controls**: Look for AI agent controls in the webinar interface
4. **Test Voice**: AI should be able to join and speak during webinar

---

## 🔍 WHERE TO FIND THE NEW FEATURES

### 1. Webinar Creation Button
- **Location**: Header of any protected route page
- **Look for**: "Create Webinar" button with plus icon
- **New**: Now has 4 steps instead of 3

### 2. AI Agent Step
- **Location**: Step 3 of webinar creation
- **Features**:
  - Dropdown to select AI agents
  - Agent preview with details
  - "Create Agent" button
  - "No AI Agent" option
  - Helpful explanations

### 3. AI Agent Management
- **Location**: `/ai-agents` page
- **Features**:
  - Create, test, and manage AI agents
  - System status check
  - Test call functionality

---

## 🧪 TESTING SCENARIOS

### Scenario 1: Webinar with AI Agent
1. Create AI agent first
2. Create webinar and select the agent
3. Go live and test AI interaction

### Scenario 2: Webinar without AI Agent
1. Create webinar
2. Select "No AI Agent" in step 3
3. Regular webinar without AI features

### Scenario 3: Create Agent During Webinar Creation
1. Start webinar creation
2. In AI Agent step, click "Create Agent"
3. Should navigate to AI agents page
4. Create agent and return to webinar creation

---

## 🔧 TROUBLESHOOTING

### If Stream Errors Still Occur:
1. **Restart Development Server**:
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

2. **Clear Browser Cache**:
   - Hard refresh (Ctrl+Shift+R)
   - Clear localStorage/cookies

3. **Verify Environment**:
   ```bash
   node test-new-credentials.js
   # Should show: API Key confirmed: aq5uyhv83n54
   ```

### If AI Agent Step Missing:
1. Check browser console for errors
2. Verify you're on latest code
3. Clear browser cache

### If VAPI Errors:
1. Go to `/ai-agents` page
2. Run "System Status Check"
3. Verify all checks pass
4. Test individual agents first

---

## 🎯 SUCCESS CRITERIA

✅ **Stream Authentication**: No more JWT signature errors  
✅ **Webinar Creation**: 4-step process with AI agent selection  
✅ **AI Integration**: Agents can be assigned to webinars  
✅ **VAPI Connection**: AI agents work in test calls  
✅ **Database**: Webinar records include `aiAgentId`  

---

## 📞 NEXT STEPS

1. **Test the new webinar creation flow**
2. **Verify AI agents work in webinars**
3. **Test breakout rooms with AI** (existing feature)
4. **Explore advanced AI features**

The system is now ready for full AI-powered webinar testing! 🚀