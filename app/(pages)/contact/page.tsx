import React from "react";
import ContactForm from "../../_component/contactpage/ContactForm";
import HeadingTitle from "../../_component/ui/HeadingTitle";
import Investment from "../../_component/Investment";
import TextSlider, { defaultTexts } from "../../_component/ui/TextSlider";

const page = () => {
  return (
    <>
      <div className="bg-[url('/img/contact-page/contact-bg.png')] bg-cover min-h-screen">
        <div className="max-w-screen-xl mx-auto px-8 grid py-20 md:grid-cols-6 gap-y-10 md:mt-20">
          <div className="flex flex-col gap-6 justify-between md:col-span-3">
            <HeadingTitle as="h1" className="w-fit">
              Let&apos;s work together
            </HeadingTitle>
            <div className="flex flex-col gap-4">
              <p className="text-[#CDCDCD] text-lg flex flex-col">
                Phone:
                <a className="text-white" href="tel:+17783188494">
                  +1 (778) 318 8494
                </a>
              </p>
              <p className="text-[#CDCDCD] text-lg flex flex-col">
                Email:
                <a
                  className="text-white"
                  href="mailto:vancouver.webteck@gmail.com"
                >
                  vancouver.webteck@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-bold text-2xl md:text-4xl text-white pb-5 md:pb-12">
              Get a Detailed Proposal
            </h2>
            <ContactForm />
          </div>
        </div>
        <TextSlider texts={defaultTexts} />

        <Investment />
      </div>
    </>
  );
};

export default page;
