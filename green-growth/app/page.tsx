"use client"

import Image from "next/image";
import { Separator } from '../components/ui/separator';
import { freehand } from "./components/fonts";
import { karla, karlaBold,karlaExtraBold } from "./components/fonts";
import Hero from "./components/hero";
import FooterBar from "./components/footer";
import { TracksData } from '@/app/data/tracks'
import Supporters from "./components/supporters";
import Track from './components/Tracks';
import NewsSection from '@/app/components/news';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Home() {
  return (
    <>
      <Hero/>
      {/**Summit Tracks */}
      <div className="bg-green-200 py-10 sm:py-20">
        <div className="px-10 sm:px-20 text-3xl"> 
          <span className={`${karlaExtraBold.className} text-green-300`}>Summit</span>
          <span className={`${karlaExtraBold.className} text-red-300`}> Tracks</span>
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
      {/**Event Supporters */}
      <div className="px-10 sm:px-20 py-10 ">
        <div className=" text-3xl py-3"> 
            <span className={`${karlaExtraBold.className} text-green-300`}>Event</span>
            <span className={`${karlaExtraBold.className} text-red-300`}> Supporters</span>
        </div>
        <Supporters/>
      </div>

      {/**News and articles */}
      <div className="bg-green-200 px-10 sm:px-20 py-10">
        <div className=" text-3xl py-3"> 
            <span className={`${karlaExtraBold.className} text-green-300`}>Highlighted</span>
            <span className={`${karlaExtraBold.className} text-red-300`}> Articles</span>
        </div>
        <NewsSection/>
      </div>
      <FooterBar/>
    </>
  );
}
