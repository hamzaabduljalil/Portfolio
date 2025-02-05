import React from "react";
import "./Header.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import gmail from "../../assets/gmail.png";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";
import LetterRevealText from "../../Motion/Motion";
const Header = () => {
  return (
    <div className="text-center bg-header-100 lg:h-48 pt-10 relative h-49">
      <h1 className="font-medium text-4xl tracking-widest">Hamza Abduljalil</h1>
      <div className="line lg:mt-8 mt-6 relative text-[18px] text-header-200 uppercase tracking-widest font-medium">
        <LetterRevealText
          text="Front-End Developer"
          delay={0.09}
          repeatDelay={5}
        />
      </div>
      <div className="flex lg:justify-end justify-center items-center gap-2  lg:bottom-3 lg:right-5 right-1 absolute bottom-1  ">
        <a
          href="https://www.linkedin.com/in/hamza-abduljalil-26538b257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_black"
        >
          <img src={linkedin} className="w-7 h-7" />
        </a>
        <a href="https://github.com/hamzaabduljalil" target="_black">
          <img src={github} className="w-7 h-7" />
        </a>
        <a href="mailto:hamza.abduljalil100@gmail.com" target="_black">
          <img src={gmail} className="w-7 h-7" />
        </a>
        <a href="https://www.facebook.com/share/15RuxeWCY3/" target="_black">
          <img src={facebook} className="w-7 h-7" />
        </a>
        <a
          href="https://web.whatsapp.com/send?phone=+963938677696&"
          target="_black"
        >
          <img src={whatsapp} className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
};

export default Header;
