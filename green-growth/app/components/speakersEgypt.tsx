"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import SpeakerCard from './speakerCard';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { karla, karlaBold,karlaExtraBold,RobotoCondensed } from "./fonts";
import { speakersEgypt } from '../data/speakersEgypt';
import { motion } from "framer-motion"
import Link from "next/link";

{/**Pagination imports */}

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";

{/**Animation */}
const variants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.,
        },
    }
}

const imgs = {
    hidden: {
        opacity: 0,
        x: 30
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        },
    }
}

export default function SpeakersEgypt(){
    const [isClient, setIsClient] = useState(false);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);

    //fake content
    const [data, setData] = useState<{ image: string }[]>([]);
    
    const swiperRef = useRef({} as any);
    const [next, setNext] = useState(false);
  
    {/**Slider info */}
    const sliderSettings = {
        300: {
          slidesPerView: 1.4,
        },
        680: {
          slidesPerView: 1.8,
        },
        1200: {
          slidesPerView: 3,
        },
    };
      

    //determine lastiem index
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = speakersEgypt.slice(firstPostIndex, lastPostIndex);



    return (
        <>
            <div className="hidden sm:block">
                <motion.div 
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    className="mx-auto grid xs: grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full md:w-[82%] lg:w-[90%] px-10 py-10">
                    {currentPosts.map((item,idx) =>{
                        return(
                            <motion.div
                                variants={imgs}
                                key={idx}
                            >
                                <SpeakerCard
                                    key={idx}
                                    image_file={item.image}
                                    name = {item.name}
                                    company={item.company}
                                    link={item.link}
                                />
                            </motion.div>
                        )}
                    )}
                </motion.div>
                <PaginationSection
                    totalPosts={speakersEgypt.length}
                    postsPerPage={postsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

            </div>
            {/**Mobile view */}
            <div className="sm:hidden py-5">
                <Swiper
                slidesPerView={'auto'}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={sliderSettings}
                onReachEnd={() => setNext(true)}
                onReachBeginning={() => setNext(false)}
                >
                {speakersEgypt?.map((speaker: any, idx: number) => (
                    <SwiperSlide key={idx}>
                        <SpeakerCard
                            key={idx}
                            image_file={speaker.image}
                            name = {speaker.name}
                            company={speaker.company}
                            link={speaker.link}
                        />
                    </SwiperSlide>
                ))}
    
                <div className="flex items-baseline justify-center gap-1 pt-7">
                    <div
                    className={clsx(
                        'h-[5px] rounded-full cursor-pointer duration-500',
                        {
                        'w-3 bg-secondary': next,
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
                        'w-3 bg-secondary': !next,
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
        </>
    )
}

function PaginationSection({
    totalPosts,
    postsPerPage,
    currentPage,
    setCurrentPage,
}: {
    totalPosts: any;
    postsPerPage: any;
    currentPage: any;
    setCurrentPage: any;
}){
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
    const handleNextPage = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return(
        <Pagination>
            <PaginationContent>
            {pages.map((page, idx) => (
                <PaginationItem
                    key={idx}
                    className={currentPage === page? "": ""}
                >
                    <PaginationLink onClick={() => setCurrentPage(page)}  className={currentPage === page? "h-[5px] cursor-pointer duration-500 bg-green-300 w-7 rounded-md": "w-3 cursor-pointer duration-500 bg-secondary"}>
                    </PaginationLink>
                </PaginationItem>
            ))}
            </PaginationContent>
        </Pagination>
    )
}