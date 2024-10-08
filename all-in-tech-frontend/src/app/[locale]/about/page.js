import Grid from "@/components/about/grid/grid";
import Hero from "@/components/about/hero/hero";
import { ARROW_WHİTE } from "@/constant/constant_svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Page() {
  const t = useTranslations();
  const items = t.raw("AboutPage");

  return (
    <div className="relative layout">
      <Hero
        title={items.title}
        white1={items.description.white1}
        white2={items.description.white2}
        green={items.description.green}
      />
      <Grid />
      <Image
        src={ARROW_WHİTE}
        width={136}
        height={15}
        alt="Arrow White"
        className="absolute bottom-20 left-5 md:left-10 lg:left-20 max-[1400px]:hidden block"
      />
    </div>
  );
}
