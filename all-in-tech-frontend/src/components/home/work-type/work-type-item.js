import React from "react";
import styles from "./work-type.module.css";
import AnimateOnScroll from "@/service/animate-on-scroll";

export default function WorkTypeItem({ icon, title, className }) {
  return (
    <>
      <div
        className={`${className} flex flex-col justify-between items-center min-h-[140px] lg:min-h-[183px] mb-[30px]`}
      >
        <AnimateOnScroll animationClass="slide-down">
          <div className={styles.items}>
            <div className={styles.icon}>{icon}</div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animationClass="slide-up">
          <div className="cursor-default italic PlusJakarta font-bold text-[16px] text-center">
            {title}
          </div>
        </AnimateOnScroll>
      </div>
    </>
  );
}
