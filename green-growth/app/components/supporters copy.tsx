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
        <div>
            {/** 
            <div className="hidden md:grid md:grid-cols-3 xl:grid-cols-5 grid-flow-row gap-10 w-full md:w-[80%] md:mx-auto py-10">
                {SupportedBy?.map((company, idx) => (
                    <div className="min-h-[60px] w-full md:w-[80%]" key={idx}>
                        <div className="shadow-xl shadow-gray p-5 rounded-2xl flex items-center justify-center h-full w-full">
                            <div className="md:w-[220px] h-[95px]">
                                <Image
                                    src={company.image}
                                    alt={company.name}
                                    height={90}
                                    width={90}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            */}

            {/**Mobile view */}
            <div className="py-5">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={4}
                    breakpoints={{
                        220: {
                            slidesPerView: 1.5,
                            spaceBetween: 30,
                        },
                        320: {
                            slidesPerView: 2.5,
                            spaceBetween: 30,
                        },
                        640: {
                        slidesPerView: 3.5,
                        spaceBetween: 33,
                        },
                        768: {
                        slidesPerView: 5.6,   
                        spaceBetween: 20, 
                        },
                    }}
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
                </Swiper>
            </div> 
        </div>    
    )
}

