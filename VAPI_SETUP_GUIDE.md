# VAPI Setup Guide

## Quick Start

### Step 1: Get VAPI API Key

1. Go to [https://vapi.ai](https://vapi.ai)
2. Sign up for a free account
3. Navigate to Dashboard → API Keys
4. Click "Create New API Key"
5. Copy both keys:
   - **Private Key** (starts with `sk_...`)
   - **Public Key** (starts with `pk_...`)

### Step 2: Add to Environment Variables

Open your `.env` file and add:

```env
# VAPI AI Voice Assistant API
VAPI_API_KEY=sk_your_private_key_here
NEXT_PUBLIC_VAPI_PUBLIC_KEY=pk_your_public_key_here
```

### Step 3: Restart Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 4: Create Your First AI Agent

1. Navigate to `/ai-agents` page
2. Click "Create AI Agent"
3. Fill in the form:
   - **Name**: e.g., "Sales Assistant"
   - **Description**: What the agent does
   - **First Message**: Greeting message
   - **System Prompt**: Agent's behavior and personality
   - **Voice**: Choose provider and voice ID
   - **Model**: Select AI model (GPT-4 recommended)
4. Click "Create AI Agent"

## Troubleshooting

### "VAPI_API_KEY not configured"

**Solution**: Make sure you've added the API key to `.env` and restarted the server.

### "Failed to fetch assistants"

**Possible causes**:
1. Invalid API key
2. No internet connection
3. VAPI service is down

**Solution**: 
- Verify your API key is correct
- Check your internet connection
- Visit [VAPI Status Page](https://status.vapi.ai)

### "Failed to create assistant"

**Possible causes**:
1. Invalid API key
2. Insufficient credits in VAPI account
3. Invalid configuration

**Solution**:
- Check your VAPI account has credits
- Verify all required fields are filled
- Try with default settings first

## Database Connection Issues

If you see database connection errors, the app will still work with VAPI. The database is optional for AI agents - they're stored directly in VAPI.

To fix database issues:
1. Check your `DATABASE_URL` in `.env`
2. Ensure your Neon database is running
3. Run `npx prisma generate` and `npx prisma db push`

## Voice Providers

### ElevenLabs (Recommended)
- High-quality, natural voices
- Get voice IDs from: https://elevenlabs.io/voice-library
- Default voice ID: `21m00Tcm4TlvDq8ikWAM`

### PlayHT
- Fast and cost-effective
- Good for high-volume calls
- Get voice IDs from PlayHT dashboard

### Azure
- Enterprise-grade
- Multiple languages
- Requires Azure account

## AI Models

### GPT-4
- **Best for**: Complex conversations, nuanced understanding
- **Cost**: Higher
- **Speed**: Moderate

### GPT-4 Turbo
- **Best for**: Balance of quality and speed
- **Cost**: Moderate
- **Speed**: Fast

### GPT-3.5 Turbo
- **Best for**: Simple conversations, high volume
- **Cost**: Low
- **Speed**: Very fast

## Temperature Settings

- **0.0-0.3**: Very consistent, predictable (good for support)
- **0.4-0.7**: Balanced (recommended for sales)
- **0.8-1.0**: Creative, varied (good for engagement)

## Testing Your Agent

1. Click "Test Call" on any agent card
2. System will create a web call session
3. You can talk to the agent in real-time
4. Test different scenarios
5. Adjust system prompt based on results

## Best Practices

### System Prompts

1. **Be Specific**: Define exact behavior you want
2. **Include Examples**: Show how agent should respond
3. **Set Boundaries**: Define what agent should NOT do
4. **Test Iteratively**: Start simple, refine based on results

### Voice Selection

1. **Match Personality**: Choose voice that fits agent's role
2. **Test Multiple**: Try different voices
3. **Consider Audience**: Professional vs casual

### Model Selection

1. **Start with GPT-4**: Best results for initial testing
2. **Optimize Later**: Switch to faster models if needed
3. **Monitor Costs**: Track usage in VAPI dashboard

## Next Steps

Once your AI agents are working:

1. **Integrate with Webinars**: Assign agents to webinars
2. **Add Analytics**: Track performance metrics
3. **Implement Breakout Rooms**: Use agents in breakout sessions
4. **Set Up Webhooks**: Get real-time call updates
5. **Add Phone Numbers**: Enable inbound/outbound calls

## Support

- **VAPI Docs**: https://docs.vapi.ai
- **VAPI Discord**: https://discord.gg/vapi
- **VAPI Support**: support@vapi.ai

## Costs

VAPI pricing (as of 2024):
- **Free Tier**: 10 minutes/month
- **Starter**: $20/month (100 minutes)
- **Pro**: $100/month (1000 minutes)
- **Enterprise**: Custom pricing

Additional costs:
- OpenAI API (for GPT models)
- ElevenLabs (for voices)
- Phone numbers (if using telephony)

## Security

- Never commit `.env` file to git
- Keep API keys secure
- Rotate keys regularly
- Use environment-specific keys (dev/prod)
- Monitor usage for unusual activity