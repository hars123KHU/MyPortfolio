import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className=" flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg: text-2xl sm:xl uppercase text-champagnegold"
      >
        JAVA / Web Devloper
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm: text-4xl font-bold font-special  text-rosequartz"
      >
        HARSHITA KUSHWAHA
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-cream"
      >
        Skill Meets Style -- Java, DSA And The Web In a While.
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="w-full flex md:justify-start justify-center mt-6"
      >
        <a
          href="../../resume/Harshita_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-rosequartz rounded-full py-2 px-4 text-lg flex items-center justify-center hover:bg-champagnegold transition-all duration-500 cursor-pointer text-cream hover:text-deepnavy"
        >
          View Resume
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;
