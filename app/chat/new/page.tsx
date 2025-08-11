import { redirect } from "next/navigation";
import { connection } from "next/server";
import { Suspense } from "react";

async function NewChatPageInner(): Promise<never> {
  await connection();
  // Generate a new chat ID and redirect
  const newChatId = String(Date.now());
  redirect(`/chat/${newChatId}`);
}

export default async function NewChatPage({}: {}) {
  return (
    <Suspense>
      <NewChatPageInner />
    </Suspense>
  );
}
