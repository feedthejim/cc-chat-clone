import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { message, chatId } = await request.json()
  
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Mock AI response
  const aiResponse = `I understand you're asking about "${message.slice(0, 50)}${message.length > 50 ? '...' : ''}". This is a simulated response demonstrating the chat functionality. In a real implementation, this would connect to an AI service like OpenAI's GPT API.`
  
  return NextResponse.json({
    success: true,
    response: aiResponse,
    timestamp: new Date().toISOString()
  })
}