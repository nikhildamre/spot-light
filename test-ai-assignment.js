// Test AI agent assignment to webinar
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function testAIAssignment() {
  try {
    console.log('🧪 Testing AI agent assignment...');
    
    // Get the first webinar
    const webinar = await prisma.webinar.findFirst({
      orderBy: { createdAt: 'desc' }
    });
    
    if (!webinar) {
      console.log('❌ No webinars found');
      return;
    }
    
    console.log('📋 Found webinar:', webinar.title, '(ID:', webinar.id + ')');
    console.log('🤖 Current AI Agent ID:', webinar.aiAgentId || 'None');
    
    // Get the first AI agent
    const aiAgent = await prisma.aIAgent.findFirst();
    
    if (!aiAgent) {
      console.log('❌ No AI agents found');
      return;
    }
    
    console.log('🤖 Found AI agent:', aiAgent.name, '(ID:', aiAgent.id + ')');
    
    // Assign AI agent to webinar
    const updatedWebinar = await prisma.webinar.update({
      where: { id: webinar.id },
      data: { aiAgentId: aiAgent.id }
    });
    
    console.log('✅ AI agent assigned to webinar!');
    console.log('📋 Webinar:', updatedWebinar.title);
    console.log('🤖 AI Agent ID:', updatedWebinar.aiAgentId);
    
    // Verify the assignment
    const webinarWithAgent = await prisma.webinar.findUnique({
      where: { id: webinar.id },
      include: {
        // Note: We don't have a direct relation, so we'll fetch separately
      }
    });
    
    if (webinarWithAgent?.aiAgentId) {
      const assignedAgent = await prisma.aIAgent.findUnique({
        where: { id: webinarWithAgent.aiAgentId }
      });
      
      console.log('🎉 Verification successful!');
      console.log('   Webinar:', webinarWithAgent.title);
      console.log('   AI Agent:', assignedAgent?.name);
      console.log('   VAPI ID:', assignedAgent?.vapiAssistantId);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testAIAssignment();