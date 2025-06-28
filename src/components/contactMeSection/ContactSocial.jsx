import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/feed/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/hars123KHU"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/iharshita_326/"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
