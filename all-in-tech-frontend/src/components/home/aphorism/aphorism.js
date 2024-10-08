import { SIGNATURE } from "@/constant/constant_svg";
import AnimateOnScroll from "@/service/animate-on-scroll";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Aphorism() {
  const t = useTranslations("HomePage");
  const items = t.raw("AphorismSection");
  return (
    <>
      <div className="max-[460px]:max-w-fit max-[530px]:max-w-[95%] max-w-fit md:max-w-[765px] mx-auto mt-[103px] mb-[92px] min-h-[170px] relative flex items-center justify-center text-center cursor-default">
        <AnimateOnScroll animationClass="slide-right">
          <p className="text-[20px] md:text-[30px] tracking-[-1.5%] text-white font-bold slide-right">
            {items.white}
            <span className="italic text-[#B9FD50] ml-[8px]">
              {items.green}
            </span>
          </p>
        </AnimateOnScroll>
        <Image
          src={SIGNATURE}
          width={250}
          height={35}
          alt="Signature"
          className="absolute right-0 bottom-[25px] max-w-[200px] md:max-w-[250px] max-[455px]:max-w-[150px] max-[437px]:right-[20%]"
        />
      </div>
    </>
  );
}
