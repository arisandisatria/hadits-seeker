import { moods, socmed } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";

interface ChooseMoodProps {
  getHadithByMood: (mood: string) => Promise<void>;
}

const ChooseMood: React.FC<ChooseMoodProps> = ({ getHadithByMood }) => {
  return (
    <div>
      <TextGenerateEffect
        duration={1}
        filter={false}
        words={"Cari hadits sesuai dengan mood kamu!"}
        className="text-white uppercase text-xl md:text-3xl"
      />
      <div className="flex flex-wrap justify-center gap-2 mt-8 animate-fadeInUp max-w-xl">
        {moods.map((mood: string) => (
          <HoverBorderGradient
            key={mood}
            onClick={() => getHadithByMood(mood)}
            containerClassName="rounded-full"
            as="button"
            className=" bg-black text-white flex items-center capitalize space-x-2"
          >
            <span>{mood}</span>
          </HoverBorderGradient>
        ))}
      </div>
      <footer className="mt-20 md:mt-32 flex flex-col md:flex-row gap-4 items-center justify-center w-full">
        <span className="font-extralight text-xs animate-fadeIn">
          Dibuat oleh Arisandi Satria Jeujanan
        </span>
        <div className="flex space-x-2 animate-fadeIn">
          {socmed.map((item: any) => (
            <Link href={item.route} key={item.alt} className="cursor-pointer">
              <Image src={item.logo} alt={item.alt} width={28} height={28} />
            </Link>
          ))}
        </div>
        <span className="font-bold underline text-red-400 text-xs animate-fadeIn">
          <Link href={"https://trakteer.id/vwzqvlcdqwifimumjq0o/tip"}>
            Traktir saya disini
          </Link>
        </span>
      </footer>
    </div>
  );
};

export default ChooseMood;
