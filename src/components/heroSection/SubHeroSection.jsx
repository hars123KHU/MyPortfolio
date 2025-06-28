import React from "react";

const SubHeroSection = () => {
  return (
    <div className="w-full border-y border-champagnegold text-lightgrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-7 items-center gap-4 bg-brown">
      <p>Fast Learner</p>
      <p className="md:block sm:hidden">Problem Solving</p>
      <p className="md:block sm:hidden">Team Work</p>
    </div>
  );
};

export default SubHeroSection;
