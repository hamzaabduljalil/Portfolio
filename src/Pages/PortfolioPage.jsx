import React, { useState } from "react";
import Fliter from "../components/Portfolio/Fliter";
import Portfolio from "../components/Portfolio/Portfolio";
import { motion } from "framer-motion";

const PortfolioPage = () => {
  const [checkedList, setCheckedList] = useState([]);
  return (
    <motion.div
      className=" m-auto container "
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
    >
      <Fliter setCheckedList={setCheckedList} />
      <Portfolio checkedList={checkedList} />
    </motion.div>
  );
};

export default PortfolioPage;
