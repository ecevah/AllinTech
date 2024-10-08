import React from "react";
import GridItem from "./grid-item";
import { TEAM } from "@/constant/constant_team";

export default function Grid() {
  return (
    <div className="sm:max-w-[800px] max-w-fit mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
        {TEAM.map((item, index) => (
          <GridItem
            key={`Grid item ${index}`}
            item={item}
            animate={index % 2 === 0 ? "slide-right" : "slide-left"}
          />
        ))}
      </div>
    </div>
  );
}
