import Image from "next/image";
import React from "react";

const textSlider = [
  "Crafting Beautiful Website",
  "Elevating Your Online Presence",
];

const Hero = () => {
  return (
    <div className="bg-[url('/img/home-page/hero-bg.png')] bg-cover">
      <section className="p-10 min-h-[calc(100vh-3rem)] max-w-screen-xl flex items-center justify-center mx-auto flex-col gap-14 md:flex-row">
        <div className="flex-1 flex flex-col gap-7">
          <h1
            className="text-4xl md:text-7xl tracking-tight font-bold text-transparent !bg-clip-text"
            style={{
              background:
                "linear-gradient(to right, #999999 0%, #A1A1A1 17%, #FFFFFF 100%)",
            }}
          >
            Custom Websites <br />
            Tailored for you
          </h1>
          <p className="text-lg md:text-xl leading-6 tracking-tight max-w-prose">
            We specialize in creating unique, responsive websites that elevate
            your online presence and bring your vision to life. Let us help you
            stand out from the crowd.
          </p>
          <div className="flex gap-6">
            <button className="rounded-3xl border py-3 px-6 font-bold border-[#CDCDCD] text-nowrap h-fit">
              Book a call
            </button>
            <p className="flex flex-col">
              <span className="text-[#CDCDCD]">Have a question?</span>Schedule
              an appointment.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/img/home-page/macbook.png"
            alt="macbook with some random info displayed"
            height={543}
            width={897}
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
