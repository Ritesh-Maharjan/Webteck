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
          <a href="https://www.facebook.com/profile.php?id=61560885556030" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/home-page/footer-fb.png"
              alt="facebook logo"
              height={31}
              width={31}
            />
          </a>
          <a href="https://www.instagram.com/vancouver_webteck/?fbclid=IwZXh0bgNhZW0CMTEAAR0ysPVsce9W0U8bi4dMWc4Ugz_8LAZkjFC_gDQsW86g09ERkcTsK92qjzg_aem_xjJ5xnEzC1u3WdJ_oACvFg" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/home-page/footer-instagram.png"
              alt="instragram logo"
              height={31}
              width={31}
            />
          </a>
          <a href="https://www.linkedin.com/company/vancouver-webteck" target="_blank" rel="noopener noreferrer">
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
          <div className="flex flex-col lg:flex-row gap-7">
            <Button className="border-2 text-normal transition duration-10 ease-in-out text-white hover:text-[#7A58FF] hover:border-[#7A58FF]"><a href="mailto:vancouver.webteck@gmail.com">Vancouver.Webteck@gmail.com</a></Button>
            <Button className="border-2 text-sm transition duration-10 ease-in-out text-white hover:text-[#7A58FF] hover:border-[#7A58FF]">+1 (778) 318 8494</Button>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <h3 className="font-bold text-2xl">Quick Links</h3>
          <nav>
            <ul className="grid grid-cols-3 md:grid-cols-2 gap-x-20 gap-y-2">
            <li>
              <Link href="/home">
                <p className="transition duration-10 ease-in-out text-white hover:text-[#7A58FF] hover:border-[#7A58FF]">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/service">
                <p className="transition duration-10 ease-in-out text-white hover:text-[#7A58FF] hover:border-[#7A58FF]">Services</p>
              </Link>
            </li>
            <li>
              <Link href="/service/web-development">
                <p className="transition duration-10 ease-in-out text-white hover:text-[#7A58FF] hover:border-[#7A58FF]">Web Development</p>
              </Link>
            </li>
            <li>
              <Link href="/service/web-maintenance">
                <p className="transition duration-10 ease-in-out text-white hover:text-[#7A58FF] hover:border-[#7A58FF]">Web Maintenance</p>
              </Link>
            </li>
            <li>
              <Link href="/service/UI-UX">
                <p className="transition duration-10 ease-in-out text-white hover:text-[#7A58FF] hover:border-[#7A58FF]">UI/UX</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="transition duration-10 ease-in-out text-white hover:text-[#7A58FF] hover:border-[#7A58FF]">Contact</p>
              </Link>
            </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex justify-between pb-5">
        <p>Copyright Vancouver WebTeck 2024</p>
        <Link href="./privacy-policy" className="transition duration-10 ease-in-out text-white hover:text-[#7A58FF] hover:border-[#7A58FF]">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
