import React from "react";
import { SectionWrapper } from "../hoc";

const CTA = () => {
  return (
    <section id="cta" className="cta">
      <div className="flex lg:flex-row flex-col max-lg:flex-col  xs:flex-col lg:justify-between items-center px-2 ">
        <div className="sm:text-left text-center">
          <h3 className="text-white font-black text-[28px]">Call To Action</h3>
          <p className="text-white font-light">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="text-center mt-5">
          <a
            href="#"
            className="text-center text-white font-[500px] sm:py-[16px] sm:px-[40px] py-[15px] px-[30px] hover:bg-[#47b2e4] hover:border-[#47b2e4] rounded-[50px] transition-[0.5s] m-[10px] border-[2px] border-solid border-white"
          >
            Call To Action
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(CTA, "cto");
