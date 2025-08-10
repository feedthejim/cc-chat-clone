import { redirect } from "next/navigation";
import { connection } from "next/server";

export default async function NewChatPage() {
  await connection();
  // Generate a new chat ID and redirect
  const newChatId = String(Date.now());
  redirect(`/chat/${newChatId}`);
}
