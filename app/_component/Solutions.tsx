import React from "react";
import HeadingTitle from "./ui/HeadingTitle";
import ContentWithCta from "./ui/ContentWithCta";

const Solutions = () => {
  return (
    <ContentWithCta
      title="Flexible Solutions For Every Business"
      subtitle="At Webteck, we work with all types of business, offering flexible,
          high quality website solutions. Our focus is on delivering websites
          that drive results and help your business grow, no matter your size or
          industry."
      cta1="Book a call"
      cta2={{ text: " For future of knowledge ", span: "Discover our vision" }}
      backgroundColor="black" //#161519 color needs to be this number not all black
      textColor="white"

    >
      <div className="flex flex-wrap gap-4 justify-center">
        <span className="border py-3 px-6 rounded-full">
          Small Business & Startups
        </span>
        <span className="border py-3 px-6 rounded-full">
          E-Commerce
        </span>
        <span className="border py-3 px-6 rounded-full">
          Corporate & Enterprise
        </span>
        <span className="border py-3 px-6 rounded-full">
          Service-Based Business
        </span>
        <span className="border py-3 px-6 rounded-full">
          Non-Profit Organizations
        </span>
        <span className="border py-3 px-6 rounded-full">
          Hospitality & Travel
        </span>
        <span className="border py-3 px-6 rounded-full">
          Real Estate
        </span>
        <span className="border py-3 px-6 rounded-full">
          Healthcare & Medical Services
        </span>
        <span className="border py-3 px-6 rounded-full">
          Education & Learning Platforms
        </span>
        <span className="border py-3 px-6 rounded-full">
          Restaurants & Cafes
        </span>
      </div>
    </ContentWithCta>
  );
};

export default Solutions;
