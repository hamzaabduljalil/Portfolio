import React from "react";
import DownloadCv from "../components/Resume/DownloadCv";
import FAQ from "../components/Resume/FAQ";
import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
    >
      <DownloadCv />
      <FAQ />
    </motion.div>
  );
};

export default ResumePage;
