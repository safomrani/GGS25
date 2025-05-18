import { NextRequest, NextResponse } from 'next/server';

// This middleware runs before the route is processed
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  
  // Direct return for existing routes
  if (
    pathname.match(/^\/(summit|summit25)\/(registration|speaker-registration)$/) ||
    pathname.match(/^\/(_next|api|icons|logos|images|favicon.ico)/)
  ) {
    return NextResponse.next();
  }
  
  // Special handling for routes that might have been redirected incorrectly
  // For example: /summit/registration or /summit/speaker-registration
  if (
    pathname.match(/\/summit\/(registration|speaker-registration)/) || 
    pathname.match(/\/summit25\/(registration|speaker-registration)/)
  ) {
    // Keep the URL as is but make sure it gets passed to Next.js for processing
    return NextResponse.rewrite(request.nextUrl);
  }

  // Default fallback - let Next.js handle it
  return NextResponse.next();
}

// Configure which paths the middleware will run on
export const config = {
  // Apply the middleware to all paths that might be registration-related
  matcher: [
    // Match registration and speaker-registration paths in both summit and summit25
    '/summit/registration',
    '/summit/registration/:path*',
    '/summit/speaker-registration',
    '/summit/speaker-registration/:path*',
    '/summit25/registration',
    '/summit25/registration/:path*',
    '/summit25/speaker-registration',
    '/summit25/speaker-registration/:path*',
  ],
}; 