"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";
import HeaderItem from "./header-item";
import { LanguageButton } from "./language-button";
import Logo from "../logo/logo";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (isOpen) => {
    setOpen(isOpen);
  };

  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <button className="focus:outline-none">
          <FiMenu size={24} color="#FFFFFF" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-black p-4">
        <nav className="flex flex-col mt-4 h-full items-center justify-center text-center">
          <Logo size="text-[30px] mb-[20px]" />
          <HeaderItem onClick={handleItemClick} />
          <div className="mt-4">
            <LanguageButton />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
