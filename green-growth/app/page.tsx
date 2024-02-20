import Image from "next/image";
import { Separator } from '../components/ui/separator';
import { freehand } from "./components/fonts";
import { karla, karlaBold } from "./components/fonts";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black" style={{/*
      backgroundImage:
      "url('/images/GGS-landing page.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',*/
  }}>
      <div className="flex flex-col items-center">
        <div className="flex items-center p-14">
          <Image 
            width={400}
            height={190}
            alt="GGS Logo"
            src={"/logos/Inverted-GGS.png"}
          />
        </div>
        <div className="text-center items-center p-10 md:p-16">
          <h1 className="p-3 text-2xl text-white sm:text-3xl md:text-5xl lg:text-6xl dark:text-white"><span className={`${karlaBold.className} uppercase`}>We are</span> <span className={`${freehand.className} text-red-300`}> launching </span><span className={`${karlaBold.className} uppercase`}>soon</span></h1>
          <div className="flex items-center justify-center"> 
            <Separator
              className='bg-red-300 w-3/4'
            />
          </div>
          <h1 className= {`${karla.className} pt-5 pl-5 text-1xl pb-5 uppercase text-white md:text-3xl lg:text-5xl dark:text-white tracking-widest`}>stay tuned</h1>
        </div>
      </div>
    </main>
  );
}
