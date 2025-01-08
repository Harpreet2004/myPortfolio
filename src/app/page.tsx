import { TypewriterEffectSmoothDemo } from "@/components/Contact";
import { TimelineDemo } from "@/components/Experience";
import { BackgroundLinesDemo } from "@/components/Hero";
import { ThreeDCardDemo } from "@/components/Projects";
import { GlareCardDemo } from "@/components/Skills";

export default function Home() {
  return (
      <>
        <BackgroundLinesDemo />
        <TimelineDemo />
        <GlareCardDemo />
        <ThreeDCardDemo />
        <TypewriterEffectSmoothDemo />
      </>
  );
}
