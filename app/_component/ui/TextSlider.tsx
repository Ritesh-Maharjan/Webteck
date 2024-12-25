interface TextSliderProps {
  texts: string[];
}

const defaultTexts = [
  "Crafting Beautiful Website",
  "Elevating Your Online Presence",
];

const TextSlider = ({ texts = defaultTexts }: TextSliderProps) => {
  return (
    <div className="overflow-hidden">
      <div className="flex whitespace-nowrap gap-4 w-fit animate-slide border-2 py-4">
        {[...texts, ...texts].map((text, index) => (
          <h2
            key={index}
            className="after:content-['|'] after:ml-4 bg-gradient-to-b from-white to-[#888888] bg-clip-text text-transparent font-semibold text-4xl md:text-7xl"
          >
            {text}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;
export { defaultTexts };