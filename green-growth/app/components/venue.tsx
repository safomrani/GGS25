import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import { karla, karlaBold, karlaExtraBold, RobotoCondensed} from './fonts';
import Image from 'next/image';

type Props = {
  locationTitle: string;
  eventDate: string;
  location: string;
  reservation?: string;
  directions: string;
  country: boolean;
  is2025?: boolean;
};

const locationURL = 'https://www.google.com/maps/place/Conrad+Cairo/@30.0654172,31.2277666,15z/data=!4m9!3m8!1s0x145840c6d1e708eb:0xa4e0b4e11d652930!5m2!4m1!1i2!8m2!3d30.0654172!4d31.2277666!16s%2Fm%2F011myr26?entry=ttu';

const Venue = ({
  locationTitle,
  eventDate,
  location,
  reservation,
  directions,
  country,
  is2025 = false,
}: Props) => {
  if (is2025) {
    return (
      <div className="relative z-20 flex flex-col min-h-[650px] lg:min-h-[700px]">
        <div className="w-full h-full flex lg:flex-row flex-col">
          <div className="flex flex-col items-start gap-6 lg:w-[55%] px-10 sm:px-20 py-16 m-10">
            <div className={`${RobotoCondensed.className} text-green-300 text-xl md:text-2xl lg:text-3xl`}>
              Event<span className="text-red-300"> Venue</span>
            </div>
            <h2 className={`${RobotoCondensed.className} border-2 border-green-300 
                  text-white bg-green-300 rounded-md w-[65px] sm:w-[80px] text-[16px] sm:text-[20px] sm:text-[22px]
                  text-center font-normal`}>
              Egypt
            </h2>
            
            <div className={`${karlaExtraBold.className} text-white text-2xl sm:text-3xl leading-snug max-w-[500px] drop-shadow-lg`}>
              The Egypt Green Growth Summit will be hosted at the newly renovated, 5-star Sofitel Cairo Downtown Nile
            </div>
            
            <div className="flex items-center gap-3 text-white mt-6">
              <Image 
                src="/icons/CalendarNew.svg"
                alt="calendar"
                width={28}
                height={28}
              />
              <span className="font-medium text-xl">{eventDate}</span>
            </div>
            
            <div className="flex items-center gap-3 text-white">
              <Image 
                src="/icons/locationNew.svg"
                alt="location"
                width={28}
                height={28}
              />
              <span className="font-medium text-xl">{location}</span>
            </div>

            <div className="flex gap-6 mt-8">
              {reservation && (
                <a 
                  href={reservation} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#00A799] text-white uppercase text-base font-bold py-2 px-8 rounded-sm hover:bg-[#008f83] transition-colors duration-200"
                >
                  Reservations
                </a>
              )}
              <a 
                href={directions} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#00A799] text-white uppercase text-base font-bold py-2 px-8 rounded-sm hover:bg-[#008f83] transition-colors duration-200"
              >
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-20 flex flex-col lg:min-h-[480px]">
        <div className="w-full h-full flex lg:flex-row flex-col">
          <div className="flex flex-col items-start gap-3 lg:w-[47%] px-10 sm:px-20 py-2">
            <div className={clsx(`${RobotoCondensed.className} text-[24px] md:text-[26px] xl:text-[36px] font-bold md:w-[60%] lg:w-[80%] pb-1 md:pb-5`, 
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
                  alt="location"
                  className='h-[20px] lg:h-[30px]'
                />
                {location}
            </div>

            <div className='flex gap-1 sm:gap-3 xl:gap-5 pt-3'>
                {reservation && (
                    <a 
                      href={reservation} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${karlaBold.className} relative z-30 text-center border-2 border-red-300 bg-red-300 uppercase 
                        text-white px-2 py-1 rounded-md w-[92px] sm:w-[130px] lg:w-[180px] text-[10px] sm:text[13px] xl:text-[18px]
                        hover:bg-white hover:text-red-300 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`}
                    >
                      Reservations
                    </a>
                )}
                <a 
                  href={directions} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={clsx(`${karlaBold.className} relative z-30 text-center border-2 border-red-300 uppercase 
                    px-2 py-1 rounded-md w-[92px] sm:w-[130px] lg:w-[180px] text-[10px] sm:text[13px] xl:text-[18px]
                    hover:bg-red-300 hover:text-white transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110`,
                    {
                      'bg-transparent text-red-300': !country,
                      'bg-red-300 text-white': country,
                      'hover:bg-transparent hover:text-red-300': country,
                      'hover:bg-red-300 hover:text-white': !country,
                    }
                  )}
                >
                  Directions
                </a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Venue;
