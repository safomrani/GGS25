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
            <div className="hidden md:grid md:grid-cols-3 xl:grid-cols-5 grid-flow-row gap-10 w-full md:w-[80%] md:mx-auto py-10">
                {SupportedBy?.map((company, idx) => (
                    <div className="min-h-[60px] w-full md:w-[80%]" key={idx}>
                        <div className="shadow-xl shadow-gray p-7 rounded-2xl flex items-center justify-center h-full w-full">
                            <div className="md:w-[220px] h-[80px]">
                                <img
                                    src={company.image}
                                    alt={company.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/**Mobile view */}
            <div className="py-5 md:hidden">
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
                        slidesPerView: 4,   
                        spaceBetween: 30, 
                        },
                    }}
                >
                    {SupportedBy?.map((company, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="py-5 min-h-[60px] w-full md:w-[80%]" key={idx}>
                                <div className="shadow-md shadow-gray p-7 rounded-2xl flex items-center justify-center h-full w-full">
                                    <div className="md:w-[220px] h-[80px]">
                                        <img
                                            src={company.image}
                                            alt={company.name}
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

