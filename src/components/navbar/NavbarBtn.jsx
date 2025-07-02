import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
const NavbarBtn = () => {
  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold text-deepnavy border-rosequartz border flex items-center gap1 bg-gradient-to-r from-white to-rosequartz hover:border-rosequartz hover:scale-110 transition-all duration-500 hover:shadow-rosequartzShadow" onClick={handleClick}>
      Hire Me
      <div className=" sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
