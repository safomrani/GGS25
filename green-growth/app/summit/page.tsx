"use client"

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Separator } from '../../components/ui/separator';
import { freehand } from "../components/fonts";
import { karla, karlaBold, karlaExtraBold, RobotoCondensed } from "../components/fonts";
import Hero from "../components/hero";
import Hero25 from "../components/hero25";
import FooterBar from "../components/footer";
import FooterBar2 from "../components/footer2";
import { TracksData } from '@/app/data/tracks';
import SpeakersEgypt from "../components/speakersEgypt";
import SpeakersTunis from "../components/speakersTunis";
import Supporters from "../components/supporters";
import Supporters25 from "../components/supportersNew25";
import Venue from "../components/venue";
import Track from '../components/Tracks';
import NewsSection from '@/app/components/news';
import Agenda from "../components/agenda";
import { Agenda25 } from "../components/agenda25";
import { Agenda25V2 } from "../components/agenda25 copy";
import SummitNavbar from "../components/SummitNavbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Hero25Modern from "../components/hero25Modern";
import HeroGGS25 from "../components/HeroGGS25";
import { Component } from "lucide-react";
import { HeroFigma } from "../components/component";
import { newsArticles25 } from "../data/newsArticles25";
import { newsArticles } from "../data/newsArticles";
import { speakersEgypt } from "../data/speakersEgypt";
import { speakersEgypt25 } from "../data/speakersEgypt copy";

