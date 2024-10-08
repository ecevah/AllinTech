import {
  ROADMAP,
  ROADMAP_MOBILE,
  ROADMAP_TABLET,
  ROADMAP_TR,
  ROADMAP_MOBILE_TR,
  ROADMAP_TABLET_TR,
} from "@/constant/constant_svg"; // Assuming you have different SVGs for TR locale
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Importing from next/navigation
import AnimateOnScroll from "@/service/animate-on-scroll";

export default function Roadmap() {
  const [windowWidth, setWindowWidth] = useState(0);
  const locale = usePathname();

  useEffect(() => {
    // Track and update screen width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Initialize screen width on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Default images
  let selectedImage = locale === "/tr" ? ROADMAP_TR : ROADMAP;
  let width = 1152;
  let height = 431;

  // Adjust images based on screen width
  if (windowWidth < 768) {
    selectedImage = locale === "/tr" ? ROADMAP_MOBILE_TR : ROADMAP_MOBILE;
    width = 375;
    height = 200;
  } else if (windowWidth < 1024) {
    selectedImage = locale === "/tr" ? ROADMAP_TABLET_TR : ROADMAP_TABLET;
    width = 768;
    height = 300;
  }

  return (
    <AnimateOnScroll animationClass="slide-up">
      <Image
        src={selectedImage}
        width={width}
        height={height}
        alt="roadmap"
        className="mx-auto mb-[50px] md:mb-[176px]"
      />
    </AnimateOnScroll>
  );
}
