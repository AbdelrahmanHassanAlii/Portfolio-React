import React, { useState } from "react";
import "../assets/style/contact.css";
import { FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const messageText = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phoneNumber = "+201228388210"; // Add country code and phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      messageText
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="contact-section narrow-container" id="contact">
      <div class="top-header">
        <h1>Get in touch</h1>
        {/* <span>Do you have a project in your mind, contact me here</span> */}
      </div>
      <div class="contact-container">
        <div class="contact-info">
          <h2>
            Find Me <i class="uil uil-corner-right-down"></i>
          </h2>
          <p>
            <i class="uil uil-envelope"></i> Email: john@doe.com
          </p>
          <p>
            <i class="uil uil-phone"></i> +91 70822 00001
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
