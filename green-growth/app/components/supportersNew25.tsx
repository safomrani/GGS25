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

const sliderSettings = {
  220: {
    slidesPerView: 1.5,
    spaceBetween: 30,
  },
  320: {
    slidesPerView: 3,
    spaceBetween: 30,
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
  

const NewsSection = () => {
    const swiperRef = useRef({} as any);
    const [next, setNext] = useState(false);
    const [first, setFirst] = useState(true);
    const [mid, setMid] = useState(false);
    
    // Calculate if we need navigation dots based on number of items
    const totalItems = SupportedBy25.length;
    const needsNavigation = totalItems > 6; // For desktop view (6 items per view)
    const needsMobileNavigation = totalItems > 3; // For mobile view (3 items per view)
    const needsSmallNavigation = totalItems > 1.5; // For small mobile view (1.5 items per view)
  
    return (
      <div className="py-10">
        <div>
          <div className="flex items-center justify-between">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              breakpoints={sliderSettings}
              onReachEnd={() => setNext(true)}
              onReachBeginning={() => setNext(false)}
              spaceBetween={10}
            >
            {SupportedBy25?.map((company, idx) => (
              <SwiperSlide key={idx}>
                  <div className="py-3 min-h-[60px] w-full md:w-[80%]" key={idx}>
                      <div className="shadow-md shadow-gray p-3 lg:p-5 rounded-2xl flex items-center justify-center h-full w-full">
                          <div className="md:w-[220px] h-[80px]">
                              <Image
                                  src={company.image}
                                  alt={company.name}
                                  height={120}
                                  width={120}
                                  className="w-full h-full object-contain"
                              />
                          </div>
                      </div>
                  </div>
              </SwiperSlide>
            ))}
            </Swiper>
            
            {/* Only show navigation dots on mobile if needed */}
            {needsMobileNavigation && (
              <div className='hidden min-[320px]:flex items-baseline justify-center gap-1 pt-5 md:hidden'>
                <div
                  className={clsx(
                    'h-[5px] rounded-full cursor-pointer duration-500',
                    {
                      'w-3 bg-offwhite': !first,
                      'w-7 bg-green-400': first,
                    }
                  )}
                  onClick={() => {
                    setFirst(true);
                    setMid(false);
                    swiperRef.current?.slideTo(0)
                  }}
                />
                <div
                  className={clsx(
                    'h-[5px] rounded-full cursor-pointer duration-500',
                    {
                      'w-3 bg-offwhite': !mid,
                      'w-7 bg-green-400': mid,
                    }
                  )}
                  onClick={() => {
                    setFirst(false);
                    setMid(true);
                    swiperRef.current?.slideTo(3)
                  }}
                />
              </div>
            )}
            
            {/* Only show small device navigation if needed */}
            {needsSmallNavigation && (
              <div className="max-[320px]:flex items-baseline justify-center gap-1 hidden">
                <div
                  className={clsx(
                    'h-[5px] rounded-full cursor-pointer duration-500',
                    {
                      'w-3 bg-offwhite': next,
                      'w-7 bg-green-400': !next,
                    }
                  )}
                  onClick={() => {
                    setNext(false);
                    swiperRef.current?.slidePrev();
                  }}
                />
                <div
                  className={clsx(
                    'h-[5px] rounded-full cursor-pointer duration-500',
                    {
                      'w-3 bg-offwhite': !next,
                      'w-7 bg-green-400': next,
                    }
                  )}
                  onClick={() => {
                    setNext(true);
                    swiperRef.current?.slideNext();
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
export default NewsSection;
  