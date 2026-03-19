# 🚀 Stream New App Setup Guide - Complete Step-by-Step

## 🎯 **GOAL**: Create a new Stream app and fix JWT authentication errors

This guide will walk you through creating a completely fresh Stream app and configuring it properly.

---

## 📋 **STEP 1: Create New Stream Account/App**

### **1.1: Go to Stream Dashboard**
1. **Open your browser** and navigate to: https://dashboard.getstream.io/
2. **Sign in** to your Stream account (or create one if you don't have it)

### **1.2: Create New App**
1. **Click "Create App"** button (usually in top-right or center of dashboard)
2. **Fill in App Details**:
   - **App Name**: `Spotlight-Webinar-App` (or any name you prefer)
   - **Environment**: Select `Development` for now
   - **Region**: Choose closest to your location:
     - **For Mumbai/India**: Select `Asia-Pacific`, `Singapore`, or `Mumbai` (if available)
     - **For US**: Select `US-East` or `US-West`
     - **For Europe**: Select `Europe` or `Ireland`
3. **Click "Create App"**

### **1.3: Navigate to Your New App**
1. **Select your newly created app** from the dashboard
2. You should see the app overview page

---

## 📋 **STEP 2: Get API Keys**

### **2.1: Find API Keys Section**
1. **In your app dashboard**, look for:
   - **"API Keys"** tab/section (usually in left sidebar)
   - **OR** "Settings" → "API Keys"
   - **OR** "Authentication" section

### **2.2: Copy Your Keys**
You'll see two important values:

#### **API Key (Public Key)**:
- **Format**: Usually 8-12 characters (e.g., `abcd1234efgh`)
- **Example**: `8br4k2c9xd5f`
- **Copy this value** - you'll need it for `NEXT_PUBLIC_STREAM_API_KEY`

#### **Secret (Private Key)**:
- **Format**: Longer string, usually 40+ characters
- **Example**: `sk_us_east_1_abcd1234efgh5678ijkl9012mnop3456qrst7890`
- **Copy this value** - you'll need it for `STREAM_API_SECRET`

### **2.3: Screenshot for Reference**
Take a screenshot of your API keys page for reference (but keep it secure!)

---

## 📋 **STEP 3: Update Your .env File**

### **3.1: Open Your .env File**
Open your project's `.env` file in your code editor.

### **3.2: Find Stream Configuration Section**
Look for these lines:
```env
# Stream Video/Chat Configuration - UPDATED
NEXT_PUBLIC_STREAM_USER_ID=Spot-Light
NEXT_PUBLIC_STREAM_API_KEY=YOUR_NEW_STREAM_API_KEY_HERE
STREAM_API_SECRET=YOUR_NEW_STREAM_SECRET_HERE
```

### **3.3: Replace Placeholder Values**
Replace the placeholder values with your actual keys from Step 2:

```env
# Stream Video/Chat Configuration - UPDATED
NEXT_PUBLIC_STREAM_USER_ID=Spot-Light
NEXT_PUBLIC_STREAM_API_KEY=8br4k2c9xd5f
STREAM_API_SECRET=sk_us_east_1_abcd1234efgh5678ijkl9012mnop3456qrst7890
```

**IMPORTANT**: 
- Replace `8br4k2c9xd5f` with YOUR actual API key
- Replace `sk_us_east_1_abcd1234efgh5678ijkl9012mnop3456qrst7890` with YOUR actual secret
- **Don't use quotes** around the values
- **No spaces** around the `=` sign

### **3.4: Save the File**
**Save your .env file** (Ctrl+S)

---

## 📋 **STEP 4: Test Your Configuration**

### **4.1: Test Stream Credentials**
Run the test script to verify your keys work:

```bash
node test-stream-credentials.js
```

### **4.2: Expected Success Output**
You should see:
```
🔧 Testing Stream Credentials...

API Key: 8br4k2c9... (your new key)
API Secret: sk_us_east... (your new secret)

🧪 Testing token generation...
✅ SUCCESS: Token generated successfully
Test User ID: test-user-1773942618576
Token (first 30 chars): eyJhbGciOiJIUzI1NiIsInR5cCI6Ik...

🎉 Stream credentials are working correctly!
You can now start your development server with: npm run dev
```

### **4.3: If Test Fails**
If you see errors:

#### **"Missing Stream API credentials"**
- Check that you saved the `.env` file
- Verify you replaced the placeholder values

#### **"Please replace placeholder values"**
- You still have `YOUR_NEW_STREAM_API_KEY_HERE` in your `.env` file
- Replace with actual values from Stream dashboard

#### **"Token generation failed"**
- **Wrong API Key**: Copy the correct key from Stream dashboard
- **Wrong Secret**: Make sure secret matches the API key
- **Keys from different apps**: Both keys must be from the same Stream app

---

## 📋 **STEP 5: Start Your Development Server**

### **5.1: Kill Any Running Processes**
```bash
# On Windows:
taskkill /f /im node.exe

# On Mac/Linux:
pkill node
```

### **5.2: Clear Cache**
```bash
# Delete Next.js cache
rm -rf .next

# On Windows:
rmdir /s .next
```

### **5.3: Start Development Server**
```bash
npm run dev
```

### **5.4: Expected Server Output**
You should see:
```
▲ Next.js 15.5.9 (Turbopack)
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000
✓ Ready in 4.2s
```

---

## 📋 **STEP 6: Verify the Fix**

### **6.1: Test System Status**
1. **Navigate to**: `http://localhost:3000/ai-agents`
2. **Click**: "Show System Status"
3. **Verify**: "Stream Credentials" shows ✅ success

### **6.2: Test Webinar Creation**
1. **Create a test webinar** from your dashboard
2. **Navigate to the webinar URL**
3. **Check browser console** (F12) for logs

### **6.3: Expected Browser Console Logs**
You should see:
```
stream.ts:44  Server  Generating Stream Video token for user: 6e6b7626-6bf7-4057-9299-3096c2715aa8
stream.ts:45  Server  Using API Key: 8br4k2c9xd5f (your new key)
stream.ts:54  Server  Generated token (first 30 chars): eyJhbGciOiJIUzI1NiIsInR5cCI6Ik...
```

### **6.4: No More JWT Errors**
You should **NOT** see:
- ❌ `WS failed with code: 43`
- ❌ `JWTAuth error: signature is not valid`
- ❌ `Make sure the token is created using the secret for API key "75kxp3q63j2g"`

---

## 📋 **STEP 7: Final Verification**

### **7.1: Test Video Streaming**
1. **Join a webinar**
2. **Grant camera/microphone permissions**
3. **Verify**: Video streaming connects successfully
4. **Verify**: No connection errors in console

### **7.2: Test Chat Functionality**
1. **Send a test message** in webinar chat
2. **Verify**: Messages appear correctly
3. **Verify**: No authentication errors

### **7.3: Test AI Agents**
1. **Navigate to**: `/ai-agents`
2. **Create a test AI agent**
3. **Test voice calls**
4. **Verify**: Everything works without Stream errors

---

## 🔧 **TROUBLESHOOTING**

### **Problem: Test Script Still Shows Old API Key**

**Solution**:
1. **Double-check** your `.env` file has the new values
2. **Save the file** (Ctrl+S)
3. **Restart terminal/command prompt**
4. **Run test again**: `node test-stream-credentials.js`

### **Problem: Browser Still Shows JWT Errors**

**Solution**:
1. **Hard refresh browser** (Ctrl+Shift+R)
2. **Clear browser cache** completely
3. **Restart development server**:
   ```bash
   # Stop server (Ctrl+C)
   rm -rf .next
   npm run dev
   ```

### **Problem: "App not found" or "Invalid credentials"**

**Solution**:
1. **Verify you're using keys from the same Stream app**
2. **Check that the app is active** in Stream dashboard
3. **Try creating another new app** if needed

### **Problem: Keys Look Wrong**

**Typical Stream Key Formats**:
- **API Key**: `8br4k2c9xd5f` (8-12 characters)
- **Secret**: `sk_us_east_1_abcd1234efgh5678ijkl9012mnop3456qrst7890` (long string starting with region)

If your keys don't look like this, double-check you copied from the right place.

---

## 📊 **SUCCESS CHECKLIST**

After completing all steps, verify:

### ✅ **Stream Configuration**:
- [ ] New Stream app created
- [ ] API keys copied correctly
- [ ] `.env` file updated with actual values (not placeholders)
- [ ] Test script shows success
- [ ] Development server starts without errors

### ✅ **Application Testing**:
- [ ] System status check shows Stream credentials ✅
- [ ] Browser console shows new API key in logs
- [ ] No JWT authentication errors
- [ ] Video streaming connects successfully
- [ ] Chat functionality works
- [ ] AI agents work without Stream errors

### ✅ **Console Logs**:
- [ ] `Using API Key: [your-new-key]` (not 75kxp3q63j2g)
- [ ] `Generated token (first 30 chars): eyJhbGciOiJIUzI1NiIsInR5cCI6Ik...`
- [ ] No `WS failed with code: 43` errors
- [ ] No `signature is not valid` errors

---

## 🎉 **COMPLETION**

Once all checklist items are ✅, your Stream JWT error will be **completely resolved**!

Your system will be ready for:
- ✅ Full webinar functionality
- ✅ AI agent integration
- ✅ Video streaming and chat
- ✅ Production deployment

---

## 📞 **Quick Reference**

### **Your New Stream Configuration**:
```env
# Stream Video/Chat Configuration - UPDATED
NEXT_PUBLIC_STREAM_USER_ID=Spot-Light
NEXT_PUBLIC_STREAM_API_KEY=[your-actual-api-key]
STREAM_API_SECRET=[your-actual-secret]
```

### **Test Command**:
```bash
node test-stream-credentials.js
```

### **Start Server**:
```bash
npm run dev
```

### **Test URL**:
```
http://localhost:3000/ai-agents
```

**Follow this guide step-by-step and your Stream JWT error will be completely fixed!** 🚀