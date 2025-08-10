import { Suspense } from "react";
import { getChatMessages } from "@/lib/data";
import { notFound } from "next/navigation";
import { MessagesSkeleton, MessageInputSkeleton } from "@/components/loading";
import { cacheLife } from "next/dist/server/use-cache/cache-life";

async function Messages({ chatId }: { chatId: string }) {
  const messages = await getChatMessages(chatId);

  // For new chats or chats without messages, show empty state
  if (!messages || messages.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-4 max-w-md">
          <div>
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">
              New conversation
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Start a conversation by sending a message below.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`flex ${
              message.role === "user" ? "flex-row-reverse" : "flex-row"
            } gap-4 max-w-[85%]`}
          >
            <div
              className={`px-6 py-4 rounded-3xl ${
                message.role === "user" ? "rounded-tr-md" : "rounded-tl-md"
              } ${
                message.role === "user"
                  ? "glass-user text-slate-800 dark:text-slate-100 shadow-xl"
                  : "glass-ai text-slate-800 dark:text-slate-100 shadow-xl"
              } hover:shadow-2xl transition-all duration-300 ease-out`}
            >
              <div className="whitespace-pre-wrap">{message.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

async function MessageInput() {
  return (
    <form className="flex gap-3 items-end">
      <div className="flex-1 relative">
        <textarea
          name="message"
          placeholder="Message ChatGPT..."
          className="w-full px-4 py-3 pr-12 text-base glass text-slate-800 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 border-0 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400/30 dark:focus:ring-slate-500/30 focus:shadow-xl resize-none min-h-[48px] max-h-[200px] transition-all duration-200"
          rows={1}
        />
        <button
          type="submit"
          className="absolute right-3 bottom-3 p-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default function ChatDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <Suspense fallback={<MessagesSkeleton />}>
            <MessagesWithParams params={params} />
          </Suspense>
        </div>
      </div>

      <div className="border-t border-slate-200/50 dark:border-slate-700/50 p-4 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto">
          <Suspense fallback={<MessageInputSkeleton />}>
            <MessageInput />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

async function MessagesWithParams({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  "use cache: private";
  cacheLife("days");
  const { id } = await params;
  return <Messages chatId={id} />;
}
