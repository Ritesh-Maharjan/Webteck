import React from "react";
import HeadingTitle from "./ui/HeadingTitle";
import Image from "next/image";

const Offer = () => {
  return (
    <section className="pt-32 pb-72 bg-white text-black px-8 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-4">
            <HeadingTitle as="h2" backgroundColor="black" className="w-fit">
              What we offer?
            </HeadingTitle>
            <p className="text-[#818181]">
              WebTeck provides custom web development, e-commerce solutions, and
              maintaineance to help your business succeed online
            </p>
          </div>
          <div className="flex gap-4">
            <button className="p-2 border-gray-400 border-2 rounded-full">
              <Image
                src="/img/home-page/whatweoffer-arrow-left.png"
                height={24}
                width={24}
                alt="Left arrow"
              />
            </button>
            <button className="p-2 border-gray-400 border-2 rounded-full">
              <Image
                src="/img/home-page/whatweoffer-arrow-right.png"
                height={24}
                width={24}
                alt="Right arrow"
              />
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          <div
            className="flex justify-between flex-shrink-0 flex-col p-8 w-96 h-96 border-8 rounded-[30px]"
            style={{
              background:
                "radial-gradient(circle, #FFB5B5 15%, white 75%, #EEEEEE 100%);",
            }}
          >
            <p>Icon</p>
            <div>
              <span className="text-sm font-bold">01.</span>
              <h3 className="font-bold text-2xl">SEO Services</h3>
            </div>
          </div>
          <div className="flex justify-between flex-shrink-0 flex-col p-2 w-96 border-4">
            <p>Incon</p>
            <div>
              <span>01.</span>
              <h3>SEO Services</h3>
            </div>
          </div>
          <div className="flex justify-between flex-shrink-0 flex-col p-2 w-96 border-4">
            <p>Incon</p>
            <div>
              <span>01.</span>
              <h3>SEO Services</h3>
            </div>
          </div>
          <div className="flex justify-between flex-shrink-0 flex-col p-2 w-96 border-4">
            <p>Incon</p>
            <div>
              <span>01.</span>
              <h3>SEO Services</h3>
            </div>
          </div>
          <div className="flex justify-between flex-shrink-0 flex-col p-2 w-96 border-4">
            <p>Incon</p>
            <div>
              <span>01.</span>
              <h3>SEO Services</h3>
            </div>
          </div>
          <div className="flex justify-between flex-shrink-0 flex-col p-2 w-96 border-4">
            <p>Incon</p>
            <div>
              <span>01.</span>
              <h3>SEO Services</h3>
            </div>
          </div>
          <div className="flex justify-between flex-shrink-0 flex-col p-2 w-96 border-4">
            <p>Incon</p>
            <div>
              <span>01.</span>
              <h3>SEO Services</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
