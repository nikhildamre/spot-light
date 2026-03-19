// Fix webinar AI agent assignment
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function fixWebinarAI() {
  try {
    console.log('🔍 Finding AI agents...');
    
    // Get all AI agents
    const aiAgents = await prisma.aIAgent.findMany();
    console.log('📋 AI Agents found:', aiAgents.length);
    
    if (aiAgents.length === 0) {
      console.log('❌ No AI agents found in database');
      return;
    }
    
    // Show AI agents
    aiAgents.forEach((agent, index) => {
      console.log(`${index + 1}. ${agent.name} (ID: ${agent.id})`);
    });
    
    // Get webinars without AI agents
    const webinarsWithoutAI = await prisma.webinar.findMany({
      where: {
        aiAgentId: null
      },
      select: {
        id: true,
        title: true,
        createdAt: true
      }
    });
    
    console.log('\n🔍 Webinars without AI agents:', webinarsWithoutAI.length);
    
    if (webinarsWithoutAI.length === 0) {
      console.log('✅ All webinars already have AI agents assigned');
      return;
    }
    
    // Show webinars without AI
    webinarsWithoutAI.forEach((webinar, index) => {
      console.log(`${index + 1}. ${webinar.title} (ID: ${webinar.id})`);
    });
    
    // Assign the first AI agent to all webinars without AI
    const firstAgent = aiAgents[0];
    console.log(`\n🤖 Assigning "${firstAgent.name}" to all webinars without AI...`);
    
    const updateResult = await prisma.webinar.updateMany({
      where: {
        aiAgentId: null
      },
      data: {
        aiAgentId: firstAgent.id
      }
    });
    
    console.log(`✅ Updated ${updateResult.count} webinars`);
    console.log(`🎉 All webinars now have AI agent: ${firstAgent.name}`);
    
    // Verify the update
    const updatedWebinars = await prisma.webinar.findMany({
      where: {
        aiAgentId: firstAgent.id
      },
      select: {
        id: true,
        title: true,
        aiAgentId: true
      }
    });
    
    console.log('\n✅ Verification - Webinars with AI agent:');
    updatedWebinars.forEach(webinar => {
      console.log(`- ${webinar.title} (${webinar.id}) -> AI: ${webinar.aiAgentId}`);
    });
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

fixWebinarAI();