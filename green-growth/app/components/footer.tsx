//#0ca591
import React from "react";
import Image from "next/image";
import { karla, karlaBold, karlaExtraBold } from "./fonts";


export default function FooterBar() {
  return (
    <>
        <div className="bg-green-400 h-3/2 w-full flex sm:flex-row flex-col justify-center sm:justify-around items-center sm:items-start px-10 pt-12 pb-10">
            <div className="">
                <Image 
                width={250}
                height={160}
                alt="GGS Logo"
                src={"/logos/White GGS Logo.png"}
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
                            <p className={`${karla.className} hover:text-black`}><a target="_blank" href="mailto:greenworks@hivos.org">greenworks@hivos.org</a></p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="pt-2 text-center sm:text-left">
                <ul>
                    <p className= {`${karlaBold.className} text-white text-xl pb-4`}>Follow Us</p>
                    <li className="text-white text-md pb-2 cursor-pointer">
                    <div className="flex flex-row gap-3 justify-center sm:justify-start items-center text-center sm:text-left">
                            <img
                                className="h-[15px]"
                                src="/icons/GGS-Linkedin.png"
                                alt="Email"
                            />
                            <p className={`${karla.className} hover:text-black`}><a target="_blank" href="https://www.linkedin.com/company/hivos/">Hivos</a></p>
                        </div>
                    </li>
                    <li className="text-white text-md pb-2 cursor-pointer">
                    <div className="flex flex-row gap-3 justify-center items-center text-center sm:text-left">
                            <img
                                className="h-[15px]"
                                src="/icons/GGS-Facebook.png"
                                alt="Email"
                            />
                            <p className={`${karla.className} hover:text-black`}><a target="_blank" href="https://www.facebook.com/HivosMENA">Hivos Mena</a></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className=" bg-green-400 flex flex-col justify-center items-center text-center px-5 pb-5">
            <h1 className={`${karla.className} text-white font-semibold`}>
                © 2024 Green Growth Summit. All rights reserved. Organized by{" "}
                <span className= {`${karla.className} hover:text-black font-semibold cursor-pointer`}>
                    <a href="https://changelabs.me/" target="_blank">Changelabs.{" "}</a>
                </span>
            </h1>
        </div>
    </>
  );
}
