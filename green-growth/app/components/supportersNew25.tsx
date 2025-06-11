import React, { useRef, useState } from 'react';
import NewsCard from './newsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import clsx from 'clsx';
import { SupportedBy25 } from '../data/supportersNew';
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y, Grid } from 'swiper/modules';

// Enhanced slider settings - keeping original desktop, improving mobile
const sliderSettings = {
  240: {
    slidesPerView: 1.2,
    spaceBetween: 15,
  },
  320: {
    slidesPerView: 1.8,
    spaceBetween: 20,
  },
  480: {
    slidesPerView: 2.5,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 25,
  },
  768: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
  980: {
    slidesPerView: 6,  
    spaceBetween: 20,
  },
};
  

const SupportersSection = () => {
    const swiperRef = useRef({} as any);
    const [activeIndex, setActiveIndex] = useState(0);
    
    // Calculate total slides needed for different screen sizes
    const totalItems = SupportedBy25.length;
    
    // Mobile navigation logic
    const getMobileSlides = () => {
      // For mobile (< 640px), we show about 1.8 items per view
      return Math.ceil(totalItems / 1.8);
    };
  
    return (
      <div className="py-10">
        <div className="relative">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination]}
            breakpoints={sliderSettings}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            spaceBetween={10}
            className="supporters-swiper"
          >
            {SupportedBy25?.map((company, idx) => (
              <SwiperSlide key={idx}>
                <div className="py-3 min-h-[60px] w-full md:w-[80%]">
                  <div className="shadow-md shadow-gray p-3 md:p-3 lg:p-5 rounded-xl md:rounded-2xl flex items-center justify-center h-full w-full">
                    <div className="w-full h-16 md:w-[220px] md:h-[80px] flex items-center justify-center">
                      <Image
                        src={company.image}
                        alt={company.name}
                        height={120}
                        width={120}
                        className="w-full h-full object-contain"
                        priority={idx < 4}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Enhanced navigation dots for mobile only */}
          {totalItems > 2 && (
            <div className="flex items-center justify-center gap-2 mt-4 md:hidden">
              {Array.from({ length: getMobileSlides() }).map((_, index) => (
                <button
                  key={index}
                  className={clsx(
                    'h-2 rounded-full transition-all duration-300 cursor-pointer',
                    {
                      'w-6 bg-green-400': Math.floor(activeIndex / 2) === index,
                      'w-2 bg-gray-300 hover:bg-gray-400': Math.floor(activeIndex / 2) !== index,
                    }
                  )}
                  onClick={() => {
                    swiperRef.current?.slideTo(index * 2);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  
export default SupportersSection;
  