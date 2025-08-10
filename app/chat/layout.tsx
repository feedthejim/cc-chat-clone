import { Suspense } from 'react'
import { ChatListSkeleton } from '@/components/loading'
import { getChatHistory } from '@/lib/data'
import { ChatListItem } from '@/components/chat-list-item'
import Link from 'next/link'

async function ChatList() {
  const chats = await getChatHistory()
  
  return (
    <div className="flex flex-col space-y-2 h-full">
      <Link 
        href={`/chat/${Date.now()}`}
        className="flex items-center justify-center w-full px-3 py-2 text-sm font-medium glass hover:bg-black/10 dark:hover:bg-white/10 rounded-xl transition-all duration-200 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 shadow-lg hover:shadow-xl"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        New Chat
      </Link>
      
      <div className="flex-1 overflow-y-auto space-y-1 min-h-0">
        {chats.map((chat) => (
          <ChatListItem key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <div className="w-64 glass-sidebar flex flex-col h-screen">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/50 dark:border-slate-700/50">
        <Link href="/chat" className="text-xl font-semibold text-slate-700 dark:text-slate-200">
          ChatGPT
        </Link>
        <form action="/api/auth/logout" method="POST">
          <button
            type="submit"
            className="p-3 glass hover:bg-black/10 dark:hover:bg-white/10 rounded-xl transition-all duration-200 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </form>
      </div>
      
      <div className="flex-1 p-3 overflow-hidden">
        <Suspense fallback={<ChatListSkeleton />}>
          <ChatList />
        </Suspense>
      </div>
    </div>
  )
}

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800">
      <Sidebar />
      {children}
    </div>
  )
}