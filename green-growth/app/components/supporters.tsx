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
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 grid-flow-row gap-10 w-full md:w-[80%] md:mx-auto py-10">
            {SupportedBy?.map((company, idx) => (
                <div className="min-h-[130px] w-full md:w-[80%]" key={idx}>
                    <div className="shadow-xl shadow-gray p-7 md:p-10 md:m-5 rounded-2xl flex items-center justify-center h-full w-full">
                        <div className="w-[220px] h-[80px]">
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
    )
}

