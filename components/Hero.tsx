import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoDocumentTextSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.3] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless Experience"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-m lg:text-2xl">
            Hi, I&apos;m, Prakhar Arya. a NEXTJS developer....
          </p>
          <div className="flex gap-2 md:gap-5">
            <a href="https://github.com/prakhar531">
              <MagicButton
                title=""
                icon={<FaGithub className="md:w-6 md:h-6 w-4 h-4 " />}
                position="right"
              />
            </a>
            <a href="https://www.linkedin.com/in/prakhar-dev/">
              <MagicButton
                title=""
                icon={<ImLinkedin className="md:w-6 md:h-6 w-4 h-4 " />}
                position="right"
              />
            </a>
            <a href="https://twitter.com/prakhararya521">
              <MagicButton
                title=""
                icon={<FaTwitter className="md:w-6 md:h-6 w-4 h-4 " />}
                position="right"
              />
            </a>
            <a href="https://leetcode.com/u/prakhar_arya/">
              <MagicButton
                title=""
                icon={<SiLeetcode className="md:w-6 md:h-6 w-4 h-4 " />}
                position="right"
              />
            </a>
            <a href="https://drive.google.com/file/d/1gCI0fwU3KYEr9GmhmEOBaZXjDvH60UE_/view?usp=sharing">
              <MagicButton
                title=""
                icon={
                  <IoDocumentTextSharp className="md:w-6 md:h-6 w-4 h-4 " />
                }
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
