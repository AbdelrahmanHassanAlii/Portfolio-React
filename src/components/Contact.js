import React from "react";
import "../assets/style/contact.css";
import { FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-section narrow-container" id="contact">
      <div class="top-header">
        <h1>Get in touch</h1>
        <span>Do you have a project in your mind, contact me here</span>
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
            <input type="text" class="input-field" placeholder="Name" />
            <input type="text" class="input-field" placeholder="Email" />
          </div>
          <div class="text-area">
            <textarea placeholder="Message"></textarea>
          </div>
          <div class="form-button">
            <button class="btn">
              <span class="btn-text">Send</span>
              <FaTelegramPlane className="btn-icon" fontSize={"18px"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
