import React, { useState } from "react";
import "./Resume.css";
import SkillsInfo from "./SkillsInfo";

const Skills = ({ isOpen, onToggle }) => {
  return (
    <div className="py-1 p-4 rounded-lg max-w-[1240px] m-auto">
      <button
        onClick={onToggle}
        className="flex justify-between w-full bg-pdf-100 rounded-sm mt-2 p-3.5 text-white text-center items-center font-medium tracking-wide cursor-pointer duration-700 hover"
      >
        <span>
          <svg
            className="fill-white shrink-0 ml-8 justify-end flex"
            width="16"
            height="16"
          ></svg>
        </span>
        <span>Skills</span>
        <svg
          className="fill-white shrink-0 ml-8 justify-end flex transition-transform duration-500"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-500 ease-out ${
              isOpen ? "rotate-180" : ""
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-500 ease-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-[900ms] ease-in-out ${
          isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="overflow-hidden flex justify-around items-center flex-wrap gap-7">
          <SkillsInfo
            title="Programming Languages: "
            skills={
              <ul className="list-decimal list-inside mark">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>C#</li>
                <li>C++</li>
              </ul>
            }
          />
          <SkillsInfo
            title="Frameworks: "
            skills={
              <ul className="list-decimal list-inside mark">
                <li>React</li>
                <li>Next.js</li>
                <li>Basics of Vue.js</li>
              </ul>
            }
          />
          <SkillsInfo
            title="Libraries: "
            skills={
              <ul className="list-decimal list-inside mark">
                <li>RxJs</li>
                <li>jQuery</li>
              </ul>
            }
          />
          <SkillsInfo
            title="UI Libraries: "
            skills={
              <ul className="list-decimal list-inside mark">
                <li>Tailwind</li>
                <li>Bootstrap</li>
              </ul>
            }
          />
          <SkillsInfo
            title="Other Skills: "
            skills={
              <ul className="list-decimal list-inside mark">
                <li>Source Control via Git</li>
                <li>GitHub</li>
                <li>CCNA</li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
