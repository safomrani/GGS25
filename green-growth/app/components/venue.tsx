import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import { karla, karlaBold ,karlaExtraBold, RobotoCondensed} from './fonts';
import Image from 'next/image';

type Props = {
  details?: Array<any>;
  locationTitle: string;
};

const locationURL = 'https://www.google.com/maps/place/Conrad+Cairo/@30.0654172,31.2277666,15z/data=!4m9!3m8!1s0x145840c6d1e708eb:0xa4e0b4e11d652930!5m2!4m1!1i2!8m2!3d30.0654172!4d31.2277666!16s%2Fm%2F011myr26?entry=ttu';

const Venue = () => {
  return (
    <div className="hidden md:flex flex-col" style={{
        backgroundImage:
        "url('/images/venue.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: 'contain'
    }}>
        <div className="w-full h-full flex lg:flex-row flex-col ">
          <div className="flex flex-col items-start gap-3 lg:w-[47%] px-10 sm:px-20 py-2">
            <div className= {`${RobotoCondensed.className}  text-[30px] text-green-300 font-bold lg:w-[70%] pb-5`}>
                The Egypt Green Growth Summit will be hosted at the newly reonvated, 5-star Conrad Hotel
            </div>
            <div className={`${karlaBold.className} text-[15px] flex flex-row gap-3 items-center justify-start pl-1`}>
                <Image
                    width={25}
                    height={25}
                    src="/icons/Calendar.png"
                    alt="calendar"
                />
                May 14th, 2024
            </div>
            <div className={`${karlaBold.className} text-[15px] flex flex-row gap-3 items-center justify-start pl-1`}>
                <Image
                    width={25}
                    height={25}
                    src="/icons/Location.png"
                    alt="calendar"
                />
                Conrad Hotel - Cairo, Egypt
            </div>

            <div className='flex gap-5 pt-3'>
                <button className= {`${karlaBold.className} bg-red-300 uppercase 
                    text-white px-2 py-1 rounded-md w-[180px] text-[18px]`}>
                    <a href='' target="_blank">Reservations</a>
                </button>
                <button className= {`${karlaBold.className} border-2 border-red-300 uppercase 
                    text-black px-2 py-1 rounded-md w-[180px] text-[18px]`}>
                    <a href='' target="_blank">Directions</a>
                </button>
            </div>    
            
          </div>
        </div>
    </div>
    /*
    <div
      className={`relative bg-[url(/images/Conrad-Cairo.png)] h-full bg-no-repeat bg-cover bg-center lg:bg-top`}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] z-10 h-full w-full" />
      <Container cn="relative z-20 pt-10 pb-12 lg:py-[100px]">
        <div className="w-full h-full flex lg:flex-row flex-col ">
          <div className="flex flex-col items-start lg:w-1/2">
            <div className= {`${poppins.className}  text-[30px] text-white font-bold lg:w-[70%] mb-10`}>
            The Cairo Finance Summit will be hosted at the Conrad Hotel
            </div>
            <div className="flex items-center mb-5">
              <img
                src={'/images/calendar.png'}
                className="w-[30px] mr-5"
              />
                <div
                  className={clsx(
                    'lg:text-[20px] text-[16px] text-white',
                  )}
                >
                  <p className={`${poppinsLight.className}`}>19th & 20th February 2024</p>
                </div>
            </div>
            <div className="flex items-center mb-5">
              <img
                src={'/images/location-white-2.png'}
                className="w-[30px] mr-5"
              />
                <div
                  className={clsx(
                    'lg:text-[20px] text-[16px] text-white',
                  )}
                > 
                 <p className={`${poppinsLight.className}`}>Conrad Hilton</p>
                </div>
            </div>
            <div className="flex items-center mb-5">
              <img
                src={'/images/flag.png'}
                className="w-[30px] mr-5"
              />
                <div
                  className={clsx(
                    'lg:text-[20px] text-[16px] text-white',
                  )}
                >
                  <p className={`${poppinsLight.className}`}>Cairo, Egypt</p>
                </div>
            </div>


            <div className="mt-10 w-full lg:w-auto grid grid-cols-2 lg:flex lg:justify-start gap-5">
                <Link href={locationURL} target="_blank">
                  <Button
                    textWhite
                    title='Directions'
                    cn='hover:bg-blue-500 hover:border-blue-500'
                  />
                </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
    */
  );
};

export default Venue;
