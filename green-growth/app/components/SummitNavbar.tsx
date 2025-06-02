'use client';

import Image from "next/image";
import { karla, karlaBold, RobotoCondensed } from "./fonts";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SummitNavbarProps = {
  activeSummit: "summit24" | "summit25";
  onToggle: (summit: "summit24" | "summit25") => void;
  hideToggle?: boolean;
};

export default function SummitNavbar({ activeSummit, onToggle, hideToggle }: SummitNavbarProps) {
  // Track scroll position for navbar transparency effect
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logo path based on active summit
  const logoPath = activeSummit === "summit24" 
    ? "/logos/GGS-Logo.png" 
    : "/logos/Green Growth Summit25 Logo.png";

  // Enhanced button animations
  const buttonContainerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    tap: { scale: 0.95 },
    hover: (isActive: boolean) => ({
      scale: isActive ? 1.05 : 1.02,
      y: -2,
      transition: { duration: 0.2 }
    })
  };

  // Active background slider
  const sliderVariants = {
    summit24: {
      x: "0%",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
      }
    },
    summit25: {
      x: "100%", 
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
      }
    }
  };

  // Hashag text animation
  const hashtagVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      {/* Desktop Navbar */}
      <div 
        className={`hidden md:flex items-center justify-between px-3 sm:px-12 lg:px-20 py-3 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
        }`}
      >
        <motion.a 
          href="https://ggsummit.me"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            width={250}
            height={160}
            alt="GGS Logo"
            src={logoPath}
          />
        </motion.a>
        
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.h1 
              key={activeSummit}
              className="text-2xl text-green-300"
              variants={hashtagVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <span className={`${karlaBold.className}`}>
                {activeSummit === "summit24" ? "#GGSummit24" : "#GGSummit25"}
              </span>
            </motion.h1>
          </AnimatePresence>
        </motion.div>

        {/* Toggle Button for Desktop */}
        {!hideToggle && (
          <motion.div 
            className="relative flex items-center gap-2 bg-gray-100 p-1.5 rounded-full shadow-sm"
            variants={buttonContainerVariants}
            initial="initial"
            animate="animate"
          >
            {/* Sliding background effect */}
            <motion.div
              className="absolute h-full top-0 bottom-0 w-[calc(50%-2px)] bg-green-300 rounded-full z-0"
              variants={sliderVariants}
              initial={false}
              animate={activeSummit}
            />
            
            <motion.button
              custom={activeSummit === "summit24"}
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              onClick={() => onToggle("summit24")}
              className={`rounded-full py-2 px-6 font-medium flex items-center justify-center z-10 relative
                        transition-colors duration-300 ${activeSummit === "summit24" ? "text-white" : "text-gray-700"}`}
            >
              <span className={karlaBold.className}>2024</span>
            </motion.button>
            <motion.button
              custom={activeSummit === "summit25"}
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              onClick={() => onToggle("summit25")}
              className={`rounded-full py-2 px-6 font-medium flex items-center justify-center z-10 relative
                        transition-colors duration-300 ${activeSummit === "summit25" ? "text-white" : "text-gray-700"}`}
            >
              <span className={karlaBold.className}>2025</span>
            </motion.button>
          </motion.div>
        )}
        
        <motion.a 
          href="https://hivos.org/" 
          target="_blank"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            width={120}
            height={38}
            alt="Hivos Logo"
            src="/logos/Hivos.png"
            style={{ height: 'auto' }}
          />
        </motion.a>
      </div>

      {/* Mobile Navbar */}
      <div 
        className={`flex md:hidden items-center justify-between py-2 px-3 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
        }`}
      >
        <motion.a 
          href="https://www.ggsummit.me"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <Image 
            width={100}
            height={70}
            alt="GGS Logo"
            src={logoPath}
            className="w-auto h-10"
          />
        </motion.a>
        
        {/* Toggle Button for Mobile */}
        {!hideToggle && (
          <motion.div 
            className="relative flex items-center gap-1 bg-gray-100 p-1 rounded-full shadow-sm mx-2"
            variants={buttonContainerVariants}
            initial="initial"
            animate="animate"
          >
            {/* Sliding background effect */}
            <motion.div
              className="absolute h-full top-0 bottom-0 w-[calc(50%-2px)] bg-green-300 rounded-full z-0"
              variants={sliderVariants}
              initial={false}
              animate={activeSummit}
            />
            
            <motion.button
              custom={activeSummit === "summit24"}
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              onClick={() => onToggle("summit24")}
              className={`rounded-full py-1.5 px-4 font-medium text-sm flex items-center justify-center z-10 relative
                        transition-colors duration-300 ${activeSummit === "summit24" ? "text-white" : "text-gray-700"}`}
            >
              <span className={karlaBold.className}>2024</span>
            </motion.button>
            <motion.button
              custom={activeSummit === "summit25"}
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              onClick={() => onToggle("summit25")}
              className={`rounded-full py-1.5 px-4 font-medium text-sm flex items-center justify-center z-10 relative
                        transition-colors duration-300 ${activeSummit === "summit25" ? "text-white" : "text-gray-700"}`}
            >
              <span className={karlaBold.className}>2025</span>
            </motion.button>
          </motion.div>
        )}
        
        <motion.a 
          href="https://hivos.org/" 
          target="_blank"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <Image 
            width={100}
            height={36}
            alt="Hivos Logo"
            src="/logos/Hivos.png"
            className="w-auto h-10"
          />
        </motion.a>
      </div>
    </div>
  );
} 