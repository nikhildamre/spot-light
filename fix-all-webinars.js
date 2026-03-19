const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function fixAllWebinars() {
  try {
    // Get the AI agent
    const agent = await prisma.aIAgent.findFirst();
    
    if (!agent) {
      console.log('❌ No AI agent found in database');
      return;
    }
    
    console.log('🤖 AI Agent found:', agent.name);
    console.log('   DB ID:', agent.id);
    console.log('   VAPI ID:', agent.vapiAssistantId);
    
    // Find all webinars with VAPI ID instead of DB ID
    const webinarsToFix = await prisma.webinar.findMany({
      where: {
        aiAgentId: agent.vapiAssistantId // This should be the DB ID, not VAPI ID
      }
    });
    
    console.log(`\n🔧 Found ${webinarsToFix.length} webinars to fix:`);
    
    for (const webinar of webinarsToFix) {
      console.log(`   - ${webinar.title} (ID: ${webinar.id})`);
      
      // Fix the webinar
      await prisma.webinar.update({
        where: { id: webinar.id },
        data: { aiAgentId: agent.id }
      });
      
      console.log(`   ✅ Fixed: ${webinar.title}`);
    }
    
    // Verify all webinars
    const allWebinarsWithAI = await prisma.webinar.findMany({
      where: {
        aiAgentId: { not: null }
      }
    });
    
    console.log(`\n🎉 Summary: ${allWebinarsWithAI.length} webinars now have AI agents:`);
    for (const webinar of allWebinarsWithAI) {
      const linkedAgent = await prisma.aIAgent.findUnique({
        where: { id: webinar.aiAgentId }
      });
      console.log(`   - ${webinar.title}: ${linkedAgent?.name || 'ERROR - Agent not found'}`);
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

fixAllWebinars();