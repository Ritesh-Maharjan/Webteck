import React from "react";
import HeadingTitle from "./ui/HeadingTitle";
import Image from "next/image";

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
    ranking: "01",
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
          {workflowArr.map((el, index) => (
            <div
            key={index}
            className="relative h-[550px] w-80 overflow-hidden flex flex-col gap-10 border-4 rounded-3xl border-[#888888] border-opacity-30 p-8 shadow-[0_0_0_5px_rgba(169,169,169,0.5)]"
          >
      
              <div className="flex flex-col gap-2">
                <HeadingTitle
                  as="h3"
                  backgroundColor="white"
                  className="text-4xl md:!text-4xl w-fit"
                >
                  {el.title}
                </HeadingTitle>
                <p className="text-[#888888]">{el.subtitle}</p>
              </div>

              <div>
                <ul className="list-disc ml-4 flex flex-col gap-2">
                  {el.procedures.map((procedure, index) => (
                    <li className="font-medium " key={index}>{procedure}</li>
                  ))}
                </ul>
              </div>

              <span className="absolute bottom-8 tracking-tight left-8 text-6xl font-semibold">
                {el.ranking}
              </span>

              <Image
                className={`absolute h-[200px] w-[300px] bottom-0 -right-20`}
                src={el.img}
                height="264"
                width="284"
                alt="card display image "
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
