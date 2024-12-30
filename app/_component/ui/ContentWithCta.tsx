import React, { ReactNode } from "react";
import HeadingTitle from "./HeadingTitle";

interface CustomizableSectionProps {
  title: ReactNode;
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
      className={`flex flex-col items-center mt-4 gradient-borders ${
        backgroundColor && `bg-${backgroundColor}`
      } ${textColor && `text-${textColor}`}`}
    >
      <div className="max-w-screen-2xl flex flex-col gap-10 border-y-2 border-[#888888] py-24 px-8 justify-center items-center">
        <HeadingTitle className="text-center" backgroundColor={backgroundColor} as="h2">
          {title}
        </HeadingTitle>
        <p className="text-[#818181] text-xl max-w-prose text-center">{subtitle}</p>

        <div className="flex gap-6">
          <a
            href="https://calendly.com/vancouverwebteck/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-${textColor} rounded-3xl border py-3 px-6 font-bold border-[#CDCDCD] text-nowrap h-fit hover:text-[#7A58FF] hover:border-[#7A58FF] transition duration-10 ease-in-out`}
          >
            {cta1}
          </a>
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
