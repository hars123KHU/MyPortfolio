import React from "react";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import SingleSkill from "./SingleSkill";
const skills = [
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },

  {
    skill: "React",
    icon: FaReact,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "NextJS",
    icon: TbBrandNextjs,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "FramerMotion",
    icon: TbBrandFramerMotion,
  },
];
const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
            className="flex flex=col items-center"
          >
            <item.icon className="text-7xl text-rosequartz" />
            <p className="text-center mt-4 text-cream">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
