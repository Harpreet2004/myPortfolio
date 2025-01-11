import { Cover } from "./ui/cover";
import { GlareCard } from "./ui/glare-card";

export function GlareCardDemo() {
  return (
    <>
      <div className="h-[54rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center flex-col gap-20">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div>
          {/* <h2 className="text-white text-4xl">Technical Skills</h2>
           */}
          <Cover>warp speed</Cover>
        </div>
        <div className="grid grid-cols-5 gap-x-5 gap-y-10">
          <GlareCard className="h-[130px] flex flex-col items-center justify-center">
            <img className="h-20 mt-20" src="../../public/../assets/react-svg.svg" alt="reactjs" />
            <p className="text-white font-bold text-xl mt-4">ReactJs</p>
          </GlareCard>
          <GlareCard className="h-[130px] flex flex-col items-center justify-center">
            <img className="h-20 mt-20" src="../../public/../assets/javascript.svg" alt="javascript" />
            <p className="text-white font-bold text-xl mt-4">JavaScript</p>
          </GlareCard>
          <GlareCard className="h-[130px] flex flex-col items-center justify-center">
            <img className="h-20 mt-20" src="../../public/../assets/html-5.svg" alt="html5" />
            <p className="text-white font-bold text-xl mt-4">HTML5</p>
          </GlareCard>
          <GlareCard className="h-[130px] flex flex-col items-center justify-center">
            <img className="h-20 mt-20" src="../../public/../assets/css-3.svg" alt="css" />
            <p className="text-white font-bold text-xl mt-4">Css</p>
          </GlareCard>
          <GlareCard className="h-[130px] flex flex-col items-center justify-center">
            <img className="h-20 mt-20" src="../../public/../assets/nodejs.svg" alt="nodejs" />
            <p className="text-white font-bold text-xl mt-4">Node Js</p>
          </GlareCard>
          <GlareCard className="h-[130px] flex flex-col items-center justify-center">
            <img className="h-20 mt-20" src="../../public/../assets/express.svg" alt="expressjs" />
            <p className="text-white font-bold text-xl mt-4">Express Js</p>
          </GlareCard>
          <GlareCard className="h-[130px] flex flex-col items-center justify-center">
            <img className="h-20 mt-20" src="../../public/../assets/tailwindcss.svg" alt="tailwindcss" />
            <p className="text-white font-bold text-xl mt-4">Tailwind Css</p>
          </GlareCard>
          <GlareCard className="h-[130px] flex flex-col items-center justify-center">
            <img className="h-20 mt-20 invert" src="../../public/../assets/nextjs.svg" alt="nextjs" />
            <p className="text-white font-bold text-xl mt-4">Next Js</p>
          </GlareCard>
          <GlareCard className="h-[130px] flex flex-col items-center justify-center">
            <img className="h-20 mt-20" src="../../public/../assets/cplusplus.svg" alt="c++" />
            <p className="text-white font-bold text-xl mt-4">C++</p>
          </GlareCard>
          <GlareCard className="h-[130px] flex flex-col items-center justify-center">
            <img className="h-20 mt-20 rounded-[12px]" src="../../public/../assets/aceternityui.svg" alt="Aceternity UI" />
            <p className="text-white font-bold text-xl mt-4">Aceternity UI</p>
          </GlareCard>
        </div>
      </div>
    </>
  );
}
