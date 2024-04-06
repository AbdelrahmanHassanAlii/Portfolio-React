import React, { useState } from "react";
import "../assets/style/contact.css";
import { FaTelegramPlane } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const messageText = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phoneNumber = "+201220575026"; // Add country code and phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      messageText
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="contact-section narrow-container" id="contact">
      <SectionHeader
        title="Get in touch"
        subtitle="Do you have a project in your mind, contact me here"
      />
      <div class="contact-container">
        <div class="contact-info">
          <h2>
            Find Me
            <PiArrowBendRightDownBold className="contact-icon" />
          </h2>
          <p>
            <MdOutlineEmail className="email-icon" fontSize={"20px"} /> Email:
            eng.abdulrahman.hassan@gmail.com
          </p>
          <p>
            <FaPhone className="phone-icon" fontSize={"20px"} /> Phone:
            +201220575026
          </p>
        </div>
        <div class="form-control">
          <div class="form-inputs">
            <input
              type="text"
              class="input-field"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              class="input-field"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="text-area">
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div class="form-button">
            <button class="btn" onClick={handleSendMessage}>
              <span class="btn-text">Send</span>
              <FaTelegramPlane className="btn-icon" fontSize={"18px"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
