const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function checkWebinarAI() {
  try {
    const webinar = await prisma.webinar.findFirst({ 
      orderBy: { createdAt: 'desc' } 
    });
    
    console.log('Latest Webinar:');
    console.log('  ID:', webinar?.id);
    console.log('  Title:', webinar?.title);
    console.log('  AI Agent ID:', webinar?.aiAgentId);
    
    if (webinar?.aiAgentId) {
      const agent = await prisma.aIAgent.findUnique({ 
        where: { id: webinar.aiAgentId } 
      });
      console.log('  AI Agent Name:', agent?.name);
      console.log('  VAPI ID:', agent?.vapiAssistantId);
    } else {
      console.log('  ❌ No AI agent assigned');
    }
    
    // Check all AI agents
    const allAgents = await prisma.aIAgent.findMany();
    console.log('\nAll AI Agents in Database:');
    allAgents.forEach(agent => {
      console.log(`  - ${agent.name} (DB: ${agent.id}, VAPI: ${agent.vapiAssistantId})`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkWebinarAI();