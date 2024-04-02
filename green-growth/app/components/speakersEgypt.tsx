"use client";

import React, { useState, useEffect, useCallback } from "react";
import SpeakerCard from './speakerCard';
import Image from 'next/image';
import { karla, karlaBold,karlaExtraBold,RobotoCondensed } from "./fonts";
import { speakersData } from '@/app/data/speakers'
import { motion } from "framer-motion"

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

export default function Speakers(){
    const [isClient, setIsClient] = useState(false);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);

    //fake content
    const [data, setData] = useState<{ image: string }[]>([]);
   

    //determine lastiem index
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = speakersData.slice(firstPostIndex, lastPostIndex);


    return (
        <>
            
            <>
                <motion.div 
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    className="mx-auto grid xs: grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-[90%] px-10 py-10">
                    {currentPosts.map((item,idx) =>{
                        return(
                            <motion.div
                                variants={imgs}
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
                    totalPosts={speakersData.length}
                    postsPerPage={postsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

            </>
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