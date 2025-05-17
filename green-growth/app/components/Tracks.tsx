import React from 'react';
import { karla, karlaBold, karlaExtraBold, RobotoCondensed } from "./fonts";

type Props = {
  index: number;
  title: string;
  track: string;
  color: string;
  keynotes: any;
  panel: any;
};

const TrackItem = ({
  index,
  title,
  track,
  color,
  keynotes,
  panel,
}: Props) => {
  return (
    <div className="flex flex-col h-[380px] w-full p-4 sm:p-6 bg-[#FFFFFF] rounded-2xl shadow-lg">
      <div className="pb-2">
        <p className={`${RobotoCondensed.className} text-[18px] sm:text-xl md:text-2xl mb-1`}
            style={{
                color: color,
            }}>
          {index}.
        </p>
        <h1 className={`${RobotoCondensed.className} text-[18px] sm:text-xl md:text-2xl leading-tight`} style={{
            color: color,
        }}>
          {title}
        </h1>
      </div>
      <div className="h-full overflow-y-auto custom-scrollbar">
        <div className="mb-4 pr-1">
          {keynotes && (
            <div className={`${karla.className} text-[15px] sm:text-[16px] lg:text-[18px] mb-2 leading-snug`} 
              dangerouslySetInnerHTML={{ __html: keynotes }} 
            />
          )}
          {panel && (
            <div className={`${karla.className} text-[15px] sm:text-[16px] lg:text-[18px] leading-snug`} 
              dangerouslySetInnerHTML={{ __html: panel }} 
            />
          )}
        </div>
      </div>
      <div className={`${karlaExtraBold.className} text-[14px] sm:text-[15px] md:text-[16px] mt-auto pt-2 border-t border-gray-100`} 
        style={{
          color: color,
        }}>
        {track}
      </div>
    </div>
  );
};

export default TrackItem;


