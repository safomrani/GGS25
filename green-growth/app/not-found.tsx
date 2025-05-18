"use client";

import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const handleRedirect = () => {
      // Try to extract important parts from the URL
      let targetPage = '/summit';
      
      // Check if this might be a registration page URL
      if (pathname?.includes('registration')) {
        // Is it for summit or summit25?
        const version = pathname?.includes('summit25') ? 'summit25' : 'summit';
        // Is it speaker registration?
        const type = pathname?.includes('speaker') ? 'speaker-registration' : 'registration';
        targetPage = `/${version}/${type}`;
      }
      
      // Build the query string
      const params = new URLSearchParams();
      for (const [key, value] of searchParams?.entries() || []) {
        params.append(key, value);
      }
      
      const queryString = params.toString();
      const fullPath = queryString ? `${targetPage}?${queryString}` : targetPage;
      
      // Redirect after delay
      setTimeout(() => {
        router.push(fullPath);
      }, 3000);
    };

    handleRedirect();
  }, [pathname, router, searchParams]);

  return (
    <div className="min-h-screen bg-[#f0f7f5] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-[#0A9B7F] mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          We're sorry, but the page you're looking for doesn't exist or may have been moved.
        </p>
        <p className="text-gray-600 mb-6">
          You'll be automatically redirected to the appropriate page in a few seconds...
        </p>
        <Link href="/summit" 
          className="inline-block bg-[#0A9B7F] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#088973] transition-colors">
          Go to Homepage Now
        </Link>
      </div>
    </div>
  );
} 