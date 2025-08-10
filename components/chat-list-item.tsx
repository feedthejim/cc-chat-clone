'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

export function ChatListItem({ chat }: { chat: { id: string, title: string } }) {
  const params = useParams()
  const isActive = params.id === chat.id

  return (
    <Link
      href={`/chat/${chat.id}`}
      className={`flex items-center px-3 py-2 text-sm rounded-xl cursor-pointer group transition-all duration-200 ${
        isActive
          ? 'glass-user text-slate-800 dark:text-slate-100 shadow-lg'
          : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-black/5 dark:hover:bg-white/5'
      }`}
    >
      <svg className="w-4 h-4 mr-2 text-current opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <span className="truncate flex-1 font-medium">{chat.title}</span>
    </Link>
  )
}