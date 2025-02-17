import { Dispatch, SetStateAction } from "react";

type accordionTypes = {
  id: string;
  title: string;
  content: React.ReactNode;
  activeAccordion: string | null;
  setActiveAccordion: Dispatch<SetStateAction<string | null>>;
};

const Accordion: React.FC<accordionTypes> = ({
  id,
  title,
  content,
  activeAccordion,
  setActiveAccordion,
}) => {
  const isActive = activeAccordion === id;
  return (
    <div className="border rounded-lg">
      <button
        aria-expanded={activeAccordion === id ? true : false}
        aria-controls={`accordion-content-${id}`}
        className="flex justify-between items-center gap-2 w-full p-3"
        onClick={() => {
          return isActive ? setActiveAccordion(null) : setActiveAccordion(id);
        }}
      >
        <h4 className="text-xl text-left">{title}</h4>
        <div
          className={`${
            isActive && "rotate-45"
          } transition-all relative w-5 h-[2px] bg-black before:w-full before:inline-block before:h-full before:absolute before:top-0 before:left-0 before:bg-black before:rotate-90`}
        ></div>
      </button>
      {isActive && (
        <div
          id={`accordion-content-${id}`}
          className={`text-[#888888] mx-3 my-0 overflow-hidden h-full mb-2`}
        >
          <div className="content-wrapper">{content}</div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
