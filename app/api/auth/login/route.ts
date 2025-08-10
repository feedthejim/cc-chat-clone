import { NextRequest, NextResponse } from 'next/server'
import { login } from '@/lib/auth'

export async function POST(request: NextRequest) {
  await login()
  return NextResponse.redirect(new URL('/', request.url))
}