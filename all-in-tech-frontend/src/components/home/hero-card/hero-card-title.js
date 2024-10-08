import AnimateOnScroll from "@/service/animate-on-scroll";
import React from "react";

export default function HeroCardTitle({ white, green }) {
  return (
    <AnimateOnScroll animationClass="slide-down">
      <p
        className="Jost font-bold text-center text-white cursor-default max-w-full xl:max-w-[1300px] leading-[101%]
                 max-[450px]:text-[25px] max-[560px]:text-[30px] text-[40px] sm:text-[50px] md:text-[65px] lg:text-[85px] xl:text-[100px]
                  tracking-tight sm:tracking-tighter md:tracking-tightest max-[640px]:min-h-fit min-h-[170px]"
      >
        {white}
        <span className="italic text-[#B9FD50] ml-1 sm:ml-2 md:ml-4">
          {green}
        </span>
      </p>
    </AnimateOnScroll>
  );
}
