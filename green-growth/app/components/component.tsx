import { CalendarIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { karla, robotoBlack, RobotoCondensed } from "./fonts";

export const HeroFigma = (): JSX.Element => {
  // Animation variants - Sped up
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const titleStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <>
      <div className="relative w-full bg-[#DBF2EE] px-[5%] md:px-[5%] pl-[8%] md:pl-[5%] py-10 overflow-hidden">
        {/* Decorative Design - Small in top right for mobile */}
        <motion.div 
          className="absolute right-[-15%] top-0 w-2/5 h-2/5 md:right-0 md:w-auto md:h-full overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={slideInRight}
        >
          <img
            className="h-full w-full object-contain md:opacity-100"
            alt="Decorative Design"
            src="/images/Branding.svg"
          />
        </motion.div>
        
        {/* Content Section */}
        <motion.div 
          className="relative z-10 w-full md:w-[65%]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}          
          <motion.div 
            className={`${robotoBlack.className} font-black text-[52px] sm:text-[64px] md:text-[80px] leading-[1.1] tracking-tighter max-w-[700px]`}
            variants={slideInLeft}
          >
            <motion.div 
              className="text-[#0ca590] md:inline"
              variants={titleStagger}
            >
              <motion.span className="block md:inline" variants={fadeInUp}>Green</motion.span>{" "}
              <motion.span className="block md:inline" variants={fadeInUp}>Growth</motion.span>{" "}
              <motion.span className="block md:inline" variants={fadeInUp}>Summit</motion.span>{" "}
            </motion.div>
            <motion.div className="text-[#d51317] md:inline" variants={fadeInUp}>2025</motion.div>
          </motion.div>

          {/* Description text */}
          <motion.div 
            className={`${karla.className} mt-6 md:mt-8 max-w-[300px] sm:max-w-[500px] md:max-w-[600px] text-black text-[18px] sm:text-xl md:text-2xl leading-[1.3] sm:leading-[1.5]`}
            variants={fadeInUp}
          >
            Unlocking solutions and innovative finance for a just green transition!
            Hivos is convening the second edition of the Green Growth Summit to drive 
            green innovation, unlock investment opportunities, and 
            strengthen local green ecosystems across the Middle East and North Africa.
          </motion.div>

          {/* Event cards */}
          <motion.div 
            className="mt-8 md:mt-10 flex flex-col md:flex-row md:gap-8 gap-4 max-w-[600px]"
            variants={staggerContainer}
          >
            <motion.div className="w-full md:w-1/2" variants={fadeInUp}>
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
            </motion.div>

            <motion.div className="w-full md:w-1/2" variants={fadeInUp}>
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
            </motion.div>
          </motion.div>

          {/* Invitation note */}
          <motion.div 
            className="mt-6 font-normal italic text-black text-[13px] sm:text-[15px]"
            variants={fadeIn}
          >
            *By invitation only
          </motion.div>
        </motion.div>
      </div>

      {/* Logos Section */}
      <motion.div 
        className="w-full bg-white py-8 md:py-10 border-t border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <motion.div 
            className="flex flex-col lg:flex-row items-start justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {/* Sponsored By */}
            <motion.div 
              className="w-full lg:w-[38%] mb-10 lg:mb-0 lg:pr-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <div className={`${karla.className} text-black font-medium text-base lg:text-lg mb-4 lg:mb-6 text-center lg:text-left`}> In Partnership With</div>
              <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-2 md:gap-3 lg:gap-1 xl:gap-3 overflow-visible">
                <div className="h-6 sm:h-7 md:h-8 lg:h-6 xl:h-8 flex-shrink-0">
                  <img src="/logos/Spark.png" alt="Spark" className="h-full object-contain" />
                </div>
                <div className="h-6 sm:h-7 md:h-8 lg:h-6 xl:h-8 flex-shrink-0">
                  <img src="/logos/euNew.png" alt="European Union" className="h-full object-contain" />
                </div>
                <div className="h-6 sm:h-7 md:h-8 lg:h-6 xl:h-8 flex-shrink-0">
                  <img src="/icons/GGF_LONG.jpg" alt="Green for Growth Fund" className="h-full object-contain" />
                </div>
                <div className="h-6 sm:h-7 md:h-8 lg:h-6 xl:h-8 flex-shrink-0">
                  <img src="/icons/Green Academy.png" alt="Green Academy" className="h-full object-contain" />
                </div>
              </div>
            </motion.div>

            {/* Supported By */}
            <motion.div 
              className="w-full lg:w-[31%] mb-10 lg:mb-0 lg:px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <div className={`${karla.className} text-black font-medium text-lg mb-6 text-center`}>With Support From</div>
              <div className="flex items-center justify-center gap-3 md:gap-4 lg:gap-2 xl:gap-4 overflow-visible">
                <div className="h-8 sm:h-9 md:h-10 lg:h-8 xl:h-10 flex-shrink-0">
                  <img src="/logos/CFFYE.png" alt="Challenge Fund" className="h-full object-contain" />
                </div>
                <div className="h-8 sm:h-9 md:h-10 lg:h-8 xl:h-10 flex-shrink-0">
                  <img src="/logos/MFAN.png" alt="Ministry of Foreign Affairs of the Netherlands" className="h-full object-contain" />
                </div>
              </div>
            </motion.div>

            {/* Implemented By */}
            <motion.div 
              className="w-full lg:w-[28%] lg:pl-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <div className={`${karla.className} text-black font-medium text-lg mb-4 text-center`}>Implementation Partner</div>
              <div className="flex items-center justify-center">
                <div className="h-8 sm:h-9 md:h-10 lg:h-8 xl:h-10 flex-shrink-0">
                  <img src="/logos/NewSilkRoad.png" alt="New Silk Road" className="h-full object-contain" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
