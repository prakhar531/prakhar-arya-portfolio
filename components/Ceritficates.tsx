import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Image from "next/image";
import Link from "next/link";
import { certificate } from "@/data";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { FaLocationArrow } from "react-icons/fa6";

const Ceritficates = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small section of <span className="text-purple">Certificates</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {certificate.map(({ title, desc, image, link, id, iconLists }) => (
          <div
            key={id}
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[574px] w-[80vw]"
          >
            <CardContainer className="inter-var">
              <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:border-white/[0.2] border-black/[0.1] sm:w-[574px] w-[80vw] sm:h-[36rem] lg:min-h-[32.5rem] h-[32rem] rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white"
                >
                  {title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="lg:text-base lg:font-normal font-light text-white-200 text-sm line-clamp-2 mt-2"
                >
                  {desc}
                </CardItem>
                <CardItem
                  translateZ="100"
                  className=" h-[40vh] flex items-center justify-center overflow-hidden my-10 relative"
                >
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg-img" />
                  </div>

                  <img src={image} alt="cover" className="z-10" />
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={link}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-base font-normal dark:text-white flex items-center justify-end "
                  >
                    Show Credentials
                    <FaLocationArrow className="ms-2" color="#CBACF9" />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ceritficates;
