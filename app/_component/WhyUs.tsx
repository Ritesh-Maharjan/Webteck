"use client";
import React, { useState } from "react";
import HeadingTitle from "./ui/HeadingTitle";
import Image from "next/image";
import Button from "./ui/Button";

const WhyUs = () => {
  const whyUsArr = [
    {
      img: "/img/home-page/whyus-1.png",
      title: "Custom Built. High Performance",
      span: "Maximize your SEO and Google Ranking",
    },
    {
      img: "/img/home-page/whyus-2.png",
      title: "Responsive Design",
      span: "Captivate your audience across all devices",
    },
    {
      img: "/img/home-page/whyus-3.png",
      title: "Cutting Edge Technology",
      span: "Ultra-Fast load times powered by Next.JS & AWS",
    },
    {
      img: "/img/home-page/whyus-4.png",
      title: "Effortless Content Management",
      span: "Update your site quickly and easily",
    },
    {
      img: "/img/home-page/whyus-5.png",
      title: "Data-Driven Insights",
      span: "Make informed decisions with robust analytics",
    },
    {
      img: "/img/home-page/whyus-6.png",
      title: "Professional Support",
      span: "Our dedicated team ensures your site is always up",
    },
  ];

  const [activeState, setActiveState] = useState<
    "advantage" | "covered" | "quote"
  >("quote");
  return (
    <section className="py-36 -mt-36 bg-black rounded-t-[4rem] md:rounded-t-[10rem] px-8 flex flex-col gap-12">
      <div className="flex flex-col gap-4 items-center justify-center">
        <HeadingTitle as="h2">Why us?</HeadingTitle>
        <p className="max-w-prose text-2xl text-center text-[#818181]">
          Our process at WebTeck is simple we start with a kick-off call to
          understand your needs, design the perfect layout, code it into a
          functional site, and launch it with full support to ensure success.
        </p>
      </div>

      <div className="flex flex-col gap-y-16 md:flex-row md:items-center justify-center">
        <div className="flex-1 flex items-center justify-center flex-col gap-4">
          <Button
            className={`text-3xl flex justify-between w-full md:w-4/5 text-left pb-4 border-b border-[#888888] ${
              activeState === "advantage"
                ? "text-white after:content-['→'] after:rotate-90 md:after:rotate-0"
                : " text-[#444444]"
            }`}
            onClick={() => setActiveState("advantage")}
          >
            Discover Our Advantage
          </Button>
          <Button
            className={`text-3xl flex justify-between w-full md:w-4/5 text-left pb-4 border-b border-[#888888] ${
              activeState === "covered"
                ? "text-white after:content-['→'] after:rotate-90 md:after:rotate-0"
                : " text-[#444444]"
            }`}
            onClick={() => setActiveState("covered")}
          >
            We've Got You Covered
          </Button>
          <Button
            className={`text-3xl flex justify-between w-full md:w-4/5 text-left pb-4 border-b border-[#888888]  ${
              activeState === "quote"
                ? "text-white after:content-['→'] after:rotate-90 md:after:rotate-0"
                : " text-[#444444]"
            }`}
            onClick={() => setActiveState("quote")}
          >
            Get Your Custom Quote
          </Button>
        </div>

        <div className="flex-1 flex gap-4 flex-col justify-center bg-[#161519] px-16 rounded-xl py-10 h-[600px]">
          {activeState === "advantage" &&
            whyUsArr.map((el) => (
              <div className="flex bg-white text-black items-stretch p-2 gap-4 rounded-md w-full">
                <div className="bg-[#444444] flex items-center justify-center rounded-md h-12 w-12">
                  <Image src={el.img} alt="icon" height={24} width={24} />
                </div>
                <div>
                  <p className="flex flex-col font-bold">
                    {el.title}
                    <span className="font-normal text-xs text-[#888888]">
                      {el.span}
                    </span>
                  </p>
                </div>
              </div>
            ))}

          {activeState === "covered" && (
            <div className="flex flex-col items-center justify-center gap-12">
              <Image
                src="/img/home-page/covered.png"
                alt="what we can help you with"
                height={182}
                width={400}
              />
              <span className="w-3/4 h-1 inline-block bg-white"></span>
              <p className="max-w-prose text-white text-2xl italic">
                Our team of experts is here to take these burdens off your
                shoulders, allowing you to focus on running your business.
              </p>
            </div>
          )}

          {activeState === "quote" && (
            <div className="flex flex-col gap-5">
              <div className="text-center">
                <h3 className="font-bold text-xl md:text-3xl ">
                  Upfront Pricing with Customized Solutions
                </h3>
                <p className="text-[#888888] md:text-xl">
                  We don't believe in one-size-fits-all solutions.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-semibold md:text-xl">Our Advantages</span>
                <ul className="flex flex-col gap-4 list-disc ml-4 text-sm md:text-base">
                  <li>
                    <span className="font-semibold">
                      Upfront, Transparent Pricing:
                    </span>
                    No hidden fees, no surprises.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Tailored to Your Brand:
                    </span>
                    Custom design that reflects your unique identity.
                  </li>
                  <li>
                    <span className="font-semibold">Accessibility First:</span>
                    WCAG-compliant websites for inclusivity.
                  </li>
                  <li>
                    <span className="font-semibold">Complete Support:</span>
                    Stay in control with our dedicated support and client
                    portal.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
