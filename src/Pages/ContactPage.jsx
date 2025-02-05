import React from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact/Contact";
const ContactPage = () => {
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
      <Contact />
    </motion.div>
  );
};

export default ContactPage;
