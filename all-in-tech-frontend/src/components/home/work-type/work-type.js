import { useTranslations } from "next-intl";
import React from "react";
import WorkTypeItem from "./work-type-item";
import Image from "next/image";
import { AI_LOG, COMPUTER, DESIGN_SERVICES } from "@/constant/constant_svg";

export default function WorkType() {
  const t = useTranslations("HomePage");
  const items = t.raw("WorksTypeSection");
  const IconArray = [
    <Image key="Ai Logo" src={AI_LOG} width={28} height={22} alt="Ai Logo" />,
    <Image
      key="Computer"
      src={COMPUTER}
      width={35}
      height={31}
      alt="Computer"
    />,
    <Image
      key="Design Services"
      src={DESIGN_SERVICES}
      width={48}
      height={48}
      alt="Design Services"
    />,
  ];

  return (
    <>
      <div className="max-w-[950px] grid lg:grid-cols-3 grid-cols-2 max-[600px]:grid-cols-1 justify-between items-center mx-auto">
        {items.map((item, index) => (
          <WorkTypeItem
            key={"work type " + index}
            icon={IconArray[index % 3]}
            title={item}
            className={` ${
              items.length % 2 === 1 && index === items.length - 1
                ? "max-[600px]:col-span-1 col-span-2 lg:col-span-1"
                : "col-span-1"
            }`}
          />
        ))}
      </div>
    </>
  );
}
