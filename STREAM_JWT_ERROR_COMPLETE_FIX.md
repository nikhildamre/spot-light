# 🔧 Stream JWT Error - Complete Fix Guide

## 🎯 ERROR: "WS failed with code: 43 and reason: JWTAuth error: signature is not valid"

### 🔍 **Root Cause**: 
The error shows it's still using the old API key "75kxp3q63j2g" which doesn't match the secret, or the keys are invalid/expired.

---

## ✅ **STEP-BY-STEP FIX**

### **Step 1: Get Fresh Stream API Keys**

1. **Go to Stream Dashboard**: https://dashboard.getstream.io/
2. **Sign in** to your Stream account
3. **Select your app** (or create a new one if needed)
4. **Navigate to**: "Dashboard" → "API Keys" 
5. **Copy both**:
   - **API Key** (public key)
   - **Secret** (private key)

### **Step 2: Update Environment Variables**

Open your `.env` file and replace these lines:

```env
# Replace these placeholder values with your actual Stream keys
NEXT_PUBLIC_STREAM_API_KEY=YOUR_ACTUAL_STREAM_API_KEY
STREAM_API_SECRET=YOUR_ACTUAL_STREAM_SECRET
```

**IMPORTANT**: 
- Remove any old `STREAM_TOKEN=...` lines (we generate tokens dynamically)
- Make sure there are no spaces around the `=` sign
- Don't use quotes around the values

### **Step 3: Test Your Credentials**

Run this test script to verify your keys work:

```bash
node test-stream-credentials.js
```

**Expected Output**:
```
🔧 Testing Stream Credentials...
API Key: abcd1234...
API Secret: xyz789ab...
🧪 Testing token generation...
✅ SUCCESS: Token generated successfully
🎉 Stream credentials are working correctly!
```

### **Step 4: Clear Cache and Restart**

1. **Stop the development server** (Ctrl+C)
2. **Clear Next.js cache**:
   ```bash
   rm -rf .next
   # or on Windows:
   rmdir /s .next
   ```
3. **Restart the server**:
   ```bash
   npm run dev
   ```

### **Step 5: Verify the Fix**

1. **Open browser console** (F12)
2. **Navigate to a webinar page**
3. **Look for logs**: "Generating Stream Video token for user..."
4. **Verify**: No JWT authentication errors
5. **Test**: Video streaming should connect successfully

---

## 🧪 **TESTING CHECKLIST**

### ✅ **Before Testing**:
- [ ] Updated `.env` with new Stream API keys
- [ ] Removed old `STREAM_TOKEN` line
- [ ] Ran credential test script successfully
- [ ] Restarted development server
- [ ] Cleared browser cache

### ✅ **Test Scenarios**:
- [ ] **System Status Check**: Go to `/ai-agents` → "Show System Status" → Stream Credentials should be ✅
- [ ] **Create Webinar**: Should work without JWT errors
- [ ] **Join Webinar**: Video streaming should connect
- [ ] **Browser Console**: Should show successful token generation logs

---

## 🔧 **TROUBLESHOOTING**

### **If Test Script Fails**:

#### **Error: "Missing Stream API credentials"**
- **Solution**: Make sure you updated the `.env` file with actual keys

#### **Error: "Please replace placeholder values"**
- **Solution**: You still have `YOUR_NEW_STREAM_API_KEY_HERE` in your `.env` file

#### **Error: "Token generation failed"**
- **Possible Causes**:
  1. **Wrong API Key**: Copy the correct key from Stream dashboard
  2. **Wrong Secret**: Make sure secret matches the API key
  3. **Keys from different apps**: API key and secret must be from the same Stream app
  4. **Expired/Invalid Keys**: Generate new keys from Stream dashboard

### **If Webinar Still Shows JWT Error**:

1. **Hard refresh browser** (Ctrl+Shift+R)
2. **Clear browser cache completely**
3. **Check browser console** for token generation logs
4. **Verify environment variables** are loaded correctly
5. **Restart development server** completely

### **If System Status Check Fails**:

1. **Check console logs** for detailed error messages
2. **Verify `.env` file** has correct variable names:
   - `NEXT_PUBLIC_STREAM_API_KEY` (not `STREAM_API_KEY`)
   - `STREAM_API_SECRET` (not `STREAM_SECRET_KEY`)
3. **Test credentials** using the test script

---

## 📋 **COMMON MISTAKES TO AVOID**

### ❌ **Wrong Variable Names**:
```env
# WRONG:
STREAM_API_KEY=...
STREAM_SECRET_KEY=...

# CORRECT:
NEXT_PUBLIC_STREAM_API_KEY=...
STREAM_API_SECRET=...
```

### ❌ **Using Old Static Token**:
```env
# REMOVE THIS LINE:
STREAM_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### ❌ **Keys from Different Apps**:
- Make sure both API key and secret are from the same Stream app

### ❌ **Not Restarting Server**:
- Environment variables are loaded at startup - you must restart after changes

---

## 🎯 **EXPECTED RESULTS AFTER FIX**

### ✅ **System Status Check**:
```
Stream Credentials: ✅ Ready
Token generation successful
```

### ✅ **Browser Console Logs**:
```
Generating Stream Video token for user: user-123
Using API Key: abcd1234...
Generated token (first 30 chars): eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### ✅ **Webinar Functionality**:
- No JWT authentication errors
- Video streaming connects successfully
- Chat functionality works
- Device permissions granted properly

---

## 🚀 **AFTER THE FIX**

Once the Stream JWT error is resolved, you can:

1. **Test AI Agents**: Full voice call functionality
2. **Create Webinars**: With proper video streaming
3. **Implement AI-Webinar Integration**: Ready for next phase
4. **Deploy to Production**: System is stable and ready

---

## 📞 **IMMEDIATE ACTION ITEMS**

1. **Get Stream API Keys**: From https://dashboard.getstream.io/
2. **Update `.env` file**: Replace placeholder values
3. **Run test script**: `node test-stream-credentials.js`
4. **Restart server**: `npm run dev`
5. **Test webinar**: Verify no JWT errors

**The fix should resolve the JWT error completely!** 🎉