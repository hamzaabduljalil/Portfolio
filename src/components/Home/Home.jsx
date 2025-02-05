import React from "react";
import "./Home.css";
import hamza from "../../assets/hamza.jpg";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      className="flex justify-center items-center p-3 mt-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
    >
      <div className="bg-white p-5 rounded-lg  text-center max-w-lg shadows">
        {/* Title Section */}
        <div className="relative inline-block">
          <div className="flex items-center justify-center">
            <h1 className=" main-title border-2 border-black px-6 py-2 font-semibold relative z-10">
              ABOUT ME
            </h1>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mt-5">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0 bg-blue-600 rounded-full"></div>
            <img
              src={hamza}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full border-4 border-white"
            />
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-700 text-base leading-relaxed font-[500]">
          - A Front-end developer with a proven track record of creating dynamic
          and responsive web applications. With a keen eye for design and user
          experience. Experienced in collaborating with cross-functional teams
          to deliver innovative solutions that enhance user interactions. Strong
          problem-solving skills and a commitment to staying current with
          emerging web technologies. Ready to contribute expertise to develop
          cutting-edge web applications that drive exceptional user engagement
          and satisfaction.
        </p>
      </div>
    </motion.div>
  );
};

export default Home;
