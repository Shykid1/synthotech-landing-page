import React from "react";
import { SectionWrapper } from "../hoc";
import { team, socials } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Fati } from "../assets";

const Team = () => {
  return (
    <section className="services section-bg">
      <motion.div variants={textVariant()}>
        <div className="section-title">
          <h2>Team</h2>
          <p className="pd-[24px] text-[16px] text-[#444444]">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
      </motion.div>

      <div className="  justify-center">
        <ul
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center"
        >
          {team.map((team, index) => (
            <li key={team.name} className="">
              <div className="flex items-center gap-x-6">
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
                      className="bg-white rounded-[20px] py-5 px-12 sm:min-h-[450px] flex justify-evenly items-center flex-col"
                    >
                      <img
                        className="h-[100%] w-[100%] rounded-full"
                        src={team.icon}
                        alt=""
                      />
                      <div>
                        <h3 className="text-2xl font-semibold leading-7 tracking-tight text-gray-900">
                          {team.name}
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">
                          {team.role}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        {socials.map((social, index) => (
                          <div
                            key={social.name}
                            className="border-none rounded-full bg-[#f3f5fa]"
                          >
                            <a href={social.url}>
                              <img src={social.icon} alt="" className="p-1" />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionWrapper(Team, "team");
