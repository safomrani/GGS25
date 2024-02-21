import Image from "next/image";
import { Separator } from '../components/ui/separator';
import { freehand } from "./components/fonts";
import { karla, karlaBold } from "./components/fonts";


export default function Home() {
  return (
    <main className="min-h-screen items-center bg-black pt-28 lg:pt-1 bg-blend-hard-light	" style={{
      backgroundImage:
      "url('/images/GGS-landing page.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  }}>
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center lg:justify-between p-3 lg:p-12 w-full">
          <div className="hidden lg:block">
            <p className={`${karla.className} text-white pb-3`}>Core Sponsors</p>
            <div className="flex gap-7">
              <img 
                src='/logos/Hivos.png'
                className="h-[70px]"
                alt="Hivos logo"
              />
            </div>
          </div>
          <div className="items-center">
            <Image 
              width={400}
              height={210}
              alt="GGS Logo"
              src={"/logos/Inverted-GGS.png"}
            />
          </div>
          <div className="hidden lg:block">
            <p className={`${karla.className} text-white pb-3`}>Implementation Partners</p>
            <div className="flex gap-7">
              <img 
                src='/logos/newsilk-logo.png'
                className="h-[70px]"
                alt="FMO logo"
              />
              <img 
                src='/logos/changelabs.png'
                className="h-[70px]"
                alt="FMO logo"
              />
            </div>
          </div>
        </div>
        <div className="text-center items-center pt-10 md:p-12">
          <h1 className="p-3 text-2xl text-white sm:text-3xl md:text-5xl lg:text-6xl dark:text-white"><span className={`${karlaBold.className} uppercase`}>We are</span> <span className={`${freehand.className} text-red-300`}> launching </span><span className={`${karlaBold.className} uppercase`}>soon</span></h1>
          <div className="flex items-center justify-center"> 
            <Separator
              className='bg-red-300 w-3/4'
            />
          </div>
          <h1 className= {`${karla.className} pt-5 text-1xl uppercase text-white md:text-3xl lg:text-5xl dark:text-white tracking-widest`}>stay tuned</h1>
        </div>
      </div>
      <div className="hidden lg:flex flex-col justify-center items-start pl-12 py-3 pt-16 z-50">
        <p className={`${karla.className} text-white p-3`}>With Support from</p>
        <div className="flex justify-center items-center gap-7 pr-10 p-3 ">
              <img 
                src='/logos/funded by EU.png'
                className="h-[70px]"
                alt="Funded by EU logo"
              />
              <img 
                src='/logos/Impact Europe.png'
                className="h-[70px]"
                alt="Impact EU logo"
              />
              <img 
                src='/logos/Challenge fund.png'
                className="h-[70px]"
                alt="Challengefund logo"
              />
              <img 
                src='/logos/MFAN.png'
                className="h-[70px]"
                alt="MFAN logo"
              />
          </div>
      </div>
    </main>
  );
}
