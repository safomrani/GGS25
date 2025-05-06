import Image from "next/image";
import { Separator } from '../../components/ui/separator';
import { freehand } from "./fonts";
import { karla, karlaBold, karlaExtraBold, RobotoCondensed } from "./fonts";

export default function Hero25() {
  return (
    <main className="min-h-[90%] items-center pt-1">
        {/**Navbar*/}
        <div className="hidden md:flex items-center justify-between bg-white px-3 sm:px-12 lg:px-20 py-1">
            <a href="https://www.ggsummit.me">
                <Image 
                width={250}
                height={160}
                alt="GGS Logo"
                src={"/logos/Green Growth Summit25 Logo.png"}
                />
            </a>
            
            <div className="mx-auto">
                <h1 className="text-2xl text-green-300"><span className={`${karlaBold.className}`}>#GGSummit25</span></h1>
            </div>
            <a href="https://hivos.org/" target="_blank">
                <img 
                    className="h-[50px] lg:h-[60px]"
                    alt="Hivos Logo"
                    src={"/logos/Hivos.png"}            
                />
            </a>
            
        </div>

        {/**Navbar mobile*/}
        <div className="flex md:hidden items-center justify-between bg-white px-3 py-1">
            <a href="https://www.ggsummit.me">
                <Image 
                width={180}
                height={120}
                alt="GGS Logo"
                src={"/logos/Green Growth Summit25 Logo.png"}
                />
            </a>
            
            <a href="https://hivos.org/" target="_blank">
                <img 
                    className="h-[40px]"
                    alt="Hivos Logo"
                    src={"/logos/Hivos.png"}            
                />
            </a>
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
                <h1 className="text-center md:text-left text-3xl sm:text-3xl md:text-[44px] lg:text-6xl text-green-300 mb-4"><span className={`${RobotoCondensed.className}`}>Green Growth Summit 2025</span></h1>
                <div className=" justify-center md:pb-5 md:w-[86%] lg:w-full ">
                    <h1 className={`${karla.className}pt-3 md:text-[18px] lg:text-1xl text-black text-justify `}>Unlocking solutions and innovative finance for a just green transition! Hivos is convening the Green Growth Summit 2025 in Cairo, Egypt, to drive green innovation, unlock investment opportunities, and strengthen local green ecosystems across the Middle East and North Africa.</h1>
                </div>
            </div>
            {/**Event details */}
            <div className="pl-16 md:pl-12 lg:pl-24 w-3/4 flex flex-row md:gap-20 lg:gap-48 pb-10">
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
                            src="/icons/Calendar.png"
                            alt="calendar"
                        />
                        June 16th, 2025
                    </div>
                    <div className={`${karlaBold.className} text-[15px] flex flex-row gap-2 items-center justify-start pl-1`}>
                        <Image
                            width={25}
                            height={25}
                            src="/icons/Location.png"
                            alt="location"
                        />
                        Sofitel Cairo Downtown Nile
                    </div>
                    <div className="pt-2 flex flex-col">
                       {/**  <button className= {`${karla.className} bg-red-300 uppercase 
                        text-white px-3 py-2 rounded-md w-[180px] text-[18px]`}>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLScv86Nlo6bfTL4Z0YozgeJWjgQ2tiK-mF9XppWS2a1qv4TB6Q/viewform' target="_blank">Register Now*</a>
                        </button>
                        <div className={`${karla.className} px-3 text-[13px]`}>*invitations are limited</div> */}
                        <div className={`${karla.className} px-3 text-[1px] md:text-[13px]`}>*By invitation only</div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="pb-2">
                        <button className={`${karlaBold.className} text-[16px] text-white bg-green-300 px-1 rounded-md`}>
                            GGS Tunisia
                        </button>
                    </div> 
                    <div className={`${karlaBold.className} text-[15px] flex flex-row gap-2 items-center justify-start pl-1`}>
                        {/* <Image
                            width={25}
                            height={25}
                            src="/icons/Calendar.png"
                            alt="calendar"
                        /> */}
                        Comming Soon!
                    </div>
                    {/* <div className={`${karlaBold.className} text-[15px] flex flex-row gap-2 items-center justify-start pl-1`}>
                        <Image
                            width={25}
                            height={25}
                            src="/icons/Location.png"
                            alt="location"
                        />
                        Mövenpick Gammarth - Tunis
                    </div> */}
                    <div className="pt-2 flex flex-col">
                        {/**<button className= {`${karla.className} bg-red-300 uppercase 
                        text-white px-3 py-2 rounded-md w-[180px] text-[18px]`}>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLSdbn80m2mOZYvEIRqnbSzSKIf3nBeJGiSVOndUSYSfQuE70Ng/viewform' target="_blank">Register Now*</a>
                        </button>
                        <div className={`${karla.className} px-3 text-[13px]`}>*invitations are limited</div>**/}
                        {/* <div className={`${karla.className} px-3 text-[11px] md:text-[13px]`}>*Registration is now closed</div> */}
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
            <div className="flex flex-col justify-start items-center pt-10 text-justify">
                <div className="px-5">
                    <h1 className="py-1 text-left text-2xl sm:text-3xl text-green-300"><span className={`${RobotoCondensed.className}`}>Green Growth Summit 2025</span></h1>
                    <h1 className={`${karla.className} w-[80%] pt-3 text-[14px] text-black text-justify`}>Unlocking solutions and innovative finance for a just green transition! Hivos is convening the Green Growth Summit 2025 in Cairo, Egypt, to drive green innovation, unlock investment opportunities, and strengthen local green ecosystems across the Middle East and North Africa.</h1>
                </div>
            </div>
            {/**Event details */}
            <div className="pl-5 flex flex-col gap-6 pt-10 pb-10">
       

                {/*Egypt**/}
                <div className="flex flex-col gap-3">
                    <div className="pb-2">
                        <button className={`${karlaBold.className} text-[16px] text-white bg-green-300 px-1 rounded-md`}>
                            GGS Egypt
                        </button>
                    </div>                     
                    <div className={`${karlaBold.className}  text-[13px] sm:text-[15px]  flex flex-row gap-2 items-center justify-start pl-1`}>
                        <Image
                            width={25}
                            height={25}
                            src="/icons/Calendar.png"
                            alt="calendar"
                        />
                        June 16th, 2025
                    </div>
                    <div className={`${karlaBold.className}  text-[13px] sm:text-[15px]  flex flex-row gap-2 items-center justify-start pl-1`}>
                        <Image
                            width={25}
                            height={25}
                            src="/icons/Location.png"
                            alt="location"
                        />
                        Sofitel Cairo Downtown Nile
                    </div>
                    <div className="pt-2 flex flex-col">
                        {/**<button className= {`${karla.className} bg-red-300 uppercase 
                            text-white px-3 py-2 rounded-md w-[140px] md:w-[180px] text-[14px] md:text-[18px]`}>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLScv86Nlo6bfTL4Z0YozgeJWjgQ2tiK-mF9XppWS2a1qv4TB6Q/viewform' target="_blank">Register Now*</a>
                        </button>
                        <div className={`${karla.className} px-3 text-[11px] md:text-[13px]`}>*invitations are limited</div>*/}
                        <div className={`${karla.className} px-3 text-[11px] md:text-[13px]`}>*By invitation only                        </div>
                    </div>
                </div>
               
                <Separator className='bg-red-300 w-2/3'/>
                {/*Tunis**/}
                <div className="flex flex-col gap-3">
                    <div className="pb-2">
                        <button className={`${karlaBold.className} text-[16px] text-white bg-green-300 px-1 rounded-md`}>
                            GGS Tunisia
                        </button>
                    </div> 
                    {/* <div className={`${karlaBold.className}  text-[13px] sm:text-[15px]  flex flex-row gap-2 items-center justify-start pl-1`}>
                        <Image
                            width={25}
                            height={25}
                            src="/icons/Calendar.png"
                            alt="calendar"
                        />
                        April 30th, 2024
                    </div>
                    <div className={`${karlaBold.className} text-[13px] sm:text-[15px] flex flex-row gap-2 items-center justify-start pl-1`}>
                        <Image
                            width={25}
                            height={25}
                            src="/icons/Location.png"
                            alt="location"
                        />
                        Mövenpick Gammarth - Tunis
                    </div> */}
                    <div className="pt-2 flex flex-col">
                        {/** <button className= {`${karla.className} bg-red-300 uppercase 
                            text-white px-3 py-2 rounded-md w-[140px] md:w-[180px] text-[14px] md:text-[18px]`}>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLSdbn80m2mOZYvEIRqnbSzSKIf3nBeJGiSVOndUSYSfQuE70Ng/viewform' target="_blank">Register Now*</a>
                        </button>
                        <div className={`${karla.className} px-3 text-[11px] md:text-[13px]`}>*invitations are limited</div>*/}
                        <div className={`${karla.className} px-3 text-[11px] md:text-[13px]`}>Comming Soon!</div>

                    </div>
                </div>
            </div>
        </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:pt-6 py-5">
            {/**Sponsor Section - Enhanced Layout */}
            <div className="flex flex-col w-full px-5 gap-8 mt-6 py-10 rounded-xl shadow-sm">
                {/* Section Title */}
                <div className="text-center mb-6">
                    <h2 className={`${RobotoCondensed.className} text-2xl text-green-300 font-bold`}>Our Supporters</h2>
                    <div className="w-24 h-1 bg-red-300 mx-auto mt-2"></div>
                </div>
                
                {/* Top row with three columns */}
                <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 px-4 md:px-10">
                    {/* With support from */}
                    <div className="flex flex-col w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                        <p className={`${karla.className} text-black pb-3 font-bold text-center border-b border-gray-100 mb-4`}>With support from</p>
                        <div className="flex flex-wrap justify-center gap-6 items-center">
                            <a href="https://www.challengefundyoungpeople.org/" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105 duration-300">
                                <img 
                                    src='/logos/CFFYE.png'
                                    className="h-[70px] lg:h-[75px]"
                                    alt="CFYE logo"
                                />
                            </a>
                            <a href="https://www.government.nl/ministries/ministry-of-foreign-affairs" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105 duration-300">
                                <img 
                                    src='/logos/MFAN.png'
                                    className="h-[75px] lg:h-[70px]"
                                    alt="Minbuza logo"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Sponsored by */}
                    <div className="flex flex-col w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                        <p className={`${karla.className} text-black pb-3 font-bold text-center border-b border-gray-100 mb-4`}>Sponsored by</p>
                        <div className="flex flex-wrap justify-center gap-6 items-center">
                            <a href="https://www.spark-online.org/" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105 duration-300">
                                <img 
                                    src='/logos/Spark.png'
                                    className="h-[65px] lg:h-[70px]"
                                    alt="Spark logo"
                                />
                            </a>
                            <a href="https://european-union.europa.eu/" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105 duration-300">
                                <img 
                                    src='/logos/euNew.png'
                                    className="h-[45px] lg:h-[50px]"
                                    alt="EU logo"
                                />
                            </a>
                            {/* Placeholder for Finance in Motion */}
                            <a href="https://www.finance-in-motion.com/" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105 duration-300">
                                <img 
                                    src='/logos/placeholder.png'
                                    className="h-[30px] lg:h-[35px]"
                                    alt="Finance in Motion logo"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Implemented by */}
                    <div className="flex flex-col w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                        <p className={`${karla.className} text-black pb-3 font-bold text-center border-b border-gray-100 mb-4`}>Implemented by</p>
                        <div className="flex flex-wrap justify-center gap-6 items-center">
                            <a href="https://newsilkroads.com/" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105 duration-300">
                                <img 
                                    src='/logos/newSilkRoad.png'
                                    className="h-[115px] lg:h-[120px]"
                                    alt="NSR logo"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Partners row - all logos in one line */}
                <div className="flex flex-col w-full mt-6 px-4 md:px-10">
                    <div className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                        <p className={`${karla.className} text-black pb-3 font-bold text-center border-b border-gray-100 mb-6`}>Partners</p>
                        <div className="flex flex-wrap justify-between w-full items-center">
                            <a href="https://auc.eg/auc-venture-lab/" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105 duration-300">
                                <img 
                                    src='/logos/aucVlab.png'
                                    className="h-[75px] lg:h-[80px] mb-4"
                                    alt="AUC Venture Lab logo"
                                />
                            </a>
                            <a href="https://www.gov.uk/world/organisations/british-embassy-cairo" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105 duration-300">
                                <img 
                                    src='/logos/britishe.png'
                                    className="h-[75px] lg:h-[80px] mb-4"
                                    alt="British Embassy Cairo logo"
                                />
                            </a>
                            <a href="https://chemonics.com/" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105 duration-300">
                                <img 
                                    src='/logos/Chemonics.png'
                                    className="h-[55px] lg:h-[50px] mb-4"
                                    alt="Chemonics logo"
                                />
                            </a>
                            <a href="https://www.nlfoodpartnership.com/" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105 duration-300">
                                <img 
                                    src='/logos/nfp.png'
                                    className="h-[75px] lg:h-[80px] mb-4"
                                    alt="Netherlands Food Partnership logo"
                                />
                            </a>
                            <a href="https://www.pathfinder.org/" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105 duration-300">
                                <img 
                                    src='/logos/pathFInderNew.png'
                                    className="h-[75px] lg:h-[80px] mb-4"
                                    alt="Pathfinder logo"
                                />
                            </a>
                            <a href="https://rdna.com/" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105 duration-300">
                                <img 
                                    src='/logos/RDNA.png'
                                    className="h-[50px] lg:h-[55px] mb-4"
                                    alt="RDNA logo"
                                />
                            </a>
                            <a href="https://trueprice.org/" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105 duration-300">
                                <img 
                                    src='/logos/TRUEPRICE.png'
                                    className="h-[50px] lg:h-[55px] mb-4"
                                    alt="True Price logo"
                                />
                            </a>
                            <a href="https://www.unido.org/" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-105 duration-300">
                                <img 
                                    src='/logos/UNIDO.png'
                                    className="h-[50px] lg:h-[55px] mb-4"
                                    alt="UNIDO logo"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
