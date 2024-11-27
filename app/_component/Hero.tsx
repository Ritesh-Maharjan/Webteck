import Image from "next/image";
import React from "react";
import HeadingTitle from "./ui/HeadingTitle";

const textSlider = [
  "Crafting Beautiful Website",
  "Elevating Your Online Presence",
];

const Hero = () => {
  return (
    <div className="bg-[url('/img/home-page/hero-bg.png')] bg-cover">
      <section className="p-10 min-h-[calc(100vh-3rem)] max-w-screen-xl flex items-center justify-center mx-auto flex-col gap-1 md:flex-row">
        <div className="flex-1 flex flex-col gap-7">
          <HeadingTitle>
            Custom Websites <br />
            Tailored for you
          </HeadingTitle>
          <p className="font-sans text-[#e0e0e0]  text-base md:text-lg leading-relaxed tracking-wide max-w-prose">
            We specialize in creating unique, responsive websites that elevate
            your online presence and bring your vision to life. Let us help you
            stand out from the crowd.
          </p>
          <div className="flex gap-6">
            <button className="rounded-3xl border py-3 px-6 font-bold text-white border-[#CDCDCD] text-nowrap h-fit">
              Book a call
            </button>
            <p className="flex flex-col gap-2">
              <span className="text-[#CDCDCD] text-sm">Have a question?</span>
              <span className="text-white text-sm font-semibold">Schedule
              an appointment.</span>
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/img/home-page/macbook-1.svg"
            alt="macbook with some random info displayed"
            layout="responsive"
            height={543}
            width={897}
            className="w-full h-auto" 
          />
        </div>
      </section>

      <div className="overflow-hidden ">
        <div className="flex whitespace-nowrap gap-4 w-fit animate-slide">
          {textSlider.map((text) => (
            <h2 className="after:content-['|'] after:ml-4 bg-gradient-to-b from-white to-[#888888] bg-clip-text text-transparent font-semibold text-4xl md:text-7xl">
              {text}
            </h2>
          ))}
          {textSlider.map((text) => (
            <h2 className="after:content-['|'] after:ml-4 bg-gradient-to-b from-white to-[#888888] bg-clip-text text-transparent font-semibold text-4xl md:text-7xl">
              {text}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
