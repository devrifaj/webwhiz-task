"use client";
import { LogoIcon } from "@/icons";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="pt-6 md:pt-8 wrapper relative">
      <nav className="flex-between">
        {/* logo */}
        <Link href="/">
          <LogoIcon />
        </Link>

        <div className="flex items-center gap-[24px] lg:gap-[33px]">
          {/* nav links */}
          <NavLinks />

          {/* contact button */}
          <Link
            href="/contact"
            className="hidden md:block primary-btn py-[13px] px-6 rounded-[80px]"
          >
            Contact
          </Link>

          {/* hamburger menu */}
          <div className="lg:hidden">
            <Image src="/icons/menu.svg" alt="menu" width={24} height={24} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="cursor-pointer"  />
          </div>
        </div>
      </nav>

      {/* mobile menu */}
      <div className={`absolute md:top-24 left-0 w-full p-6 bg-white z-40 ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col gap-4">
          <NavLinks mobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
