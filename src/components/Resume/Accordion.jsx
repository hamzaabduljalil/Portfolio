import React from "react";
import "./Resume.css";
const Accordion = ({
  title,
  position,
  company,
  date,
  text,
  position2,
  company2,
  date2,
  text2,
  shadwo,
  position3,
  company3,
  date3,
  text3,
  shadwo2,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="py-1 p-4 rounded-lg max-w-[1240px] m-auto">
      <button
        onClick={onToggle}
        className="flex justify-between w-full bg-pdf-100 rounded-sm mt-2 p-3.5 text-white text-center items-center font-medium tracking-wide cursor-pointer duration-[0.6s] hover"
      >
        <span>
          <svg
            className="fill-white shrink-0 ml-8 justify-end flex"
            width="16"
            height="16"
          ></svg>
        </span>
        <span>{title}</span>
        <svg
          className="fill-white shrink-0 ml-8 justify-end flex"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="96"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-350 ease-out ${
              isOpen ? "!rotate-180" : ""
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-350 ease-out ${
              isOpen ? "!rotate-180" : ""
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-[400ms] ease-in-out ${
          isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="overflow-hidden p-6 md:p-4">
          <h2 className="text-[27px] font-medium mt-2 tracking-wide">
            {position}
          </h2>
          <h3 className="text-[26px] font-medium text-pdf-200 mt-[-5px]">
            {company}
          </h3>
          <h4 className="font-medium text-2xl">{date}</h4>
          <div className="mt-2 pl-4">{text}</div>
          <div>{shadwo2}</div>
          <h2 className="text-[27px] font-medium mt-2 tracking-wide">
            {position2}
          </h2>
          <h3 className="text-[26px] font-medium text-pdf-200 mt-[-5px]">
            {company2}
          </h3>
          <h4 className="font-medium text-2xl">{date2}</h4>
          <div className="mt-2 pl-4">{text2}</div>
          <div>{shadwo}</div>
          <h2 className="text-[27px] font-medium mt-2 tracking-wide">
            {position3}
          </h2>
          <h3 className="text-[26px] font-medium text-pdf-200 mt-[-5px]">
            {company3}
          </h3>
          <h4 className="font-medium text-2xl">{date3}</h4>
          <div className="mt-2 pl-4">{text3}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
