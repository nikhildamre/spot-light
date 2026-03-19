const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function fixWebinarAIId() {
  try {
    const agent = await prisma.aIAgent.findFirst();
    const webinar = await prisma.webinar.findFirst({ 
      orderBy: { createdAt: 'desc' } 
    });
    
    console.log('🔧 Fixing webinar AI agent assignment...');
    console.log('Webinar:', webinar.title);
    console.log('Current aiAgentId (VAPI ID):', webinar.aiAgentId);
    console.log('Correct DB ID should be:', agent.id);
    
    const updated = await prisma.webinar.update({
      where: { id: webinar.id },
      data: { aiAgentId: agent.id }
    });
    
    console.log('✅ Fixed! New aiAgentId:', updated.aiAgentId);
    console.log('🎉 Webinar now properly linked to AI agent!');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

fixWebinarAIId();