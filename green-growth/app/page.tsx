"use client"

import Image from "next/image";
import { Separator } from '../components/ui/separator';
import { freehand } from "./components/fonts";
import { karla, karlaBold,karlaExtraBold,RobotoCondensed } from "./components/fonts";
import Hero from "./components/hero";
import FooterBar from "./components/footer";
import { TracksData } from '@/app/data/tracks'
import Speakers from "./components/speakersEgypt";
import SpeakersTunis from "./components/speakersTunis";
import Supporters from "./components/supporters";
import Venue from "./components/venue";
import Track from './components/Tracks';
import FAQ from "./components/faq";
import NewsSection from '@/app/components/news';
import { Transition } from '@headlessui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect, Fragment, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
  
  const[toggleTunis, setToggleTunis] = useState(true);
  const[toggleEgypt, setToggleEgypt] = useState(false);
  const [egyptColor, changeColor] = useState("bg-white text-green-300");
  const [tunisColor, changeTunisColor] = useState("bg-white text-green-300");

  return (
    <>
      {/**Hero section */}
      <Hero/>

      {/**Summit Tracks */}
      <div className="bg-green-200 py-10 sm:py-20">
        <div className="px-10 sm:px-20 text-3xl"> 
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
          {TracksData.map((item,idx) =>{
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
        <div className="sm:hidden flex px-10 py-10" 
         style={{
          backgroundImage:
          "url('/images/tracks-bg-mobile.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right top',
          backgroundSize: 'contain'
        }}>
          <Swiper
            slidesPerView={1.2}
            spaceBetween={15}
          >
          {TracksData.map((item: any, idx: number) => (
            <SwiperSlide key={idx}>
              <div className="">
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
        </div>
      </div>
      {/** */}
      {/**Speakers Desktop
      <div className="px-10 sm:px-20 py-10">
        <div className=" text-3xl py-3"> 
            <span className={`${RobotoCondensed.className} text-green-300`}>Highlighted</span>
            <span className={`${RobotoCondensed.className} text-red-300`}> Speakers</span>
            <div className="pt-10 flex gap-3">
              <button
                  className={`${RobotoCondensed.className} border-2 border-green-300 
                  text-green-300 rounded-md w-[80px] text-[22px] text-center
                  hover:bg-green-300 hover:text-white duration-150 ease-in-out} ${tunisColor}`} 
                  onClick={()=>{setToggleEgypt(false); setToggleTunis(true);  changeTunisColor("bg-green-300 text-white"); changeColor("bg-white text-green-300")}}
                  >
                  Tunisia
              </button>
              <button
                  className={`${RobotoCondensed.className} border-2 border-green-300 
                  text-green-300 rounded-md w-[80px] text-[22px] text-center
                  hover:bg-green-300 hover:text-white 
                  focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-green-300 
                  transition-colors duration-150 ease-in-out} ${egyptColor}`} 
                  onClick={()=>{setToggleEgypt(true); setToggleTunis(false); changeColor("bg-green-300 text-white"); changeTunisColor("bg-white text-green-300")}}
                  >
                  Egypt
              </button>
          </div>
        </div>

        <div>
        {toggleTunis &&(
          <SpeakersTunis/>
        )}
        {toggleEgypt &&(
         <Speakers/>
        )}
        
        </div>
      </div>
      */}

      {/**Event Supporters */}
      {/**Event Supporters 

      <div className="px-10 sm:px-20 py-10 ">
        <div className=" text-3xl py-3"> 
            <span className={`${RobotoCondensed.className} text-green-300`}>Event</span>
            <span className={`${RobotoCondensed.className} text-red-300`}> Supporters</span>
        </div>
        <Supporters/>
      </div>
      
      */}

      {/**FAQs section 
      <div className=" bg-green-200  px-10 sm:px-20 py-10">
        <div className=" text-3xl py-10"> 
            <span className={`${RobotoCondensed.className} text-green-300`}>FAQs</span>
        </div>
        <FAQ/>
      </div>     
*/}
      {/**News and articles */}
      <div className="px-10 sm:px-20 py-10">
        <div className=" text-3xl py-3"> 
            <span className={`${RobotoCondensed.className} text-green-300`}>Highlighted</span>
            <span className={`${RobotoCondensed.className} text-red-300`}> Articles</span>
        </div>
        <NewsSection/>
      </div>

      {/**Venue Desktop view */}
      {/**Venue tabs & toggling each tab 
      <div className="bg-green-200 px-10 sm:px-20 pt-10 pb-5 text-3xl"> 
          <span className={`${RobotoCondensed.className} text-green-300`}>Event</span>
          <span className={`${RobotoCondensed.className} text-red-300`}> Venue</span>
          <div className="pt-10 flex gap-3">
              <button
                  className={`${RobotoCondensed.className} border-2 border-green-300 
                  text-green-300 rounded-md w-[80px] text-[22px] text-center
                  hover:bg-green-300 hover:text-white 
                  whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-green-300 
                  transition-colors duration-150 ease-in-out} ${tunisColor}`} 
                  onClick={()=>{setToggleEgypt(false); setToggleTunis(true); changeTunisColor("bg-green-300 text-white"); changeColor("bg-white text-green-300")}}
                  >
                  Tunisia
              </button>
              <button
                  className={`${RobotoCondensed.className} border-2 border-green-300 
                  text-green-300 rounded-md w-[80px] text-[22px] text-center
                  hover:bg-green-300 hover:text-white 
                  whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-green-300 
                  transition-colors duration-150 ease-in-out} ${egyptColor}`} 
                  onClick={()=>{setToggleEgypt(true); setToggleTunis(false); changeColor("bg-green-300 text-white"); changeTunisColor("bg-white text-green-300")}}
                  >
                  Egypt
              </button>
          </div>
      </div>
      <div>
        {toggleTunis &&(
          <div className='z-10 bg-green-200' 
          style={{
                backgroundImage:
                "url('/images/venue.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right top',
                backgroundSize: 'contain'
            }}
           >
            <Venue
              locationTitle = 'The Tunis Green Growth Summit will be hosted at the newly reonvated, 5-star Conrad Hotel'
              eventDate= 'April 30th, 2024'
              location='Tunis'
              reservation= ''
              directions= ''
              background= ''
              />
          </div>
        )}
        {toggleEgypt &&(
          <div className='z-10 bg-green-200' 
          style={{
                backgroundImage:
                "url('/images/venue9.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right top',
                backgroundSize: 'contain'
            }}
            >
            <Venue
              locationTitle = 'The Egypt Green Growth Summit will be hosted at the newly reonvated, 5-star Conrad Hotel'
              eventDate= 'May 14th, 2024'
              location='Conrad Hotel - Cairo, Egypt'
              reservation= ''
              directions= ''
              background= ''
            />
          </div>
        )}
        
      </div>
      */}

      <FooterBar/>
    </>
  );
}
