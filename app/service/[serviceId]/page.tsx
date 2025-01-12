'use client';

import React, { useState, useEffect } from 'react';
import { servicesData } from '../data';
import Image from 'next/image';
import { serviceFaq } from '../../data/servicefaq';
import Accordion from '../../_component/ui/Accordion';
import HeadingTitle from '@/_component/ui/HeadingTitle';
import Button from '@/_component/ui/Button';
import InfoCard from '@/_component/ui/InfoCard';
import Link from 'next/link';
export function ServiceFaq({ category }: { category: string }) {
	const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

	return (
		<div className='bg-white mb-0 pt-16 pb-20 rounded-t-3xl'>
			<h2 className='text-3xl font-bold text-black'>Frequently Asked Questions</h2>
			<div className='text-black mb-0'>
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

export default function ServicePage({ params }: { params: { serviceId: string } }) {
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
			<div
        className={`relative bg-cover bg-center text-white`}
        style={{
          backgroundImage: `url('${service?.bgImage || "/default-image.png"}')`,
        }}
      >
        <header className="text-center pb-20 pt-60">
          <div className="flex flex-col text-center gap-10">
            <h1 className="text-5xl font-bold mb-4 md:text-8xl">{service?.heading}</h1>
            <p className="text-lg max-w-2xl mx-auto mb-4 md:text-2xl">
              {service?.subheading}
            </p>
            <button
              className={`hidden md:flex items-center justify-center rounded-3xl border py-2 px-4 font-medium text-lg transition duration-10 ease-in-out text-center mx-auto hover:text-[#7A58FF] hover:border-[#7A58FF] gap-2`}
            >
              <Link href="/contact">Start a Project</Link>
              <img
                src="/img/uiux-detail/question-answer-icon.png"
                alt="Question Answer Icon"
                className="ml-1 hover:text-[#7A58FF] hover:border-[#7A58FF]"
              />
            </button>
            
          </div>
        </header>
        <div className='p-6 md:p-10 flex flex-col text-center gap-6 md:flex-row md:text-left md:items-center justify-between md:mx-20 lg:mx-60 md:gap-10'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>{service?.infoTitle}</h2>
              <p className='text-sm sm:text-base md:text-lg leading-relaxed max-w-xl'>{service?.infoDesc}</p>
        </div>
      </div>

      {/* InfoCard Component */}

			<section className='flex justify-center items-center min-h-screen pt-40 pb-20'>
				<div className='flex flex-col gap-8'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {service?.workflowArr.map((el) => (
              <InfoCard key={el.ranking} title={el.title} subtitle={el.subtitle} procedures={el.procedures} ranking={el.ranking} img={el.img} />
            ))}
          </div>
				</div>
			</section>

			<section className='mt-20 md:mt-20'>
				<h1 className='text-center text-4xl font-bold mb-4 md:text-7xl'>{service?.detailTitle}</h1>
      </section>
				
      <div className='md:pt-10 pb-20'>
        <div className='flex flex-col pt-10 md:flex-row gap-20 px-6 md:gap-40 md:px-64 md:pt-20 items-center'>
          <Image
            src={service?.solutionImage1 || '/default-image.png'}
            alt={service?.solutionImage1Title || 'Default Alt Text'}
            width={500}
            height={500}
            className='flex-1 w-full'
          />
          <div className='flex-1 flex flex-col gap-4'>
            <h3 className='text-2xl font-bold'>{service?.solutionImage1Title}</h3>
            <p className='max-w-full md:max-w-[300px]'>{service?.solutionImage1Desc}</p>
            <ul>
              {service?.bulletPoints1.map((point, index) => (
                <li className='list-disc' key={index}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex flex-col pt-10 md:flex-row gap-20 px-6 md:gap-40 md:px-64 md:pt-20 items-center'>
          <Image
            src={service?.solutionImage2 || '/default-image.png'}
            alt={service?.solutionImage2Title || 'Default Alt Text'}
            width={500}
            height={500}
            className='order-1 md:order-2 flex-1 w-full'
          />
          <div className='order-2 md:order-1 flex-1 flex flex-col gap-4'>
            <h3 className='text-2xl font-bold'>{service?.solutionImage2Title}</h3>
            <p>{service?.solutionImage2Desc}</p>
            <ul>
              {service?.bulletPoints2.map((point, index) => (
                <li className='list-disc' key={index}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex flex-col pt-10 md:flex-row gap-20 px-6 md:gap-40 md:px-64 md:pt-20 items-center'>
          <Image
            src={service?.solutionImage3 || '/default-image.png'}
            alt={service?.solutionImage3Title || 'Default Alt Text'}
            width={500}
            height={500}
            className='flex-1 w-full'
          />
          <div className='flex-1 flex flex-col gap-4'>
            <h3 className='text-2xl font-bold'>{service?.solutionImage3Title}</h3>
            <p>{service?.solutionImage3Desc}</p>
            <ul>
              {service?.bulletPoints3.map((point, index) => (
                <li className='list-disc' key={index}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ServiceFaq category={serviceId || 'default-category'} />
			
		</>
	);
}
