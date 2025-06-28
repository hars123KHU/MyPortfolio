import React from "react";
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h2 className="text-champagnegold text-3xl mb-4">Get In Touch</h2>
        <p className="text-cream ">
          Feel Free To Reach Out If You'd Like To Collaborate,
          <br /> You Are Just A Few Clicks Away!{" "}
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
