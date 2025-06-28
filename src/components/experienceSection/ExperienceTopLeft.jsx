import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-champagnegold font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1" text="Year" />
        <p className="font-bold text-6xl text-lightbrown">-</p>
        <ExperienceInfo number="5" text="Websites" />
      </div>
      <p className="text-center text-cream">
        Building efficient systems and practical solutions where Java, full
        stack development, and next-gen technologies converge.
      </p>
      <ExperienceInfo number="DSA" text="Focused" />
    </div>
  );
};

export default ExperienceTopLeft;
