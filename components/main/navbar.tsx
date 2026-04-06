"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 sm:px-6 md:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto max-w-7xl">
        {/* Logo + Name */}
        <Link href="/#product" className="flex items-center flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
          />
          <div className="hidden sm:flex font-bold ml-2 md:ml-[10px] text-gray-300 text-sm md:text-base whitespace-nowrap">
            D360 Guard
          </div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex flex-1 max-w-[500px] h-full flex-row items-center justify-center mx-4 lg:mx-8">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-4 lg:px-[20px] py-[10px] rounded-full text-gray-200 text-sm lg:text-base">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition whitespace-nowrap px-2"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Get Started Button (Web) */}
        <div className="hidden md:flex flex-shrink-0">
          <Link
            href="/contact-us"
            className="py-2 px-5 lg:px-6 button-primary text-white text-sm lg:text-base font-medium rounded-lg shadow-[0_0_15px_rgba(112,66,248,0.25)] hover:shadow-[0_0_25px_rgba(112,66,248,0.45)] transition-all whitespace-nowrap"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-3xl flex-shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-md p-6 flex flex-col items-center text-gray-300 md:hidden border-t border-[#2A0E61]/50">
          {/* Links */}
          <div className="flex flex-col items-center gap-5 w-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Get Started Button (Mobile) */}
          <Link
            href="/contact-us"
            className="mt-6 py-2.5 px-8 button-primary text-white text-base font-medium rounded-lg shadow-[0_0_20px_rgba(112,66,248,0.3)] hover:shadow-[0_0_30px_rgba(112,66,248,0.5)] transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </div>
  );
};
