import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small section of <span className="text-purple">Recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[574px] w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div className=" h-[40vh] flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden mb-10 relative ">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>

                <img src={img} alt="cover" className="z-10 absolute bottom-0" />
              </div>

              <div className="flex flex-col gap-2 px-2 md:px-4">
                <a href={link}>
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                    {title}
                  </h1>
                  <p className="lg:text-base lg:font-normal font-light text-white-200 text-sm line-clamp-2 mt-1">
                    {des}
                  </p>
                </a>
              </div>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <a href={link}>
                    <p className="flex lg:text-sm text-sm">Check Live site</p>
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
