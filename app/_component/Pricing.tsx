"use client";
import React, { useState } from "react";
import { UUIDTypes, v1 as uuidv1 } from "uuid";
import HeadingTitle from "./ui/HeadingTitle";
import Button from "./ui/Button";
import Accordion from "./ui/Accordion";

const accordionItems = [
  {
    id: uuidv1(),
    title: "How long does it take to build a website?",
    content: (
      <p>
        The timeline for building a website depends on the complexity and
        features required. <br />
        We will provide a detailed project timeline after understanding your
        specific requirements.
        <ul>
          <li>Landing page - 10 days. </li>
          <li>Basic website - 21 days.</li>
          <li>Corporate website - 3months.</li>
        </ul>
      </p>
    ),
  },
  {
    id: uuidv1(),
    title: "Is maintenance mandatory?",
    content: (
      <p>
        The timeline for building a website depends on the complexity and
        features required. <br />
        We will provide a detailed project timeline after understanding your
        specific requirements.
        <ul>
          <li>Landing page - 10 days. </li>
          <li>Basic website - 21 days.</li>
          <li>Corporate website - 3months.</li>
        </ul>
      </p>
    ),
  },
  {
    id: uuidv1(),
    title: "What happens after I pay the deposit?",
    content: (
      <p>
        The timeline for building a website depends on the complexity and
        features required. <br />
        We will provide a detailed project timeline after understanding your
        specific requirements.
        <ul>
          <li>Landing page - 10 days. </li>
          <li>Basic website - 21 days.</li>
          <li>Corporate website - 3months.</li>
        </ul>
      </p>
    ),
  },
  {
    id: uuidv1(),
    title: "Can I change my plan later?",
    content: (
      <p>
        The timeline for building a website depends on the complexity and
        features required. <br />
        We will provide a detailed project timeline after understanding your
        specific requirements.
        <ul>
          <li>Landing page - 10 days. </li>
          <li>Basic website - 21 days.</li>
          <li>Corporate website - 3months.</li>
        </ul>
      </p>
    ),
  },
  {
    id: uuidv1(),
    title: "Do you offer custom pricing for larger projects?",
    content: (
      <p>
        The timeline for building a website depends on the complexity and
        features required. <br />
        We will provide a detailed project timeline after understanding your
        specific requirements.
        <ul>
          <li>Landing page - 10 days. </li>
          <li>Basic website - 21 days.</li>
          <li>Corporate website - 3months.</li>
        </ul>
      </p>
    ),
  },
  {
    id: uuidv1(),
    title: "Is there a contract commitment?",
    content: (
      <p>
        The timeline for building a website depends on the complexity and
        features required. <br />
        We will provide a detailed project timeline after understanding your
        specific requirements.
        <ul>
          <li>Landing page - 10 days. </li>
          <li>Basic website - 21 days.</li>
          <li>Corporate website - 3months.</li>
        </ul>
      </p>
    ),
  },
  {
    id: uuidv1(),
    title: "What’s included in the Basic Maintenance plan?",
    content: (
      <p>
        The timeline for building a website depends on the complexity and
        features required. <br />
        We will provide a detailed project timeline after understanding your
        specific requirements.
        <ul>
          <li>Landing page - 10 days. </li>
          <li>Basic website - 21 days.</li>
          <li>Corporate website - 3months.</li>
        </ul>
      </p>
    ),
  },
  {
    id: uuidv1(),
    title: "How does Standard Maintenance differ from Basic?",
    content: (
      <p>
        The timeline for building a website depends on the complexity and
        features required. <br />
        We will provide a detailed project timeline after understanding your
        specific requirements.
        <ul>
          <li>Landing page - 10 days. </li>
          <li>Basic website - 21 days.</li>
          <li>Corporate website - 3months.</li>
        </ul>
      </p>
    ),
  },
  {
    id: uuidv1(),
    title: "Can I upgrade or downgrade my maintenance plan??",
    content: (
      <p>
        The timeline for building a website depends on the complexity and
        features required. <br />
        We will provide a detailed project timeline after understanding your
        specific requirements.
        <ul>
          <li>Landing page - 10 days. </li>
          <li>Basic website - 21 days.</li>
          <li>Corporate website - 3months.</li>
        </ul>
      </p>
    ),
  },
];

