"use client";

export default function HeroGGS25() {
  return (
    <div className="w-full bg-[#e1f4f0] min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-8 md:px-20 py-16">
        {/* Main Content */}
        <div className="max-w-2xl">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <div className="text-[#00A881]">Green Growth</div>
            <div className="text-[#00A881]">Summit <span className="text-[#E63946]">2025</span></div>
          </h1>

          {/* Description */}
          <p className="text-black text-lg mb-12 leading-relaxed">
            Unlocking solutions and innovative finance for a just green transition! Hivos is convening the second 
            edition of the Green Growth Summit to drive green innovation, unlock investment opportunities, and 
            strengthen local green ecosystems across the Middle East and North Africa.
          </p>

          {/* Event Cards */}
          <div className="space-y-6">
            {/* Egypt Card */}
            <div>
              <div className="bg-[#0c5545] text-white py-3 px-6 w-[300px] mb-4">
                <h3 className="text-center font-medium tracking-wider">GGS EGYPT</h3>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <rect x="2.5" y="3.5" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2.5 7.5H17.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6.5 1.5V5.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M13.5 1.5V5.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span>June 16th, 2025</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1" viewBox="0 0 20 20" fill="none">
                  <path d="M10 10C11.375 10 12.5 8.875 12.5 7.5C12.5 6.125 11.375 5 10 5C8.625 5 7.5 6.125 7.5 7.5C7.5 8.875 8.625 10 10 10Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M16 7.5C16 13 10 17 10 17C10 17 4 13 4 7.5C4 4.5 6.5 2 10 2C13.5 2 16 4.5 16 7.5Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span>Sofitel Cairo<br />Downtown Nile</span>
              </div>
            </div>

            {/* Tunisia Card */}
            <div>
              <div className="bg-[#0c5545] text-white py-3 px-6 w-[300px] mb-4">
                <h3 className="text-center font-medium tracking-wider">GGS TUNIS</h3>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <rect x="2.5" y="3.5" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2.5 7.5H17.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6.5 1.5V5.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M13.5 1.5V5.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span>Coming soon!</span>
              </div>
            </div>
          </div>

          {/* Invitation Note */}
          <p className="text-sm mt-6 italic">*By invitation only</p>
        </div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px]">
        <div className="relative w-full h-full">
          <div className="grid grid-cols-2 w-full h-full">
            {/* Top Left - Red Quarter */}
            <div className="bg-[#E63946] relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
                <path d="M300,0 A300,300 0 0,1 0,300" fill="none" stroke="white" strokeWidth="30"/>
                <path d="M300,50 A250,250 0 0,1 50,300" fill="none" stroke="white" strokeWidth="30"/>
                <path d="M300,100 A200,200 0 0,1 100,300" fill="none" stroke="white" strokeWidth="30"/>
              </svg>
            </div>
            {/* Top Right - Green Quarter */}
            <div className="bg-[#00A881] relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
                <path d="M0,0 A300,300 0 0,1 300,300" fill="none" stroke="white" strokeWidth="30"/>
                <path d="M50,0 A250,250 0 0,1 300,250" fill="none" stroke="white" strokeWidth="30"/>
                <path d="M100,0 A200,200 0 0,1 300,200" fill="none" stroke="white" strokeWidth="30"/>
              </svg>
            </div>
            {/* Bottom Left - Green Quarter */}
            <div className="bg-[#00A881] relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full rotate-180" viewBox="0 0 300 300">
                <path d="M0,0 A300,300 0 0,1 300,300" fill="none" stroke="white" strokeWidth="30"/>
                <path d="M50,0 A250,250 0 0,1 300,250" fill="none" stroke="white" strokeWidth="30"/>
                <path d="M100,0 A200,200 0 0,1 300,200" fill="none" stroke="white" strokeWidth="30"/>
              </svg>
            </div>
            {/* Bottom Right - Red Quarter */}
            <div className="bg-[#E63946] relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full rotate-180" viewBox="0 0 300 300">
                <path d="M300,0 A300,300 0 0,1 0,300" fill="none" stroke="white" strokeWidth="30"/>
                <path d="M300,50 A250,250 0 0,1 50,300" fill="none" stroke="white" strokeWidth="30"/>
                <path d="M300,100 A200,200 0 0,1 100,300" fill="none" stroke="white" strokeWidth="30"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 