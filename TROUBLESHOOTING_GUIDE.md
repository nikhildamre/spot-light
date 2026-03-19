# 🔧 TROUBLESHOOTING GUIDE

## 🚨 **COMMON ISSUES & SOLUTIONS**

### **Issue 1: Can't Find Media Button**
**Problem**: Media button not visible
**Solutions**:
- Look for **bright YELLOW button** with "📹 MEDIA" text
- Try making browser window wider
- Refresh the page (F5)
- Check if it's in the top-right area next to Chat/AI Agent buttons

### **Issue 2: "No Permission to Publish VIDEO"**
**Problem**: Camera/microphone won't enable
**Solutions**:
1. **MUST click "Join Webinar" FIRST** before using media controls
2. Allow browser permissions when prompted
3. Close other apps using camera/microphone
4. Refresh page and try again
5. Check browser console for detailed errors

### **Issue 3: Browser Permissions Denied**
**Problem**: Browser blocks camera/microphone access
**Solutions**:
- Click the camera/microphone icon in browser address bar
- Select "Allow" for camera and microphone
- Refresh the page after changing permissions
- Try in incognito/private mode
- Ensure you're using HTTPS (localhost is OK)

### **Issue 4: Screen Sharing Not Working**
**Problem**: Screen share button doesn't work
**Solutions**:
- Must be joined to webinar first
- Only hosts can share screen
- Allow screen sharing permissions when prompted
- Try different browser (Chrome recommended)
- Close other screen sharing applications

### **Issue 5: AI Agent Not Responding**
**Problem**: AI voice interaction not working
**Solutions**:
- Check if AI agent is assigned to webinar
- Verify VAPI credentials in .env file
- Click "Start AI Voice Interaction" button
- Allow microphone permissions
- Check browser console for VAPI errors

## 🔍 **DEBUGGING STEPS**

### **Step 1: Check Browser Console**
1. Press F12 to open developer tools
2. Go to "Console" tab
3. Look for red error messages
4. Share error messages for specific help

### **Step 2: Verify Environment**
1. Check .env file has all required variables
2. Verify Stream API credentials are correct
3. Confirm VAPI keys are valid
4. Ensure database connection is working

### **Step 3: Test Basic Functionality**
1. Can you see the webinar interface?
2. Is the LIVE indicator showing?
3. Does chat work?
4. Can you see participant count?

### **Step 4: Test Media Step by Step**
1. Click "📹 MEDIA" button - does panel open?
2. Click "Join Webinar" - do you get success message?
3. Allow browser permissions - are they granted?
4. Wait for "Connected" status - does it appear?
5. Try camera toggle - does it work?

## 🛠️ **QUICK FIXES**

### **Reset Everything**
```bash
# Clear browser cache
Ctrl + Shift + R (hard refresh)

# Restart development server
npm run dev

# Clear Next.js cache
rm -rf .next
npm run dev
```

### **Check Server Status**
- Server should be running at http://localhost:3000
- Look for "Ready in X seconds" message
- No red error messages in terminal

### **Verify Permissions**
- Camera: Should show green dot when enabled
- Microphone: Should show green dot when enabled
- Screen Share: Should work for hosts only

## 📞 **SUPPORT CHECKLIST**

If you need help, provide:
1. **Browser**: Chrome/Firefox/Safari/Edge + version
2. **Error Messages**: From browser console (F12)
3. **Steps Taken**: What you clicked/tried
4. **Expected vs Actual**: What should happen vs what happens
5. **Environment**: Operating system, Node.js version

## 🎯 **SUCCESS INDICATORS**

Your system is working correctly when:
- ✅ **Media button** is visible (bright yellow)
- ✅ **Join Webinar** succeeds with confirmation
- ✅ **Browser permissions** are granted
- ✅ **"Connected to webinar"** status appears
- ✅ **Camera/microphone** toggles work
- ✅ **Video streams** appear in interface
- ✅ **AI agent** responds to voice/chat

## 🚀 **PERFORMANCE TIPS**

### **For Best Experience**
- Use **Chrome browser** (best compatibility)
- Ensure **stable internet** connection
- Close **unnecessary browser tabs**
- Use **wired internet** if possible
- Have **good lighting** for camera
- Use **headphones** to prevent echo

### **For Multiple Participants**
- Test with **2-3 people** first
- Ensure all have **good internet**
- Use **mute when not speaking**
- **Host controls** media permissions
- **Screen share** only when needed

**🎊 Your webinar system is robust and should work smoothly with proper setup!**