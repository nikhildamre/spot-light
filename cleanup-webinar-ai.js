const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function cleanupWebinarAI() {
  try {
    // Get the valid AI agent
    const validAgent = await prisma.aIAgent.findFirst();
    
    if (!validAgent) {
      console.log('❌ No AI agent found in database');
      return;
    }
    
    console.log('🤖 Valid AI Agent:', validAgent.name);
    console.log('   DB ID:', validAgent.id);
    
    // Get all webinars with AI agent IDs
    const webinarsWithAI = await prisma.webinar.findMany({
      where: {
        aiAgentId: { not: null }
      }
    });
    
    console.log(`\n🔧 Checking ${webinarsWithAI.length} webinars with AI agents...`);
    
    for (const webinar of webinarsWithAI) {
      // Check if the AI agent exists
      const agent = await prisma.aIAgent.findUnique({
        where: { id: webinar.aiAgentId }
      });
      
      if (!agent) {
        console.log(`❌ ${webinar.title}: Invalid AI agent ID ${webinar.aiAgentId}`);
        
        // Fix by assigning the valid agent
        await prisma.webinar.update({
          where: { id: webinar.id },
          data: { aiAgentId: validAgent.id }
        });
        
        console.log(`   ✅ Fixed: Assigned valid AI agent`);
      } else {
        console.log(`✅ ${webinar.title}: Valid AI agent (${agent.name})`);
      }
    }
    
    // Final verification
    console.log('\n🎉 Final status:');
    const finalWebinars = await prisma.webinar.findMany({
      where: {
        aiAgentId: { not: null }
      }
    });
    
    for (const webinar of finalWebinars) {
      const agent = await prisma.aIAgent.findUnique({
        where: { id: webinar.aiAgentId }
      });
      console.log(`   - ${webinar.title}: ${agent?.name || 'ERROR'}`);
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

cleanupWebinarAI();