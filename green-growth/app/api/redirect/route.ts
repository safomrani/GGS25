import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const targetRoute = searchParams.get('to');
  const email = searchParams.get('email');
  
  if (!targetRoute) {
    return NextResponse.redirect(new URL('/summit', request.url));
  }
  
  let url = `/${targetRoute}`;
  
  // Preserve email parameter if it exists
  if (email) {
    url += `?email=${encodeURIComponent(email)}`;
  }
  
  // Preserve all other parameters
  for (const [key, value] of searchParams.entries()) {
    if (key !== 'to' && key !== 'email') {
      // Add & if we already have parameters in the URL
      url += url.includes('?') ? '&' : '?';
      url += `${key}=${encodeURIComponent(value)}`;
    }
  }
  
  return NextResponse.redirect(new URL(url, request.url));
}

export const dynamic = 'force-dynamic'; 