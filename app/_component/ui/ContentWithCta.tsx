import React from "react";
import HeadingTitle from "./HeadingTitle";

interface CustomizableSectionProps {
  title: string;
  subtitle: string;
  cta1: string;
  cta2: { text: string; span: string };
  backgroundColor?: string;
  textColor?: string;
  children?: React.ReactElement;
}

const ContentWithCta: React.FC<CustomizableSectionProps> = ({
  title,
  subtitle,
  cta1,
  cta2,
  backgroundColor,
  textColor,
  children,
}) => {
  return (
    <section
      className={`flex flex-col items-center before:h-2 before:w-full before:inline-block before:bg-gradient-to-r before:from-[#D9D9D9] before:to-[#888888] after:h-2 after:w-full after:inline-block after:bg-gradient-to-r after:from-[#D9D9D9] after:to-[#888888] before:mb-24 after:mt-24 ${
        backgroundColor && `bg-${backgroundColor}`
      } ${textColor && `text-${textColor}`}`}
    >
      <div className="max-w-screen-2xl flex flex-col gap-10 border-y-2 border-[#888888] py-24 mx-8 justify-center items-center">
        <HeadingTitle className="text-center" backgroundColor={backgroundColor} as="h2">
          {title}
        </HeadingTitle>
        <p className="text-[#818181]">{subtitle}</p>

        <div className="flex gap-6">
          <button
            className={`text-${textColor} rounded-3xl border py-3 px-6 font-bold border-[#CDCDCD] text-nowrap h-fit`}
          >
            {cta1}
          </button>
          <p className="text-[#CDCDCD] flex flex-col text-xs">
            {cta2.text} <span className={`text-${textColor} text-sm`}>{cta2.span}</span>
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default ContentWithCta;
