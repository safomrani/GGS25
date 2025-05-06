'use client';

import { usePathname } from 'next/navigation';

export default function AnnouncementBanner() {
  const pathname = usePathname();
  
  if (pathname !== '/summit24') {
    return null;
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-[#d73732] text-white text-center p-3 text-lg font-bold shadow-md z-50">
        Green Growth Summit 2025 – Coming Soon!
      </div>
      <div className="mt-14"></div> {/* Prevents content overlap */}
    </>
  );
} 