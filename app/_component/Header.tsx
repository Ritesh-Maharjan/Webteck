"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200); 
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
      className={`z-10 h-auto flex items-center sticky top-0 transition-all duration-200 ${
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
              <img
                src="/img/home-page/WebTeck-Transparent-logo.png"
                alt="logo"
                className="h-10"
              />
              <div className="hidden sm:block">
                <p className="font-medium">Vancouver</p>
                <p className="font-medium">WebTeck</p>
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
                  className="transition-colors duration-300"
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 w-0 h-0.5 ${
                    isScrolled ? "bg-black" : "bg-white"
                  } transition-all duration-300 group-hover:w-full`}
                ></span>
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
        <div
          className="md:hidden cursor-pointer flex items-center gap-3 sm:gap-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <button
            className={`rounded-3xl border py-2 px-4 font-medium text-sm transition duration-10 ease-in-out ${
              isScrolled
                ? "border-gray-400 text-black hover:text-[#7A58FF] hover:border-[#7A58FF]"
                : "border-[#CDCDCD] text-white hover:text-[#7A58FF] hover:border-[#7A58FF]"
            }`}
          >
            Start a Project
          </button>
          <img
            src={
              isScrolled
                ? "/img/home-page/dark-hamburger-menu.png" // Black menu icon
                : "/img/home-page/hamburger-menu.png" // White menu icon
            }
            alt="menu"
            className="h-9"
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 pt-10 w-full bg-black shadow-md">
          <ul className="flex items-center flex-col gap-4 p-4 text-white ">
            {["Home", "Service", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="block text-2xl transition-colors duration-300 hover:text-[#7A58FF]"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {item}
                </Link>
              </li>
            ))}
            
          </ul>
          <div className="flex justify-center items-center gap-12 pt-10 pb-8 px-4">
            <div className="flex gap-2 items-center">
              <img src="/img/home-page/webteck-transparent-main-logo.png" className="h-7 w-7" alt="" />
              <p className="text-[#999999] text-md font-regular">Vancouver WebTeck</p>
            </div>

            <div className="flex gap-2">
              <img src="/img/home-page/footer-fb.png" className="h-5 w-5" alt="facebook logo" />
              <img src="/img/home-page/footer-instagram.png" className="h-5 w-5" alt="instragram logo" />
              <img src="/img/home-page/footer-linkedin.png"className="h-5 w-5" alt="linkedin logo" />
            </div>
          </div>
         
        </nav>
      )}
    </header>
  );
};

export default Header;
