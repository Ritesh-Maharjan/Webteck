import Image from "next/image";
import React from "react";
import HeadingTitle from "./HeadingTitle";

type InfoCardType = {
  title: string;
  subtitle: string;
  procedures: string[];
  ranking: string;
  img: string;
};
const InfoCard: React.FC<InfoCardType> = ({
  title,
  subtitle,
  procedures,
  ranking,
  img,
}) => {
  return (
    <div
      className="relative h-[550px] w-80 overflow-hidden flex flex-col gap-10 border-4 rounded-3xl border-[#888888] border-opacity-30 p-8 shadow-[0_0_0_5px_rgba(169,169,169,0.5)] bg-white"
    >
      <div className="flex flex-col gap-2">
        <HeadingTitle
          as="h3"
          backgroundColor="white"
          className="text-4xl md:!text-4xl w-fit"
        >
          {title}
        </HeadingTitle>
        <p className="text-[#888888]">{subtitle}</p>
      </div>

      <div>
        <ul className="list-disc ml-4 flex flex-col gap-2">
          {procedures.map((procedure, index) => (
            <li className="font-medium text-black" key={index}>
              {procedure}
            </li>
          ))}
        </ul>
      </div>

      <span className="absolute bottom-8 tracking-tight left-8 text-6xl font-semibold text-black">
        {ranking}
      </span>

      <Image
        className={`absolute h-[200px] w-[300px] bottom-0 -right-20 sm:h-[150px] sm:w-[250px] sm:-right-10 lg:h-[200px] lg:w-[300px]`}
        src={img}
        height="264"
        width="284"
        alt="card display image "
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default InfoCard;
