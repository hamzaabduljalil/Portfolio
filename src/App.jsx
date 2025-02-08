import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import DisplayHeader from "./components/Header/DisplayHeader";
import Footer from "./components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import ResumePage from "./Pages/ResumePage";
import ServicesPage from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";
import PortfolioPage from "./Pages/PortfolioPage";
const App = () => {
  return (
    <>
      <DisplayHeader />
      <Footer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </Footer>
    </>
  );
};

export default App;
