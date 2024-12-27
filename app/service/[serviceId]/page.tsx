"use client";

import { useState } from "react";
import { servicesData } from "../data";
import Image from "next/image";
import { serviceFaq } from "../../data/servicefaq";
import Accordion from "../../_component/ui/Accordion";
// singles service page dynamically generated
export function ServiceFaq({ category }: { category: string }) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  return (
    <div>
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      <div>
        {serviceFaq
          .filter(faq => faq.category === category)
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

export default function ServicePage({ params }: { params: { serviceId: string } }) {
  const service = servicesData.find(service => service.id === params.serviceId);
  return <>
	<section className="h-screen">
		<div>
			<h1 className="text-6xl font-bold text-left relative z-10 text-center" >{service?.heading}</h1>
			<p className="text-center">{service?.subheading}</p>
			<div className="flex justify-center">
				<button className="bg-red-500 text-white px-4 py-2 rounded-full"> Start a Project </button>
			</div>
		</div>
		<div className="flex flex-row gap-4">
			<h2>{service?.infoTitle}</h2>
			<p>{service?.infoDesc}</p>
		</div>
	</section>
	<section className="gradient-borders">
		<h2 className="text-3xl font-bold text-left relative z-10 text-center">{service?.detailTitle}</h2>
		<div className="flex flex-col md:flex-row gap-4">
			<Image 
				src={service?.solutionImage1 || '/default-image.png'}
				alt={service?.solutionImage1Title || 'Default Alt Text'}
				width={500} 
				height={500} 
			/>
			<div>
				<h3>{service?.solutionImage1Title}</h3>
				<p>{service?.solutionImage1Desc}</p>
				<ul>
					{service?.bulletPoints1.map((point, index) => (
						<li className="list-disc" key={index}>{point}</li>
					))}
				</ul>
			</div>
		</div>
		<div className="flex flex-col md:flex-row gap-4">
			<Image 
				className="order-1 md:order-2"
				src={service?.solutionImage2 || '/default-image.png'}
				alt={service?.solutionImage2Title || 'Default Alt Text'}
				width={500} 
				height={500} 
			/>
			<div className="order-2 md:order-1">
				<h3>{service?.solutionImage2Title}</h3>
				<p>{service?.solutionImage2Desc}</p>
				<ul>
					{service?.bulletPoints2.map((point, index) => (
						<li className="list-disc" key={index}>{point}</li>
					))}
				</ul>
			</div>
		</div>
		<div className="flex flex-col md:flex-row gap-4">
			<Image 
				src={service?.solutionImage3 || '/default-image.png'}
				alt={service?.solutionImage3Title || 'Default Alt Text'}
				width={500} 
				height={500} 
			/>
			<div>
				<h3>{service?.solutionImage3Title}</h3>
				<p>{service?.solutionImage3Desc}</p>
				<ul>
					{service?.bulletPoints3.map((point, index) => (
						<li className="list-disc" key={index}>{point}</li>
					))}
				</ul>
			</div>
		</div>
	<ServiceFaq category={service?.id || "ahahah"} />
	</section>
		</>;
}
