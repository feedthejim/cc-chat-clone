import { cookies } from 'next/headers'

export async function isLoggedIn(): Promise<boolean> {
  const cookieStore = await cookies()
  return cookieStore.get('auth')?.value === 'true'
}

export async function login() {
  const cookieStore = await cookies()
  cookieStore.set('auth', 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  })
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('auth')
}