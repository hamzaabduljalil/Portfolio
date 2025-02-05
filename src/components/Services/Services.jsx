import React from "react";
import styles from "./Services.module.css";
import ServicesBox from "./ServicesBox";
import development from "../../assets/development.webp";
import designing from "../../assets/designing.webp";
import fix from "../../assets/fix.webp";
const Services = () => {
  return (
    <div>
      <h1
        className={` grid text-[26px] uppercase items-center mt-[25px] font-medium gap-5.5 justify-center grid-cols-[20%_auto_20%] grid-rows-[16px_0] relative after:content-[''] after:block after:border-b-2 after:border-gray-300 after:bg-[#f8f8f8]
         before:content-[''] before:block before:border-b-2 before:border-gray-300 before:bg-[#f8f8f8] `}
      >
        Services
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-5 pb-5">
        <ServicesBox img={development} title="Web Development" />
        <ServicesBox img={designing} title="Web Designing" />
        <ServicesBox img={fix} title="Fixing Issues" />
      </div>
    </div>
  );
};

export default Services;
