import { ARROW_WHİTE, SIGNATURE_WHITE } from "@/constant/constant_svg";
import AnimateOnScroll from "@/service/animate-on-scroll";
import Image from "next/image";
import React from "react";

export default function TitleCard({ title, description, slogan }) {
  return (
    <div className="flex flex-col md:flex-row items-start justify-start layout pb-8 md:pb-[65px] cursor-default">
      <Image
        src={ARROW_WHİTE}
        width={136}
        height={15}
        alt="Arrow White"
        className="mr-0 md:mr-4 lg:mr-[67px] mt-6 md:mt-[45px] max-[1000px]:hidden"
      />
      <div className="flex flex-col pr-[160px] max-[1000px]:pr-0">
        <AnimateOnScroll animationClass="slide-down">
          <div className="text-[25px] sm:text-[30px] md:text-[50px] font-bold leading-[35px] sm:leading-[40px] md:leading-[100px] tracking-[-2%] md:tracking-[-3%] ">
            {title}
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animationClass="slide-left">
          <div className="text-[13px] sm:text-[18px] md:text-[24px] leading-[25px] sm:leading-[30px] md:leading-[37px] tracking-[-1%] md:tracking-[-1.5%] font-semibold text-justify pr-[20px]">
            {description}
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animationClass="slide-right">
          <div className="mr-[30px] sm:mr-0 text-[17px] sm:text-[22px] md:text-[30px] leading-[23px] sm:leading-[28px] md:leading-[37px] tracking-[-1%] md:tracking-[-1.5%] font-extrabold italic text-justify text-[#B9FD50] relative w-fit max-w-full md:max-w-[1100px]">
            {slogan}
            <Image
              src={SIGNATURE_WHITE}
              width={200}
              height={26}
              alt="Signature White"
              className="absolute bottom-[-30px] right-[-30px] md:bottom-[-40px] md:right-[-50px]"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
