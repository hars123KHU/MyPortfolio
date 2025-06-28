import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-champagnegold border-dashed rounded-xl mt-12 p-4"
    >
      <p className="font-bold text-rosequartz">{experience.job}</p>
      <p className="text-softviolet">{experience.company}</p>
      <p className="text-lightgrey">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-cream">
        {experience.responsibilites.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
