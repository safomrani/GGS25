//#0ca591
import React from "react";
import Image from "next/image";
import { karla, karlaBold, karlaExtraBold } from "./fonts";


export default function FooterBar2() {
  return (
    <>
        <div className="bg-green-400 h-3/2 w-full flex sm:flex-row flex-col justify-center sm:justify-around items-center sm:items-start px-10 pt-12 pb-10">
            <div className="">
                <Image 
                width={250}
                height={160}
                alt="GGS Logo"
                src={"/logos/New-White-GGS-Logo.png"}
                />
            </div>
            <div className="pt-2 text-center sm:text-left">
                <ul>
                    <p className= {`${karlaBold.className} text-white text-xl pb-4`}>Contact Us</p>
                    <li className="text-white text-md pb-2 cursor-pointer">
                        <div className="flex flex-row gap-3 items-center">
                            <img
                                className="h-[15px]"
                                src="/icons/GGS-Email.png"
                                alt="Email"
                            />
                            <p className={`${karla.className} hover:text-black`}><a target="_blank" href="mailto:ggsummit@hivos.org">ggsummit@hivos.org</a></p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="pt-2 text-center sm:text-left">
                <ul>
                    <p className= {`${karlaBold.className} text-white text-xl pb-4`}>Follow Us</p>
                    <li className="text-white text-md pb-2 cursor-pointer">
                    <div className="flex flex-row gap-3 justify-start items-center">
                            <img
                                className="h-[15px]"
                                src="/icons/GGS-Linkedin.png"
                                alt="Email"
                            />
                            <p className={`${karla.className} hover:text-black`}><a target="_blank" href="https://www.linkedin.com/company/green-growth-summit-mena/posts/?feedView=all">Green Growth Summit</a></p>
                        </div>
                    </li>
                    <li className="text-white text-md pb-2 cursor-pointer">
                    <div className="flex flex-row gap-3 justify-start items-center">
                            <img
                                className="h-[15px]"
                                src="/icons/GGS-Facebook.png"
                                alt="Email"
                            />
                            <p className={`${karla.className} hover:text-black`}><a target="_blank" href="https://www.linkedin.com/company/hivos/posts/?feedView=all">Hivos</a></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className=" bg-green-400 flex flex-col justify-center items-center text-center px-5 pb-5">
            <h1 className={`${karla.className} text-white font-semibold`}>
            © 2025 Green Growth Summit. All rights reserved. Convened by Hivos, implemented by New Silk Roads.
                <span className= {`${karla.className} hover:text-black font-semibold cursor-pointer`}>
                    <a href="https://hivos.org/" target="_blank">Hivos</a>
                </span>
                , implemented by{" "}
                <span className= {`${karla.className} hover:text-black font-semibold cursor-pointer`}>
                    <a href="https://changelabs.me/" target="_blank">Changelabs{" "}</a>
                </span>
                and{" "}
                <span className= {`${karla.className} hover:text-black font-semibold cursor-pointer`}>
                    <a href="https://www.newsilkroads.com/" target="_blank">New Silk Roads.{" "}</a>
                </span>
            </h1>
        </div>
    </>
  );
}
