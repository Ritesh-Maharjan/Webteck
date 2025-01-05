"use client";

import React, { useState, useEffect } from "react";
import { servicesData } from "../data";
import Image from "next/image";
import { serviceFaq } from "../../data/servicefaq";
import Accordion from "../../_component/ui/Accordion";
import HeadingTitle from "@/_component/ui/HeadingTitle";
import Button from "@/_component/ui/Button";
import InfoCard from "@/_component/ui/InfoCard";
// singles service page dynamically generated
export function ServiceFaq({ category }: { category: string }) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  return (
    <div>
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      <div>
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
  );
}

export default function ServicePage({
  params,
}: {
  params: { serviceId: string };
}) {
  const [serviceId, setServiceId] = useState<string | null>(null);

  useEffect(() => {
    const fetchServiceId = async () => {
      const unwrappedParams = await params;
      setServiceId(unwrappedParams.serviceId);
    };

    fetchServiceId();
  }, [params]);

  const service = servicesData.find((service) => service.id === serviceId);

  return (
    <>
      <section
        className={`min-h-[calc(100vh-80px)] max-w-screen-2xl px-4 flex flex-col justify-center items-center `}
      >
        <Image
          src={service ? service.bgImage : ""}
          alt={service ? service.infoTitle : ""}
          height={100}
          width={100}
          className="absolute top-0 w-full -z-10"
        />
        <div className="flex flex-col items-center gap-5">
          <HeadingTitle
            as="h1"
            className="text-6xl font-bold relative text-center max-w-[800px]"
          >
            {service?.heading}
          </HeadingTitle>
          <p className="text-center max-w-prose text-lg">
            {service?.subheading}
          </p>
          <div className="flex justify-center">
            <Button className="border py-1">Start a Project</Button>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl px-5 flex flex-col gap-24 mb-24 items-center justify-center">
        <div className="flex flex-row gap-4 max-w-[800px]">
          <h2 className="text-2xl font-bold flex-1">{service?.infoTitle}</h2>
          <p className="flex-1 text-[#dbdbdb]">{service?.infoDesc}</p>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-10">
          {service?.workflowArr.map((el) => (
            <InfoCard
              key={el.ranking}
              title={el.title}
              subtitle={el.subtitle}
              procedures={el.procedures}
              ranking={el.ranking}
              img={el.img}
            />
          ))}
        </div>
      </section>

      <section className="gradient-borders ">
        <h2 className="text-4xl font-bold text-center mb-24">
          {service?.detailTitle}
        </h2>
        <div className="max-w-[800px] mx-auto px-4 flex flex-col gap-14 pb-24">
          <div className="flex flex-col items-center md:flex-row gap-10">
            <Image
              src={service?.solutionImage1 || "/default-image.png"}
              alt={service?.solutionImage1Title || "Default Alt Text"}
              width={500}
              height={500}
              className="flex-1 w-full"
            />
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="text-2xl font-bold">
                {service?.solutionImage1Title}
              </h3>
              <p>{service?.solutionImage1Desc}</p>
              <ul>
                {service?.bulletPoints1.map((point, index) => (
                  <li className="list-disc" key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-10">
            <Image
              src={service?.solutionImage2 || "/default-image.png"}
              alt={service?.solutionImage2Title || "Default Alt Text"}
              width={500}
              height={500}
              className="order-1 md:order-2 flex-1 w-full"
            />
            <div className="order-2 md:order-1 flex-1 flex flex-col gap-4">
              <h3 className="text-2xl font-bold">{service?.solutionImage2Title}</h3>
              <p>{service?.solutionImage2Desc}</p>
              <ul>
                {service?.bulletPoints2.map((point, index) => (
                  <li className="list-disc" key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-10">
            <Image
              src={service?.solutionImage3 || "/default-image.png"}
              alt={service?.solutionImage3Title || "Default Alt Text"}
              width={500}
              height={500}
              className="flex-1 w-full"
            />
            <div className="flex-1 flex flex-col gap-4">
              <h3  className="text-2xl font-bold">{service?.solutionImage3Title}</h3>
              <p>{service?.solutionImage3Desc}</p>
              <ul>
                {service?.bulletPoints3.map((point, index) => (
                  <li className="list-disc" key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
		
        <ServiceFaq category={serviceId || "default-category"} />
      </section>
    </>
  );
}
