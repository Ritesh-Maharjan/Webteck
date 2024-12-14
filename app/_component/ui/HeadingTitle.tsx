import React from "react";

type HeadingProps = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
};

const HeadingTitle: React.FC<HeadingProps> = ({
  as: Tag = "h1",
  children,
  className,
  backgroundColor,
  ...props
}) => {
  return (
    <Tag
      className={`text-4xl md:text-7xl tracking-tight font-bold text-transparent !bg-clip-text ${className}`}
      {...props}
      style={{
        background: `${
          backgroundColor
            ? "linear-gradient(to right, #000000 0%, #141414 14%, #999999 100%)"
            : "linear-gradient(to right, #999999 0%, #A1A1A1 17%, #FFFFFF 100%)"
        }`,
      }}
    >
      {children}
    </Tag>
  );
};
export default HeadingTitle;
