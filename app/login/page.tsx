import { Suspense } from 'react'
import { SearchBarSkeleton, LoginButtonSkeleton, SuggestionCardsSkeleton } from '@/components/loading'
import { login } from '@/lib/auth'


async function LoginButton() {
  // Simulate auth check delay
  await new Promise(resolve => setTimeout(resolve, 400))
  
  return (
    <form action={login}>
      <button
        type="submit"
        className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
      >
        Sign In
      </button>
    </form>
  )
}

async function SearchBar() {
  // Simulate component loading delay
  await new Promise(resolve => setTimeout(resolve, 600))
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Message ChatGPT..."
          className="w-full px-6 py-4 text-base bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  )
}

async function SuggestionCards() {
  // Simulate suggestions loading delay
  await new Promise(resolve => setTimeout(resolve, 800))
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
      <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
        <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Create a travel itinerary</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">for a European city adventure</p>
      </div>
      <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
        <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Write a thank you note</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">to my coworkers</p>
      </div>
      <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
        <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Summarize this article</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">for a quick overview</p>
      </div>
      <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
        <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Help me debug</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">a Python script</p>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <header className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          ChatGPT
        </h1>
        <Suspense fallback={<LoginButtonSkeleton />}>
          <LoginButton />
        </Suspense>
      </header>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              How can I help you today?
            </h2>
          </div>

          <Suspense fallback={<SearchBarSkeleton />}>
            <SearchBar />
          </Suspense>

          <Suspense fallback={<SuggestionCardsSkeleton />}>
            <SuggestionCards />
          </Suspense>
        </div>
      </main>
    </div>
  )
}