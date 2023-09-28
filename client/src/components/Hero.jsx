import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/img/hero-img.png";

const Hero = () => {
  return (
    <div className="bg-[#37517e] sm:h-[85vh] flex  min-sm:flex-wrap-reverse max-sm:flex-wrap-reverse sm:text-left text-center h-[100vh] pt-[80px] w-[100%] px-10 items-center">
      <div className="text-white p-3">
        <h1 className="sm:text-[3rem] text-[28px] font-black sm:font-[700] sm:mb-[10px]">
          Better Solutions For Your Business
        </h1>
        <p className="sm:text-[22px] sm:mb-6 sm:font-semibold">
          We are team of talented designers making websites and Web Apps which
          solve your business problems
        </p>
        <input
          type="button"
          value="Get Started"
          className="font-black text-[16px] w-[10rem] transition-[0.5s] rounded-[50px] bg-[#47b2e4] p-4 mt-[10px] cursor-pointer"
        />
      </div>
      <div className="">
        <img
          src={heroImg}
          alt="Hero Image"
          className="sn:w-[90%] sm:h-[100%] mt-5 sm:animate-bounce-slow"
        />
      </div>
    </div>
  );
};

export default Hero;
