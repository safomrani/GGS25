import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image'
import { karla, karlaBold ,karlaExtraBold} from './fonts';

type Props = {
  image_file: string;
  name: string;
  company: string;
  link?: string;
};

const SpeakerCard = ({
  image_file,
  name,
  company,
  link,
}: Props) => {
  return (
    <div className = 'relative z-10 flex flex-col items-center justify-end w-[90%] sm:w-full'>
      <div className="h-10 w-3/4 blur-md absolute shadow-lg shadow-[rgba(0,0,0,0.3)]" />
      <div className='z-10 rounded-[24px] bg-[#F4F4F4] w-full min-h-[370px] sm:min-h-[380px] md:min-h-[375px] lg:min-h-[365px]'>
        <div className='w-full rounded-t-[24px]'>
          <img
            src={image_file}
            className='w-full rounded-t-[24px] object-cover h-56'
          />
        </div>
        <div className='p-5'>
          <div className="flex items-start justify-between mb-1">
            <div className="flex flex-col gap-1 lg:w-[87%]">
              <div className= {`${karlaExtraBold.className} text-xl lg:text-[20px] text-green-300 font-bold leading-tight`}>{name}</div>  
              <div className= {`${karla.className} text-[13px] text-[#454545] leading-normal break-words`}>{company}</div>
            </div>
            <div className="flex-shrink-0">
            <Link target="_blank" rel="noopener noreferrer" href={`${link}`}>
              <img
                src='/icons/Linkedin.png'
                className='h-[24px] md:h-[26px]'
              />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
