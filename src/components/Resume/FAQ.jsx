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
        position="FrontEnd Developer"
        company="Freelancer"
        date="10/2023 - Present"
        isOpen={openSection === "experience"}
        onToggle={() => toggleSection("experience")}
        text={
          <ul className="list-disc list-inside">
            <li>
              Developed complex web applications using HTML, CSS, JavaScript and
              JQuery technologies.
            </li>
            <li>
              Increased Page Load Speed: Optimized web applications, resulting
              in a 30% reduction in load times, improving user engagement and
              retention
            </li>
            <li>
              Enhanced User Experience: Conducted user testing and made
              adjustments that improved user satisfaction scores by 25%
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
