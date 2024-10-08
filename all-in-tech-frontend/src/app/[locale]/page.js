"use client";
import * as React from "react";
import { useTranslations } from "next-intl";
import HeroCard from "@/components/home/hero-card/hero-card";
import Aphorism from "@/components/home/aphorism/aphorism";
import WorkType from "@/components/home/work-type/work-type";
import MissionStatement from "@/components/home/mission-statement/mission-statement";
import Roadmap from "@/components/home/roadmap/roadmap";
import Waves from "@/components/home/waves/waves";
import Footer from "@/components/home/footer/footer";

export default function HomePage() {
  return (
    <>
      <HeroCard />
      <Aphorism />
      <WorkType />
      <MissionStatement />
      <Roadmap />
      <Waves />
      <Footer />
    </>
  );
}
