import React from "react";

const SubSkills = () => {
  return (
    <div className="border-y-4 border-softviolet">
      <div className="relative w-full h-[50px]">
        {/* Background Image */}
        <img
          src="/images/subSkills.jpg"
          alt="Sub Skills Image"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-softviolet to-rosequartz opacity-50 z-10"></div>
      </div>
    </div>
  );
};

export default SubSkills;
