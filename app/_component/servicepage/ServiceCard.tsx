import React from "react";
import Image from "next/image";
import Link from "next/link";

//used for display the service card in the service page main page
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  return (
    <div
      className={`flex-col mx-auto flex justify-center gap-4 md:gap-10 md:items-center ${
        index % 2 === 1 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="max-w-[650px] flex flex-col gap-4 md:gap-6">
        <h2 className="text-4xl font-bold">{service.title}</h2>
        <p className="md:text-lg">{service?.fullDescription}</p>
        <ul className="list-disc ml-6 grid lg:grid-cols-2 gap-5">
          {service?.features?.map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <Link
          href={`/service/${service.id}`}
          className="inline-block mt-6 px-8 py-3 border border-white rounded-full  transition duration-10 ease-in-out text-center mx-auto hover:text-[#7A58FF] hover:border-[#7A58FF] w-fit"
        >
          Learn More
        </Link>
      </div>
      <div className="w-full md:w-[450px] shrink-0 h-full">
        <Image
          src={service?.image}
          alt={service?.title || "Default Alt Text"}
          width={450}
          height={500}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
