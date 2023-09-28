import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, index, icon, description }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-white rounded-[20px] py-5 px-5 sm:min-h-[450px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain"
          />
          <h3 className="text-gray-800 text-[20px] font-bold text-center">
            {title}
          </h3>
          <p className="text-[#444444] text-justify">{description}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Services = () => {
  return (
    <section className="services section-bg">
      <motion.div variants={textVariant()}>
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
      </motion.div>

      <div className="text-center">
        <h1 className="text-[27px] font-semibold text-gray-800 sm:text-[40px] mb-[8px]">
          We Provide The Best Digital Services!!!
        </h1>
        <p className="pddd-[24px] text-[16px] text-[#444444]">
          Though our expertise in crafting websites and web application, we
          blend aesthetic elegance with cutting-edge functionality.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Services, "services");
