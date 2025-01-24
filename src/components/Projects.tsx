"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { Cover } from "./ui/cover";

export function ThreeDCardDemo() {
  return (
    <>
      <div id="projects" className="h-full w-full dark:bg-neutral-950 flex items-center flex-col pt-20">
        <div className="text-lg md:text-4xl">
          <Cover>My Projects</Cover>
        </div>
        <div className="grid grid-cols-2 gap-x-10 max-[1011px]:grid-cols-1">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
             
              <div className="flex  items-center gap-x-5">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Scout ✨
              </CardItem>
              <CardItem className="text-white flex gap-x-3">
                <img className="h-6 " src="../../public/../assets/react-svg.svg" alt="" />
                <img className="h-7 brightness-[2]" src="../../public/../assets/nodejs.svg" alt="" />
                <img className="h-6" src="../../public/../assets/tailwindcss.svg" alt="" />
                <img className="h-6" src="../../public/../assets/mongodb.svg" alt="" />
                <img className="h-6" src="../../public/../assets/express.svg" alt="" />
                <img className="h-6" src="../../public/../assets/redux.svg" alt="" />
                </CardItem>
              </div>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                This MERN stack-based job-searching platform offers newsletters, providing users with tailored job
                updates in their preferred niche.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="../../public/../assets/Scout.svg"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://scout-ui-2an4.onrender.com/"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
                >
                  Live →
                </CardItem>
                
                <CardItem
                  translateZ={20}
                  href="https://github.com/Harpreet2004/Scout"
                  target="_blank"
                  as={Link}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
                >
                  Github
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <div className="flex  items-center gap-x-5">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Chai Pani ✨
              </CardItem>
              <CardItem className="text-white flex gap-x-3">
                <img className="h-6 " src="../../public/../assets/react-svg.svg" alt="" />
                <img className="h-6 " src="../../public/../assets/tailwindcss.svg" alt="" />
                </CardItem>
              </div>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Built a dynamic, responsive cafe website using React.js and styled with Tailwind CSS for a modern design.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="../../public/../assets/Chai-Pani.svg"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://chai-pani.vercel.app/"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
                >
                  Live →
                </CardItem>
                <CardItem
                  translateZ={20}
                  href="https://github.com/Harpreet2004/Chai-Pani"
                  target="_blank"
                  as={Link}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
                >
                  Github
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <div className="flex  items-center gap-x-5">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Nested Comments ✨
              </CardItem>
              <CardItem className="text-white flex gap-x-3">
                <img className="h-6 " src="../../public/../assets/html-5.svg" alt="" />
                <img className="h-6 " src="../../public/../assets/css-3.svg" alt="" />
                <img className="h-6" src="../../public/../assets/javascript.svg" alt="" />
                </CardItem>
              </div>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Developed a fully responsive web application for a nested comment section.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="../../public/../assets/Nested.svg"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://nested-comment-section.netlify.app/"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
                >
                  Live →
                </CardItem>
                <CardItem
                  translateZ={20}
                  href="https://github.com/Harpreet2004/Javascript-Projects/tree/main/Nested-Comment-Section"
                  target="_blank"
                  as={Link}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
                >
                  Github
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

        </div>
      </div>
    </>
  );
}
