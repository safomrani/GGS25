import Image from "next/image";
import { Separator } from '../components/ui/separator';
import { freehand } from "./components/fonts";
import { karla, karlaBold } from "./components/fonts";


export default function Home() {
  return (
    <main className="min-h-screen items-center pt-28 lg:pt-1 bg-green-200">
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center p-3 lg:p-12 w-full">
          <div className="flex justify-center items-center">
            <Image 
              width={400}
              height={240}
              alt="GGS Logo"
              src={"/logos/GGS-Logo.png"}
            />
          </div>
        </div>
        <div className="text-center items-center pt-10 md:p-12">
          <h1 className="p-3 text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-green-300"><span className={`${karlaBold.className} uppercase`}>We are</span> <span className={`${freehand.className} text-red-300`}> launching </span><span className={`${karlaBold.className} uppercase`}>soon</span></h1>
          <div className="flex items-center justify-center"> 
            <Separator className='bg-red-300 w-3/4'/>
          </div>
          <h1 className= {`${karla.className} pt-5 text-1xl uppercase text-green-300 md:text-3xl lg:text-5xl tracking-widest`}>stay tuned</h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between pt-20 lg:pt-12 p-3 lg:p-12">
        {/**Sponsor & implementation partners */}
        <div className="flex flex-wrap lg:flex-row gap-5 lg:gap-10 items-center justify-center"> 
          <div className="">
            <p className={`${karla.className} text-black pb-3 text-bold text-center lg:text-left`}>Core Sponsor</p>
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
        <div className="py-5 lg:py-0">
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
