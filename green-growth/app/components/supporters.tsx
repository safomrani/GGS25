import React, { useRef, useState } from 'react';
import NewsCard from './newsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import clsx from 'clsx';
import { newsArticles } from '../data/newsArticles';
import { SupportedBy } from '../data/supporters';
import Image from "next/image";


const sliderSettings = {
  220: {
    slidesPerView: 1.5,
    spaceBetween: 30,
  },
  320: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  640: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 6,   
    spaceBetween: 20, 
  },
  };
  
const NewsSection = () => {
    const swiperRef = useRef({} as any);
    const [next, setNext] = useState(false);
  
    return (
      <div className="py-10">
        <div>
          <div className="flex items-center justify-between">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={sliderSettings}
              onReachEnd={() => setNext(true)}
              onReachBeginning={() => setNext(false)}
              spaceBetween={10}
            >
            {SupportedBy?.map((company, idx) => (
              <SwiperSlide key={idx}>
                  <div className="py-5 min-h-[60px] w-full md:w-[80%]" key={idx}>
                      <div className="shadow-md shadow-gray p-3 lg:p-7 rounded-2xl flex items-center justify-center h-full w-full">
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
  
              <div className="flex items-baseline justify-center gap-1">
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
                    swiperRef.current?.slidePrev();
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
                    swiperRef.current?.slideNext();
                    swiperRef.current?.slideNext();
                  }}
                />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    );
  };
  
export default NewsSection;
  