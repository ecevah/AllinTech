"use client";

import Logo from "@/components/components/logo/logo";
import React from "react";
import FooterList from "./footer-list";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  INSTAGRAM,
  LINKEDIN_OUTLAND,
  MESSAGE,
  PHONE,
} from "@/constant/constant_svg";
import Link from "next/link";
import AnimateOnScroll from "@/service/animate-on-scroll";

export default function Footer() {
  const t = useTranslations("HomePage");
  const items = t.raw("FooterSection");
  const staticItems = t.raw("FooterStatic");

  return (
    <footer className="bg-black text-white mt-[100px]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-34 pb-20 flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo */}
          <AnimateOnScroll animationClass="slide-right">
            <div className="mb-8 md:mb-0">
              <Logo size="text-[40px]" />
            </div>
          </AnimateOnScroll>

          {/* Footer Lists */}
          {items.map((item, index) => (
            <FooterList
              key={`FooterList-${index}`}
              data={item.items}
              title={item.title}
            />
          ))}

          {/* Contact Information */}
          <div className="flex flex-col min-w-[130px] py-6 md:text-start text-center md:items-start items-center">
            <AnimateOnScroll animationClass="slide-up">
              <div className="mb-4 Jost text-lg font-medium cursor-default">
                {staticItems.contact}
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animationClass="slide-up">
              <div className="flex flex-row items-center mb-2">
                <Image
                  src={MESSAGE}
                  width={24}
                  height={24}
                  alt="Message"
                  className=""
                />
                <a
                  href="mailto:allintechlimited@gmail.com"
                  className="Jost opacity-80 text-sm leading-6 cursor-pointer ml-2"
                >
                  allintechlimited@gmail.com
                </a>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animationClass="slide-up">
              <div className="flex flex-row items-center">
                <Image
                  src={PHONE}
                  width={24}
                  height={24}
                  alt="Phone"
                  className=""
                />
                <a
                  href="tel:05422793365"
                  className="Jost opacity-80 text-sm leading-6 cursor-pointer ml-2"
                >
                  +90 542 279 33 65
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Social Media */}
          <AnimateOnScroll animationClass="slide-left">
            <div className="flex flex-col min-w-[130px] py-6 md:text-start text-center md:items-start items-center">
              <div className="mb-4 Jost text-lg font-medium cursor-default">
                {staticItems.follow}
              </div>
              <div className="flex flex-row items-center space-x-4">
                <Link
                  href="https://www.instagram.com/allinlobby"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={INSTAGRAM}
                    width={28}
                    height={28}
                    alt="Instagram"
                    className="hover:opacity-80 transition-opacity"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/allinlobby"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={LINKEDIN_OUTLAND}
                    width={26}
                    height={26}
                    alt="Linkedin"
                    className="hover:opacity-80 transition-opacity"
                  />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </footer>
  );
}
