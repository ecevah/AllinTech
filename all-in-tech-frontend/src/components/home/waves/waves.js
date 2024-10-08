import React from "react";
import HeroCardButton from "../hero-card/hero-card-button";
import { useTranslations } from "next-intl";
import styles from "./waves.module.css";
import AnimateOnScroll from "@/service/animate-on-scroll";

export default function Waves() {
  const t = useTranslations("HomePage");
  const items = t.raw("WavesSection");

  return (
    <>
      <div className={styles.waves}>
        <AnimateOnScroll animationClass="slide-down">
          <div className="text-[32px] sm:text-[48px] lg:text-[62px] tracking-tight text-center font-extrabold max-w-[670px] leading-tight lg:leading-[65px] cursor-default">
            {items.title}
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animationClass="slide-up">
          <div className="Jost text-[14px] sm:text-[16px] lg:text-[18px] text-center text-white max-w-[580px] mb-[30px] mt-[15px] lg:mb-[50px] lg:mt-[25px] cursor-default">
            {items.description}
          </div>
        </AnimateOnScroll>
        <HeroCardButton text={items.button.text} link={items.button.link} />
      </div>
    </>
  );
}
