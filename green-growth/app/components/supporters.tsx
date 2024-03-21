"use client"

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SupportedBy } from '../data/supporters';
import Image from "next/image";

export default function Supporters() {
    return (
        <div className="hidden md:flex flex-row lg:justify-center items-center gap-10 lg:gap-36 py-10 px-20">
            <Image
                src="/logos/Impact Europe.png"
                alt="Impact Europe"
                width={130}
                height={220}
            />
            <Image
                alt="Challenge Fund for Youth Employment"
                src="/logos/CFFYE.png"
                width={160}
                height={220}
            />
            <Image
                alt="Ministry of Affairs in Netherlands"
                src="/logos/MFAN.png"
                width={450}
                height={120}
            />
        {/** 
        <div className='mt-7'>
            <div>
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    640: {
                    slidesPerView: 3,
                    spaceBetween: 43,
                    },
                    768: {
                    slidesPerView: 4,   
                    spaceBetween: 30, 
                    },
                }}
            >
                {SupportedBy?.map((company, idx) => (
                    <SwiperSlide key={idx}>
                        <div className='mx-7 mb-10 pb-10 px-10' key={idx}>
                            <div className="flex items-center justify-between my-1 h-[120px]">
                                <div className="h-[58px] w-[120px] lg:w-44 ">
                                    <img
                                    className="object-contain h-full w-full"
                                    src={`${company.image}`}
                                    alt={`${company.name}`}
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
        */}
        </div> 
    )
}

