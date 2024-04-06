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
  background: string;
};

const locationURL = 'https://www.google.com/maps/place/Conrad+Cairo/@30.0654172,31.2277666,15z/data=!4m9!3m8!1s0x145840c6d1e708eb:0xa4e0b4e11d652930!5m2!4m1!1i2!8m2!3d30.0654172!4d31.2277666!16s%2Fm%2F011myr26?entry=ttu';

const Venue = ({
  locationTitle,
  eventDate,
  location,
  reservation,
  directions,
  background,
}: Props) => {
  return (
    <div className=" hidden md:flex flex-col lg:min-h-[480px]">
        <div className="w-full h-full flex lg:flex-row flex-col ">
          <div className="flex flex-col items-start gap-3 lg:w-[47%] px-10 sm:px-20 py-2">
            <div className= {`${RobotoCondensed.className}  text-[30px] text-green-300 font-bold lg:w-[70%] pb-5`}>
                {locationTitle}
            </div>
            <div className={`${karlaBold.className} text-[15px] flex flex-row gap-3 items-center justify-start pl-1`}>
                <Image
                    width={25}
                    height={25}
                    src="/icons/Calendar.png"
                    alt="calendar"
                />
                {eventDate}
            </div>
            <div className={`${karlaBold.className} text-[15px] flex flex-row gap-3 items-center justify-start pl-1`}>
                <Image
                    width={25}
                    height={25}
                    src="/icons/Location.png"
                    alt="calendar"
                />
                {location}
            </div>

            <div className='flex gap-5 pt-3'>
                <button className= {`${karlaBold.className} bg-red-300 uppercase 
                    text-white px-2 py-1 rounded-md w-[180px] text-[18px]`}>
                    <a href={reservation} target="_blank">Reservations</a>
                </button>
                <button className= {`${karlaBold.className} border-2 border-red-300 uppercase 
                    text-black px-2 py-1 rounded-md w-[180px] text-[18px]`}>
                    <a href={directions} target="_blank">Directions</a>
                </button>
            </div>    
            
          </div>
        </div>
    </div>

)};

export default Venue;
