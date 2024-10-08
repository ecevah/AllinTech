import {
  ALLINLOBBY_LOGO,
  BEHANCE,
  DRIBBLE,
  GITHUB,
  HUGGING_FACE,
  INSTAGRAM,
  KAGGLE,
  LINKEDIN,
  LINKEDIN_OUTLAND,
  MEDIUM,
  WEBSITE,
} from "@/constant/constant_svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectItem({
  logo,
  linkData,
  imageTop,
  imageLeft,
  imageRight,
}) {
  return (
    <div className="flex flex-col layout px-4 pb-8 md:px-10 lg:px-[37px] lg:pb-[52px]">
      <div className="flex flex-row justify-between items-center md:items-end">
        <Image
          src={logo}
          width={240}
          height={160}
          alt="Logo"
          className="mb-4 md:mb-0"
        />
        <div className="flex flex-row flex-wrap max-h-[30px] items-center justify-center md:justify-end md:mr-6 lg:mr-[70px]">
          {linkData.linkedin && (
            <Link className="ml-2" href={linkData.linkedin} target="_blank">
              <Image src={LINKEDIN} width={30} height={30} alt="Linkedin" />
            </Link>
          )}
          {linkData.github && (
            <Link className="ml-2" href={linkData.github} target="_blank">
              <Image src={GITHUB} width={30} height={30} alt="Github" />
            </Link>
          )}
          {linkData.huggingFace && (
            <Link className="ml-2" href={linkData.huggingFace} target="_blank">
              <Image
                src={HUGGING_FACE}
                width={30}
                height={30}
                alt="Hugging Face"
              />
            </Link>
          )}
          {linkData.kaggle && (
            <Link className="ml-2" href={linkData.kaggle} target="_blank">
              <Image src={KAGGLE} width={30} height={30} alt="Kaggle" />
            </Link>
          )}
          {linkData.instagram && (
            <Link className="ml-2" href={linkData.instagram} target="_blank">
              <Image src={INSTAGRAM} width={30} height={30} alt="Instagram" />
            </Link>
          )}
          {linkData.behance && (
            <Link className="ml-2" href={linkData.behance} target="_blank">
              <Image src={BEHANCE} width={30} height={30} alt="Behance" />
            </Link>
          )}
          {linkData.dribble && (
            <Link className="ml-2" href={linkData.dribble} target="_blank">
              <Image src={DRIBBLE} width={30} height={30} alt="Dribble" />
            </Link>
          )}
          {linkData.medium && (
            <Link className="ml-2" href={linkData.medium} target="_blank">
              <Image src={MEDIUM} width={30} height={30} alt="Medium" />
            </Link>
          )}
          {linkData.website && (
            <Link className="ml-2" href={linkData.website} target="_blank">
              <Image src={WEBSITE} width={30} height={30} alt="Website" />
            </Link>
          )}
        </div>
      </div>
      <div className="rounded-[24px] mt-8 max-h-[705px] overflow-hidden">
        <Image src={imageTop} width={1366} height={705} alt="Top" />
      </div>

      <div className="flex max-[1470px]:flex-col flex-row w-full justify-between mt-8 ">
        <div className="rounded-[24px] max-[1470px]:mb-8 mb-0 max-[1470px]:w-full max-h-[705px] overflow-hidden">
          <Image src={imageLeft} width={545} height={705} alt="Left" />
        </div>
        <div className="rounded-[24px] max-[1470px]:w-full max-h-[705px] overflow-hidden">
          <Image src={imageRight} width={790} height={705} alt="Right" />
        </div>
      </div>
    </div>
  );
}
