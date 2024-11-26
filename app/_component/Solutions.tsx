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
    >
      <div>
        <span className="border py-3 px-6 rounded-full">
          Small Business & Startups
        </span>
      </div>
    </ContentWithCta>
  );
};

export default Solutions;
