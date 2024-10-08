import AnimateOnScroll from "@/service/animate-on-scroll";
import Link from "next/link";
import React from "react";

export default function FooterList({ title, data = [] }) {
  return (
    <div className="flex flex-col min-w-[130px] py-6 md:text-start text-center">
      <AnimateOnScroll animationClass="slide-up">
        <div className="mb-4 Jost text-lg font-medium cursor-default">
          {title}
        </div>
      </AnimateOnScroll>
      {data.map((item, index) => (
        <AnimateOnScroll key={`FooterItem-${index}`} animationClass="slide-up">
          <Link href={item.link}>
            <div className="Jost text-sm opacity-80 hover:opacity-100 leading-8 cursor-pointer">
              {item.text}
            </div>
          </Link>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
