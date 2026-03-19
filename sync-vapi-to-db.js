// Sync existing VAPI agents to local database
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function syncVapiToDatabase() {
  try {
    console.log('🔄 Syncing VAPI agents to local database...');
    
    // Get VAPI agents using the API
    const VAPI_PRIVATE_KEY = process.env.VAPI_PRIVATE_KEY;
    
    if (!VAPI_PRIVATE_KEY) {
      console.log('❌ VAPI_PRIVATE_KEY not found in environment');
      return;
    }
    
    console.log('📡 Fetching agents from VAPI...');
    
    const response = await fetch('https://api.vapi.ai/assistant', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${VAPI_PRIVATE_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      console.log('❌ Failed to fetch from VAPI:', response.status, response.statusText);
      return;
    }
    
    const vapiAgents = await response.json();
    console.log('📋 VAPI agents found:', vapiAgents.length);
    
    if (vapiAgents.length === 0) {
      console.log('❌ No agents found in VAPI');
      return;
    }
    
    // Show VAPI agents
    vapiAgents.forEach((agent, index) => {
      console.log(`${index + 1}. ${agent.name} (VAPI ID: ${agent.id})`);
    });
    
    // Get current user ID (you'll need to replace this with actual user ID)
    const users = await prisma.user.findMany({ take: 1 });
    const userId = users[0]?.id || 'default-user';
    
    console.log('👤 Using user ID:', userId);
    
    // Sync each VAPI agent to database
    for (const vapiAgent of vapiAgents) {
      try {
        // Check if already exists
        const existing = await prisma.aIAgent.findFirst({
          where: { vapiAssistantId: vapiAgent.id }
        });
        
        if (existing) {
          console.log(`⏭️  Agent "${vapiAgent.name}" already exists in database`);
          continue;
        }
        
        // Create in database
        const dbAgent = await prisma.aIAgent.create({
          data: {
            name: vapiAgent.name,
            description: vapiAgent.model?.messages?.[0]?.content || 'AI Assistant',
            vapiAssistantId: vapiAgent.id,
            firstMessage: vapiAgent.firstMessage || 'Hello! How can I help you?',
            systemPrompt: vapiAgent.model?.messages?.[0]?.content || 'You are a helpful assistant.',
            userId: userId,
            modelProvider: vapiAgent.model?.provider || 'openai',
            modelName: vapiAgent.model?.model || 'gpt-3.5-turbo',
            temperature: vapiAgent.model?.temperature || 0.7,
            voiceProvider: vapiAgent.voice?.provider || '11labs',
            voiceId: vapiAgent.voice?.voiceId || '21m00Tcm4TlvDq8ikWAM',
            status: 'ACTIVE',
          }
        });
        
        console.log(`✅ Synced "${vapiAgent.name}" to database (DB ID: ${dbAgent.id})`);
        
      } catch (error) {
        console.log(`❌ Failed to sync "${vapiAgent.name}":`, error.message);
      }
    }
    
    // Verify sync
    const dbAgents = await prisma.aIAgent.findMany();
    console.log(`\n🎉 Database now has ${dbAgents.length} AI agents:`);
    
    dbAgents.forEach(agent => {
      console.log(`- ${agent.name} (DB: ${agent.id}, VAPI: ${agent.vapiAssistantId})`);
    });
    
    console.log('\n✅ Sync complete! Your webinars can now use these AI agents.');
    
  } catch (error) {
    console.error('❌ Error syncing:', error);
  } finally {
    await prisma.$disconnect();
  }
}

syncVapiToDatabase();