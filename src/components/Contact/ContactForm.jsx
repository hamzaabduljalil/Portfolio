import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setErrorMsg("");
    setSuccessMsg("");
  }, [name, email, phone, message]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      phone.trim().length === 0 ||
      message.trim().length === 0
    ) {
      setErrorMsg("Please enter a valid input (non-empty values).");
      setIsLoading(false);
      return;
    }

    emailjs
      .sendForm("service_dd3zx9g", "template_xjmjatn", form.current, {
        publicKey: "gUD77rwBTarfluDYG",
      })
      .then(() => {
        setSuccessMsg("SUCCESS!");
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMsg(`FAILED: ${error.text}`);
        setIsLoading(false);
      });

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      {isLoading && <p className={styles.loading}>Loading..</p>}
      {errorMsg && <p className={styles.error}>{errorMsg}</p>}
      {successMsg && <p className={styles.success}>{successMsg}</p>}
      <form
        ref={form}
        onSubmit={sendEmail}
        className={`${styles.form} max-w-[500px] m-auto mt-5 p-5 text-center`}
      >
        <input
          type="text"
          placeholder="Your Name"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Phone"
          name="user_phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" value="Send">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
