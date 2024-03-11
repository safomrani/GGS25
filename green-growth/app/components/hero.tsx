import Image from "next/image";
import { Separator } from '../../components/ui/separator';
import { freehand } from "./fonts";
import { karla, karlaBold, karlaExtraBold } from "./fonts";


export default function Hero() {
  return (
    <main className="min-h-screen items-center pt-1">
        {/**Navbar*/}
        <div className="hidden md:flex items-center justify-between bg-white px-3 sm:px-12 md:px-20 py-1">
            <Image 
              width={250}
              height={120}
              alt="GGS Logo"
              src={"/logos/GGS-Logo.png"}
            />
            <div>
                <h1 className="p-3 text-2xl text-green-300"><span className={`${karlaBold.className}`}>#GGSummit24</span></h1>
            </div>
        </div>
        {/**Navbar mobile*/}
        <div className="flex md:hidden items-center justify-between bg-white px-3 py-1">
            <Image 
              width={180}
              height={120}
              alt="GGS Logo"
              src={"/logos/GGS-Logo.png"}
            />
            <div>
                <h1 className="text-[15px] text-green-300"><span className={`${karlaBold.className}`}>#GGSummit24</span></h1>
            </div>
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
            <div className="pt-10 px-3 md:px-24 w-[90%] md:w-3/4">
                <h1 className="text-center md:text-left text-3xl sm:text-3xl md:text-5xl lg:text-5xl text-green-300"><span className={`${karlaExtraBold.className}`}>Green Growth Summit 2024</span></h1>
                <div className=" justify-center md:w-3/5">
                    <h1 className={`${karla.className}pt-3 text-1xl text-black text-justify`}>Under the regional Green Growth Summit initiative, Hivos convenes two flagship summit events to invigorate local green ecosystems to North Africa to advance their green transition strategies, facilitate meaningful partnerships between stakeholders, and to synergize around actionable commitments to take the green ecosystem forward.</h1>
                </div>
            </div>
            {/**Event details */}
            <div className="pl-16 md:pl-24 w-3/4 flex flex-row gap-48 pb-10">
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
                            <a href='https://form.typeform.com/to/OgeyBBu3' target="_blank">Register Now*</a>
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
                            <a href='https://form.typeform.com/to/wHZL1GST' target="_blank">Register Now*</a>
                        </button>
                        <div className={`${karla.className} px-3 text-[13px]`}>*invitations are limited</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        {/**Mobile view */}
        <div>
        <div className="flex md:hidden flex-col bg-green-200">
            <div className="flex flex-col justify-center items-center pt-10 text-justify">
                <div className=" justify-center px-3 sm:w-[90%]">
                    <h1 className="py-1 text-center text-[22px] sm:text-2xl text-green-300"><span className={`${karlaExtraBold.className}`}>Green Growth Summit 2024</span></h1>
                    <h1 className={`${karla.className} px-3 pt-3 text-[14px] text-black text-justify`}>Under the regional Green Growth Summit initiative, Hivos convenes two flagship summit events to invigorate local green ecosystems to North Africa to advance their green transition strategies, facilitate meaningful partnerships between stakeholders, and to synergize around actionable commitments to take the green ecosystem forward.</h1>
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
                            <a href='https://form.typeform.com/to/OgeyBBu3' target="_blank">Register Now*</a>
                        </button>
                        <div className={`${karla.className} px-3 text-[13px]`}>*invitations are limited</div>
                    </div>
                </div>
                <Separator className='bg-red-300 w-3/4'/>

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
                            <a href='https://form.typeform.com/to/wHZL1GST' target="_blank">Register Now*</a>
                        </button>
                        <div className={`${karla.className} px-3 text-[13px]`}>*invitations are limited</div>
                    </div>
                </div>
            </div>
        </div>
        </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between md:pt-20 lg:pt-10 py-5">
        {/**Sponsor & implementation partners */}
        <div className="flex flex-wrap lg:flex-row gap-5 lg:gap-10 items-center justify-center md:pl-20"> 
          <div className="">
            <p className={`${karla.className} text-black pb-3 text-bold text-center lg:text-left`}>Main Sponsor</p>
            <div className="flex gap-7 py-3 lg:py-0 justify-center lg:justify-start">
              <img 
                src='/logos/Hivos.png'
                className="h-[40px] lg:h-[60px]"
                alt="Hivos logo"
              />
            </div>
          </div>
          <div className="py-5 lg:py-0">
            <p className={`${karla.className} text-black pb-3 text-bold text-center lg:text-left`}>Implementation Partners</p>
            <div className="flex gap-7 py-3 lg:py-0">
              <img 
                src='/logos/newsilk-logo.png'
                className="h-[40px] lg:h-[60px]"
                alt="newsilk logo"
              />
              <img 
                src='/logos/changelabs.png'
                className="h-[40px] lg:h-[60px]"
                alt="Changelabs logo"
              />
            </div>
          </div>
        </div>

        {/**Support from*/}
        <div className="py-5 lg:py-0 md:pr-20">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <p className={`${karla.className} text-black pb-3 text-bold text-center lg:text-left`}>With Support from</p>
            <div className="flex flex-wrap lg:flex justify-center items-center gap-7 py-3 lg:py-0">
              <img 
                src='/logos/funded by EU.png'
                className="h-[40px] lg:h-[60px]"
                alt="Funded by EU logo"
              />
              <img 
                src='/logos/Impact Europe.png'
                className="h-[40px] lg:h-[60px]"
                alt="Impact EU logo"
              />
              <img 
                src='/logos/CFFYE.png'
                className="h-[40px] lg:h-[60px]"
                alt="Challengefund logo"
              />
              <img 
                src='/logos/MFAN.png'
                className="h-[40px] lg:h-[60px]"
                alt="MFAN logo"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
