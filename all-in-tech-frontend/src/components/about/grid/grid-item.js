import React from "react";
import styles from "./grid.module.css";
import Image from "next/image";
import { TEAM } from "@/constant/constant_team";
import Link from "next/link";
import {
  BEHANCE,
  DRIBBLE,
  GITHUB,
  HUGGING_FACE,
  INSTAGRAM,
  KAGGLE,
  LINKEDIN_OUTLAND,
  MEDIUM,
  WEBSITE,
} from "@/constant/constant_svg";
import AnimateOnScroll from "@/service/animate-on-scroll";

export default function GridItem({ item, animate }) {
  return (
    <>
      <AnimateOnScroll animationClass={animate}>
        <div className="flex flex-col items-center w-fit h-fit my-[80px]">
          <div className={styles.gridItem}>
            <Image src={item.photo} width={320} height={350} />
          </div>
          <div className="Jost text-[24px] font-medium leading-[37px] tracking-[-1.5%] mt-[30px] cursor-default">
            {item.name}
          </div>
          <div className="Jost text-[24px] leading-[37px] tracking-[-1.5%] italic font-light mt-[10px] mb-[10px] cursor-default">
            {item.position}
          </div>
          <div className="flex flex-row w-fit items-center justify-center">
            {item.socialMedia.linkedin && (
              <Link
                className="mx-[5px]"
                href={item.socialMedia.linkedin}
                target="_blank"
              >
                <Image
                  src={LINKEDIN_OUTLAND}
                  width={30}
                  height={30}
                  alt="Linkedin"
                />
              </Link>
            )}
            {item.socialMedia.github && (
              <Link
                className="mx-[5px]"
                href={item.socialMedia.github}
                target="_blank"
              >
                <Image src={GITHUB} width={30} height={30} alt="Github" />
              </Link>
            )}
            {item.socialMedia.huggingFace && (
              <Link
                className="mx-[5px]"
                href={item.socialMedia.huggingFace}
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
            {item.socialMedia.kaggle && (
              <Link
                className="mx-[5px]"
                href={item.socialMedia.kaggle}
                target="_blank"
              >
                <Image src={KAGGLE} width={30} height={30} alt="Kaggle" />
              </Link>
            )}
            {item.socialMedia.instagram && (
              <Link
                className="mx-[5px]"
                href={item.socialMedia.instagram}
                target="_blank"
              >
                <Image src={INSTAGRAM} width={30} height={30} alt="instagram" />
              </Link>
            )}
            {item.socialMedia.behance && (
              <Link
                className="mx-[5px]"
                href={item.socialMedia.behance}
                target="_blank"
              >
                <Image src={BEHANCE} width={30} height={30} alt="Behance" />
              </Link>
            )}
            {item.socialMedia.dribble && (
              <Link
                className="mx-[5px]"
                href={item.socialMedia.dribble}
                target="_blank"
              >
                <Image src={DRIBBLE} width={30} height={30} alt="Dribble" />
              </Link>
            )}
            {item.socialMedia.medium && (
              <Link
                className="mx-[5px]"
                href={item.socialMedia.medium}
                target="_blank"
              >
                <Image src={MEDIUM} width={30} height={30} alt="Medium" />
              </Link>
            )}
            {item.socialMedia.website && (
              <Link
                className="mx-[5px]"
                href={item.socialMedia.website}
                target="_blank"
              >
                <Image src={WEBSITE} width={30} height={30} alt="Website" />
              </Link>
            )}
          </div>
        </div>
      </AnimateOnScroll>
    </>
  );
}
