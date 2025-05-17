import Image from "next/image";
import { Separator } from '../../components/ui/separator';
import { freehand } from "./fonts";
import { karla, karlaBold, karlaExtraBold, RobotoCondensed } from "./fonts";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

const slideUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const logoContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const logoItem = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4 }
  }
};

export default function Hero25Modern() {
  // Animation controls for better control of animation triggering
  const mainControls = useAnimation();
  const logoControls = useAnimation();

  // Start animations as soon as component mounts
  useEffect(() => {
    const startAnimations = async () => {
      await mainControls.start("visible");
      await logoControls.start("visible");
    };
    
    startAnimations();
  }, [mainControls, logoControls]);
  
  return (
    <AnimatePresence>
      <main className="min-h-[90%] items-center pt-1 overflow-hidden">
        {/**Desktop view */}
        <motion.div 
          initial="hidden"
          animate={mainControls}
          variants={fadeIn}
          className="hidden md:block relative bg-gradient-to-br from-green-50 to-green-100 overflow-hidden"
        >
          {/* Background design elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1.5 }}
            className="absolute right-0 top-0 w-3/4 h-full"
            style={{
              backgroundImage: "url('/images/Hero-BG.png')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right top',
              backgroundSize: 'contain',
              filter: 'blur(2px)'
            }}
          />
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between px-3 md:px-12 lg:px-24 py-12">
            {/* Left content section */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate={mainControls}
              className="md:w-[60%] lg:w-[55%]"
            >
              <motion.div 
                variants={slideInLeft}
                className="inline-block px-3 py-1.5 mb-4 bg-green-300/10 rounded-full border border-green-300/20"
              >
                <span className={`${karlaBold.className} text-sm text-green-700`}>#GGSummit25</span>
              </motion.div>
              
              <motion.h1 
                variants={slideInLeft}
                className="text-3xl md:text-[44px] lg:text-6xl text-green-800 font-bold mb-4"
              >
                <span className={`${RobotoCondensed.className}`}>Green Growth Summit 2025</span>
              </motion.h1>
              
              <motion.div variants={slideInLeft} className="pr-4 mb-8">
                <p className={`${karla.className} text-[17px] text-gray-700 leading-relaxed`}>
                  Unlocking solutions and innovative finance for a just green transition! Hivos is convening the Green Growth Summit 2025, to drive green innovation, unlock investment opportunities, and strengthen local green ecosystems across the Middle East and North Africa.
                </p>
              </motion.div>
              
              {/* Event details in cards */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate={mainControls}
                className="flex flex-row flex-wrap gap-6 mb-6"
              >
                <motion.div 
                  variants={slideUp}
                  className="flex-1 min-w-[240px] bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="mb-3">
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${karlaBold.className} inline-block text-[15px] text-white bg-green-600 px-3 py-1 rounded-full`}
                    >
                      GGS Egypt
                    </motion.span>
                  </div>
                  <div className="space-y-3">
                    <div className={`${karlaBold.className} text-[15px] flex flex-row gap-2 items-center text-gray-700`}>
                      <Image
                        width={22}
                        height={22}
                        src="/icons/Calendar.png"
                        alt="calendar"
                      />
                      June 16th, 2025
                    </div>
                    <div className={`${karlaBold.className} text-[15px] flex flex-row gap-2 items-center text-gray-700`}>
                      <Image
                        width={22}
                        height={22}
                        src="/icons/Location.png"
                        alt="location"
                      />
                      Sofitel Cairo Downtown Nile
                    </div>
                    <div className="pt-1">
                      <div className={`${karla.className} text-[13px] text-gray-500`}>*By invitation only</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={slideUp}
                  className="flex-1 min-w-[240px] bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="mb-3">
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${karlaBold.className} inline-block text-[15px] text-white bg-green-600 px-3 py-1 rounded-full`}
                    >
                      GGS Tunisia
                    </motion.span>
                  </div>
                  <div className="space-y-3">
                    <div className={`${karlaBold.className} text-[15px] flex flex-row gap-2 items-center text-gray-700`}>
                      Coming Soon!
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Right image section - could be replaced with an actual image */}
            <motion.div 
              variants={slideInRight}
              initial="hidden"
              animate={mainControls}
              className="hidden lg:flex justify-end items-center md:w-[40%] lg:w-[45%]"
            >
              <div className="relative w-full max-w-md h-[400px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute inset-0 bg-green-200 rounded-lg"
                  style={{
                    backgroundImage: "url('/images/Hero-BG.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/**Mobile view */}
        <motion.div 
          initial="hidden"
          animate={mainControls}
          variants={fadeIn}
          className="flex md:hidden flex-col bg-gradient-to-b from-green-50 to-green-100 overflow-hidden relative"
        >
          {/* Background design element - fixed z-index */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            transition={{ duration: 1.5 }}
            className="absolute right-0 bottom-0 w-full h-3/4 z-0"
            style={{
              backgroundImage: "url('/images/Hero-mobile.png')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right bottom',
              backgroundSize: 'contain',
              filter: 'blur(1px)'
            }}
          />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={mainControls}
            className="relative z-10 flex flex-col px-5 pt-10 pb-6"
          >
            <motion.div 
              variants={slideUp}
              className="inline-block self-start px-3 py-1.5 mb-4 bg-green-300/10 rounded-full border border-green-300/20"
            >
              <span className={`${karlaBold.className} text-sm text-green-700`}>#GGSummit25</span>
            </motion.div>
            
            <motion.h1 
              variants={slideUp}
              className="py-1 text-left text-2xl sm:text-3xl text-green-800 font-bold"
            >
              <span className={`${RobotoCondensed.className}`}>Green Growth Summit 2025</span>
            </motion.h1>
            
            <motion.p 
              variants={slideUp}
              className={`${karla.className} w-[90%] pt-3 text-[15px] text-gray-700 leading-relaxed mb-8`}
            >
              Unlocking solutions and innovative finance for a just green transition! Hivos is convening the Green Growth Summit 2025, to drive green innovation, unlock investment opportunities, and strengthen local green ecosystems across the Middle East and North Africa.
            </motion.p>
          </motion.div>
          
          {/* Event cards - stacked on mobile */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={mainControls}
            className="relative z-10 px-5 space-y-5 pb-10"
          >
            <motion.div 
              variants={slideUp}
              className="bg-white rounded-xl p-5 shadow-sm"
            >
              <div className="mb-3">
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${karlaBold.className} inline-block text-[15px] text-white bg-green-600 px-3 py-1 rounded-full`}
                >
                  GGS Egypt
                </motion.span>
              </div>
              <div className="space-y-3">
                <div className={`${karlaBold.className} text-[14px] flex flex-row gap-2 items-center text-gray-700`}>
                  <Image
                    width={20}
                    height={20}
                    src="/icons/Calendar.png"
                    alt="calendar"
                  />
                  June 16th, 2025
                </div>
                <div className={`${karlaBold.className} text-[14px] flex flex-row gap-2 items-center text-gray-700`}>
                  <Image
                    width={20}
                    height={20}
                    src="/icons/Location.png"
                    alt="location"
                  />
                  Sofitel Cairo Downtown Nile
                </div>
                <div className="pt-1">
                  <div className={`${karla.className} text-[12px] text-gray-500`}>*By invitation only</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "70%" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="self-center"
            >
              <Separator className='bg-red-300' />
            </motion.div>
            
            <motion.div 
              variants={slideUp}
              className="bg-white rounded-xl p-5 shadow-sm"
            >
              <div className="mb-3">
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${karlaBold.className} inline-block text-[15px] text-white bg-green-600 px-3 py-1 rounded-full`}
                >
                  GGS Tunisia
                </motion.span>
              </div>
              <div className="space-y-3">
                <div className={`${karlaBold.className} text-[14px] flex flex-row gap-2 items-center text-gray-700`}>
                  Coming Soon!
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Sponsor Section - Improved mobile alignment */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col py-10 bg-white border-t border-gray-100 shadow-sm"
        >
          <div className="container mx-auto px-6 lg:px-10">
            {/* Sponsored by */}
            <div className="mb-10">
              <p className={`${karla.className} text-green-700 font-bold text-lg pb-3 text-center`}>
                Sponsored by
                <span className="block h-[2px] w-16 mt-2 bg-red-300 mx-auto"></span>
              </p>
              
              <div className="flex justify-center">
                <motion.div 
                  variants={logoContainer}
                  initial="hidden"
                  animate={logoControls}
                  className="flex flex-wrap items-center justify-center gap-6 py-4"
                >
                  <motion.div variants={logoItem} whileHover={{ scale: 1.05 }} className="flex-shrink-0">
                    <Image 
                      src="/logos/Spark.png"
                      width={150}
                      height={50}
                      alt="Spark logo"
                      className="h-[35px] w-auto object-contain"
                    />
                  </motion.div>
                  <motion.div variants={logoItem} whileHover={{ scale: 1.05 }} className="flex-shrink-0">
                    <Image 
                      src="/logos/euNew.png"
                      width={200}
                      height={50}
                      alt="EU logo"
                      priority
                      quality={100}
                      className="h-[35px] w-auto object-contain"
                    />
                  </motion.div>
                  <motion.div variants={logoItem} whileHover={{ scale: 1.05 }} className="flex-shrink-0">
                    <Image 
                      src="/icons/GGF_LONG.jpg"
                      width={180}
                      height={50}
                      alt="GGF logo"
                      className="h-[35px] w-auto object-contain"
                    />
                  </motion.div>
                  <motion.div variants={logoItem} whileHover={{ scale: 1.05 }} className="flex-shrink-0">
                    <Image 
                      src="/icons/Green Academy.png"
                      width={160}
                      height={50}
                      alt="Green Academy logo"
                      className="h-[35px] w-auto object-contain"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              {/* With support from */}
              <div className="mb-8 lg:mb-0">
                <p className={`${karla.className} text-green-700 font-bold text-lg pb-3 text-center lg:text-left`}>
                  With support from
                  <span className="block h-[2px] w-16 mt-2 bg-red-300 mx-auto lg:mx-0"></span>
                </p>
                
                <motion.div 
                  variants={logoContainer}
                  initial="hidden"
                  animate={logoControls}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-6 py-3"
                >
                  <motion.div variants={logoItem} whileHover={{ scale: 1.05 }} className="flex-shrink-0">
                    <Image 
                      src="/logos/CFFYE.png"
                      width={150}
                      height={50}
                      alt="CFYE logo"
                      className="h-[40px] w-auto object-contain"
                    />
                  </motion.div>
                  <motion.div variants={logoItem} whileHover={{ scale: 1.05 }} className="flex-shrink-0">
                    <Image 
                      src="/logos/MFAN.png"
                      width={150}
                      height={50}
                      alt="Minbuza logo"
                      className="h-[40px] w-auto object-contain"
                    />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Implemented by */}
              <div>
                <p className={`${karla.className} text-green-700 font-bold text-lg pb-3 text-center lg:text-left`}>
                  Implemented by
                  <span className="block h-[2px] w-16 mt-2 bg-red-300 mx-auto lg:mx-0"></span>
                </p>
                
                <motion.div 
                  variants={logoContainer}
                  initial="hidden"
                  animate={logoControls}
                  className="flex items-center justify-center lg:justify-start py-3"
                >
                  <motion.div variants={logoItem} whileHover={{ scale: 1.05 }} className="flex-shrink-0">
                    <Image 
                      src="/logos/NewSilkRoad.png"
                      width={300}
                      height={120}
                      alt="NSR logo"
                      className="h-[40px] w-auto object-contain"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </AnimatePresence>
  );
} 