"use client"

import Image from "next/image";
import { Separator } from '../../components/ui/separator';
import { freehand } from "../components/fonts";
import { karla, karlaBold,karlaExtraBold,RobotoCondensed } from "../components/fonts";
import Hero from "../components/hero";
import FooterBar from "../components/footer";
import { TracksData } from '@/app/data/tracks'
import SpeakersEgypt from "../components/speakersEgypt";
import SpeakersTunis from "../components/speakersTunis";
import Supporters from "../components/supportersNew25";
import Venue from "../components/venue";
import Track from '../components/Tracks';
import FAQ from "../components/faq";
import NewsSection from '@/app/components/news';
import Agenda from "../components/agenda";
import { Transition } from '@headlessui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect, Fragment, useState } from 'react';
import { motion } from "framer-motion"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Hero25 from "../components/hero25";
import FooterBar2 from "../components/footer2";

export default function Home() {
  
  const[toggleTunis, setToggleTunis] = useState(false);
  const[toggleEgypt, setToggleEgypt] = useState(true);
  const[toggleTunisVenue, setToggleTunisVenue] = useState(false);
  const[toggleEgyptVenue, setToggleEgyptVenue] = useState(true);
  const [egyptColorVenue, changeColorVenue] = useState("bg-green-300 text-white");
  const [tunisColorVenue, changeTunisColorVenue] = useState("bg-transparent text-green-300");
  const [egyptColor, changeColor] = useState("bg-green-300 text-white");
  const [tunisColor, changeTunisColor] = useState("bg-transparent text-green-300");
  const [venueColor, changeVenueColor] = useState("text-red-300");
  const [venueBackground, changeBackground] = useState("/images/venue-egypt-new-deskk.jpg");
  const [venueBackgroundMobile, changeBackgroundMobile] = useState("/images/venue-egypt-new-mob.jpg");


  {/**Animation */}
  const variants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.6,
            duration: 0.8
        },
    }
  }
  return (
    <>
      {/**Hero section */}
      <Hero25/>

      {/**Summit Tracks */}
      <div className="bg-green-200 py-10 ">
        <div className="px-10 sm:px-20 text-xl md:text-2xl lg:text-3xl"> 
          <span className={`${RobotoCondensed.className} text-green-300`}>Summit</span>
          <span className={`${RobotoCondensed.className} text-red-300`}> Tracks</span>
        </div>
        {/**Desktop view */}
        <div className="mx-auto px-20 py-10 hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5"
          style={{
          backgroundImage:
          "url('/images/tracks-bg-mobile.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right top',
          backgroundSize: 'contain'
        }}>
          {TracksData.slice(5).map((item,idx) =>{
            return(
            <div key={idx} className="mb-2">
              <Track 
                index={item.id}
                title={item.title}
                keynotes={item.keynotes}
                panel={item.panel}
                track={item.track}
                color={item.color}
              />
            </div>
          )}
          )}
        </div>
        {/**Mobile view */}        
        <div className="sm:hidden px-10 py-10" 
         style={{
          backgroundImage:
          "url('/images/tracks-bg-mobile.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right top',
          backgroundSize: 'contain'
        }}>
          <div className="grid grid-cols-1 gap-4">
          {TracksData.slice(5).map((item, idx) => (
            <div key={idx} className="mb-3">
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
          </div>
        </div>
        </div>
      {/** */}


      {/**Venue Desktop view */}
      {/**Venue tabs & toggling each tab */}
      <div className="min-h-[500px]">
        <div className = {`relative min-h-[570px] h-full`}>
          {/**Desktop background */}
          <div className="hidden md:block">
            <Image 
              alt="background"
              src={venueBackground}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
                zIndex: -1
              }}
            />
          </div>
          {/**Mobile background */}
          <div className="md:hidden">
            <Image 
              alt="background"
              src={venueBackgroundMobile}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
                zIndex: -1,
              }}
            />
          </div>

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
                        onClick={()=>{setToggleEgyptVenue(true); setToggleTunisVenue(false); changeVenueColor("text-white"); changeBackgroundMobile("/images/venue-egypt-mob.jpg");
                        changeColorVenue("bg-green-300 text-white"); changeBackground("/images/venue-egypt.jpg") ;changeTunisColorVenue("bg-transparent text-green-300")}}
                    >
                      Egypt
                  </button>
                  {/* <button
                      className={`${RobotoCondensed.className} border-2 border-green-300 
                      rounded-md w-[65px] sm:w-[80px] text-[16px] sm:text-[20px] sm:text-[22px] text-center
                      hover:bg-transparent hover:text-green-300 
                      transition-colors duration-150 ease-in-out} ${tunisColorVenue}
                      transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`} 
                      onClick={()=>{setToggleEgyptVenue(false); setToggleTunisVenue(true); changeVenueColor("text-red-300"); changeBackgroundMobile("/images/venue-tunis-mob.jpg");
                        changeTunisColorVenue("bg-green-300 text-white"); changeBackground("/images/venue-tunis.jpg") ;changeColorVenue("bg-transparent text-green-300")}}
                  >
                      Tunisia
                  </button> */}
              </div>
          </div>
          <div className="h-full">
            {/* {toggleTunisVenue &&(
              <div className=''>
                <Venue
                  locationTitle = 'The Tunisia Green Growth Summit will be hosted at the Mövenpick Gammarth Hotel'
                  eventDate= 'April 30th, 2024'
                  location='Mövenpick Gammarth - Tunis, Tunisia'
                  reservation= 'https://movenpick.accor.com/en/africa/tunisia/tunis/hotel-tunis-gammarth.html'
                  directions= 'https://maps.app.goo.gl/1brroPnZT4hN5QoV8'
                  country={toggleEgyptVenue}
                  />
              </div>
            )} */}
            {toggleEgyptVenue &&(
              <div className='z-10'>
                <Venue
                  locationTitle = 'The Egypt Green Growth Summit will be hosted at the newly renovated, 5-star Sofitel Cairo Downtown Nile'
                  eventDate= 'June 16th, 2025'
                  location='Sofitel Cairo Downtown Nile'
                //   reservation= 'https://www.hilton.com/en/hotels/caicici-conrad-cairo/rooms/'
                  directions= 'https://maps.app.goo.gl/off3jo7Y94SwzcKM9'
                  country={toggleEgyptVenue}
                />
              </div>
            )}  
          </div>
        </div>
      </div>

      {/**Speakers Desktop */}

      {/* <div className="bg-green-200 px-10 sm:px-20 py-10"> */}
        {/* <div className="text-xl md:text-2xl lg:text-3xl"> 
            <span id='speakers' className={`${RobotoCondensed.className} text-green-300`}>Highlighted</span>
            <span className={`${RobotoCondensed.className} text-red-300`}> Speakers</span>
            <div className="pt-3 sm:pt-10 flex gap-3">
            <button
                  className={`${RobotoCondensed.className} border-2 border-green-300 
                  text-green-300 rounded-md w-[65px] sm:w-[80px] text-[16px] sm:text-[20px] sm:text-[22px] text-center
                  hover:bg-green-300 hover:text-white 
                  focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-green-300 
                  transition-colors duration-150 ease-in-out} ${egyptColor}
                  transition  duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`} 
                  onClick={()=>{setToggleEgypt(true); setToggleTunis(false); changeColor("bg-green-300 text-white"); changeTunisColor("bg-transparent text-green-300")}}
                  >
                  Egypt
              </button>
              <button
                  className={`${RobotoCondensed.className} border-2 border-green-300 
                  text-green-300 rounded-md w-[65px] sm:w-[80px] text-[16px] sm:text-[20px] sm:text-[22px]] text-center
                  hover:bg-transparent	 hover:text-green-300 duration-150 ease-in-out} ${tunisColor}
                  transition  duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`} 
                  onClick={()=>{setToggleEgypt(false); setToggleTunis(true);  changeTunisColor("bg-green-300 text-white"); changeColor("bg-transparent text-green-300")}}
                  >
                  Tunisia
              </button>

          </div>
        </div> */}

        {/* <div className="pt-5">
          {toggleTunis &&(
            <SpeakersTunis/>
          )}
          {toggleEgypt &&(
          <SpeakersEgypt/>
          )}
        </div> */}
      {/* </div> */}

      {/**Agenda section */}
      <div className="py-10 sm:py-20">
        {/* <div className="px-10 sm:px-20 text-xl md:text-2xl lg:text-3xl"> 
            <span className={`${RobotoCondensed.className} text-green-300`}>Agenda</span>
            <span className={`${RobotoCondensed.className} text-red-300`}> </span>
            Toggle tabs 
            <div className="pt-3 sm:pt-10 flex gap-3">
            <button
                    className={`${RobotoCondensed.className} border-2 border-green-300 
                    text-green-300 rounded-md w-[65px] sm:w-[80px] text-[16px] sm:text-[20px] sm:text-[22px] text-center
                    hover:bg-green-300 hover:text-white 
                    transition-colors duration-150 ease-in-out} ${egyptColor}
                    transition  duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`} 
                    onClick={()=>{setToggleEgypt(true); setToggleTunis(false); changeColor("bg-green-300 text-white"); changeTunisColor("bg-transparent text-green-300")}}
                    >
                    Egypt
                </button>
                <button
                    className={`${RobotoCondensed.className} border-2 border-green-300 
                    text-green-300 rounded-md w-[65px] sm:w-[80px] text-[16px] sm:text-[20px] sm:text-[22px] text-center
                    hover:bg-transparent hover:text-green-300 
                    transition-colors duration-150 ease-in-out} ${tunisColor}
                    transition  duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`} 
                    onClick={()=>{setToggleEgypt(false); setToggleTunis(true); changeTunisColor("bg-green-300 text-white"); changeColor("bg-transparent text-green-300")}}
                    >
                    Tunisia
                </button>
            </div>
        </div> */}

        {/* <div className="">
          {toggleTunis &&(
            <motion.div 
            variants={variants}
            initial="hidden"
            animate="show"
            >
              <div className="hidden md:block px-10 sm:px-20 py-5" style={{
                  backgroundImage:
                  "url('/images/Hero-mobile-bg.png')",
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right',
              }}>
                <Agenda country="Tunisia"/>
              </div>
              Tunisia Mobile view
              <div className="md:hidden px-10 sm:px-20 py-5">
                <Agenda country="Tunisia"/>
              </div>
            </motion.div>
          )}
          {toggleEgypt &&(
            <motion.div 
              variants={variants}
              initial="hidden"
              animate="show"
            >
              <div className="hidden md:block px-10 sm:px-20 py-5" style={{
                  backgroundImage:
                  "url('/images/Hero-mobile-bg.png')",
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right',
              }}>
                <Agenda country="Egypt"/>
              </div>
              Egypt sMobile view 
              <div className="md:hidden px-10 sm:px-20 py-5">
                <Agenda country="Egypt"/>
              </div>
              </motion.div>
          )}  
        </div> */}
      </div>

      
      
      {/* News and articles 
      <div className="bg-green-200 px-10 sm:px-20 py-10">
        <div className="text-xl md:text-2xl lg:text-3xl py-3"> 
            <span className={`${RobotoCondensed.className} text-green-300`}>Highlighted</span>
            <span className={`${RobotoCondensed.className} text-red-300`}> Articles</span>
        </div>
        <NewsSection/>
      </div> */}
      {/**Event Supporters */}

      <div className=" px-10 sm:px-20 py-10 ">
        <div className="text-xl md:text-2xl lg:text-3xl py-3"> 
            <span className={`${RobotoCondensed.className} text-green-300`}>Event</span>
            <span className={`${RobotoCondensed.className} text-red-300`}> Supporters</span>
        </div>
        <Supporters/>
      </div>
      
      <FooterBar2/>
    </>
  );
} 