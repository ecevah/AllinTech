"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function HeaderItem({ onClick }) {
  const t = useTranslations();
  const items = t.raw("Header");
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row">
      {items.map((item, index) => {
        const isActive = item.link === pathname;
        return (
          <Link href={item.link} key={index} onClick={onClick}>
            <div
              className={`Jost font-normal text-[#FFFFFFCC] text-[14px] mr-0 md:mr-10 mb-2 md:mb-0 ${
                isActive ? "font-bold text-white" : "hover:text-white"
              }`}
            >
              {item.text}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
