import React from "react";

const SkillsInfo = (props) => {
  return (
    <div className="rounded-[10px] bg-pdf-100 w-[320px] h-[100%] mt-7  ">
      <h2 className="text-white   px-[10px] py-[10px] text-[16px] font-medium m-auto  text-center">
        {props.title}
      </h2>
      <div className="bg-white py-[20px] ">{props.skills}</div>
      <div className="h-[15px] rounded-[10px]" />
    </div>
  );
};

export default SkillsInfo;
