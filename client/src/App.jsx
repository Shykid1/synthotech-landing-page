import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Team from "./components/Team";

import "./App.css";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#f3f5fa]">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Services />
        <CTA />
        <Team />
        <Pricing />
        <ContactUs />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
