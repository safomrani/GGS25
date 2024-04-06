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
    <div className = 'relative z-10 flex flex-col items-center justify-end w-full'>
      <div className="h-10 w-3/4 blur-md absolute shadow-lg shadow-[rgba(0,0,0,0.3)]" />
      <div className='z-10 rounded-[24px] bg-[#F4F4F4] w-full h-full'>
        <div className='w-full rounded-t-[24px]'>
          <img
            src={image_file}
            className='w-full rounded-t-[24px] object-cover h-48'
          />
        </div>
        <div className='p-3'>
          <div className="flex items-start justify-between mb-1">
            <div className="flex flex-col gap-1 lg:w-[87%]">
              <div className= {`${karlaExtraBold.className} text-2xl text-green-300 font-bold`}>{name}</div>
              <div className= {`${karla.className} text-[14px] text-[#454545]`}>{company}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
