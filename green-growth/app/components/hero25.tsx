"use client";

import Image from "next/image";
import { Separator } from '../../components/ui/separator';
import { freehand } from "./fonts";
import { karla, karlaBold, karlaExtraBold, RobotoCondensed } from "./fonts";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Hero25() {
  return (
    <main className="min-h-[90%] items-center pt-1">
        {/**Navbar*/}
        {/* <div className="hidden md:flex items-center justify-between bg-white px-3 sm:px-12 lg:px-20 py-1">
            <a href="https://www.ggsummit.me">
                <Image 
                width={250}
                height={160}
                alt="GGS Logo"
                src={"/logos/Green Growth Summit25 Logo.png"}
                />
            </a>
            
            <div className="mx-auto">
                <h1 className="text-2xl text-green-300"><span className={`${karlaBold.className}`}>#GGSummit25</span></h1>
            </div>
            <a href="https://hivos.org/" target="_blank">
                <img 
                    className="h-[50px] lg:h-[60px]"
                    alt="Hivos Logo"
                    src={"/logos/Hivos.png"}            
                />
            </a>
            
        </div> */}

        {/**Navbar mobile*/}
        {/* <div className="flex md:hidden items-center justify-between bg-white px-3 py-1">
            <a href="https://www.ggsummit.me">
                <Image 
                width={180}
                height={120}
                alt="GGS Logo"
                src={"/logos/Green Growth Summit25 Logo.png"}
                />
            </a>
            
            <a href="https://hivos.org/" target="_blank">
                <img 
                    className="h-[40px]"
                    alt="Hivos Logo"
                    src={"/logos/Hivos.png"}            
                />
            </a> */}
            {/** 
            <div>
                <h1 className="text-[15px] text-green-300"><span className={`${karlaBold.className}`}>#GGSummit24</span></h1>
            </div>
            */}
        {/* </div> */}
        {/**Desktop view */}
        <div>
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="hidden md:block bg-[#E6F5F1] relative overflow-hidden py-10 pb-16"
        >
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="pt-10 px-20 max-w-[800px]"
            >
                {/* Title */}
                <motion.h1 
                  variants={slideUp}
                  className="text-left text-6xl text-[#00A881] font-bold"
                >
                  <div className={`${RobotoCondensed.className}`}>Green Growth</div>
                  <div className={`${RobotoCondensed.className} -mt-2`}>Summit <span className="text-[#E63946]">2025</span></div>
                </motion.h1>
                
                {/* Description */}
                <motion.div variants={slideUp} className="mt-8 mb-10">
                  <p className={`${karla.className} text-lg text-black max-w-[650px] leading-relaxed`}>
                    Unlocking solutions and innovative finance for a just green transition! 
                    Hivos is convening the second edition of the Green Growth Summit to drive green 
                    innovation, unlock investment opportunities, and strengthen local green 
                    ecosystems across the Middle East and North Africa.
                  </p>
                </motion.div>

                {/* Event Buttons - Full width */}
                <motion.div variants={slideUp} className="mt-6 mb-8 space-y-4 max-w-[650px]">
                  <div className="bg-[#0C5545] text-white py-3">
                    <h3 className="text-center text-lg font-normal">GGS EGYPT</h3>
                  </div>
                  
                  <div className="bg-[#0C5545] text-white py-3">
                    <h3 className="text-center text-lg font-normal">GGS TUNIS</h3>
                  </div>
                </motion.div>

                {/* Event Details - Simple text format */}
                <motion.div variants={slideUp} className="space-y-6 mt-6">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="16" height="16" x="2" y="2" stroke="#000" strokeWidth="1" rx="2"/>
                      <path stroke="#000" strokeWidth="1" d="M2 7h16M6 2v4M14 2v4"/>
                    </svg>
                    <span>June 16th, 2025</span>
                  </div>

                  <div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="#000" strokeWidth="1" d="M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        <path stroke="#000" strokeWidth="1" d="M15 8c0 6-5 10-5 10s-5-4-5-10c0-3 2-5 5-5s5 2 5 5z"/>
                      </svg>
                      <span>Sofitel Cairo<br />Downtown Nile</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="16" height="16" x="2" y="2" stroke="#000" strokeWidth="1" rx="2"/>
                      <path stroke="#000" strokeWidth="1" d="M2 7h16M6 2v4M14 2v4"/>
                    </svg>
                    <span>Coming soon!</span>
                  </div>
                </motion.div>

                {/* By invitation only */}
                <motion.div variants={slideUp} className="mt-6 text-sm italic">
                  *By invitation only
                </motion.div>
            </motion.div>
            
            {/* No visible Branding SVG in this version */}
        </motion.div>
        </div>
        {/**Mobile view */}
        <div>
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex md:hidden flex-col bg-[#E6F5F1] relative py-8 px-6"
        >
            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col justify-start"
            >
                {/* Title */}
                <motion.h1 
                    variants={slideUp}
                    className="text-5xl text-[#00A881] font-bold mb-6"
                >
                    <div className={`${RobotoCondensed.className}`}>Green Growth</div>
                    <div className={`${RobotoCondensed.className} -mt-2`}>Summit <span className="text-[#E63946]">2025</span></div>
                </motion.h1>
                
                {/* Description */}
                <motion.div variants={slideUp} className="mb-8">
                    <p className={`${karla.className} text-base text-black`}>
                        Unlocking solutions and innovative finance for a just green transition! 
                        Hivos is convening the second edition of the Green Growth Summit to drive green 
                        innovation, unlock investment opportunities, and strengthen local green 
                        ecosystems across the Middle East and North Africa.
                    </p>
                </motion.div>

                {/* Event Buttons */}
                <motion.div variants={slideUp} className="space-y-4 mb-8">
                    <div className="bg-[#0C5545] text-white py-3">
                        <h3 className="text-center">GGS EGYPT</h3>
                    </div>
                    
                    <div className="bg-[#0C5545] text-white py-3">
                        <h3 className="text-center">GGS TUNIS</h3>
                    </div>
                </motion.div>

                {/* Event Details */}
                <motion.div variants={slideUp} className="space-y-4">
                    <div className="flex items-center gap-3">
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                            <rect width="16" height="16" x="2" y="2" stroke="#000" strokeWidth="1" rx="2"/>
                            <path stroke="#000" strokeWidth="1" d="M2 7h16M6 2v4M14 2v4"/>
                        </svg>
                        <span>June 16th, 2025</span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 mt-1" viewBox="0 0 20 20" fill="none">
                            <path stroke="#000" strokeWidth="1" d="M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path stroke="#000" strokeWidth="1" d="M15 8c0 6-5 10-5 10s-5-4-5-10c0-3 2-5 5-5s5 2 5 5z"/>
                        </svg>
                        <span>Sofitel Cairo<br />Downtown Nile</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                            <rect width="16" height="16" x="2" y="2" stroke="#000" strokeWidth="1" rx="2"/>
                            <path stroke="#000" strokeWidth="1" d="M2 7h16M6 2v4M14 2v4"/>
                        </svg>
                        <span>Coming soon!</span>
                    </div>
                </motion.div>

                {/* By invitation only */}
                <motion.div variants={slideUp} className="mt-6 text-sm italic">
                    *By invitation only
                </motion.div>
            </motion.div>
        </motion.div>
        </div>

        {/* Sponsor Section - Enhanced with repositioned sections */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between py-10 bg-white border-t border-gray-100">
            {/* Sponsored by */}
            <div className="flex flex-col w-full lg:w-auto px-6 lg:px-10 mb-8 lg:mb-0">
                <p className={`${karla.className} text-green-300 font-bold text-lg pb-4 text-center lg:text-left`}>
                    Sponsored by
                    <span className="block h-[2px] w-16 mt-2 bg-red-300 mx-auto lg:mx-0"></span>
                </p>
                <div className="flex flex-wrap gap-4 lg:gap-10 py-2 justify-center lg:justify-start items-center">
                    <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        className="flex items-center shadow-sm p-2 rounded-md hover:shadow-md transition-shadow"
                    >
                        <Image 
                            src="/logos/Spark.png"
                            width={150}
                            height={50}
                            alt="Spark logo"
                            style={{ height: '30px', width: 'auto', objectFit: "contain" }}
                            className="h-[30px] lg:h-[40px]"
                        />
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        className="flex items-center shadow-sm p-2 rounded-md hover:shadow-md transition-shadow"
                    >
                        <Image 
                            src="/logos/euNew.png"
                            width={200}
                            height={50}
                            alt="EU logo"
                            priority
                            quality={100}
                            style={{ height: '30px', width: 'auto', objectFit: "contain" }}
                            className="h-[30px] lg:h-[40px]"
                        />
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        className="flex items-center shadow-sm p-2 rounded-md hover:shadow-md transition-shadow"
                    >
                        <Image 
                            src="/icons/GGF_LONG.jpg"
                            width={180}
                            height={50}
                            alt="GGF logo"
                            style={{ height: '30px', width: 'auto', objectFit: "contain" }}
                            className="h-[30px] lg:h-[40px]"
                        />
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        className="flex items-center shadow-sm p-2 rounded-md hover:shadow-md transition-shadow"
                    >
                        <Image 
                            src="/icons/Green Academy.png"
                            width={160}
                            height={50}
                            alt="Green Academy logo"
                            style={{ height: '30px', width: 'auto', objectFit: "contain" }}
                            className="h-[30px] lg:h-[40px]"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Implementation By and With Support From - Positions Swapped */}
            <div className="flex flex-col lg:flex-row gap-8 px-6 lg:px-10">
                {/* With support from - Always first in both mobile and desktop */}
                <div className="flex flex-col items-center lg:items-start">
                    <p className={`${karla.className} text-green-300 font-bold text-lg pb-4 text-center lg:text-left`}>
                        With support from
                        <span className="block h-[2px] w-16 mt-2 bg-red-300 mx-auto lg:mx-0"></span>
                    </p>
                    <div className="flex flex-row justify-center lg:justify-start gap-4 lg:gap-6">
                        <motion.div 
                            whileHover={{ scale: 1.05 }} 
                            className="flex items-center shadow-sm p-2 rounded-md hover:shadow-md transition-shadow"
                        >
                            <Image 
                                src="/logos/CFFYE.png"
                                width={150}
                                height={50}
                                alt="CFYE logo"
                                style={{ height: '35px', width: 'auto', objectFit: "contain" }}
                                className="h-[35px] lg:h-[45px]"
                            />
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.05 }} 
                            className="flex items-center shadow-sm p-2 rounded-md hover:shadow-md transition-shadow"
                        >
                            <Image 
                                src="/logos/MFAN.png"
                                width={150}
                                height={50}
                                alt="Minbuza logo"
                                style={{ height: '35px', width: 'auto', objectFit: "contain" }}
                                className="h-[35px] lg:h-[45px]"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Implemented by - Always second in both mobile and desktop */}
                <div className="flex flex-col items-center lg:items-start mt-6 lg:mt-0">
                    <p className={`${karla.className} text-green-300 font-bold text-lg pb-4 text-center lg:text-left`}>
                        Implemented by
                        <span className="block h-[2px] w-16 mt-2 bg-red-300 mx-auto lg:mx-0"></span>
                    </p>
                    <div className="flex justify-center">
                        <motion.div 
                            whileHover={{ scale: 1.05 }} 
                            className="flex items-center shadow-sm p-2 rounded-md hover:shadow-md transition-shadow"
                        >
                            <Image 
                                src="/logos/NewSilkRoad.png"
                                width={300}
                                height={120}
                                alt="NSR logo"
                                style={{ height: '40px', width: 'auto', objectFit: "contain" }}
                                className="h-[40px] lg:h-[60px]"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
