"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Let's",
    },
    {
      text: "connect and",
    },
    {
      text: "collaborate.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div id="contact" className="flex flex-col items-center justify-center h-[40rem] bg-black ">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Linkedin
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Mail
        </button>
      </div>
    </div>
  );
}
