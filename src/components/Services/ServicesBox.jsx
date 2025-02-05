import React from "react";
import styles from "./Services.module.css";

const ServicesBox = (props) => {
  return (
    <div
      className={` w-[300px] h-[225px] flex flex-col justify-center items-center 
                p-[6px_20px] border border-[rgba(0,0,0,0.175)] 
                shadow-lg shadow-[rgba(0,0,0,0.15)] 
                mt-10 transition-all duration-500 overflow-hidden ${styles.hover} `}
    >
      <img src={props.img} className="w-[150px]" />
      <h2 className={styles.line}>{props.title}</h2>
    </div>
  );
};

export default ServicesBox;
