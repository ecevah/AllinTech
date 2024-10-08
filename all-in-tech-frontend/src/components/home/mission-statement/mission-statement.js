import AnimateOnScroll from "@/service/animate-on-scroll";
import { useTranslations } from "next-intl";
import React from "react";

export default function MissionStatement() {
  const t = useTranslations("HomePage");
  const items = t.raw("MissionStatementSection");
  return (
    <AnimateOnScroll animationClass="slide-left">
      <div className="max-w-[968px] mx-[30px] lg:mx-auto Jost text-justify mt-[79px] mb-[145px] cursor-default">
        &quot;{items}&quot;
      </div>
    </AnimateOnScroll>
  );
}
