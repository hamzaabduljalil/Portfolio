import React, { useState } from "react";
import Accordion from "./Accordion";
import Skills from "./Skills";

const FAQ = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <div>
      <Accordion
        title="Work Experience"
        position3="FrontEnd Developer"
        company3="Freelancer"
        date3="9/2023 - Present"
        text3={
          <ul className="list-disc list-inside">
            <li>Converting designs into a responsive templates</li>
            <li>
              Writing well-designed and efficient code using the best software
              development tools
            </li>
          </ul>
        }
        shadwo2={<div className="mt-4 shadow2 w-[100%] h-1" />}
        position="FrontEnd Developer"
        company="Quizat App - Dashboard Manager"
        date="2/2025 - Present"
        isOpen={openSection === "experience"}
        onToggle={() => toggleSection("experience")}
        text={
          <ul className="list-disc list-inside">
            <li>
              Managing and overseeing the development of the dashboard for a
              student-focusedQuizApp.
            </li>
            <li>
              Coordinating user interfaces, including quiz management,
              performance tracking, and feedback systems.
            </li>
            <li>
              Collaborating with development teams to ensure seamless
              integration of quiz data and user interactions
            </li>
          </ul>
        }
        shadwo={<div className="mt-4 shadow2 w-[100%] h-1" />}
        position2="Data Entry"
        company2="Cleaance.ae-Remotely"
        date2="6/2024 - 10/2024"
        text2={
          <ul className="list-disc list-inside">
            <li>
              Managed product listings across e-commerce platforms, including
              Shopify, ensuringaccurate and SEO-friendly content.
            </li>
            <li>
              Optimized product content by integrating SEO best practices in
              titles, descriptions, and tags, contributing to improved
              visibility and search engine rankings
            </li>
          </ul>
        }
      />
      <Accordion
        title="Education"
        position="Bachelor's degree in information technology"
        company="Syrian Virtual University"
        date="2022 - Present"
        isOpen={openSection === "education"}
        onToggle={() => toggleSection("education")}
        text={
          <ul className="list-disc list-inside">
            <li>Information Systems and Semantic Networks Specialization</li>{" "}
          </ul>
        }
      />
      <Skills
        isOpen={openSection === "skills"}
        onToggle={() => toggleSection("skills")}
      />
    </div>
  );
};

export default FAQ;
