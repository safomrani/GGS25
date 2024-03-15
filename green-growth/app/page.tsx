import Image from "next/image";
import { Separator } from '../components/ui/separator';
import { freehand } from "./components/fonts";
import { karla, karlaBold } from "./components/fonts";
import Hero from "./components/hero";
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
      <Hero/>
      <Footer/>
    </>
  );
}
