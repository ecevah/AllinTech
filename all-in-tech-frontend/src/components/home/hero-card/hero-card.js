import { SIGNATURE } from "@/constant/constant_svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import styles from "./hero-card.module.css";
import HeroCardTitle from "./hero-card-title";
import HeroCardButton from "./hero-card-button";
import AnimateOnScroll from "@/service/animate-on-scroll";

export default function HeroCard() {
  const t = useTranslations("HomePage");
  const items = t.raw("HeroSection");

  return (
    <section className={styles.bgImage}>
      <HeroCardTitle white={items.title.white} green={items.title.green} />
      <AnimateOnScroll animationClass="slide-up">
        <p className="Jost font-normal text-base max-[450px]:text-sm max-[450px]:mt-[10px] mb-[15px] md:mt-[101px] md:mb-[68px] 2xl:mt-[101px] 2xl:mb-[68px] sm:text-md md:text-xl text-center text-white/80 max-w-[90%] sm:max-w-[618px] mx-auto px-4 cursor-default">
          &quot;{items.description}&quot;
        </p>
      </AnimateOnScroll>
      <HeroCardButton text={items.button.text} link={items.button.link} />
    </section>
  );
}
