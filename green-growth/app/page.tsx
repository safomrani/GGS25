import Image from "next/image";
import { Separator } from '../components/ui/separator';
import { freehand } from "./components/fonts";
import { karla, karlaBold } from "./components/fonts";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 pt-24 md:p-24 bg-black" style={{/*
      backgroundImage:
      "url('/images/GGS-landing page.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',*/
  }}>
      <div className="flex flex-col items-center">
        <div className="flex items-center p-3 md:p-14">
          <Image 
            width={400}
            height={210}
            alt="GGS Logo"
            src={"/logos/Inverted-GGS.png"}
          />
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
    </main>
  );
}
