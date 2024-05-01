
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
    <div className="h-full min-h-[290px] md:min-h-[330px] sm:min-h-[390px] w-[95%] p-4 sm:p-7 flex flex-col sm:justify-between bg-[#FFFFFF] rounded-2xl shadow-lg">
      <div className={`mb-2 sm:mb-0 pb-3`}>
        <p className={`${RobotoCondensed.className} text-[18px] min-[390px]:text-2xl`}
            style={{
                color: color,
            }}>
          {index}.
        </p>
        <h1 className={`${RobotoCondensed.className} text-[18px] min-[390px]:text-2xl whitespace-pre-line`} style={{
            color: color,
        }}>
          {title}
        </h1>
      </div>
      <div className={`${karla.className} text-[16px] lg:text-[18px] whitespace-pre-line`} dangerouslySetInnerHTML={{ __html: keynotes }} />
      <div className={`${karla.className} text-[16px] lg:text-[18px] whitespace-pre-line`} dangerouslySetInnerHTML={{ __html: panel }} />

      <div className= {`${karlaExtraBold.className} whitespace-pre-line text-[14px] min-[390px]:text-[16px] mt-2 sm:mt-0 pt-3`}  style={{
        color: color,
        }}>
        {track}
      </div>
    </div>
  );
};

export default TrackItem;


