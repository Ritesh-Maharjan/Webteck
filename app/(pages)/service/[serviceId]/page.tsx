"use client";

import React, { useState, useEffect } from "react";
import { servicesData } from "../data";
// import Image from 'next/image';
import HeadingTitle from "@/_component/ui/HeadingTitle";
import InfoCard from "@/_component/ui/InfoCard";
import Link from "next/link";
import ContactForm from "../../../_component/contactpage/ContactForm";
import { Transform } from "@/_component";
import Image from "next/image";
import { ServiceFaq } from "@/_component/servicepage/ServiceFaq";
import Head from "next/head";


export default function ServicePage({
  params,
}: {
  params: Promise<{ serviceId: string }>;
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

  if (!service) return <div> Loading....</div>;

  return (
    <>
      {/* SEO: Canonical Tag */}
      <Head>
        <title>{service?.heading} - Vancouver WebTeck</title>
        <meta name="description" content={service?.subheading || "Default meta description"} />
        <link rel="canonical" href={`https://webteck.ca/service/${serviceId}`} />
      </Head>

      <div
        className={`relative bg-cover bg-center text-white`}
        style={{
          backgroundImage: `url('${service?.bgImage || "Image not found"}')`,
        }}
      >
        <header className="text-center pb-20 pt-60">
          <div className="flex flex-col text-center gap-10">
            <h1 className="text-5xl font-bold mb-4 md:text-8xl">
              {service?.heading}
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-4 md:text-2xl">
              {service?.subheading}
            </p>
            <button
              className={`hidden md:flex items-center justify-center rounded-3xl border py-2 px-4 font-medium text-lg transition duration-10 ease-in-out text-center mx-auto hover:text-[#7A58FF] hover:border-[#7A58FF] gap-2`}
            >
              <Link href="/contact">Start a Project</Link>
              <Image
                src="/img/uiux-detail/question-answer-icon.png"
                alt="Question Answer Icon"
                className="ml-1 hover:text-[#7A58FF] hover:border-[#7A58FF]"
                height={20}
                width={20}
              />
            </button>
          </div>
        </header>
        <div className="p-6 md:p-10 flex flex-col text-center gap-6 md:flex-row md:text-left md:items-center justify-between md:mx-20 lg:mx-60 md:gap-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            {service?.infoTitle}
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            {service?.infoDesc}
          </p>
        </div>
      </div>

      {/* InfoCard Component */}
      <section className="flex justify-center items-center min-h-screen pt-40 pb-20">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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
        </div>
      </section>

      <section className="mt-20 md:mt-20">
        <h1 className="text-center text-4xl font-bold mb-4 md:text-7xl">
          {service?.detailTitle}
        </h1>
      </section>

      <div className="md:pt-10 pb-20">
        <div className="flex flex-col items-center gap-10 px-4 pt-10 md:gap-16 md:pt-20 md:flex-row md:px-10 lg:gap-32 lg:px-20 xl:gap-40 xl:px-64">
          <Image
            src={service?.solutionImage1}
            alt={service?.solutionImage1Title}
            className="w-fit order-last md:order-first"
            height={200}
            width={400}
          />
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-3xl font-bold mb-4 md:text-5xl">
              {service?.solutionImage1Title}
            </h1>
            <p className="text-lg md:text-xl">{service?.solutionImage1Desc}</p>
            <ul className="flex flex-col gap-2 list-disc ml-6 mt-4 text-lg md:text-xl">
              {service?.bulletPoints1.map((point, index) => (
                <li className="list-disc" key={index}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 px-4 pt-10 md:gap-16 md:pt-20 md:flex-row md:px-10 lg:gap-32 lg:px-20 xl:gap-40 xl:px-64">
          <Image
            src={service?.solutionImage2}
            alt={service?.solutionImage2Title}
            className="w-fit order-last md:order-last"
            height={200}
            width={400}
          />
          <div className="order-2 md:order-1 flex-1 flex flex-col gap-4">
            <h1 className="text-3xl font-bold mb-4 md:text-5xl">
              {service?.solutionImage2Title}
            </h1>
            <p className="text-lg md:text-xl">{service?.solutionImage2Desc}</p>
            <ul className="flex flex-col gap-2 list-disc ml-6 mt-4 text-lg md:text-xl">
              {service?.bulletPoints2.map((point, index) => (
                <li className="list-disc" key={index}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 px-4 pt-10 md:gap-16 md:pt-20 md:flex-row md:px-10 lg:gap-32 lg:px-20 xl:gap-40 xl:px-64">
          <Image
            src={service?.solutionImage3}
            alt={service?.solutionImage3Title}
            className="w-fit order-last md:order-first"
            height={200}
            width={400}
          />
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-3xl font-bold mb-4 md:text-5xl">
              {service?.solutionImage3Title}
            </h1>
            <p className="text-lg md:text-xl">{service?.solutionImage3Desc}</p>
            <ul className="flex flex-col gap-2 list-disc ml-6 mt-4 text-lg md:text-xl">
              {service?.bulletPoints3.map((point, index) => (
                <li className="list-disc" key={index}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact us section */}
      <div className="max-w-screen-2xl mx-auto px-8 grid pb-40 pt-10 md:grid-cols-6 gap-y-10">
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

      <div>
        <ServiceFaq category={serviceId || "default-category"} />
        <Transform />
      </div>
    </>
  );
}
