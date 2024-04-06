import Image from "next/image";
import { Separator } from '../../components/ui/separator';
import { freehand } from "./fonts";
import { karla, karlaBold, karlaExtraBold, RobotoCondensed } from "./fonts";
import { FAQs } from '@/app/data/faq';

export default function FAQ() {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center py-10">
        {FAQs?.map((question, idx) => (
            <div key={idx} className="flex flex-col h-[80px] rounded-[16px] bg-white pb-5 shadow-md shadow-gray p-4 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-105 delay-100	">           
                <div className={`${karlaExtraBold.className} text-green-600 `}>{question.question}</div>
                <div className={`${karla.className}`}>{question.answer}</div>
            </div>
        ))}
    </div>
  )
}
