"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Let's",
    },
    {
      text: "Connect and",
    },
    {
      text: "Collaborate.",
      className: "!bg-clip-text !text-transparent !bg-multi-gradient",
    }
  ];
  return (
    <div id="contact" className="flex flex-col items-center justify-center h-[40rem] bg-black text-2xl">
      <TypewriterEffectSmooth words={words} className="text-xl" />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-6">
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/harpreet-singh04"
          target="_blank"
          rel="noopener noreferrer"
          className="w-40 h-10 flex items-center justify-center rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
        >
          LinkedIn
        </a>
        {/* Email Button */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=harpreetsinghk2004@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-40 h-10 flex items-center justify-center rounded-xl bg-white text-black border border-black text-sm"
        >
          Mail
        </a>
      </div>
    </div>
  );
}
