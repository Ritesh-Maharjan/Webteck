"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/service" },
    { name: "Pricing", link: "/#pricing" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header
      className={`z-10 h-auto flex items-center sticky top-0 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white backdrop-blur-md shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-screen-2xl w-full mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div>
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                src="/img/home-page/webTeck-transparent-logo.png"
                alt="Vancouver WebTeck logo"
                width={20}
                height={20}
              />
              <div
                className={`hidden sm:block ${isScrolled ? "hidden" : "block"}`}
                style={{ visibility: isScrolled ? "hidden" : "visible" }}
              >
                <p className="font-normal">Vancouver</p>
                <p className="font-normal">WebTeck</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 text-lg">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  href={item.link}
                  className={`relative ${
                    isScrolled ? "text-black" : "text-white"
                  } px-2 py-2 transition-colors duration-500 group`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] ${
                      isScrolled
                        ? "bg-gradient-to-r from-transparent via-black to-transparent"
                        : "bg-gradient-to-r from-transparent via-white to-transparent"
                    } opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-shimmer`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Call to Action Button */}
        <button
          className={`hidden md:block rounded-3xl border py-2 px-4 font-medium text-medium transition duration-10 ease-in-out ${
            isScrolled
              ? "border-gray-400 text-black hover:text-[#7A58FF] hover:border-[#7A58FF]"
              : "border-[#CDCDCD] text-white hover:text-[#7A58FF] hover:border-[#7A58FF]"
          }`}
        >
          <Link href="/contact">
            Start a Project
          </Link>
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3 sm:gap-2">
          <button
            className={`rounded-3xl border py-2 px-4 font-medium text-sm transition duration-10 ease-in-out ${
              isScrolled
                ? "border-gray-400 text-black hover:text-[#7A58FF] hover:border-[#7A58FF]"
                : "border-[#CDCDCD] text-white hover:text-[#7A58FF] hover:border-[#7A58FF]"
            }`}
          >
            <Link href="/contact">Start a Project</Link>
          </button>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="relative group"
          >
            <div
              className={`relative flex overflow-hidden items-center justify-center rounded-full w-[35px] h-[35px] transform transition-all ${
                isScrolled ? "bg-white" : "bg-black"
              } ring-1 ${
                isScrolled ? "ring-black" : "ring-white"
              } hover:ring-2 group-focus:ring-2 ring-opacity-70 duration-200 shadow-md`}
            >
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div
                  className={`${
                    isScrolled ? "bg-black" : "bg-white"
                  } h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isMenuOpen ? "translate-x-10" : ""
                  }`}
                ></div>
                <div
                  className={`${
                    isScrolled ? "bg-black" : "bg-white"
                  } h-[2px] w-7 rounded transform transition-all duration-300 ${
                    isMenuOpen ? "translate-x-10 delay-75" : ""
                  }`}
                ></div>
                <div
                  className={`${
                    isScrolled ? "bg-black" : "bg-white"
                  } h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isMenuOpen ? "translate-x-10 delay-150" : ""
                  }`}
                ></div>

                <div
                  className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${
                    isMenuOpen ? "translate-x-0 flex w-12" : "w-0"
                  }`}
                >
                  <div
                    className={`absolute ${
                      isScrolled ? "bg-black" : "bg-white"
                    } h-[2px] w-5 transform transition-all duration-500 ${
                      isMenuOpen ? "rotate-45 delay-300" : "rotate-0"
                    }`}
                  ></div>
                  <div
                    className={`absolute ${
                      isScrolled ? "bg-black" : "bg-white"
                    } h-[2px] w-5 transform transition-all duration-500 ${
                      isMenuOpen ? "-rotate-45 delay-300" : "-rotate-0"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </button>
        </div>

      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 pt-10 w-full bg-black shadow-md">
          <ul className="flex items-center flex-col gap-4 p-4 text-white ">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="block text-2xl transition-colors duration-300 hover:text-[#7A58FF]"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {item.name}
                </Link>
              </li>
            ))}
            
          </ul>
          <div className="flex justify-center items-center gap-12 pt-10 pb-8 px-4">
            <div className="flex gap-2 items-center">
              <Image src="/img/home-page/webteck-transparent-main-logo.png" className="h-7 w-7" alt="vancouver webteck logo" />
              <p className="text-[#999999] text-md font-regular">Vancouver WebTeck</p>
            </div>

            <div className="flex gap-2">
              <Image src="/img/home-page/footer-fb.png" className="h-5 w-5" alt="facebook logo" height={5} width={5} />
              <Image src="/img/home-page/footer-instagram.png" className="h-5 w-5" alt="instragram logo" height={5} width={5} />
              <Image src="/img/home-page/footer-linkedin.png"className="h-5 w-5" alt="linkedin logo" height={5} width={5} /> 
            </div>
          </div>
         
        </nav>
      )}
    </header>
  );
};

export default Header;
