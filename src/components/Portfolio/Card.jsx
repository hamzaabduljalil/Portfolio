import React, { useState } from "react";
import styles from "./Portfolio.module.css";
const Card = (props) => {
  return (
    <div
      className="container bg-card-100 text-center pt-5 p-2 border border-[rgba(0,0,0,0.175)] 
                shadow-lg shadow-[rgba(0,0,0,0.19)] w-[325px] h-[100%] lg:w-[400px] md:w-[400px]"
    >
      <h2
        className={` ${styles.symbol} relative text-xl text-center pb-11 m-0 uppercase tracking-widest leading-normal`}
      >{`((${props.title}))`}</h2>
      <p className="mt-2">{props.summary}</p>
      <button
        onClick={props.onConfirm}
        className="inline-block p-[5px_20px] text-white outline-none border-none text-[16px] tracking-wider relative overflow-hidden  rounded-[10rem] transition-all duration-300 bg-button-100 mt-5 cursor-pointer"
      >
        View More
      </button>
      <div className="mt-4 bg-button-200  border-t border-t-border-200 p-2">
        <div className="flex gap-3 justify-center items-cente  text-white ">
          {props.Language}
        </div>
      </div>
    </div>
  );
};

export default Card;
