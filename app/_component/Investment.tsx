import React from "react";
import ContentWithCta from "./ui/ContentWithCta";

const Investment = () => {
  return (
    <ContentWithCta
      title="Website is an ongoing investment, not an expense"
      subtitle="Many entrepreneurs see websites as a one-time cost, but they should be viewed as an ongoing investment. A website is like a 24/7 sales rep, driving revenue and growth by constantly sharing your brand message and product info."
      cta1="Book a call"
      cta2={{ text: "For future of knowledge ", span: "Discover our vision" }}
      backgroundColor="white"
      textColor="black"
    ></ContentWithCta>
  );
};

export default Investment;
