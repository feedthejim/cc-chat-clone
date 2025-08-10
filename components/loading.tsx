export function SearchBarSkeleton() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative">
        <div className="w-full h-14 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-xl animate-pulse bg-[length:200%_100%] animate-shimmer" />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
      </div>
    </div>
  )
}

export function LoginButtonSkeleton() {
  return (
    <div className="w-20 h-10 bg-gradient-to-r from-green-400 via-green-500 to-green-400 dark:from-green-600 dark:via-green-700 dark:to-green-600 rounded-lg animate-pulse bg-[length:200%_100%] animate-shimmer" />
  )
}

export function SuggestionCardsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="p-4 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-xl border border-gray-200 dark:border-gray-700 animate-pulse"
        >
          <div className="h-5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 rounded mb-2 bg-[length:200%_100%] animate-shimmer" />
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-3/4 bg-[length:200%_100%] animate-shimmer" />
        </div>
      ))}
    </div>
  )
}

export function ChatListSkeleton() {
  const chatItems = [
    { width: '85%', delay: '0ms' },
    { width: '72%', delay: '100ms' },
    { width: '90%', delay: '200ms' },
    { width: '68%', delay: '300ms' },
    { width: '77%', delay: '400ms' },
    { width: '82%', delay: '500ms' },
    { width: '65%', delay: '600ms' },
    { width: '88%', delay: '700ms' },
    { width: '74%', delay: '800ms' },
    { width: '79%', delay: '900ms' },
  ]
  
  return (
    <div className="space-y-3">
      {/* New Chat Button Skeleton */}
      <div className="flex items-center justify-center w-full px-4 py-3 glass hover:bg-black/10 dark:hover:bg-white/10 rounded-2xl transition-all duration-200 shadow-lg">
        <div className="w-4 h-4 bg-slate-400/60 dark:bg-slate-500/60 rounded animate-pulse mr-2" />
        <div className="h-4 bg-slate-400/60 dark:bg-slate-500/60 rounded w-16 animate-pulse" />
      </div>
      
      {/* Chat Items Skeleton */}
      <div className="space-y-2">
        {chatItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-black/5 dark:hover:bg-white/5 rounded-2xl transition-all duration-200"
          >
            <div className="w-4 h-4 bg-slate-400/50 dark:bg-slate-500/50 rounded-full animate-pulse mr-3 flex-shrink-0" />
            <div className="flex-1">
              <div 
                className="h-3.5 bg-slate-400/50 dark:bg-slate-500/50 rounded animate-pulse"
                style={{ width: item.width }}
              />
            </div>
          </div>
        ))}
        
        {/* Subtle fade at bottom */}
        <div className="h-8 bg-gradient-to-b from-transparent via-transparent to-slate-200/20 dark:to-slate-800/20" />
      </div>
    </div>
  )
}

export function MessagesSkeleton() {
  return (
    <div className="space-y-8">
      {/* User Message */}
      <div className="flex justify-end">
        <div className="flex flex-row-reverse gap-4 max-w-[85%]">
          <div className="glass-user rounded-3xl rounded-tr-md px-6 py-4 shadow-xl">
            <div className="space-y-2">
              <div className="h-4 bg-slate-500/30 dark:bg-slate-400/30 rounded animate-pulse w-48" />
              <div className="h-4 bg-slate-500/30 dark:bg-slate-400/30 rounded animate-pulse w-32" />
            </div>
          </div>
        </div>
      </div>

      {/* AI Message with Typing Effect */}
      <div className="flex justify-start">
        <div className="flex gap-4 max-w-[85%]">
          <div className="glass-ai rounded-3xl rounded-tl-md px-6 py-4 shadow-xl">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-slate-600/60 dark:bg-slate-400/60 rounded-full animate-bounce" style={{ animationDelay: '0ms', animationDuration: '1.4s' }} />
              <div className="w-3 h-3 bg-slate-600/60 dark:bg-slate-400/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '1.4s' }} />
              <div className="w-3 h-3 bg-slate-600/60 dark:bg-slate-400/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '1.4s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Previous AI Message Skeleton */}
      <div className="flex justify-start">
        <div className="flex gap-4 max-w-[85%]">
          <div className="glass-ai rounded-3xl rounded-tl-md px-6 py-4 shadow-xl min-w-[300px]">
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="h-4 bg-slate-600/30 dark:bg-slate-400/30 rounded animate-pulse w-72" />
                <div className="h-4 bg-slate-600/30 dark:bg-slate-400/30 rounded animate-pulse w-80" />
                <div className="h-4 bg-slate-600/30 dark:bg-slate-400/30 rounded animate-pulse w-64" />
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-slate-600/30 dark:bg-slate-400/30 rounded animate-pulse w-full" />
                <div className="h-4 bg-slate-600/30 dark:bg-slate-400/30 rounded animate-pulse w-56" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MessageInputSkeleton() {
  return (
    <div className="flex gap-3 items-end">
      <div className="flex-1 relative">
        <div className="w-full h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-xl animate-pulse bg-[length:200%_100%] animate-shimmer" />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
      </div>
    </div>
  )
}

export function SidebarHeaderSkeleton() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
      <div className="h-7 w-20 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 rounded bg-[length:200%_100%] animate-shimmer" />
      <div className="w-9 h-9 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
    </div>
  )
}

export function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex max-w-[85%] flex-row gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-200 flex items-center justify-center">
          <svg className="w-5 h-5 text-white dark:text-gray-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  )
}