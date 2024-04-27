import React, { useRef, useState } from 'react';
import NewsCard from './newsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import clsx from 'clsx';
import { SupportedBy } from '../data/supporters';
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
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);
    const [fifth, setFifth] = useState(false);
    const [six, setSix] = useState(false);


  
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
            {SupportedBy?.map((company, idx) => (
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
          {/**Navigation */}
          {/**Desktop navigation */}
          <div className='hidden md:flex items-baseline justify-center gap-1 pt-5'>
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
                setThird(false);
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
                  //check if its 
                  setFirst(false);
                  setMid(true);
                  setThird(false);
                  swiperRef.current?.slideTo(5)
                }}
              />
              <div
                className={clsx(
                  'h-[5px] rounded-full cursor-pointer duration-500',
                  {
                    'w-3 bg-offwhite': !third,
                    'w-7 bg-green-400': third,
                  }
                )}
                onClick={() => {

                  setFirst(false);
                  setMid(false);
                  setThird(true);
                  swiperRef.current?.slideTo(7)

                }}
              />
              </div>
              {/**Mobile Navigation */}
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
                    setThird(false);
                    setFourth(false);
                    setFifth(false);
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
                      //check if its 
                      setFirst(false);
                      setMid(true);
                      setThird(false);
                      setFourth(false);
                      setFifth(false);
                      swiperRef.current?.slideTo(3)
                    }}
                  />
                  <div
                    className={clsx(
                      'h-[5px] rounded-full cursor-pointer duration-500',
                      {
                        'w-3 bg-offwhite': !third,
                        'w-7 bg-green-400': third,
                      }
                    )}
                    onClick={() => {

                      setFirst(false);
                      setMid(false);
                      setThird(true);
                      setFourth(false);
                      setFifth(false);
                      swiperRef.current?.slideTo(6)

                    }}
                  />
                  <div
                    className={clsx(
                      'h-[5px] rounded-full cursor-pointer duration-500',
                      {
                        'w-3 bg-offwhite': !fourth,
                        'w-7 bg-green-400': fourth,
                      }
                    )}
                    onClick={() => {

                      setFirst(false);
                      setMid(false);
                      setThird(false);
                      setFourth(true);
                      setFifth(false);
                      swiperRef.current?.slideTo(9)

                    }}
                  />
              </div>
              {/**Small devices with 1.5 slides */}
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
            </Swiper>
          </div>
        </div>
      </div>
    );
  };
  
export default NewsSection;
  