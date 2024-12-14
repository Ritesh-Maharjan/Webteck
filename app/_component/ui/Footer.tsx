import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-screen-2xl px-8 mx-auto flex flex-col md:gap-12">
      <div className="flex flex-col gap-10 border-b justify-between py-8 md:items-center md:py-24 md:flex-row">
        <div className="flex items-center">
          <Image
            src="/img/home-page/webteck-transparent-main-logo.png"
            alt="our logo"
            height="50"
            width="44"
          />
          <h2 className="font-bold text-xl md:text-3xl lg:text-5xl">
            Vancouver WebTeck
          </h2>
        </div>

        <div className="flex gap-8">
          <a href="">
            <Image
              src="/img/home-page/footer-fb.png"
              alt="facebook logo"
              height={31}
              width={31}
            />
          </a>
          <a href="">
            <Image
              src="/img/home-page/footer-instagram.png"
              alt="instragram logo"
              height={31}
              width={31}
            />
          </a>
          <a href="">
            <Image
              src="/img/home-page/footer-linkedin.png"
              alt="linkedin logo"
              height={31}
              width={31}
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between py-12 gap-20">
        <div className="flex flex-col gap-8">
          <a href="" className="flex items-center gap-4">
            <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl">
              Let's Work Together
            </h2>
            <Image
              alt="Plus icon"
              src="/img/home-page/footer-plus-icon.png"
              height={60}
              width={60}
              role="presentation"
              className="w-8 h-8"
            />
          </a>
          <p className="text-[#888888] max-w-prose">
            Our success in client collaboration is built on effective
            communication, mutual understanding, and a shared commitment to
            achieving common goals.
          </p>
          <div className="flex gap-7">
            <Button className="border-2 text-sm">Webteck@gmail.com</Button>
            <Button className="border-2 text-sm">+1 (778) 318 8494</Button>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <h3 className="font-bold text-2xl">Quick Links</h3>
          <nav>
            <ul className="grid grid-cols-3 md:grid-cols-2 gap-x-20 gap-y-2">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Web Development</a>
              </li>
              <li>
                <a href="">Web Maintenance</a>
              </li>
              <li>
                <a href="">UI/UX</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex justify-between pb-5">
        <p>Copyright Vancouver WebTeck 2024</p>
        <Link href="">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
