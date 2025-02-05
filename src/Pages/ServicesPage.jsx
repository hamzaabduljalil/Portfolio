import React from "react";
import Services from "../components/Services/Services";
import { motion } from "framer-motion";

const ServicesPage = () => {
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
      <Services />
    </motion.div>
  );
};

export default ServicesPage;
