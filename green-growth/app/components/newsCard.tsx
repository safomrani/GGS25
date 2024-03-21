import Link from 'next/link';
import React from 'react';
import { karla, karlaBold,karlaExtraBold } from "./fonts";

type Props = {
  image_file: string;
  title: string;
  description: string;
  date: string;
  link?: string;
};

const NewsCard = ({ image_file, title, date, description, link }: Props) => {
  return (
    <div className="relative flex flex-col h-full w-full items-center justify-end mb-10">
      <div className="h-10 w-11/12 blur-md absolute lg:shadow-lg lg:shadow-[rgba(0,0,0,0.3)]" />
      <div className="h-full flex flex-col z-10 rounded-[24px] bg-white pb-5">
        <img
          src={image_file}
          className="w-full rounded-t-[24px] h-[40%] lg:h-[180px] 2xl:h-[40%] object-cover"
        />

        <div className="px-5 pt-5 flex flex-col items-start justify-between">
          <div className="flex flex-col items-start justify-between">
            <div className="flex items-center mb-2">
              <img
                src="/icons/Calendar.png"
                className="w-[14.5px] lg:w-[17.5px] mr-3"
              />
              <div className={`${karla.className} text-green-500 text-[12px] lg:text-[16px]`}>{date}</div>
            </div>
            <div className={`${karlaExtraBold.className} text-green-500 text-[20px] font-bold mb-2 line-clamp-2 lg:line-clamp-0`}>
              {title}{' '}
            </div>

            <div className={`${karla.className} text-[16px] text-[#454545] line-clamp-3 xl:line-clamp-2 2xl:line-clamp-3`}>
              {description}
            </div>

            <div className="mt-3 cursor-pointer group w-fit text-[16px] lg:text-[18px] font-bold text-[#000000]">
              <Link target="_blank" href={`${link}`}>
                <div className={`${karlaExtraBold.className} relative z-10 w-fit text-green-500 `}>
                  <span className={`h-[12px] -z-10 bg-green-100  duration-300 group-hover:lg:w-[75%] absolute bottom-0 w-full rounded-[3px]`}></span>
                  Read More
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
