import React, { useState, useEffect } from "react";
import Typed from "typed.js";
import "../assets/style/landing.css";
import Social from "./Social";

export default function Landing() {
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingEffect = new Typed(".typedText", {
      strings: ["Designer", "Youtuber", "Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
      cursorChar: "|",
      onStart: () => setIsTyping(true),
      onComplete: () => setIsTyping(false),
    });

    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <div id="home" className="landing">
      <div className={`hover ${isTyping ? "cursor" : ""}`}></div>
      <div className="content">
        <div className="featured-text">
          <div className="featured-text-card">
            <span>Abdelrahman Hassan</span>
          </div>
          <div className="featured-name">
            <p>
              I'm <span className="typedText"></span>
            </p>
          </div>
          <div className="featured-text-info">
            <p>
              Experienced frontend developer with a passion for creating
              visually stunning and user-friendly websites.
            </p>
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
}
