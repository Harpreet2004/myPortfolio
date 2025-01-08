import { GlareCard } from "./ui/glare-card";

export function GlareCardDemo() {
  return (
    <>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center flex-col">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h2 className="text-white">Technical Skills 👨‍💻</h2>
        <div>
        <GlareCard className="h-[100px] flex flex-col items-center justify-center">
      <img className="h-20 mt-20" src="../../public/../assets/react-svg.svg" alt="ww" />
      <p className="text-white font-bold text-xl mt-4">ReactJs</p>
        </GlareCard>
        </div>
      </div>
    </>
  );
}
