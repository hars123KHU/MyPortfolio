import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import SingleInfo from "./SingleInfo";
const ContactInfo = () => {
  return (
    <div className=" flex flex-col gap-4 text-cream">
      <SingleInfo text="harshitakushwaha@gmail.com" Image={MdOutlineMail} />
      <SingleInfo text="+91 7081088326" Image={LuPhone} />
      <SingleInfo text="Varanasi, India" Image={MdOutlineLocationOn} />
    </div>
  );
};

export default ContactInfo;