const Pricing = () => {
  const [activeAccordion, setActiveAccordion] = useState<UUIDTypes | null>(
    accordionItems[0].id
  );
  return (
    <section className="bg-white text-black overflow-hidden relative4 py-24 px-8 mt-32 before:absolute before:top-0 before:left-0 before:right-0 before:h-2 before:w-full before:inline-block before:bg-gradient-to-r before:from-[#D9D9D9] before:to-[#888888] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-2 after:w-full after:inline-block after:bg-gradient-to-r after:from-[#D9D9D9] after:to-[#888888]">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-20">
        {/* Section header */}
        <div className="flex items-center justify-center flex-col gap-4">
          <HeadingTitle as="h2" backgroundColor="white">
            Pricing
          </HeadingTitle>
          <p className="text-[#818181] max-w-prose text-center md:text-2xl">
            At WebTeck, we offer flexible and transparent pricing plans to suit
            your unique website needs. Whether you're a startup or an
            established business, our team ensures you get the best value for
            your investment.
          </p>
        </div>
        {/* Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-baseline">
          <div className="bg-[#888888] flex flex-col gap-3 rounded-[30px] bg-opacity-20 overflow-hidden p-2">
            {/* First card container */}

            <div className="shadow-md border border-[#888888] border-opacity-15  bg-gradient-to-br from-[#ffffff] via-[#E8E8E8] to-[#999999] p-8 rounded-[30px] flex flex-col gap-6 ">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <HeadingTitle
                    as="h3"
                    backgroundColor="white"
                    className="text-xl md:!text-3xl"
                  >
                    Landing Page
                  </HeadingTitle>
                  <span className="text-[#CDCDCD]">1-3 Pages, Parallax</span>
                </div>
                <p className="font-bold flex justify-between">
                  CA$ 1,1199
                  <span className="font-normal text-[#CDCDCD]">
                    Pay $600 deposit today
                  </span>
                </p>
                <p>
                  Perfect for personal, startups or small businesses looking to
                  make a strong first impression online.
                </p>
              </div>

              <div className="h-[3px] bg-[#CDCDCD] bg-opacity-40" />

              <ul>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Single-Page Design with Smooth Parallax Scrolling
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Mobile-Responsive Design
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Basic SEO Optimization
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Contact Form Integration
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  1 round of revisions included
                </li>
              </ul>

              <div>
                <Button className="bg-gradient-to-r from-black to-[#606060] text-white">
                  Choose This Plan
                </Button>
              </div>
            </div>

            {/* Second card container */}
            <div className="border-2 border-[#888888] border-opacity-15 rounded-[30px] p-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold md:text-2xl">
                  Basic Maintenance <span className="text-sm">(optional)</span>
                </h3>
                <p className="font-bold">
                  CA$20-$80
                  <span className="text-[#888888] font-normal">/mo</span>
                </p>
                <p className="text-[#888888]">
                  Provides essential updates, security patches, and 2 hours of
                  content changes to keep your website secure and up-to-date.
                </p>
              </div>

              <div className="h-[3px] bg-[#CDCDCD] bg-opacity-40" />

              <ul>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/list-style.png')] before:bg-contain before:bg-no-repeat">
                  Website Updates
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/list-style.png')] before:bg-contain before:bg-no-repeat">
                  Security Checks
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/list-style.png')] before:bg-contain before:bg-no-repeat">
                  Minor Content Changes
                </li>
              </ul>

              <div>
                <Button className="bg-gradient-to-r from-black to-[#606060] text-white">
                  Change Maintenance Plan
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-[#888888] flex flex-col gap-3 rounded-[30px] bg-opacity-20 overflow-hidden p-2">
            {/* First card container */}
            {/* bg-gradient-to-br from-[#ffffff] via-[#E8E8E8] to-[#999999] */}
            <div className="shadow-md border border-[#888888] border-opacity-15  p-8 rounded-[30px] flex flex-col gap-6 bg-gradient-to-br from-[#000000] via-[#585858] to-[#999999] text-white">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <HeadingTitle as="h3" className="text-xl md:!text-3xl">
                    Basic Website
                  </HeadingTitle>
                  <span className="text-[#CDCDCD]">3-7 Pages</span>
                </div>
                <p className="font-bold flex justify-between">
                  CA$3,999
                  <span className="font-normal text-[#CDCDCD]">
                    Pay $1,500 deposit today
                  </span>
                </p>
                <p>
                  For organizations seeking on affordable yet comprehensive web
                  solution to establish e-presence.
                </p>
              </div>

              <div className="h-[3px] bg-[#CDCDCD] bg-opacity-40" />

              <ul>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Up 7 custom-designed pages
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Mobile-Responsive Design
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  On page SEO Optimization
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Contact Form Integration
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  2 round of revisions included
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Social Media Links
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Blog setup to publish content
                </li>
              </ul>

              <div>
                <Button className="bg-white text-black">
                  Choose This Plan
                </Button>
              </div>
            </div>

            {/* Second card container */}
            <div className="border-2 border-[#888888] border-opacity-15 rounded-[30px] p-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold md:text-2xl">
                  Standard Maintenance{" "}
                  <span className="text-sm">(optional)</span>
                </h3>
                <p className="font-bold">
                  CA$100-$250
                  <span className="text-[#888888] font-normal">/mo</span>
                </p>
                <p className="text-[#888888]">
                  Includes regular updates, security monitoring, performance
                  optimization, and 5 hours of content or design adjustments to
                  ensure your website runs smoothly and stays updated.
                </p>
              </div>

              <div className="h-[3px] bg-[#CDCDCD] bg-opacity-40" />

              <ul className="grid grid-cols-2">
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Website Updates
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Security Checks
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Content Changes
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Monthly Reports
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Performance Optimization
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Technical Support
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Plugin Updates
                </li>
              </ul>

              <div>
                <Button className="bg-gradient-to-r from-black to-[#606060] text-white">
                  Change Maintenance Plan
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-[#888888] flex flex-col gap-3 rounded-[30px] bg-opacity-20 overflow-hidden p-2">
            {/* third card container */}
            {/* bg-gradient-to-br from-[#ffffff] via-[#E8E8E8] to-[#999999] */}
            <div className="shadow-md border border-[#888888] border-opacity-15  p-8 rounded-[30px] flex flex-col gap-6 ">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <HeadingTitle
                    as="h3"
                    backgroundColor="white"
                    className="text-xl md:!text-3xl"
                  >
                    Corporate
                  </HeadingTitle>
                  <span className="text-[#CDCDCD]">10-20 Pages</span>
                </div>
                <p className="font-bold flex justify-between">
                  CA$8,999
                  <span className="font-normal text-[#CDCDCD]">
                    Pay $2,000 deposit today
                  </span>
                </p>
                <p>
                  Enterprises needing a scalable solution with custom features
                  and a polished high-end design.
                </p>
              </div>

              <div className="h-[3px] bg-[#CDCDCD] bg-opacity-40" />

              <ul>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Up 20 custom-designed pages
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Mobile-Responsive Design
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Advanced SEO Optimization
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Contact Form Integration
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  4 round of revisions included
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Custom Features
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Post-Launch Support
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Custom Blog Set Up
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  4 round of revisions included
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  4 round of revisions included
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Integration with Third-Party
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/whatweoffer-7.png')] before:bg-contain before:bg-no-repeat">
                  Security Enhancements
                </li>
              </ul>

              <div>
                <Button className="bg-gradient-to-r from-black to-[#606060] text-white">
                  Choose This Plan
                </Button>
              </div>
            </div>

            <div className="border-2 border-[#888888] border-opacity-15 rounded-[30px] p-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold md:text-2xl">
                  Premium Maintenance{" "}
                  <span className="text-sm">(optional)</span>
                </h3>
                <p className="font-bold">
                  CA$300-$500
                  <span className="text-[#888888] font-normal">/mo</span>
                </p>
                <p className="text-[#888888]">
                  Provides essential updates, security patches, and 2 hours of
                  content changes to keep your website secure and up-to-date.
                </p>
              </div>

              <div className="h-[3px] bg-[#CDCDCD] bg-opacity-40" />

              <ul>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/list-style.png')] before:bg-contain before:bg-no-repeat">
                  Website Updates
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/list-style.png')] before:bg-contain before:bg-no-repeat">
                  Security Checks
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/list-style.png')] before:bg-contain before:bg-no-repeat">
                  Content Changes
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/list-style.png')] before:bg-contain before:bg-no-repeat">
                  Monthly Reports
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/list-style.png')] before:bg-contain before:bg-no-repeat">
                  Performance Optimization
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/list-style.png')] before:bg-contain before:bg-no-repeat">
                  Technical Support
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/list-style.png')] before:bg-contain before:bg-no-repeat">
                  Plugin Updates
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/list-style.png')] before:bg-contain before:bg-no-repeat">
                  SEO Optimization
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/home-page/list-style.png')] before:bg-contain before:bg-no-repeat">
                  New functionalities
                </li>
              </ul>

              <div>
                <Button className="bg-gradient-to-r from-black to-[#606060] text-white">
                  Change Maintenance Plan
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div>
          <div className="mb-10 flex flex-col gap-2">
            <h3 className="font-bold text-5xl">Frequently Asked Questions</h3>
            <p className="text-[#888888]">Some common questions and answers</p>
          </div>

          {/* Accordion Container*/}
          <div className="flex flex-col gap-2">
            {accordionItems.map((el) => (
              <Accordion
                key={el.id}
                id={el.id}
                title={el.title}
                content={el.content}
                activeAccordion={activeAccordion}
                setActiveAccordion={setActiveAccordion}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p className="flex flex-col gap-1 text-3xl">
            Have more questions?
            <span className="text-xl">
              If you have additional questions, feel free to reach out.
            </span>
          </p>

          <Button className="border uppercase font-bold w-fit">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
