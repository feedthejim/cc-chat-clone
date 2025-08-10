function ChatInterface() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              How can I help you today?
            </h2>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-800 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Message ChatGPT..."
              className="w-full px-4 py-3 pr-12 text-base bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ChatPage() {
  return <ChatInterface />
}