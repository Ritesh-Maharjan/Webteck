import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  cardBackground?: string;
};

export default function Card({
  children,
  className,
  cardBackground,
}: CardProps) {
  return (
    <div
      className={`flex justify-between flex-shrink-0 flex-col w-96 h-96 p-8 border-8 rounded-[30px] ${className}`}
      style={cardBackground ? { background: cardBackground } : undefined}
    >
      {children}
    </div>
  );
}
