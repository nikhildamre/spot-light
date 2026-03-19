const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function fixCurrentWebinar() {
  try {
    const webinarId = 'daec7b0d-c75f-460b-b855-64be1b859c64'; // From the logs
    
    // Get the AI agent
    const agent = await prisma.aIAgent.findFirst();
    
    if (!agent) {
      console.log('❌ No AI agent found in database');
      return;
    }
    
    // Get the current webinar
    const webinar = await prisma.webinar.findUnique({
      where: { id: webinarId }
    });
    
    if (!webinar) {
      console.log('❌ Webinar not found');
      return;
    }
    
    console.log('🔧 Fixing webinar AI agent assignment...');
    console.log('Webinar:', webinar.title);
    console.log('Current aiAgentId (VAPI ID):', webinar.aiAgentId);
    console.log('Correct DB ID should be:', agent.id);
    console.log('AI Agent Name:', agent.name);
    
    // Update the webinar
    const updated = await prisma.webinar.update({
      where: { id: webinarId },
      data: { aiAgentId: agent.id }
    });
    
    console.log('✅ Fixed! New aiAgentId:', updated.aiAgentId);
    console.log('🎉 Webinar now properly linked to AI agent!');
    
    // Verify the fix
    const verification = await prisma.webinar.findUnique({
      where: { id: webinarId }
    });
    
    const linkedAgent = await prisma.aIAgent.findUnique({
      where: { id: verification.aiAgentId }
    });
    
    console.log('\n✅ Verification:');
    console.log('Webinar:', verification.title);
    console.log('AI Agent:', linkedAgent?.name);
    console.log('VAPI ID:', linkedAgent?.vapiAssistantId);
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

fixCurrentWebinar();