import React from "react";
import HeadingTitle from "./ui/HeadingTitle";

const Workflow = () => {
  return (
    <section className="py-28 bg-white text-black">
      <div className="max-w-screen-xl flex flex-col items-center gap-12 mx-auto">
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

        <div className="flex gap-10">
          <div className="flex flex-col gap-10 justify-between border-8 rounded-3xl border-[#888888] border-opacity-30 p-8">
            <div className="flex flex-col gap-2">
              <HeadingTitle as="h3" backgroundColor="white">Kick Off Call</HeadingTitle>
              <p>We start by understanding your vision and goals.</p>
            </div>

            <div>
              <span className="border-2 p-2 rounded-full">
                Discovery Session
              </span>
            </div>

            <span>01</span>
          </div>

          <div className="flex flex-col justify-between h-36">
            <div>
              <h3>Kick Off Call</h3>
              <p>We start by understanding your vision and goals.</p>
            </div>

            <div>
              <span className="border-2 p-2 rounded-full">
                Discovery Session
              </span>
            </div>

            <span>01</span>
          </div>

          <div className="flex flex-col justify-between h-36">
            <div>
              <h3>Kick Off Call</h3>
              <p>We start by understanding your vision and goals.</p>
            </div>

            <div>
              <span className="border-2 p-2 rounded-full">
                Discovery Session
              </span>
            </div>

            <span>01</span>
          </div>

          <div className="flex flex-col justify-between h-36">
            <div>
              <h3>Kick Off Call</h3>
              <p>We start by understanding your vision and goals.</p>
            </div>

            <div>
              <span className="border-2 p-2 rounded-full">
                Discovery Session
              </span>
            </div>

            <span>01</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
