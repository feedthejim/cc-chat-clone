import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('auth')?.value === 'true'
  const { pathname } = request.nextUrl

  // Handle root path - rewrite based on auth state for PPR shells
  if (pathname === '/') {
    if (isLoggedIn) {
      return NextResponse.rewrite(new URL('/chat', request.url))
    } else {
      return NextResponse.rewrite(new URL('/login', request.url))
    }
  }

  // Protect all chat routes - redirect to login if not authenticated
  if (pathname.startsWith('/chat')) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Redirect logged in users away from login page
  if (pathname === '/login' && isLoggedIn) {
    return NextResponse.redirect(new URL('/chat', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}