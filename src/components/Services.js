import React from "react";
import ServiceItem from "./ServiceItem";
import uiSvg from "../assets/svgs/ui-ux.svg";
import appDevSvg from "../assets/svgs/app-development.svg";
import webDesign from "../assets/svgs/web-design.svg";
import fullStack from "../assets/svgs/full-stack.svg";

export default function Services() {
  return (
    <div className="about-me-services-section about-section">
      <ServiceItem svg={uiSvg} title="UI/UX Design" />
      <ServiceItem svg={appDevSvg} title="App Development" />
      <ServiceItem svg={webDesign} title="Web Design" />
      <ServiceItem svg={fullStack} title="Full Stack Development" />
    </div>
  );
}
