import { CalendarIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { karla, robotoBlack, RobotoCondensed } from "./fonts";

export const HeroFigma = (): JSX.Element => {
  return (
    <>
      <div className="relative w-full bg-[#DBF2EE] px-[5%] md:px-[5%] pl-[8%] md:pl-[5%] py-10 overflow-hidden">
        {/* Decorative Design - Small in top right for mobile */}
        <div className="absolute right-[-15%] top-0 w-2/5 h-2/5 md:right-0 md:w-auto md:h-full overflow-hidden">
          <img
            className="h-full w-full object-contain md:opacity-100"
            alt="Decorative Design"
            src="https://c.animaapp.com/3Bdtt5rv/img/design.svg"
          />
        </div>
        {/* Content Section */}
        <div className="relative z-10 w-full md:w-[65%]">
          {/* Title */}          
          <div className={`${robotoBlack.className} font-black text-[52px] sm:text-[64px] md:text-[80px] leading-[1.1] tracking-tighter max-w-[700px]`}>
            <div className="text-[#0ca590] md:inline">
              <span className="block md:inline">Green</span>{" "}
              <span className="block md:inline">Growth</span>{" "}
              <span className="block md:inline">Summit</span>{" "}
            </div>
            <div className="text-[#d51317] md:inline">2025</div>
          </div>

          {/* Description text */}
          <div className={`${karla.className} mt-6 md:mt-8 max-w-[300px] sm:max-w-[500px] md:max-w-[600px] text-black text-[18px] sm:text-xl md:text-2xl leading-[1.3] sm:leading-[1.5]`}>
            Unlocking solutions and innovative finance for a just green transition!
            Hivos is convening the second edition of the Green Growth Summit to drive 
            green innovation, unlock investment opportunities, and 
            strengthen local green ecosystems across the Middle East and North Africa.
          </div>

          {/* Event cards */}
          <div className="mt-8 md:mt-10 flex flex-col md:flex-row md:gap-8 gap-4 max-w-[600px]">
            <div className="w-full md:w-1/2">
              <button className="block md:hidden bg-[#255345] text-white font-bold py-2 px-4 rounded text-center w-full">
                GGS EGYPT
              </button>
              <div className="hidden md:block bg-[#255345] text-white font-bold py-1 px-4 rounded text-center w-full mb-2">
                GGS EGYPT
              </div>
              <div className="flex items-center gap-2 mt-1 md:mt-3">
                <CalendarIcon className="w-[18px] h-[18px] text-[#255345] flex-shrink-0" />
                <div className="font-bold text-[#255345] text-sm md:text-base">June 16th, 2025</div>
              </div>
              <div className="flex items-start gap-2 mt-1 md:mt-2">
                <MapPinIcon className="w-[18px] h-[18px] text-[#255345] flex-shrink-0 mt-1" />
                <div className="font-bold text-[#255345] text-sm md:text-base">
                  Sofitel Cairo Downtown Nile
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <button className="block md:hidden bg-[#255345] text-white font-bold py-2 px-4 rounded text-center w-full mt-2 md:mt-0">
                GGS TUNISIA
              </button>
              <div className="hidden md:block bg-[#255345] text-white font-bold py-1 px-4 rounded text-center w-full mb-2">
                GGS TUNISIA
              </div>
              <div className="flex items-center gap-2 mt-1 md:mt-3">
                <CalendarIcon className="w-[18px] h-[18px] text-[#255345] flex-shrink-0" />
                <div className="font-bold text-[#255345] text-sm md:text-base">Coming soon!</div>
              </div>
            </div>
          </div>

          {/* Invitation note */}
          <div className="mt-6 font-normal italic text-black text-[13px] sm:text-[15px]">
            *By invitation only
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="w-full bg-white py-8 md:py-10 border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            {/* Sponsored By */}
            <div className="w-full lg:w-[38%] mb-10 lg:mb-0 lg:pr-6">
              <div className={`${karla.className} text-black font-medium text-base lg:text-lg mb-4 lg:mb-6 text-center lg:text-left`}> In Partnership With</div>
              <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-3 lg:gap-4 overflow-visible">
                <div className="h-6 sm:h-8 lg:h-9 flex-shrink-0">
                  <img src="/logos/Spark.png" alt="Spark" className="h-full object-contain" />
                </div>
                <div className="h-6 sm:h-8 lg:h-9 flex-shrink-0">
                  <img src="/logos/euNew.png" alt="European Union" className="h-full object-contain" />
                </div>
                <div className="h-6 sm:h-8 lg:h-9 flex-shrink-0">
                  <img src="/icons/GGF_LONG.jpg" alt="Green for Growth Fund" className="h-full object-contain" />
                </div>
                <div className="h-6 sm:h-8 lg:h-9 flex-shrink-0">
                  <img src="/icons/Green Academy.png" alt="Green Academy" className="h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Supported By */}
            <div className="w-full lg:w-[31%] mb-10 lg:mb-0 lg:px-6">
              <div className={`${karla.className} text-black font-medium text-lg mb-6 text-center`}>With Support From</div>
              <div className="flex items-center justify-center gap-4 overflow-visible">
                <div className="h-8 sm:h-9 lg:h-12 flex-shrink-0">
                  <img src="/logos/CFFYE.png" alt="Challenge Fund" className="h-full object-contain" />
                </div>
                <div className="h-8 sm:h-9 lg:h-12 flex-shrink-0">
                  <img src="/logos/MFAN.png" alt="Ministry of Foreign Affairs of the Netherlands" className="h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Implemented By */}
            <div className="w-full lg:w-[28%] lg:pl-4">
              <div className={`${karla.className} text-black font-medium text-lg mb-4 text-center`}>Implementation Partner</div>
              <div className="flex items-center justify-center">
                <div className="h-8 sm:h-9 lg:h-12 flex-shrink-0">
                  <img src="/logos/NewSilkRoad.png" alt="New Silk Road" className="h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
