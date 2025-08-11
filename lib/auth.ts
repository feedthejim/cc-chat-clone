import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function isLoggedIn(): Promise<boolean> {
  const cookieStore = await cookies()
  return cookieStore.get('auth')?.value === 'true'
}

export async function login() {
  'use server'
  
  const cookieStore = await cookies()
  cookieStore.set('auth', 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  })
  
  redirect('/')
}

export async function logout() {
  'use server'
  
  const cookieStore = await cookies()
  cookieStore.delete('auth')
  
  redirect('/')
}