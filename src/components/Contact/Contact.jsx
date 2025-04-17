import React from "react";
import styles from "./Contact.module.css";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import gmail from "../../assets/gmail.png";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <div className="p-[0_10px_20px]">
      <h1
        className={` grid text-[26px] uppercase items-center mt-[35px] font-medium gap-5.5 justify-center grid-cols-[20%_auto_20%] grid-rows-[16px_0] relative after:content-[''] after:block after:border-b-2 after:border-gray-300 after:bg-[#f8f8f8]
           before:content-[''] before:block before:border-b-2 before:border-gray-300 before:bg-[#f8f8f8] `}
      >
        Contact
      </h1>
      {/* <ContactForm /> */}
      <div
        className={`${styles.box} border-1 border-border-100 shadow-lg shadow-[rgba(0,0,0,0.15)] text-center max-w-[1000px] m-auto mt-5 pt-5  `}
      >
        <p className="font-medium mb-10 text-[18px] p-[0_10px]">
          Feel free to connect with me on any of the following platforms:
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/hamza-abduljalil-26538b257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_black"
          >
            <img src={linkedin} /> <h5>Linkedin</h5>
          </a>
          <a href="https://github.com/hamzaabduljalil" target="_black">
            <img src={github} /> <h5>Github</h5>
          </a>
          <a href="mailto:hamza.abduljalil100@gmail.com" target="_black">
            <img src={gmail} /> <h5>Gmail</h5>
          </a>
          <a
            href="https://web.whatsapp.com/send?phone=+963938677696&"
            target="_black"
          >
            <img src={whatsapp} /> <h5>Whatsapp</h5>
          </a>
          <a href="https://www.facebook.com/share/15RuxeWCY3/" target="_black">
            <img src={facebook} /> <h5>Facebook</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
