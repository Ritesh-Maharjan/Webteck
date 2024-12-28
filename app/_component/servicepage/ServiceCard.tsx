import React from "react";
import Image from "next/image";
import Link from "next/link";

//used for display the service card in the service page main page
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  return (
    <div
      className={`container flex-col mx-auto flex justify-center gap-10 md:items-center ${
        index % 2 === 1 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="max-w-[650px]">
        <h2>{service.title}</h2>
        <p>THIS IS THE SERVICE CARD</p>
        <p>{service?.fullDescription}</p>
        <ul className="list-disc ml-6">
          {service?.features?.map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <Link
          href={`/service/${service.id}`}
          className="inline-block mt-6 px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          Learn More
        </Link>
      </div>
      <div className="w-[450px] shrink-0">
        <Image
          src={service?.image}
          alt={service?.title}
          width={450}
          height={500}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
