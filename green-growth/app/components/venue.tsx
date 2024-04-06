import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import { karla, karlaBold ,karlaExtraBold, RobotoCondensed} from './fonts';
import Image from 'next/image';

type Props = {
  locationTitle: string;
  eventDate: string;
  location: string;
  reservation: string;
  directions: string;
  country: boolean;
};

const locationURL = 'https://www.google.com/maps/place/Conrad+Cairo/@30.0654172,31.2277666,15z/data=!4m9!3m8!1s0x145840c6d1e708eb:0xa4e0b4e11d652930!5m2!4m1!1i2!8m2!3d30.0654172!4d31.2277666!16s%2Fm%2F011myr26?entry=ttu';

const Venue = ({
  locationTitle,
  eventDate,
  location,
  reservation,
  directions,
  country,                
}: Props) => {
  return (
    <div className="z-20 flex flex-col lg:min-h-[480px]">
        <div className="w-full h-full flex lg:flex-row flex-col ">
          <div className="flex flex-col items-start gap-3 lg:w-[47%] px-10 sm:px-20 py-2">
            <div className= {clsx(`${RobotoCondensed.className} text-[24px] md:text-[26px] xl:text-[36px] font-bold md:w-[60%] lg:w-[80%] pb-1 md:pb-5`, 
             {
                'text-green-300': !country,
                'text-white': country
             }
             )}>

                {locationTitle}
            </div>
            <div className={clsx(`${karlaBold.className} text-[13px] xl:text-[18px] flex flex-row gap-3 items-center justify-start pl-1`,
              {
                'text-black': !country,
                'text-white': country
              }
            )}>
                <img 
                  src="/icons/Calendar.png"
                  alt="calendar"
                  className='h-[20px] lg:h-[30px]'
                />
                {eventDate}
            </div>
            <div className={clsx(`${karlaBold.className} text-[13px] xl:text-[18px] flex flex-row gap-3 items-center justify-start pl-2`,
              {
                'text-black': !country,
                'text-white': country
              }
            )}>
                <img 
                  src="/icons/Location.png"
                  alt="calendar"
                  className='h-[20px] lg:h-[30px]'
                />
                {location}
            </div>

            <div className='flex gap-1 sm:gap-3 xl:gap-5 pt-3'>
                <button className= {`${karlaBold.className}  text-center border-2 border-red-300 bg-red-300 uppercase 
                    text-white px-2 py-1 rounded-md w-[92px] sm:w-[130px] lg:w-[180px] text-[10px] sm:text[13px] xl:text-[18px]
                    hover:bg-white hover:text-red-300 transition delay-300 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`}>
                    <a href={reservation} target="_blank">Reservations</a>
                </button>
                <button className= {clsx(`${karlaBold.className} text-center border-2 border-red-300 uppercase 
                     px-2 py-1 rounded-md w-[92px] sm:w-[130px] lg:w-[180px] text-[10px] sm:text[13px] xl:text-[18px] hover:bg-red-300 hover:text-white transition delay-300 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`,
                      {
                        'text-black': !country,
                        'text-white': country
                      }
                     )}>
                    <a href={directions} target="_blank">Directions</a>
                </button>
            </div>    
            
          </div>
          
        </div>
    </div>

)};

export default Venue;
