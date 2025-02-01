"use client";

import Link from "next/link";
import Button from "../ui/Button";
import Accordion from "../ui/Accordion";
import { serviceFaq } from "@/data/servicefaq";
import { useState } from "react";

export function ServiceFaq({ category }: { category: string }) {
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  
    return (
      <div className="bg-white mb-0 pt-16 pb-20 rounded-t-3xl">
        <div className="max-w-screen-2xl mx-auto flex flex-col gap-14 px-8">
          <div className="mb-10 flex flex-col gap-2">
            <h3 className="font-bold text-black text-5xl">
              Frequently Asked Questions
            </h3>
            <p className="text-[#888888] md:text-xl">
              Some common questions and answers
            </p>
          </div>
          <div className="text-black flex flex-col gap-2">
            {serviceFaq
              .filter((faq) => faq.category === category)
              .map((faq, index) => (
                <Accordion
                  key={index}
                  id={`faq-${index}`}
                  title={faq.question}
                  content={faq.answer}
                  activeAccordion={activeAccordion}
                  setActiveAccordion={setActiveAccordion}
                />
              ))}
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-8 pt-12 flex flex-col gap-5">
          <p className="flex flex-col gap-1 text-3xl text-black">
            Have more questions?
            <span className="text-xl">
              If you have additional questions, feel free to reach out.
            </span>
          </p>
          <Link href="/contact">
            <Button className="border uppercase font-bold w-fit transition duration-10 ease-in-out border-[#CDCDCD] text-black hover:text-[#7A58FF] hover:border-[#7A58FF]">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  