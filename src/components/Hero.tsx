'use client'
import React, { useEffect, useState } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Cover } from "./ui/cover";

export function BackgroundLinesDemo() {
  const [isTrue,setIsTrue] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTrue((prevState) => !prevState);
    }, 7000);

    return () => clearInterval(interval)
  },[])


  return (
    <div id="home" className="h-full">
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 h-[40rem]">
      
      <h2 className="text-center bg-clip-text text-transparent bg-multi-gradient dark:from-neutral-600 dark:to-white text-4xl sm:text-5xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight max-[462px]:leading-loose">
        Hi <span className="text-purple-300">👋</span> I'm,  <Cover>Harpreet <span>{!isTrue? 'ਸਿੰਘ': 'Singh'}</span></Cover>
      </h2>
      <p className="max-w-xl mx-auto bg-clip-text text-transparent bg-multi-gradient text-[18px] md:text-2xl text-center">
        A Full Stack Web Developer <span className="text-red-200">🚀</span>
      </p>
    </BackgroundLines>
      </div>
  );
}
