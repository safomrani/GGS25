import Image from "next/image";
import { Separator } from '../../components/ui/separator';
import { freehand } from "./fonts";
import { karla, karlaBold, karlaExtraBold } from "./fonts";


export default function Hero() {
  return (
    <main className="min-h-screen items-center pt-1">
        {/**Navbar*/}
        <div className="hidden md:flex items-center justify-between bg-white px-3 sm:px-12 lg:px-20 py-1">
            <Image 
              width={180}
              height={160}
              alt="GGS Logo"
              src={"/logos/GGS-Logo.png"}
            />
            <div className="mx-auto">
                <h1 className="text-2xl text-green-300"><span className={`${karlaBold.className}`}>#GGSummit24</span></h1>
            </div>
            <img 
                className="h-[30px] lg:h-[40px]"
                alt="Hivos Logo"
                src={"/logos/Hivos.png"}            
            />
        </div>

        {/**Navbar mobile*/}
        <div className="flex md:hidden items-center justify-between bg-white px-3 py-1">
            <Image 
              width={180}
              height={120}
              alt="GGS Logo"
              src={"/logos/GGS-Logo.png"}
            />
            <img 
                className="h-[30px] lg:h-[40px]"
                alt="Hivos Logo"
                src={"/logos/Hivos.png"}            
            />
            {/** 
            <div>
                <h1 className="text-[15px] text-green-300"><span className={`${karlaBold.className}`}>#GGSummit24</span></h1>
            </div>
            */}
        </div>
        {/**Desktop view */}
        <div>
        <div className="hidden md:flex flex-col bg-green-200" style={{
            backgroundImage:
            "url('/images/Hero-BG.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',
            backgroundSize: 'contain'
        }}>
            <div className="pt-10 px-3 md:px-12 lg:px-24  md:w-[680px] lg:w-[865px]">
                <h1 className="text-center md:text-left text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-green-300"><span className={`${karlaExtraBold.className}`}>Green Growth Summit 2024</span></h1>
                <div className=" justify-center md:pb-5 md:w-[86%] lg:w-full">
                    <h1 className={`${karla.className}pt-3 md:text-[18px] lg:text-1xl text-black text-justify`}>Join us to accelerate a just green transition! Hivos is convening two flagship Green Growth Summits to invigorate local green ecosystems in the Middle East and North Africa. Interested in forming meaningful partnerships? Have ideas for how to take green transition strategies to the next level? Register your interest in attending at the links below.</h1>
                </div>
            </div>
            {/**Event details */}
            <div className="pl-16 md:pl-12 lg:pl-24 w-3/4 flex flex-row md:gap-20 lg:gap-48 pb-10">
                <div className="flex flex-col gap-3">
                    <div className="pb-2">
                        <button className={`${karlaBold.className} text-[16px] text-white bg-green-300 px-1 rounded-md`}>
                            GGS Tunisia
                        </button>
                    </div> 
                    <div className={`${karlaBold.className} text-[15px] flex flex-row gap-2 items-center justify-start pl-1`}>
                        <Image
                            width={25}
                            height={25}
                            src="/images/Calendar.png"
                            alt="calendar"
                        />
                        April 30th, 2024
                    </div>
                    <div className={`${karlaBold.className} text-[15px] flex flex-row gap-2 items-center justify-start pl-1`}>
                        <Image
                            width={25}
                            height={25}
                            src="/images/Location.png"
                            alt="location"
                        />
                        Mövenpick Gammarth - Tunis
                    </div>
                    <div className="pt-2 flex flex-col">
                        <button className= {`${karla.className} bg-red-300 uppercase 
                        text-white px-3 py-2 rounded-md w-[180px] text-[18px]`}>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLSdbn80m2mOZYvEIRqnbSzSKIf3nBeJGiSVOndUSYSfQuE70Ng/viewform' target="_blank">Register Now*</a>
                        </button>
                        <div className={`${karla.className} px-3 text-[13px]`}>*invitations are limited</div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="pb-2">
                        <button className={`${karlaBold.className} text-[16px] text-white bg-green-300 px-1 rounded-md`}>
                            GGS Egypt
                        </button>
                    </div>                     
                    <div className={`${karlaBold.className} text-[15px] flex flex-row gap-2 items-center justify-start pl-1`}>
                        <Image
                            width={25}
                            height={25}
                            src="/images/Calendar.png"
                            alt="calendar"
                        />
                        May 14th, 2024
                    </div>
                    <div className={`${karlaBold.className} text-[15px] flex flex-row gap-2 items-center justify-start pl-1`}>
                        <Image
                            width={25}
                            height={25}
                            src="/images/Location.png"
                            alt="location"
                        />
                        Conrad Hotel - Cairo
                    </div>
                    <div className="pt-2 flex flex-col">
                        <button className= {`${karla.className} bg-red-300 uppercase 
                        text-white px-3 py-2 rounded-md w-[180px] text-[18px]`}>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLScv86Nlo6bfTL4Z0YozgeJWjgQ2tiK-mF9XppWS2a1qv4TB6Q/viewform' target="_blank">Register Now*</a>
                        </button>
                        <div className={`${karla.className} px-3 text-[13px]`}>*invitations are limited</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        {/**Mobile view */}
        <div>
        <div className="flex md:hidden flex-col bg-green-200"  style={{
            backgroundImage:
            "url('/images/Hero-mobile.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom',
            backgroundSize: 'fit'
        }}>
            <div className="flex flex-col justify-center items-center pt-10 text-justify">
                <div className=" justify-center px-3 sm:w-[90%]">
                    <h1 className="py-1 text-center text-[22px] sm:text-2xl text-green-300"><span className={`${karlaExtraBold.className}`}>Green Growth Summit 2024</span></h1>
                    <h1 className={`${karla.className} px-3 pt-3 text-[14px] text-black text-justify`}>Join us to accelerate a just green transition! Hivos is convening two flagship Green Growth Summits to invigorate local green ecosystems in the Middle East and North Africa. Interested in forming meaningful partnerships? Have ideas for how to take green transition strategies to the next level? Register your interest in attending at the links below.</h1>
                </div>
            </div>
            {/**Event details */}
            <div className="pl-10 flex flex-col gap-6 pt-10 pb-10">
                {/*Tunis**/}
                <div className="flex flex-col gap-3">
                    <div className="pb-2">
                        <button className={`${karlaBold.className} text-[16px] text-white bg-green-300 px-1 rounded-md`}>
                            GGS Tunisia
                        </button>
                    </div> 
                    <div className={`${karlaBold.className} text-[15px] flex flex-row gap-2 items-center justify-start pl-1`}>
                        <Image
                            width={25}
                            height={25}
                            src="/images/Calendar.png"
                            alt="calendar"
                        />
                        April 30th, 2024
                    </div>
                    <div className={`${karlaBold.className} text-[15px] flex flex-row gap-2 items-center justify-start pl-1`}>
                        <Image
                            width={25}
                            height={25}
                            src="/images/Location.png"
                            alt="location"
                        />
                        Mövenpick Gammarth - Tunis
                    </div>
                    <div className="pt-2 flex flex-col">
                        <button className= {`${karla.className} bg-red-300 uppercase 
                            text-white px-3 py-2 rounded-md w-[180px] text-[18px]`}>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLSdbn80m2mOZYvEIRqnbSzSKIf3nBeJGiSVOndUSYSfQuE70Ng/viewform' target="_blank">Register Now*</a>
                        </button>
                        <div className={`${karla.className} px-3 text-[13px]`}>*invitations are limited</div>
                    </div>
                </div>
                <Separator className='bg-red-300 w-2/3'/>

                {/*Egypt**/}
                <div className="flex flex-col gap-3">
                    <div className="pb-2">
                        <button className={`${karlaBold.className} text-[16px] text-white bg-green-300 px-1 rounded-md`}>
                            GGS Egypt
                        </button>
                    </div>                     
                    <div className={`${karlaBold.className} text-[15px] flex flex-row gap-2 items-center justify-start pl-1`}>
                        <Image
                            width={25}
                            height={25}
                            src="/images/Calendar.png"
                            alt="calendar"
                        />
                        May 14th, 2024
                    </div>
                    <div className={`${karlaBold.className} text-[15px] flex flex-row gap-2 items-center justify-start pl-1`}>
                        <Image
                            width={25}
                            height={25}
                            src="/images/Location.png"
                            alt="location"
                        />
                        Conrad Hotel - Cairo
                    </div>
                    <div className="pt-2 flex flex-col">
                        <button className= {`${karla.className} bg-red-300 uppercase 
                            text-white px-3 py-2 rounded-md w-[180px] text-[18px]`}>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLScv86Nlo6bfTL4Z0YozgeJWjgQ2tiK-mF9XppWS2a1qv4TB6Q/viewform' target="_blank">Register Now*</a>
                        </button>
                        <div className={`${karla.className} px-3 text-[13px]`}>*invitations are limited</div>
                    </div>
                </div>
            </div>
        </div>
        </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:pt-6 py-5">
        {/**Sponsor */}
        <div className="flex flex-wrap lg:flex-row gap-5 lg:gap-10 items-center justify-center lg:pl-10 xl:pl-20"> 
          <div className="">
            <p className={`${karla.className} text-black pb-3 text-bold text-center lg:text-left`}>Core Sponsors</p>
            <div className="flex flex-wrap gap-5 xl:gap-9 py-3 lg:py-0 justify-center lg:justify-start">
                <img 
                    src='/logos/FMO.png'
                    className="h-[30px] lg:h-[40px]"
                    alt="FMO logo"
                />
                <img 
                    src='/logos/greenovi.png'
                    className="h-[30px] lg:h-[40px]"
                    alt="Greenovi logo"
                />
                <img 
                    src='/logos/UN.png'
                    className="h-[30px] lg:h-[40px]"
                    alt="Funded by EU logo"
                />
                <img 
                    src='/logos/republique tunisenne.png'
                    className="h-[30px] lg:h-[40px]"
                    alt="Republique Tunisenne logo"
                />
                <img 
                    src='/logos/expertise france.png'
                    className="h-[33px] lg:h-[33px]"
                    alt="Expertise france logo"
                />
            </div>
          </div>
        </div>

        {/**Implementation partners and Support from*/}
        <div className="flex flex-wrap lg:flex-row gap-5 xl:gap-10 items-center justify-center xl:pr-20"> 
            <div className="py-5 lg:py-0">
            <p className={`${karla.className} text-black pb-3 text-bold text-center lg:text-left`}>Implementation Partners</p>
            <div className="flex gap-3 xl:gap-7 py-3 lg:py-0">
              <img 
                src='/logos/newsilk-logo.png'
                className="h-[30px] lg:h-[40px]"
                alt="newsilk logo"
              />
              <img 
                src='/logos/changelabs.png'
                className="h-[30px] lg:h-[30px]"
                alt="Changelabs logo"
              />
            </div>
          </div>  
          <div className="flex flex-col justify-center items-center lg:items-start">
            <p className={`${karla.className} text-black pb-3 text-bold text-center lg:text-left`}>With Support From</p>
            <div className="flex flex-wrap lg:flex justify-center items-center gap-7 py-3 lg:py-0">
              <img 
                src='/logos/Impact Europe.png'
                className="h-[30px] lg:h-[40px]"
                alt="Impact EU logo"
              />
              <img 
                src='/logos/CFFYE.png'
                className="h-[30px] lg:h-[40px]"
                alt="Challengefund logo"
              />
              <img 
                src='/logos/MFAN.png'
                className="h-[30px] lg:h-[40px]"
                alt="MFAN logo"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
