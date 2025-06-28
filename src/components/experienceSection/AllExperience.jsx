import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { div } from "motion/react-client";

const experiences = [
  {
    job: "Front-End Developer",
    company: "MotionCut",
    date: "Apr 2024 - May 2024",
    responsibilites: [
      "Designed and optimized front-end components for e-commerce apps.",
      "Focused on security-oriented UI features to enhance user safety.",
      "Improved responsiveness and UI accessibility across devices.",
    ],
  },
  {
    job: "Web Developer",
    company: "Bharat Intern",
    date: "May 2024 - Jun 2024",
    responsibilites: [
      "Built a secure login system using PHP and MySQL.",
      "Implemented encrypted credential handling for user safety",
      "Developed role-based access control for internal tools.",
    ],
  },
  {
    job: "Transcriptor & Quality Analyst",
    company: "Solvitude",
    date: "Dec 2024 - Jan 2025",
    responsibilites: [
      "Transcribed cybersecurity datasets for ML applications.",
      "Ensured accuracy and structure of large-scale datasets.",
      "Developed role-based access control for internal tools.",
    ],
  },
];
const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />;
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRight className="text-6xl text-champagnegold lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;
