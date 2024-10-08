"use client";

import React from "react";
import Logo from "../logo/logo";
import { LanguageButton } from "./language-button";
import HeaderItem from "./header-item";
import MobileMenu from "./mobile-menu";
import AnimateOnScroll from "@/service/animate-on-scroll";

export default function Header() {
  return (
    <AnimateOnScroll animationClass="slide-down">
      <header className="bg-black w-full top-0 left-0 z-50">
        <div className="layout flex justify-between items-center py-2 px-4 md:px-0">
          <Logo size="text-[30px]" />

          {/* Masaüstü Menü */}
          <nav className="hidden md:flex items-center">
            <HeaderItem />
            <LanguageButton />
          </nav>

          {/* Mobil Menü */}
          <div className="md:hidden flex items-center">
            <MobileMenu />
          </div>
        </div>
      </header>
    </AnimateOnScroll>
  );
}
