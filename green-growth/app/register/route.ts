import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get('email');
  const type = searchParams.get('type') || 'general'; // general or speaker
  const version = searchParams.get('version') || 'summit25'; // summit or summit25
  
  let targetPath: string;
  
  if (type === 'speaker') {
    targetPath = `/${version}/speaker-registration`;
  } else {
    targetPath = `/${version}/registration`;
  }
  
  // Build the query string
  const params = new URLSearchParams();
  if (email) {
    params.append('email', email);
  }
  
  // Add other parameters
  for (const [key, value] of searchParams.entries()) {
    if (key !== 'type' && key !== 'version' && key !== 'email') {
      params.append(key, value);
    }
  }
  
  const queryString = params.toString();
  const fullPath = queryString ? `${targetPath}?${queryString}` : targetPath;
  
  return NextResponse.redirect(new URL(fullPath, request.url));
}

export const dynamic = 'force-dynamic'; 