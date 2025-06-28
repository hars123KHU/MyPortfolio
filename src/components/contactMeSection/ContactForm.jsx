import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_r5v8dhg", "template_dgdwy8s", form.current, {
        publicKey: "8RPPpFNBLfcjvCXro",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <p className="text-rosequartz">{success}</p>
      <form
        className="flex flex-col gap-4 text-cream"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightbrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email "
          required
          className="h-12 rounded-lg bg-lightbrown px-2"
          value={email}
          onChange={handleEmail}
        />

        <textarea
          name="message"
          type="text"
          placeholder="Message"
          rows="9"
          cols="50"
          required
          className=" rounded-lg bg-lightbrown p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border-softviolet text-cream h-12 font-bold text-xl hover:bg-champagnegold bg-softviolet transition-all duration-500"
        >
          {" "}
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
