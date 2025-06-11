import React, { useRef, useState } from 'react';
import NewsCard from './newsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import clsx from 'clsx';
import { newsArticles25 } from '../data/newsArticles25';


const sliderSettings = {
    300: {
      slidesPerView: 1.25,
    },
    680: {
      slidesPerView: 2.75,
    },
    1200: {
      slidesPerView: 3,
    },
  };
  
interface NewsArticle {
  id: number;
  title: string;
  description: string;
  date: string;
  link: string;
  image: string;
}

interface NewsSectionProps {
  newsArticles?: NewsArticle[];
}

const NewsSection = ({ newsArticles }: NewsSectionProps = {}) => {
    const swiperRef = useRef({} as any);
    const [next, setNext] = useState(false);
    
    // Use prop if provided, otherwise use default newsArticles25
    const articles = newsArticles || newsArticles25;
  
    return (
      <div className="py-10">
        <div>
          <div className="flex items-center justify-between">
            <Swiper
              slidesPerView={'auto'}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={sliderSettings}
              onReachEnd={() => setNext(true)}
              onReachBeginning={() => setNext(false)}
              spaceBetween={20}
            >
              {articles?.map((article: any, idx: number) => (
                <SwiperSlide key={idx}>
                  <NewsCard
                    image_file={article.image}
                    date={article.date}
                    title={article.title}
                    description={article.description}
                    link={article.link}
                  />
                </SwiperSlide>
              ))}
  
              <div className="flex items-baseline justify-center gap-1">
                <div
                  className={clsx(
                    'h-[5px] rounded-full cursor-pointer duration-500',
                    {
                      'w-3 bg-offwhite': next,
                      'w-7 bg-green-400': !next,
                    }
                  )}
                  onClick={() => {
                    setNext(false);
                    swiperRef.current?.slidePrev();
                    swiperRef.current?.slidePrev();
                    swiperRef.current?.slidePrev();
                  }}
                />
                <div
                  className={clsx(
                    'h-[5px] rounded-full cursor-pointer duration-500',
                    {
                      'w-3 bg-offwhite': !next,
                      'w-7 bg-green-400': next,
                    }
                  )}
                  onClick={() => {
                    setNext(true);
                    swiperRef.current?.slideNext();
                    swiperRef.current?.slideNext();
                    swiperRef.current?.slideNext();
                  }}
                />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    );
  };
  
export default NewsSection;
  