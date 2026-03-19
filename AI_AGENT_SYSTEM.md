# AI Agent System with VAPI Integration

## Overview
This system provides real-time AI voice agent management integrated with VAPI (Voice AI Platform) for handling webinar calls, sales calls, and automated customer interactions.

## Features Implemented

### 1. **Real-Time VAPI Integration** (`src/actions/vapi.ts`)
- ✅ Create AI assistants with custom voices and models
- ✅ List all configured assistants
- ✅ Update assistant configurations
- ✅ Delete assistants
- ✅ Create phone calls
- ✅ Create web calls for browser-based interactions

### 2. **AI Agent Management** (`src/actions/aiAgent.ts`)
- ✅ Create AI agents with VAPI backend
- ✅ Update agent configurations
- ✅ Delete agents
- ✅ Sync with VAPI in real-time

### 3. **AI Agents Dashboard** (`src/app/(protectedRoutes)/ai-agents/`)
- ✅ View all configured AI agents
- ✅ Real-time refresh from VAPI
- ✅ Agent statistics and metrics
- ✅ Test call functionality
- ✅ Edit and delete agents
- ✅ Responsive grid layout

### 4. **Create Agent Dialog** (`CreateAgentDialog.tsx`)
- ✅ Comprehensive agent creation form
- ✅ Voice configuration (ElevenLabs, PlayHT, Azure)
- ✅ AI model selection (GPT-4, GPT-3.5, etc.)
- ✅ Custom system prompts
- ✅ First message configuration
- ✅ Temperature and personality settings

## Configuration

### Environment Variables Required

Add these to your `.env` file:

```env
# VAPI AI Voice Assistant API
VAPI_API_KEY=your_vapi_api_key_here
NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key_here
```

### Getting VAPI API Keys

1. Sign up at [https://vapi.ai](https://vapi.ai)
2. Go to Dashboard → API Keys
3. Create a new API key
4. Copy both the private key (VAPI_API_KEY) and public key (NEXT_PUBLIC_VAPI_PUBLIC_KEY)

## How It Works

### Creating an AI Agent

1. **User Interface**: Click "Create AI Agent" button
2. **Form Submission**: Fill in agent details:
   - Name and description
   - First message (what agent says when call starts)
   - System prompt (defines behavior and personality)
   - Voice provider and voice ID
   - AI model and temperature
3. **VAPI Integration**: System creates assistant in VAPI
4. **Database Storage**: Agent metadata stored locally
5. **Real-Time Update**: Dashboard refreshes with new agent

### Agent Configuration Options

#### Voice Providers
- **ElevenLabs**: High-quality, natural-sounding voices
- **PlayHT**: Fast, cost-effective voices
- **Azure**: Enterprise-grade voices

#### AI Models
- **GPT-4**: Most capable, best for complex conversations
- **GPT-4 Turbo**: Faster, good balance
- **GPT-3.5 Turbo**: Fast and cost-effective

#### Temperature Settings
- **0.0-0.3**: Very consistent, predictable responses
- **0.4-0.7**: Balanced creativity and consistency
- **0.8-1.0**: More creative and varied responses

## Integration with Webinars

### Planned Features (Next Steps)

1. **AI Agent as Webinar Host**
   - Assign AI agent to webinar
   - Agent handles Q&A automatically
   - Agent can present slides with voice

2. **Breakout Rooms with AI**
   - AI agents in each breakout room
   - Personalized conversations
   - Lead qualification

3. **Post-Webinar Follow-up**
   - AI calls attendees
   - Gathers feedback
   - Schedules demos

4. **Real-Time Analytics**
   - Call duration tracking
   - Conversion metrics
   - Sentiment analysis

## API Endpoints

### VAPI Endpoints Used

```typescript
// Create Assistant
POST https://api.vapi.ai/assistant
Headers: Authorization: Bearer {VAPI_API_KEY}
Body: { name, model, voice, systemPrompt, firstMessage }

// List Assistants
GET https://api.vapi.ai/assistant
Headers: Authorization: Bearer {VAPI_API_KEY}

// Update Assistant
PATCH https://api.vapi.ai/assistant/{id}
Headers: Authorization: Bearer {VAPI_API_KEY}
Body: { ...updates }

// Delete Assistant
DELETE https://api.vapi.ai/assistant/{id}
Headers: Authorization: Bearer {VAPI_API_KEY}

// Create Phone Call
POST https://api.vapi.ai/call/phone
Body: { assistantId, customer: { number } }

// Create Web Call
POST https://api.vapi.ai/call/web
Body: { assistantId }
```

## Example System Prompts

### Sales Assistant
```
You are Morgan, a business development voice assistant for [Company]. 
Your primary purpose is to identify qualified leads, understand their 
business challenges, and connect them with the appropriate sales 
representatives.

## Personality
- Professional yet approachable
- Consultative rather than pushy
- Confident and knowledgeable

## Conversation Flow
1. Opening: Introduce yourself briefly
2. Discovery: Ask about their business
3. Qualification: Assess fit and timeline
4. Next Steps: Schedule demo or provide resources
```

### Support Agent
```
You are a customer support assistant for [Company]. Your goal is to 
help customers resolve issues quickly and efficiently.

## Personality
- Patient and empathetic
- Clear and concise
- Solution-oriented

## Guidelines
- Listen actively to the problem
- Ask clarifying questions
- Provide step-by-step solutions
- Escalate complex issues to human support
```

## Testing

### Test an AI Agent

1. Go to AI Agents page
2. Click "Test Call" on any agent
3. System creates a web call session
4. You can interact with the agent in real-time

### Monitor Performance

- View call statistics in dashboard
- Check conversion rates
- Analyze conversation transcripts
- Adjust system prompts based on performance

## Troubleshooting

### Common Issues

1. **"VAPI_API_KEY is not configured"**
   - Solution: Add VAPI_API_KEY to .env file
   - Restart development server

2. **"Failed to create assistant"**
   - Check API key is valid
   - Verify VAPI account has credits
   - Check network connection

3. **Voice not working**
   - Verify voice ID is correct for provider
   - Check voice provider is supported
   - Test with default voice first

## Next Steps

To fully integrate with webinars:

1. **Add AI Agent Selection to Webinar Creation**
   - Dropdown to select AI agent
   - Store aiAgentId in webinar table

2. **Implement Breakout Rooms**
   - Create breakout room system
   - Assign AI agents to rooms
   - Handle participant routing

3. **Add Call Analytics**
   - Track call duration
   - Record conversations
   - Generate transcripts
   - Calculate conversion rates

4. **Implement Web Call UI**
   - Embed VAPI web call widget
   - Show call status
   - Display transcript in real-time

## Resources

- [VAPI Documentation](https://docs.vapi.ai)
- [VAPI Dashboard](https://dashboard.vapi.ai)
- [ElevenLabs Voices](https://elevenlabs.io/voice-library)
- [OpenAI Models](https://platform.openai.com/docs/models)

## Support

For issues or questions:
1. Check VAPI documentation
2. Review error logs in browser console
3. Test with simple configurations first
4. Verify API keys and permissions