# 📋 QUICK REFERENCE CARD

## 🚀 **WEBINAR SYSTEM - QUICK START**

### **1. Access System**
- **URL**: http://localhost:3000
- **Server**: `npm run dev`
- **Status**: Look for "Ready in X seconds"

### **2. Find Media Controls**
- **Button**: Bright YELLOW "📹 MEDIA"
- **Location**: Top-right area of webinar interface
- **Action**: Click to open media controls panel

### **3. Join Webinar (CRITICAL FIRST STEP)**
- **Button**: "Join Webinar" (large button in media panel)
- **Wait**: For success confirmation
- **Permissions**: Allow camera/microphone when prompted
- **Status**: Wait for "✅ Connected to webinar"

### **4. Use Media Features**
- **Camera**: Toggle on/off after joining
- **Microphone**: Mute/unmute after joining
- **Screen Share**: Available for hosts only
- **View Modes**: Single/Grid/Speaker layouts

## 🎯 **KEY FILES**

### **Components**
- `src/components/MediaControls.tsx` - Media controls
- `src/app/.../LiveWebinarView.tsx` - Main interface
- `src/components/WebinarAIAgent.tsx` - AI integration

### **Actions**
- `src/actions/stream.ts` - Stream/video functionality
- `src/actions/aiAgent.ts` - AI agent management
- `src/actions/webinarAgent.ts` - Webinar-AI linking

### **Configuration**
- `.env` - Environment variables
- `package.json` - Dependencies
- `prisma/schema.prisma` - Database schema

## 🔧 **ENVIRONMENT VARIABLES**

### **Required in .env**
```
NEXT_PUBLIC_STREAM_API_KEY=aq5uyhv83n54
STREAM_API_SECRET=jmbmkyhsqdq8yyz5cy3v6mm37cb6dm2xg6hbs8habm697d4bdbarwtqesztdctug
VAPI_PRIVATE_KEY=d430bd29-d1df-42b4-b0d1-21b2c67ec652
NEXT_PUBLIC_VAPI_PUBLIC_KEY=3f3bf2e8-f1d3-401d-8125-3196dfa2db37
```

## 🎥 **FEATURES CHECKLIST**

### **Video Features**
- ✅ HD Webcam Streaming (1280x720)
- ✅ Screen Sharing with Priority Display
- ✅ Multiple Video Layouts (Single/Grid/Speaker)
- ✅ Professional Media Controls
- ✅ Join/Leave Functionality

### **AI Features**
- ✅ VAPI Voice Integration
- ✅ GPT-4 + 11Labs Voice
- ✅ Real-time Voice Interaction
- ✅ Chat + Voice Responses
- ✅ Webinar Context Awareness

### **Technical Features**
- ✅ JWT Authentication with Video Permissions
- ✅ Role-based Access Control
- ✅ Error Handling and Recovery
- ✅ TypeScript Compliance
- ✅ Responsive Design

## 🚨 **TROUBLESHOOTING**

### **Common Issues**
1. **Can't find Media button** → Look for bright YELLOW button
2. **Permission errors** → Must click "Join Webinar" FIRST
3. **Camera won't work** → Allow browser permissions
4. **Screen share fails** → Must be host and joined first
5. **AI not responding** → Check VAPI credentials

### **Quick Fixes**
- **Refresh page**: Ctrl + Shift + R
- **Check console**: F12 → Console tab
- **Restart server**: Stop and run `npm run dev`
- **Clear cache**: Delete `.next` folder

## 📱 **BROWSER SUPPORT**

### **Recommended**
- **Chrome** (best compatibility)
- **Firefox** (good support)
- **Safari** (Mac users)
- **Edge** (Windows users)

### **Requirements**
- HTTPS connection (localhost OK)
- Camera/microphone permissions
- Modern browser version
- Stable internet connection

## 🎊 **SUCCESS INDICATORS**

Your system works when you see:
- ✅ Bright yellow "📹 MEDIA" button
- ✅ "Join Webinar" succeeds
- ✅ "✅ Connected to webinar" status
- ✅ Camera/microphone toggles work
- ✅ Video streams appear
- ✅ AI agent responds

## 🚀 **PRODUCTION READY**

Your webinar system includes:
- Professional video conferencing
- AI voice interaction
- Screen sharing capabilities
- Multiple participant support
- Industry-standard quality

**🎯 Ready to host professional webinars!**