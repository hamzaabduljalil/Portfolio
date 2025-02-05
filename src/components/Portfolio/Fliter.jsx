import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import { motion } from "framer-motion";
const DATA = [
  [
    {
      h2: "Frameworks",
      label: ["Nextjs", "React"],
    },
  ],
  [
    {
      h2: "Languages",
      label: ["JavaScript", "TypeScript"],
    },
  ],
  [
    {
      h2: "Libraries",
      label: ["jquery", "BootStrap", "Tailwind"],
    },
  ],
  [
    {
      h2: "HTML & CSS",
      label: ["WebDesign"],
    },
  ],
];

const Fliter = ({ setCheckedList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setCheckedList((prev) =>
      isChecked ? [value] : prev.filter((item) => item !== value)
    );
  };
  const handleFilter = () => {
    setIsOpen((pre) => !pre);
  };
  console.log(isOpen);

  return (
    <div className="mt-5 p-[0_20px] ">
      <button
        onClick={handleFilter}
        className={`${styles.hoverFilter} bg-transparent text-button-300 rounded-[.375rem] text-center border border-solid border-button-300 p-[.375rem_.75rem] mb-3 cursor-pointer transition-all duration-300`}
      >
        Filter
      </button>
      {isOpen && (
        <motion.div
          className="border border-[rgba(0,0,0,0.175)] "
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
        >
          <form>
            <div className=" flex justify-around items-start flex-wrap flex-row gap-3 p-[15px_0]">
              {DATA.map((item, idx) =>
                item.map((i, innerIdx) => (
                  <div
                    key={`${idx}-${innerIdx}`}
                    className="min-h-[120px] flex flex-col"
                  >
                    <h2 className="font-bold mb-1">{i.h2}</h2>
                    {i.label.map((lb, labelIdx) => (
                      <div key={labelIdx} className="flex items-center">
                        <input
                          type="checkbox"
                          name={i.h2}
                          id={lb}
                          value={lb}
                          onChange={handleSelect}
                          className="m-[7px] bg-red-300"
                        />
                        <label htmlFor={lb}>{lb}</label>
                      </div>
                    ))}
                  </div>
                ))
              )}
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default Fliter;
