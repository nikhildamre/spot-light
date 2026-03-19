# Testing Guide - AI Agents with VAPI

## ✅ Setup Complete!

Your VAPI API keys are now configured and the server is running.

## Quick Test Steps

### 1. Access AI Agents Page

Navigate to: **http://localhost:3000/ai-agents**

You should see:
- ✅ Page loads without errors
- ✅ "Create AI Agent" button visible
- ✅ Setup instructions (if no agents exist yet)

### 2. Create Your First AI Agent

Click "Create AI Agent" and fill in:

#### Basic Information
- **Name**: `Test Sales Assistant`
- **Description**: `AI agent for testing sales calls`

#### Voice Configuration
- **First Message**: (Use the default or customize)
  ```
  Hi there! This is test PQ Assistant team customer support. How can I help you today?
  ```

#### AI Model Configuration
- **Model Provider**: `openai`
- **Model**: `gpt-4`
- **Temperature**: `0.7`

#### Voice Settings
- **Voice Provider**: `elevenlabs`
- **Voice ID**: `21m00Tcm4TlvDq8ikWAM` (default)

#### System Prompt
Use the default prompt or customize for your use case.

Click **"Create AI Agent"** button.

### 3. Expected Results

✅ **Success**:
- Toast notification: "AI Agent created successfully!"
- Agent appears in the dashboard
- Agent card shows:
  - Name and description
  - Model and voice provider
  - "Test Call" button
  - Edit and delete options

❌ **If you see errors**:
- Check browser console (F12)
- Verify VAPI API key is correct
- Check VAPI account has credits
- See troubleshooting section below

### 4. Test the Agent

1. Click **"Test Call"** button on the agent card
2. (Feature coming soon - will open web call interface)

### 5. Manage Agents

- **Refresh**: Click refresh button to reload from VAPI
- **Delete**: Click trash icon to remove agent
- **Edit**: Click settings icon (coming soon)

## Troubleshooting

### Error: "Failed to create assistant"

**Check**:
1. VAPI API key is correct in `.env`
2. VAPI account has credits
3. Internet connection is working

**Solution**:
```bash
# Verify .env file
cat .env | grep VAPI

# Should show:
# VAPI_API_KEY=d430bd29-...
# NEXT_PUBLIC_VAPI_PUBLIC_KEY=3f3bf2e8-...
```

### Error: "Failed to fetch assistants"

**Check**:
1. VAPI API endpoint is accessible
2. API key has correct permissions

**Solution**:
- Visit https://dashboard.vapi.ai
- Check API key status
- Verify account is active

### Agent not appearing after creation

**Solution**:
1. Click "Refresh" button
2. Check browser console for errors
3. Verify agent was created in VAPI dashboard

## Testing Checklist

- [ ] AI Agents page loads
- [ ] Create dialog opens
- [ ] Form validation works
- [ ] Agent creation succeeds
- [ ] Agent appears in dashboard
- [ ] Refresh button works
- [ ] Delete button works
- [ ] No console errors

## Next Steps After Testing

### 1. Create Multiple Agents

Test different configurations:
- Different voices
- Different models
- Different system prompts
- Different temperatures

### 2. Test Voice Quality

- Try different voice providers
- Test different voice IDs
- Compare quality and latency

### 3. Optimize System Prompts

- Test conversation flows
- Refine agent behavior
- Add specific instructions
- Test edge cases

### 4. Monitor Performance

Visit VAPI Dashboard:
- Check call logs
- Review transcripts
- Monitor costs
- Analyze metrics

## Integration Testing

### Webinar Integration (Coming Soon)

1. Create a webinar
2. Assign AI agent to webinar
3. Test agent in webinar context
4. Verify agent handles Q&A

### Breakout Rooms (Coming Soon)

1. Create breakout rooms
2. Assign agents to rooms
3. Test participant routing
4. Verify agent interactions

## Performance Testing

### Load Testing

1. Create multiple agents
2. Test concurrent calls
3. Monitor response times
4. Check error rates

### Voice Quality Testing

1. Test in different network conditions
2. Check audio clarity
3. Test latency
4. Verify interruption handling

## Security Testing

### API Key Security

- [ ] Keys not exposed in client code
- [ ] Keys not in git repository
- [ ] Keys properly scoped
- [ ] Keys rotated regularly

### Data Privacy

- [ ] Conversation data encrypted
- [ ] PII handled properly
- [ ] Compliance requirements met
- [ ] Data retention policies followed

## Monitoring

### Key Metrics to Track

1. **Call Volume**
   - Total calls per day
   - Peak usage times
   - Average call duration

2. **Success Rate**
   - Successful connections
   - Failed calls
   - Error rates

3. **Cost Tracking**
   - API usage costs
   - Voice provider costs
   - Model costs

4. **Quality Metrics**
   - User satisfaction
   - Conversation completion rate
   - Escalation rate

## Support Resources

- **VAPI Dashboard**: https://dashboard.vapi.ai
- **VAPI Docs**: https://docs.vapi.ai
- **VAPI Discord**: https://discord.gg/vapi
- **Status Page**: https://status.vapi.ai

## Common Issues & Solutions

### Issue: High Latency

**Solutions**:
- Use faster models (GPT-3.5 Turbo)
- Choose closer voice provider regions
- Optimize system prompts
- Reduce temperature

### Issue: Poor Voice Quality

**Solutions**:
- Try different voice providers
- Test different voice IDs
- Check network bandwidth
- Verify audio settings

### Issue: Unexpected Responses

**Solutions**:
- Refine system prompt
- Add more examples
- Adjust temperature
- Test with different models

### Issue: High Costs

**Solutions**:
- Use cheaper models
- Optimize conversation length
- Implement call routing
- Set usage limits

## Best Practices

1. **Start Simple**: Test with basic configurations first
2. **Iterate**: Refine based on real usage
3. **Monitor**: Track metrics continuously
4. **Document**: Keep notes on what works
5. **Test**: Regular testing in production-like conditions

## Success Criteria

Your AI agent system is working correctly if:

✅ Agents create successfully  
✅ Agents appear in dashboard  
✅ No console errors  
✅ VAPI dashboard shows agents  
✅ Test calls work (when implemented)  
✅ Performance is acceptable  
✅ Costs are within budget  

## Ready for Production?

Before going live:

- [ ] Tested with real users
- [ ] Monitored for 1+ week
- [ ] Costs are predictable
- [ ] Error handling is robust
- [ ] Backup plans in place
- [ ] Documentation complete
- [ ] Team is trained

## Need Help?

1. Check this guide
2. Review VAPI documentation
3. Check browser console
4. Review server logs
5. Contact VAPI support