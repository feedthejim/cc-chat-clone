import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Simulate realistic delay for chat creation
  await new Promise(resolve => setTimeout(resolve, 500)) // 500ms delay
  
  // Generate a new chat ID (in real app, this would be from database)
  const newChatId = String(Date.now())
  
  return NextResponse.json({
    success: true,
    chatId: newChatId,
    redirect: `/chat/${newChatId}`
  })
}