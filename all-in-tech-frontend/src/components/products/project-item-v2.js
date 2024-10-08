import {
  BEHANCE,
  DRIBBLE,
  GITHUB,
  HUGGING_FACE,
  INSTAGRAM,
  KAGGLE,
  LINKEDIN,
  MEDIUM,
  WEBSITE,
  YOUTUBE,
} from "@/constant/constant_svg";
import AnimateOnScroll from "@/service/animate-on-scroll";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectItemV2({
  mockup,
  logo,
  title,
  desc,
  linkData,
  location,
}) {
  return (
    <>
      <div
        className={
          location
            ? "flex flex-row sm:flex-row-reverse items-center justify-center sm:justify-between max-w-[700px] md:mx-auto mx-[30px] my-[40px]"
            : "flex flex-row items-center justify-center sm:justify-between max-w-[700px] md:mx-auto mx-[30px] my-[40px]"
        }
      >
        <AnimateOnScroll
          animationClass={location ? "slide-left" : "slide-right"}
        >
          <Image
            src={mockup}
            width={200}
            height={500}
            alt="mockup"
            className="sm:block hidden"
          />
        </AnimateOnScroll>
        <AnimateOnScroll
          animationClass={location ? "slide-right" : "slide-left"}
        >
          <div className="h-full flex flex-col items-center sm:items-start ml-0 sm:ml-[15px] md:ml-0 md:w-[430px]">
            <Image src={logo} width={200} height={100} alt="logo" />
            <div className="Jost text-[24px] font-medium leading-[37px] tracking-[-1.5%] text-white my-[14px]">
              {title}
            </div>
            <div className="text-[18px] Jost font-light italic leading-[22px] tracking-[-1.5%] text-white opacity-70 text-center sm:text-start">
              {desc}
            </div>
            <div className="flex flex-row flex-wrap max-h-[30px] items-center md:mr-6 lg:mr-[70px] mt-[14px]">
              {linkData.linkedin && (
                <Link className="mr-2" href={linkData.linkedin} target="_blank">
                  <Image src={LINKEDIN} width={30} height={30} alt="Linkedin" />
                </Link>
              )}
              {linkData.github && (
                <Link className="mr-2" href={linkData.github} target="_blank">
                  <Image src={GITHUB} width={30} height={30} alt="Github" />
                </Link>
              )}
              {linkData.huggingFace && (
                <Link
                  className="mr-2"
                  href={linkData.huggingFace}
                  target="_blank"
                >
                  <Image
                    src={HUGGING_FACE}
                    width={30}
                    height={30}
                    alt="Hugging Face"
                  />
                </Link>
              )}
              {linkData.kaggle && (
                <Link className="mr-2" href={linkData.kaggle} target="_blank">
                  <Image src={KAGGLE} width={30} height={30} alt="Kaggle" />
                </Link>
              )}
              {linkData.instagram && (
                <Link
                  className="mr-2"
                  href={linkData.instagram}
                  target="_blank"
                >
                  <Image
                    src={INSTAGRAM}
                    width={30}
                    height={30}
                    alt="Instagram"
                  />
                </Link>
              )}
              {linkData.behance && (
                <Link className="mr-2" href={linkData.behance} target="_blank">
                  <Image src={BEHANCE} width={30} height={30} alt="Behance" />
                </Link>
              )}
              {linkData.dribble && (
                <Link className="mr-2" href={linkData.dribble} target="_blank">
                  <Image src={DRIBBLE} width={30} height={30} alt="Dribble" />
                </Link>
              )}
              {linkData.medium && (
                <Link className="mr-2" href={linkData.medium} target="_blank">
                  <Image src={MEDIUM} width={30} height={30} alt="Medium" />
                </Link>
              )}
              {linkData.youtube && (
                <Link className="mr-2" href={linkData.youtube} target="_blank">
                  <Image src={YOUTUBE} width={30} height={30} alt="Youtube" />
                </Link>
              )}
              {linkData.website && (
                <Link className="mr-2" href={linkData.website} target="_blank">
                  <Image src={WEBSITE} width={30} height={30} alt="Website" />
                </Link>
              )}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </>
  );
}
