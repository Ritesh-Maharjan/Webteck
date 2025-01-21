import React from "react";
import HeadingTitle from "./ui/HeadingTitle";
import InfoCard from "./ui/InfoCard";

const workflowArr = [
  {
    title: "Kick Off Call",
    subtitle: "We start by understanding your vision and goals",
    procedures: [
      "Project Agreement",
      "Discover Session",
      "Define Scope & Deliverables",
      "Establish Communication Channels",
    ],
    ranking: "01",
    img: "/img/home-page/card-1.png",
  },
  {
    title: "Design",
    subtitle: "Crafting a visually appealing and user-friendly design.",
    procedures: [
      "Design Revisions",
      "User-Centered Design",
      "Visual Design Creation",
      "Wireframe Development:",
    ],
    ranking: "02",
    img: "/img/home-page/card-2.png",
  },
  {
    title: "Coding",
    subtitle: "We start by understanding your vision and goals",
    procedures: [
      "Project Agreement",
      "Discover Session",
      "Define Scope & Deliverables",
      "Establish Communication Channels",
    ],
    ranking: "03",
    img: "/img/home-page/card-3.png",
  },
  {
    title: "Kick Off Call",
    subtitle: "We start by understanding your vision and goals",
    procedures: [
      "Project Agreement",
      "Discover Session",
      "Define Scope & Deliverables",
      "Establish Communication Channels",
    ],
    ranking: "04",
    img: "/img/home-page/card-4.png",
  },
];

const Workflow = () => {
  return (
    <section className="py-28 px-4 bg-white text-black">
      <div className="max-w-screen-2xl flex flex-col items-center gap-12 mx-auto">
        <div className="flex flex-col items-center gap-4">
          <HeadingTitle
            as="h2"
            backgroundColor="white"
            className="text-center w-fit"
          >
            Our workflow
          </HeadingTitle>
          <p className="text-[#818181] max-w-prose text-center">
            Our process at WebTeck is simple: we start with a kick-off call to
            understand your needs, design the perfect layout, code it into a
            functional site, and lanuch it with full support to ensure success.
          </p>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-10">
          {workflowArr.map((el) => (
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
  );
};

export default Workflow;
