"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useState } from "react";
import { chatSession } from "@/utils/AIModel";

interface HadithResponse {
  arab: string;
  indonesia: string;
  penulis: string;
  penjelasan: string;
  saran: string;
}

export default function Home() {
  const moods = ["sedih", "senang", "takut", "bingung", "cinta", "marah"];
  const [hadith, setHadith] = useState<HadithResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const parseHadithResponse = (responseText: string): HadithResponse => {
    const parts = responseText
      .split("\n")
      .map((part) => part.trim())
      .filter((part) => part.length > 0);

    return {
      arab: parts[2] || "",
      indonesia: parts[4] || "",
      penulis: parts[6] || "",
      penjelasan: parts[8] || "",
      saran: parts[10] || "",
    };
  };

  const getHadithByMood = async (mood: string) => {
    setLoading(true);
    setError("");
    try {
      const result = await chatSession.sendMessage(
        `Tolong berikan aku hadits dari salah satu 9 orang HR. Abu Daud, HR. Ahmad, HR. Bukhari, HR. Darimi, HR. Ibnu Majah, HR. Malik, HR. Muslim, HR. Nasai, HR. Tirmidzi yang sesuai dan relevan dengan mood ${mood} dalam bahasa arab dan indonesianya beserta dengan penulis dan nomor haditsnya. Jawab dalam struktur seperti ini arab, arti, penulis dan nomor haditsnya, penjelasan, dan saran. Bersihkan hasilnya dari simbol-simbol mengganggu seperti * dan > dalam responsenya. Hilangkan keterangan dalam responsenya. Tetap tampilkan penjelasan dan sarannya`
      );
      const responseText = result?.response.text();

      if (responseText) {
        const parsedHadith = parseHadithResponse(responseText);
        setHadith(parsedHadith);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.error || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative grid place-items-center text-center p-14 h-screen">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={5}
          className="w-full h-full"
          particleColor="#ddd"
        />
      </div>
      <main>
        {loading ? (
          <TextGenerateEffect
            words={"Mencarikan hadits..."}
            className="text-white text-lg capitalize"
          />
        ) : hadith ? (
          <div className="max-w-4xl mt-8 flex flex-col justify-center items-center space-y-10">
            <div className="flex flex-col space-y-4">
              <p className="text-6xl">{hadith?.arab}</p>
              <p className="text-xl">{hadith?.indonesia}</p>
              <p className="text-lg font-extralight">{hadith?.penulis}</p>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-light">{hadith?.penjelasan}</p>
              <p className="font-light">{hadith?.saran}</p>
            </div>

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
          </div>
        ) : (
          <>
            <TextGenerateEffect
              duration={1}
              filter={false}
              words={"Cari hadits sesuai dengan mood kamu!"}
              className="text-white uppercase"
            />
            <div className="flex justify-center space-x-2 mt-8 animate-fadeInUp">
              {moods.map((mood: string) => (
                <HoverBorderGradient
                  key={mood}
                  onClick={() => getHadithByMood(mood)}
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center capitalize space-x-2"
                >
                  <span>{mood}</span>
                </HoverBorderGradient>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
