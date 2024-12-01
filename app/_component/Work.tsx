import Image from "next/image";
import React from "react";

const WorkImages = [
  {
    id: "2",
    src: "/img/home-page/ourwork-quinx.png",
    alt: "quinx Website screenshot",
  },
  {
    id: "1",
    src: "/img/home-page/ourwork-indra.png",
    alt: "Indra Website screenshot",
  },
  {
    id: "3",
    src: "/img/home-page/ourwork-rokusushi.png",
    alt: "Rokusushi Website screenshot",
  },
  {
    id: "4",
    src: "/img/home-page/ourwork-stepupmarketing.png",
    alt: "step up marketing Website screenshot",
  },
  {
    id: "5",
    src: "/img/home-page/ourwork-whisper.png",
    alt: "Whisper Website screenshot",
  },
];

const Work = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col gap-4 px-8">
      <div className="py-24 flex flex-col gap-4">
        <h2 className="text-5xl md:text-7xl font-bold">Our Work</h2>
        <p className="md:text-2xl text-[#818181]">
          At Vancouver WebTeck, we transform your ideas into powerful digital
          solutions that not only meet your unique needs but also drive tangible
          results. Our dedicated team collaborates closely with you to
          understand your vision and goals, ensuring that every project is
          crafted with purpose and precision.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {WorkImages.map((work) => (
          <Image
            key={work.id}
            src={work.src}
            alt={work.alt}
            height={932}
            width={1892}
            className="rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
