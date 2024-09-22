"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useState } from "react";
import { chatSession } from "@/utils/AIModel";
import Image from "next/image";
import Link from "next/link";

interface HadithResponse {
  arab: string;
  indonesia: string;
  penulis: string;
  penjelasan: string;
  saran: string;
}

export default function Home() {
  const moods = [
    "🥺 sedih",
    "😁 senang",
    "😨 takut",
    "😕 bingung",
    "🥰 cinta",
    "😡 marah",
  ];

  const socmed = [
    {
      logo: "/instagram.png",
      alt: "Instagram",
      route: "https://www.instagram.com/arisandi_satria",
    },
    {
      logo: "/github-logo.png",
      alt: "Github",
      route: "https://github.com/arisandisatria",
    },
    {
      logo: "/business.png",
      alt: "Linkedin",
      route: "https://www.linkedin.com/in/arisandisatriajeujanan/",
    },
  ];

  const [hadith, setHadith] = useState<HadithResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const parseHadithResponse = (responseText: string): HadithResponse => {
    const parts = responseText
      .split("\n")
      .map((part) => part.trim())
      .filter((part) => part.length > 0);

    console.log(parts);

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
      const prompt = `Berikan hadits shahih dari salah satu perawi berikut: Abu Daud, Ahmad, Bukhari, Darimi, Ibnu Majah, Malik, Muslim, Nasai, atau Tirmidzi, yang sesuai dengan mood "${mood}". Strukturkan hasilnya dengan format berikut:

Bahasa Arab: Teks hadits dalam bahasa Arab.
Terjemahan Indonesia: Terjemahan hadits ke dalam Bahasa Indonesia.
Perawi & Nomor Hadits: Sumber hadits beserta nomor haditsnya (contoh: HR. Bukhari No. 52).
Penjelasan: Penjelasan singkat tentang makna atau konteks hadits.
Saran: Saran yang diberikan harus berupa paragraf, bukan dalam bentuk daftar atau list.
Contoh:

Bahasa Arab:
حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مَسْلَمَةَ قَالَ أَخْبَرَنَا مَالِكٌ عَنْ يَحْيَى بْنِ سَعِيدٍ عَنْ مُحَمَّدِ بْنِ إِبْرَاهِيمَ عَنْ عَلْقَمَةَ بْنِ وَقَّاصٍ عَنْ عُمَرَ

Terjemahan Indonesia:
Telah menceritakan kepada kami [Abdullah bin Maslamah] berkata, telah mengabarkan kepada kami [Malik] dari [Yahya bin Sa'id] dari [Muhammad bin Ibrahim] dari [Alqamah bin Waqash] dari [Umar], bahwa Rasulullah shallallahu 'alaihi wasallam bersabda: "Semua perbuatan tergantung niatnya..."

Perawi & Nomor Hadits:
HR. Bukhari No. 52

Penjelasan:
Hadits ini menunjukkan pentingnya niat dalam setiap amal perbuatan.

Saran:
Dalam menghadapi setiap situasi, niat yang baik harus menjadi landasan utama. Pastikan selalu niatkan semua tindakan kita untuk kebaikan dan demi meraih ridha Allah. Hindari niat yang bersifat duniawi semata, karena niat menentukan hasil di akhirat.`;

      const result = await chatSession.sendMessage(prompt);
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
    <div className="relative grid place-items-center text-center p-8 md:p-14 h-screen">
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
            className="text-white text-base md:text-lg capitalize"
          />
        ) : hadith ? (
          <div className="max-w-4xl my-8 flex flex-col justify-center items-center space-y-8">
            <div className="flex flex-col space-y-4">
              <p className="text-4xl md:text-6xl">{hadith?.arab}</p>
              <p className="text-base md:text-xl">{hadith?.indonesia}</p>
              <p className="text-sm md:text-lg font-extralight">
                {hadith?.penulis}
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="font-light text-base md:text-lg">
                {hadith?.penjelasan}
              </p>
              <p className="font-light text-base md:text-lg">{hadith?.saran}</p>
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
              className="text-white uppercase text-xl md:text-3xl"
            />
            <div className="flex flex-wrap justify-center gap-2 mt-8 animate-fadeInUp">
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
            <footer className="mt-32 absolute flex flex-col md:flex-row gap-4 items-center justify-center left-1/2 transform -translate-x-1/2 w-full">
              <span className="font-extralight text-xs animate-fadeIn">
                Dibuat oleh Arisandi Satria Jeujanan
              </span>
              <div className="flex space-x-2 animate-fadeIn">
                {socmed.map((item: any) => (
                  <Link
                    href={item.route}
                    key={item.alt}
                    className="cursor-pointer"
                  >
                    <Image
                      src={item.logo}
                      alt={item.alt}
                      width={28}
                      height={28}
                    />
                  </Link>
                ))}
              </div>
            </footer>
          </>
        )}
      </main>
    </div>
  );
}
