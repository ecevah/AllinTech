import Link from "next/link";
import React from "react";

export default function Logo({ size }) {
  return (
    <Link href="/">
      <p className={`font-semibold tracking-tight cursor-pointer ${size}`}>
        Allin
        <span className="PlusJakarta font-extrabold italic tracking-[3%] text-[#B9FD50]">
          Tech
        </span>
      </p>
    </Link>
  );
}
