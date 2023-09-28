import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { aboutImg } from "../assets";

const About = () => {
  return (
    <section className="services section-bg">
      <div className="section-title">
        <h2>ABOUT US</h2>
      </div>
      <div className="flex sm:flex-row flex-col justify-between items-center gap-24">
        <img src={aboutImg} alt="About Image" className="" />
        <div className="text-center">
          <p className="p-2 ">
            <span className="sm:text-[72px] text-[40px] text-gray-800 font-bold">
              We Have
            </span>
            <br />
            <span className="sm:text-[51px] text-[32px] text-primary font-semibold">
              A Solution
            </span>
            <br />
            <span className="text-[#444444] text-[16px]">
              To transform your bussiness challenges into captiviting digital
              solutions.Let us build your ideas into intuitive interfaces that
              not only attract but also conquer the online realm, ensuring your
              business reaches new heights.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