export default function SummitPage() {
  const [activeSummit, setActiveSummit] = useState<"summit24" | "summit25">("summit25");
  const [switchDirection, setSwitchDirection] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const heroRef = useRef(null);

  // Common state for both summits
  const [toggleTunis, setToggleTunis] = useState(false);
  const [toggleEgypt, setToggleEgypt] = useState(true);
  const [toggleTunisVenue, setToggleTunisVenue] = useState(false);
  const [toggleEgyptVenue, setToggleEgyptVenue] = useState(true);
  const [egyptColorVenue, changeColorVenue] = useState("bg-green-300 text-white");
  const [tunisColorVenue, changeTunisColorVenue] = useState("bg-transparent text-green-300");
  const [egyptColor, changeColor] = useState("bg-green-300 text-white");
  const [tunisColor, changeTunisColor] = useState("bg-transparent text-green-300");
  const [venueColor, changeVenueColor] = useState("text-red-300");

  // 2024 venue images
  const venue24Background = "/images/venue-egypt.jpg";
  const venue24BackgroundMobile = "/images/venue-egypt-mob.jpg";

  // 2025 venue images
  const venue25Background = "/images/Sofitel Hotel Downtown Cairo.png";
  const venue25BackgroundMobile = "/images/venue-egypt-new-mob final.jpg";

  const [venueBackground, changeBackground] = useState(
    activeSummit === "summit24" ? venue24Background : venue25Background
  );
  const [venueBackgroundMobile, changeBackgroundMobile] = useState(
    activeSummit === "summit24" ? venue24BackgroundMobile : venue25BackgroundMobile
  );

  // Simplified animation variants
  const contentVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction * 50, // Reduced movement for smoother transition
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween", // Changed from spring to tween for smoother transitions
        duration: 0.3, // Shortened duration
        ease: "easeOut"
      }
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction * -50, // Reduced movement
      transition: {
        type: "tween",
        duration: 0.2, // Faster exit
        ease: "easeIn"
      }
    })
  };

  // Hero animation variants
  const heroVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3, // Faster transition
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2 // Faster exit
      }
    }
  };

  // Lighter container variant without stagger (more performant)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  // Toggle between 2024 and 2025 content
  const handleToggle = (summit: "summit24" | "summit25") => {
    if (summit === activeSummit || isAnimating) return;

    // Prevent multiple toggle clicks during animation
    setIsAnimating(true);

    // Scroll to top first for better performance
    if (heroRef.current) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    // Set direction for animation
    const direction = summit === "summit24" ? -1 : 1;
    setSwitchDirection(direction);

    setActiveSummit(summit);

    // Update venue images based on selected summit
    if (summit === "summit24") {
      changeBackground(venue24Background);
      changeBackgroundMobile(venue24BackgroundMobile);
    } else {
      changeBackground(venue25Background);
      changeBackgroundMobile(venue25BackgroundMobile);
    }

    // Reset animation lock after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Reduced timeout
  };

  return (
    <div className="overflow-x-hidden">
      {/* Navbar with toggle button */}
      <SummitNavbar activeSummit={activeSummit} onToggle={handleToggle} />

      {/* Hero Section with Animation - Simple fade transition */}
      <div ref={heroRef}>
        <AnimatePresence mode="wait" initial={true}>
          <motion.div
            key={`hero-${activeSummit}`}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full"
          >
            {activeSummit === "summit24" ? <Hero /> : <HeroFigma />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Summit Tracks Section */}
      <div className="bg-green-200 py-10">
        <div className="px-10 sm:px-20 text-xl md:text-2xl lg:text-3xl">
          <span className={`${RobotoCondensed.className} text-green-300`}>Summit</span>
          <span className={`${RobotoCondensed.className} text-red-300`}> Tracks</span>
        </div>

        {/* Desktop View - Simple fade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`tracks-${activeSummit}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`mx-auto px-10 sm:px-20 pt-10 hidden sm:grid gap-4 ${activeSummit === "summit25"
                ? "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4"
                : "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5"
              }`}
            style={{
              backgroundImage: "url('/images/tracks-bg-mobile.png')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right top',
              backgroundSize: 'contain'
            }}
          >
            {TracksData.slice(activeSummit === "summit24" ? 0 : 5, activeSummit === "summit24" ? 5 : 9).map((item: any, idx: number) => (
              <div key={`track-${item.id}`} className="h-full">
                <Track
                  index={item.id}
                  title={item.title}
                  keynotes={item.keynotes}
                  panel={item.panel}
                  track={item.track}
                  color={item.color}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Mobile View - Simple fade */}
        <div className="sm:hidden px-5 pt-10"
          style={{
            backgroundImage: "url('/images/tracks-bg-mobile.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',
            backgroundSize: 'contain'
          }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`tracks-mobile-${activeSummit}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              <Swiper
                slidesPerView={1.2}
                spaceBetween={15}
                style={{
                  padding: '1px',
                  height: 'auto'
                }}
              >
                {TracksData.slice(activeSummit === "summit24" ? 0 : 5, activeSummit === "summit24" ? 5 : 9).map((item: any, idx: number) => (
                  <SwiperSlide
                    key={`track-mobile-${item.id}`}
                    className="!h-auto"
                  >
                    <div className="h-full">
                      <Track
                        index={item.id}
                        title={item.title}
                        keynotes={item.keynotes}
                        panel={item.panel}
                        track={item.track}
                        color={item.color}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Venue Section */}
      <div className="min-h-[500px]">
        <div className={`relative ${activeSummit === "summit25" ? "min-h-[700px]" : "min-h-[570px]"} h-full`}>
          {/* Desktop background */}
          <div className="hidden md:block">
            <div className="absolute inset-0">
              <Image
                alt="background"
                src={activeSummit === "summit25" ? venue25Background : venueBackground}
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  zIndex: -1
                }}
              />
            </div>
          </div>

          {/* Mobile background */}
          <div className="md:hidden">
            <div className="absolute inset-0">
              <Image
                alt="background"
                src={activeSummit === "summit25" ? venue25BackgroundMobile : venueBackgroundMobile}
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  zIndex: -1
                }}
              />
            </div>
          </div>

          {/* Only render toggle buttons for 2024 edition */}
          {activeSummit === "summit24" && (
            <div className="px-10 sm:px-20 pt-10 pb-3 sm:py-10 text-xl md:text-2xl lg:text-3xl">
              <span className={`${RobotoCondensed.className} text-green-300`}>Event</span>
              <span className={`${RobotoCondensed.className} ${venueColor}`}> Venue</span>

              <div className="pt-3 sm:pt-10 flex items-center gap-3 text-center">
                <button
                  className={`${RobotoCondensed.className} border-2 border-green-300 
                  text-green-300 rounded-md w-[65px] sm:w-[80px] text-[16px] sm:text-[20px] sm:text-[22px]
                  hover:bg-green-300 hover:text-white 
                  transition-colors duration-150 ease-in-out} ${egyptColorVenue}
                  transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`}
                  onClick={() => {
                    setToggleEgyptVenue(true);
                    setToggleTunisVenue(false);
                    changeVenueColor("text-white");
                    changeBackgroundMobile(venue24BackgroundMobile);
                    changeColorVenue("bg-green-300 text-white");
                    changeBackground(venue24Background);
                    changeTunisColorVenue("bg-transparent text-green-300");
                  }}
                >
                  Egypt
                </button>
                <button
                  className={`${RobotoCondensed.className} border-2 border-green-300 
                  rounded-md w-[65px] sm:w-[80px] text-[16px] sm:text-[20px] sm:text-[22px] text-center
                  hover:bg-transparent hover:text-green-300 
                  transition-colors duration-150 ease-in-out} ${tunisColorVenue}
                  transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`}
                  onClick={() => {
                    setToggleEgyptVenue(false);
                    setToggleTunisVenue(true);
                    changeVenueColor("text-red-300");
                    changeBackgroundMobile("/images/venue-tunis-mob.jpg");
                    changeTunisColorVenue("bg-green-300 text-white");
                    changeBackground("/images/venue-tunis.jpg");
                    changeColorVenue("bg-transparent text-green-300");
                  }}
                >
                  Tunisia
                </button>
              </div>
            </div>
          )}

          <div className="h-full">
            {activeSummit === "summit25" ? (
              <Venue
                locationTitle=""
                eventDate="June 16th, 2025"
                location="Sofitel Cairo Downtown Nile"
                directions="https://maps.app.goo.gl/off3jo7Y94SwzcKM9"
                country={false}
                is2025={true}
              />
            ) : (
              <AnimatePresence mode="wait">
                {toggleTunisVenue && (
                  <motion.div
                    key="venue-tunis"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className=''
                  >
                    <Venue
                      locationTitle='The Tunisia Green Growth Summit will be hosted at the Mövenpick Gammarth Hotel'
                      eventDate='April 30th, 2024'
                      location='Mövenpick Gammarth - Tunis, Tunisia'
                      reservation='https://movenpick.accor.com/en/africa/tunisia/tunis/hotel-tunis-gammarth.html'
                      directions='https://maps.app.goo.gl/1brroPnZT4hN5QoV8'
                      country={toggleEgyptVenue}
                    />
                  </motion.div>
                )}
                {toggleEgyptVenue && (
                  <motion.div
                    key="venue-egypt"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className='z-10'
                  >
                    <Venue
                      locationTitle='The Egypt Green Growth Summit will be hosted at the newly renovated, 5-star Conrad Hotel'
                      eventDate='May 14th, 2024'
                      location='Conrad Hotel - Cairo, Egypt'
                      reservation='https://www.hilton.com/en/hotels/caicici-conrad-cairo/rooms/'
                      directions='https://maps.app.goo.gl/CEd63MRVWoEkee8E8'
                      country={toggleEgyptVenue}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>

      {/* Conditional content - Simple fade transitions */}
      <AnimatePresence mode="wait">
        {activeSummit === "summit24" ? (
          <motion.div
            key="summit24-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Speakers Section */}
            <div className="bg-green-200 px-10 sm:px-20 py-10">
              <div className="text-xl md:text-2xl lg:text-3xl">
                <span id='speakers' className={`${RobotoCondensed.className} text-green-300`}>Highlighted</span>
                <span className={`${RobotoCondensed.className} text-red-300`}> Speakers</span>
                <div className="pt-3 sm:pt-10 flex gap-3">
                  <button
                    className={`${RobotoCondensed.className} border-2 border-green-300 
                    text-green-300 rounded-md w-[65px] sm:w-[80px] text-[16px] sm:text-[20px] sm:text-[22px] text-center
                    hover:bg-green-300 hover:text-white 
                    focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-green-300 
                    transition-colors duration-150 ease-in-out} ${egyptColor}
                    transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`}
                    onClick={() => {
                      setToggleEgypt(true);
                      setToggleTunis(false);
                      changeColor("bg-green-300 text-white");
                      changeTunisColor("bg-transparent text-green-300");
                    }}
                  >
                    Egypt
                  </button>
                  <button
                    className={`${RobotoCondensed.className} border-2 border-green-300 
                    text-green-300 rounded-md w-[65px] sm:w-[80px] text-[16px] sm:text-[20px] sm:text-[22px]] text-center
                    hover:bg-transparent hover:text-green-300 duration-150 ease-in-out} ${tunisColor}
                    transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`}
                    onClick={() => {
                      setToggleEgypt(false);
                      setToggleTunis(true);
                      changeTunisColor("bg-green-300 text-white");
                      changeColor("bg-transparent text-green-300");
                    }}
                  >
                    Tunisia
                  </button>
                </div>
              </div>

              <div className="pt-5">
                <AnimatePresence mode="wait">
                  {toggleTunis && (
                    <motion.div
                      key="speakers-tunis"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SpeakersTunis />
                    </motion.div>
                  )}
                  {toggleEgypt && (
                    <motion.div
                      key="speakers-egypt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SpeakersEgypt />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Agenda Section */}
            <div className="py-10 sm:py-20">
              <div className="px-10 sm:px-20 text-xl md:text-2xl lg:text-3xl">
                <span className={`${RobotoCondensed.className} text-green-300`}>Agenda</span>
                <span className={`${RobotoCondensed.className} text-red-300`}> </span>
                {/* Toggle tabs */}
                <div className="pt-3 sm:pt-10 flex gap-3">
                  <button
                    className={`${RobotoCondensed.className} border-2 border-green-300 
                    text-green-300 rounded-md w-[65px] sm:w-[80px] text-[16px] sm:text-[20px] sm:text-[22px] text-center
                    hover:bg-green-300 hover:text-white 
                    transition-colors duration-150 ease-in-out} ${egyptColor}
                    transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`}
                    onClick={() => {
                      setToggleEgypt(true);
                      setToggleTunis(false);
                      changeColor("bg-green-300 text-white");
                      changeTunisColor("bg-transparent text-green-300");
                    }}
                  >
                    Egypt
                  </button>
                  <button
                    className={`${RobotoCondensed.className} border-2 border-green-300 
                    text-green-300 rounded-md w-[65px] sm:w-[80px] text-[16px] sm:text-[20px] sm:text-[22px] text-center
                    hover:bg-transparent hover:text-green-300 
                    transition-colors duration-150 ease-in-out} ${tunisColor}
                    transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`}
                    onClick={() => {
                      setToggleEgypt(false);
                      setToggleTunis(true);
                      changeTunisColor("bg-green-300 text-white");
                      changeColor("bg-transparent text-green-300");
                    }}
                  >
                    Tunisia
                  </button>
                </div>
              </div>

              <div className="">
                <AnimatePresence mode="wait">
                  {toggleTunis && (
                    <motion.div
                      key="agenda-tunis"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="hidden md:block px-10 sm:px-20 py-5" style={{
                        backgroundImage: "url('/images/Hero-mobile-bg.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right',
                      }}>
                        <Agenda country="Tunisia" />
                      </div>
                      {/* Tunisia Mobile view */}
                      <div className="md:hidden px-10 sm:px-20 py-5">
                        <Agenda country="Tunisia" />
                      </div>
                    </motion.div>
                  )}
                  {toggleEgypt && (
                    <motion.div
                      key="agenda-egypt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="hidden md:block px-10 sm:px-20 py-5" style={{
                        backgroundImage: "url('/images/Hero-mobile-bg.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right',
                      }}>
                        <Agenda country="Egypt" />
                      </div>
                      {/* Egypt Mobile view */}
                      <div className="md:hidden px-10 sm:px-20 py-5">
                        <Agenda country="Egypt" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* News and Articles */}
            <div className="bg-green-200 px-10 sm:px-20 py-10">
              <div className="text-xl md:text-2xl lg:text-3xl py-3">
                <span className={`${RobotoCondensed.className} text-green-300`}>Highlighted</span>
                <span className={`${RobotoCondensed.className} text-red-300`}> Articles</span>
              </div>
              <NewsSection newsArticles={newsArticles} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="summit25-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >

            {/* Speakers Section for Summit 2025 */}
            <div className="bg-green-200 px-10 sm:px-20 py-10">
              <div className="text-xl md:text-2xl lg:text-3xl"> 
                <span id='speakers' className={`${RobotoCondensed.className} text-green-300`}>Highlighted</span>
                <span className={`${RobotoCondensed.className} text-red-300`}> Speakers</span>
                {/* <div className="pt-3 sm:pt-10 flex gap-3">
                  <button
                    className={`${RobotoCondensed.className} border-2 border-green-300 
                    text-green-300 rounded-md w-[65px] sm:w-[80px] text-[16px] sm:text-[20px] sm:text-[22px] text-center
                    hover:bg-green-300 hover:text-white 
                    focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-green-300 
                    transition-colors duration-150 ease-in-out} ${egyptColor}
                    transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`} 
                    onClick={() => {
                      setToggleEgypt(true);
                      setToggleTunis(false);
                      changeColor("bg-green-300 text-white");
                      changeTunisColor("bg-transparent text-green-300");
                    }}
                  >
                    Egypt
                  </button>
                  <button
                    className={`${RobotoCondensed.className} border-2 border-green-300 
                    text-green-300 rounded-md w-[65px] sm:w-[80px] text-[16px] sm:text-[20px] sm:text-[22px]] text-center
                    hover:bg-transparent hover:text-green-300 duration-150 ease-in-out} ${tunisColor}
                    transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`} 
                    onClick={() => {
                      setToggleEgypt(false);
                      setToggleTunis(true);
                      changeTunisColor("bg-green-300 text-white");
                      changeColor("bg-transparent text-green-300");
                    }}
                  >
                    Tunisia
                  </button>
                </div> */}
              </div>

              <div className="pt-5">
                <AnimatePresence mode="wait">
                 
              
                    <motion.div
                      key="speakers-egypt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SpeakersEgypt data={speakersEgypt25} />
                    </motion.div>
              
                </AnimatePresence>
              </div>
            </div>

            {/* Agenda Section for Summit 2025 */}
            {/* Header */}
            <header className="mb-0 text-left mt-4 md:mt-6 lg:mt-8 ml-4 md:ml-6 lg:ml-10">
              <div className="text-xl md:text-2xl lg:text-2xl xl:text-3xl py-2 md:py-3 lg:py-2 pl-2 md:pl-4 lg:pl-4">
                <span className={`${RobotoCondensed.className} text-green-300`}>Event</span>
                <span className={`${RobotoCondensed.className} text-red-300`}> Agenda</span>
              </div>
            </header>

            <div className="py-3 md:py-4 lg:py-6 xl:py-8 relative">
              <div className="px-2 md:px-4 lg:px-10 xl:px-20">
                <Agenda25V2 />
              </div>

              {/* Bottom left branding image with responsive sizing */}
              <div className="hidden sm:block absolute bottom-2 md:bottom-4 -left-[10rem] md:-left-[12rem] sm:bottom-6 sm:-left-[11rem] lg:bottom-8 lg:-left-[10rem]">
                <Image
                  src="/images/Branding.svg"
                  alt="Branding"
                  width={500}
                  height={500}
                  className="w-[16rem] h-[16rem] md:w-[18rem] md:h-[18rem] sm:w-[17rem] sm:h-[17rem] lg:w-[20rem] lg:h-[20rem] xl:w-[22rem] xl:h-[22rem] 2xl:w-[24rem] 2xl:h-[24rem] transform scale-x-[-1]"
                />
              </div>
            </div>

            {/* News and Articles */}
            <div className="bg-green-200 px-10 sm:px-20 py-10">
              <div className="text-xl md:text-2xl lg:text-3xl py-3">
                <span className={`${RobotoCondensed.className} text-green-300`}>Highlighted</span>
                <span className={`${RobotoCondensed.className} text-red-300`}> Articles</span>
              </div>
              <NewsSection newsArticles={newsArticles25} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Event Supporters - Simple fade */}
      <div className="px-10 sm:px-20 py-10">
        <div className="text-xl md:text-2xl lg:text-3xl py-3">
          <span className={`${RobotoCondensed.className} text-green-300`}>Event</span>
          <span className={`${RobotoCondensed.className} text-red-300`}> Supporters</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`supporters-${activeSummit}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeSummit === "summit24" ? <Supporters /> : <Supporters25 />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer - Simple fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`footer-${activeSummit}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeSummit === "summit24" ? <FooterBar /> : <FooterBar2 />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 