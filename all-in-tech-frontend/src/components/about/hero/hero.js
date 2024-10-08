import { ARROW_WHİTE, SIGNATURE_VERTICAL } from "@/constant/constant_svg";
import AnimateOnScroll from "@/service/animate-on-scroll";
import Image from "next/image";
import React from "react";

export default function Hero({ title, white1, white2, green }) {
  return (
    <div className="flex flex-col relative max-w-[936px] mx-auto px-4 py-8 sm:py-16 lg:py-24 min-h-[280px] cursor-default">
      <AnimateOnScroll animationClass="slide-up">
        <div className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight font-bold">
          {title}
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll animationClass="slide-down">
        <p className="Jost text-sm sm:text-xl lg:text-2xl text-justify font-semibold mt-7 sm:mt-10">
          &quot;{white1} <br />
          {white2}
          <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#B9FD50] italic">
            {green}
          </span>
          &quot;
        </p>
      </AnimateOnScroll>
      <Image
        src={ARROW_WHİTE}
        width={136}
        height={15}
        alt="Arrow"
        className="absolute top-12 left-[-50px] sm:left-[-100px] lg:left-[-200px] max-[1400px]:hidden block"
      />
      <Image
        src={SIGNATURE_VERTICAL}
        width={360}
        height={75}
        alt="Signature"
        className="absolute right-0 bottom-0 md:w-[360px] sm:w-[240px] w-[180px]"
      />
    </div>
  );
}
