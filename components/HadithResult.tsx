import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";
import { TelegramShare, WhatsappShare } from "react-share-kit";

interface HadithResponse {
  arab: string;
  indonesia: string;
  penulis: string;
  penjelasan: string;
  saran: string;
}

interface HadithResultProps {
  hadith: HadithResponse;
  setHadith: React.Dispatch<React.SetStateAction<HadithResponse | null>>;
}

const HadithResult: React.FC<HadithResultProps> = ({ hadith, setHadith }) => {
  return (
    <div className="max-w-4xl my-8 flex flex-col justify-center items-center space-y-8">
      <div className="flex flex-col space-y-4">
        <p className="text-4xl md:text-6xl">{hadith?.arab}</p>
        <p className="text-base md:text-xl">{hadith?.indonesia}</p>
        <p className="text-sm md:text-lg font-extralight">{hadith?.penulis}</p>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="font-light text-base md:text-lg">{hadith?.penjelasan}</p>
        <p className="font-light text-base md:text-lg">{hadith?.saran}</p>
      </div>

      <div className="flex gap-20 items-center">
        <HoverBorderGradient
          onClick={() => setHadith(null)}
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black group bg-white text-black dark:text-white flex items-center space-x-2 "
        >
          <span className="inline-block group-hover:rotate-90 duration-200 transition">
            &rarr;
          </span>
          <span>Kembali</span>
        </HoverBorderGradient>

        <div className="flex gap-3 items-center">
          <p className="font-light text-base md:text-lg">Bagikan ke:</p>
          <div className="z-10 flex items-center gap-2">
            <WhatsappShare
              url={"https://hadits-seeker.vercel.app/"}
              title={`${hadith?.indonesia}. Cek hadits lainnya sesuai mood kamu disini`}
              blankTarget={true}
              size={28}
              round={true}
              separator=" - "
            />
            <TelegramShare
              url={"https://hadits-seeker.vercel.app/"}
              title={hadith?.indonesia}
              blankTarget={true}
              size={28}
              round={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HadithResult;
