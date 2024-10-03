"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useState } from "react";
import { chatSession } from "@/utils/AIModel";
import { haditsPrompt } from "@/utils/prompt";
import ChooseMood from "@/components/ChooseMood";
import HadithResult from "@/components/HadithResult";
import { LoginForm } from "@/components/LoginForm";

interface HadithResponse {
  arab: string;
  indonesia: string;
  penulis: string;
  penjelasan: string;
  saran: string;
}

export default function Home() {
  const [hadith, setHadith] = useState<HadithResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showAuthForm, setShowAuthForm] = useState<boolean>(false);
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
      const prompt = haditsPrompt(mood);

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
    <div className="relative flex justify-center items-center text-center p-8 md:p-14 h-screen">
      {showAuthForm && (
        <div
          onClick={() => setShowAuthForm(false)}
          className="absolute inset-0 z-20 bg-black bg-opacity-60"
        />
      )}

      <div
        className={`absolute ${
          showAuthForm == false ? "hidden" : "block"
        } z-20`}
      >
        <LoginForm />
      </div>
      <div className="absolute top-10 right-40">
        <HoverBorderGradient
          onClick={() => setShowAuthForm(true)}
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center capitalize space-x-2"
        >
          <span>Login</span>
        </HoverBorderGradient>
      </div>
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
          <HadithResult hadith={hadith} setHadith={setHadith} />
        ) : (
          <ChooseMood getHadithByMood={getHadithByMood} />
        )}
      </main>
    </div>
  );
}
