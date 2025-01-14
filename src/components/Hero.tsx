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
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-purple-300 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Hi <span className="text-purple-300">👋</span> I'm,  <Cover>Harpreet <span>{!isTrue? 'ਸਿੰਘ': 'Singh'}</span></Cover>
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        A Full Stack Web Developer 🚀
      </p>
    </BackgroundLines>
      </div>
  );
}
