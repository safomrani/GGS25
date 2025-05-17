import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Growth Summit",
  description: "",
};

const ClientAnnouncementBanner = dynamic(() => import('./components/AnnouncementBanner'), {
  ssr: false
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ClientAnnouncementBanner />
      {/* <div className="fixed top-0 left-0 w-full bg-[#d73732] text-white text-center p-3 text-lg font-bold shadow-md z-50">
        Green Growth Summit 2025 -  visit us at <a href="https://www.ggsummit.me/summit25" className="underline">www.ggsummit.me/summit25</a>
    </div> */}
    {/* <div className="mt-14"></div>  */}
    {/* Prevents content overlap */}
    {children}
</body>
    </html>
  );
}
