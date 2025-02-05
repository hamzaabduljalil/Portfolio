import React from "react";
import "./Resume.css";
const DownloadCv = () => {
  return (
    <div className="block m-auto mt-[20px] mb-[15px] w-fit rounded-[10px] px-[12px] py-[9px]  bg-pdf-100 text-white font-medium  text-[16px] border-none cursor-pointer duration-[0.3s] hover">
      <a href="CV-Hamza Abduljalil.pdf" download="CV-Hamza Abduljalil">
        Download PDF Resume
      </a>
    </div>
  );
};

export default DownloadCv;
