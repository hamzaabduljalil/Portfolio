import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";

const LetterRevealText = ({ text, delay = 0.1, repeatDelay = 4 }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, repeatDelay * 1000);

    return () => clearInterval(interval);
  }, [repeatDelay]);

  return (
    <div key={key}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * delay }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default LetterRevealText;
