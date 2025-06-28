import React from "react";
import { TbOval } from "react-icons/tb";
import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const Heropic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center py-5"
    >
      <img
        src="../../images/mypic1.png"
        alt="HARSHITA KUSHWAHA"
        className="max-h-[600px] w-auto"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[480px] w-auto text-rosequartz blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default Heropic;
