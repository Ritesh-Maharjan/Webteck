"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200); // Change threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-10 h-auto flex items-center sticky top-0 transition-all duration-200 ${
        isScrolled
          ? "bg-white backdrop-blur-md shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-screen-2xl w-full mx-auto flex justify-between items-center p-2">
      <div>
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="/img/home-page/WebTeck-Transparent-logo.png"
              alt="logo"
              className="h-14"
            />
            <div>
              <p>Vancouver</p>
              <p>WebTeck</p>
            </div>
          </div>
        </Link>
      </div>

        <nav>
          <ul className="flex gap-6 text-lg">
            <li className="relative group">
              <Link href="/" className="transition-colors duration-300">
                Home
              </Link>
              <span
                className={`absolute left-0 bottom-0 w-0 h-0.5 ${
                  isScrolled ? "bg-black" : "bg-white"
                } transition-all duration-300 group-hover:w-full`}
              ></span>
            </li>
            <li className="relative group">
              <Link href="/service" className="transition-colors duration-300">
                Service
              </Link>
              <span
                className={`absolute left-0 bottom-0 w-0 h-0.5 ${
                  isScrolled ? "bg-black" : "bg-white"
                } transition-all duration-300 group-hover:w-full`}
              ></span>
            </li>
            <li className="relative group">
              <Link href="/pricing" className="transition-colors duration-300">
                Pricing
              </Link>
              <span
                className={`absolute left-0 bottom-0 w-0 h-0.5 ${
                  isScrolled ? "bg-black" : "bg-white"
                } transition-all duration-300 group-hover:w-full`}
              ></span>
            </li>
            <li className="relative group">
              <Link href="/contact" className="transition-colors duration-300">
                Contact
              </Link>
              <span
                className={`absolute left-0 bottom-0 w-0 h-0.5 ${
                  isScrolled ? "bg-black" : "bg-white"
                } transition-all duration-300 group-hover:w-full`}
              ></span>
            </li>
          </ul>
        </nav>

        <button
          className={`rounded-3xl border py-3 px-6 font-medium text- transition duration-300 ease-in-out ${
            isScrolled
              ? "border-gray-400 text-black hover:text-[#7A58FF] hover:border-[#7A58FF]"
              : "border-[#CDCDCD] text-white hover:text-[#7A58FF] hover:border-[#7A58FF]"
          }`}
        >
          Start a Project
        </button>
      </div>
    </header>
  );
};

export default Header;
