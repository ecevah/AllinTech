"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

export const LanguageButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const defaultLang = "en";

  let currentLang = defaultLang;
  let targetLang = "";
  let newPath = "";

  const langRegex = /^\/(en|tr)(\/|$)/;
  const match = pathname.match(langRegex);

  if (match) {
    currentLang = match[1];
    targetLang = currentLang === "en" ? "tr" : "en";
    newPath = pathname.replace(langRegex, `/${targetLang}$2`);
  } else {
    currentLang = defaultLang;
    targetLang = currentLang === "en" ? "tr" : "en";
    newPath = `/${targetLang}${pathname}`;
  }

  const handleLanguageChange = () => {
    router.push(newPath);
  };

  return (
    <div className="flex flex-row justify-between items-center max-w-[70px]">
      <button
        onClick={currentLang === "tr" ? null : handleLanguageChange}
        className={`Jost uppercase text-[14px] ${
          currentLang === "tr" ? "font-bold" : "font-normal text-[#FFFFFFCC]"
        }`}
      >
        TR
      </button>
      <div className="w-[2px] bg-white h-[15px] mt-[-1px] mx-2" />
      <button
        onClick={currentLang === "en" ? null : handleLanguageChange}
        className={`Jost uppercase text-[14px] ${
          currentLang === "en" ? "font-bold" : "font-normal text-[#FFFFFFCC]"
        }`}
      >
        ENG
      </button>
    </div>
  );
};
