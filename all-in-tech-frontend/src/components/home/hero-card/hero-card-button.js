import { ARROW_BUTTON_WHITE } from "@/constant/constant_svg";
import AnimateOnScroll from "@/service/animate-on-scroll";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroCardButton({ text, link }) {
  return (
    <AnimateOnScroll animationClass="slide-up">
      <Link href={link}>
        <div className="cursor-pointer bg-black border border-white/40 rounded-full px-6 py-3 flex items-center justify-center max-h-[50px] max-w-[210px] hover:bg-[#ffffff66] transition-colors duration-300">
          <div className="Jost font-medium text-base sm:text-lg tracking-wide text-center">
            {text}
          </div>
          <Image
            src={ARROW_BUTTON_WHITE}
            width={24}
            height={24}
            alt="Arrow Button White"
            className="ml-2 sm:ml-3"
          />
        </div>
      </Link>
    </AnimateOnScroll>
  );
}
