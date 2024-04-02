import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import Venue from "./venue";
import { Tab } from '@headlessui/react';
import { useRef, useEffect, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { karla, karlaBold ,karlaExtraBold, RobotoCondensed} from './fonts';
import Image from 'next/image';
import {VenueData} from '@/app/data/venueData';

export default function VenueSection() {

    const tabsRef = useRef<HTMLDivElement>(null)

    const heightFix = () => {
      if (tabsRef.current && tabsRef.current.parentElement) tabsRef.current.parentElement.style.height = `${tabsRef.current.clientHeight}px`
    }
  
    useEffect(() => {
      heightFix()
    }, [])
    
    const tabs = [
      {
        title: 'Tunisia',
        id: 1
      },
      {
        title: 'Egypt',
        id: 2
      },
    ]

    return (
        <div>
        {/**Venue Section */}
            <div className=" bg-green-200 w-full py-10">
                <Tab.Group>
                {({ selectedIndex }) => (
                    <div className={`${karla.className} px-10 sm:px-20`}>
                    {/* Buttons */}
                    <div className="flex justify-start">
                        <Tab.List className="max-[480px]:max-w-[480px] inline-flex flex-wrap gap-2 justify-center p-1">
                        {tabs.map((tab, index) => (
                            <Tab key={index} as={Fragment}>
                            <button
                                className={`${RobotoCondensed.className} border-2 border-green-300 
                                text-green-300 px-2 rounded-md w-[80px] text-[20px] text-center
                                hover:bg-green-300 hover:text-white 
                                whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-green-300 
                                transition-colors duration-150 ease-in-out ${selectedIndex === index ? 'bg-green-300 text-white px-2' : 'text-green-300 hover:text-white'}}`}>
                                {tab.title}
                            </button>
                            
                            </Tab>
                        ))}
                        </Tab.List>
                    </div>

                    {/* Tab panels */}
                    <Tab.Panels className="pb-10">
                        <div className="flex flex-col h-auto w-full pt-5 mb-10 justify-center" ref={tabsRef}>
                        {/*map agenda day events */}                
                        {tabs.map((tab, index) => (
                            <Tab.Panel
                            key={index}
                            as={Fragment}
                            static={true}
                            >
                            <Transition
                                as="article"
                                show={selectedIndex === index}
                                unmount={false}
                                className="w-full min-[480px]:flex items-stretch focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 transform order-first"
                                enterFrom="opacity-0 -translate-y-8"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-300 transform absolute"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-12"
                                beforeEnter={() => heightFix()}
                            >
                            {/**Add mapping for venue item */}
                            {VenueData[selectedIndex].details.map((venue, index) => {
                                return(
                                    <Venue
                                        key={index}
                                        locationTitle = {venue.locationTitle}
                                        eventDate={venue.eventDate}
                                        location={venue.location}
                                        reservation={venue.reservation}
                                        directions={venue.directions}
                                        background={venue.background}
                                    />
                                )})
                            }
                            </Transition>
                            </Tab.Panel>
                        ))}

                        </div>
                    </Tab.Panels>
                    </div>
                )}
                </Tab.Group>
            </div>
        </div> 
    )
}