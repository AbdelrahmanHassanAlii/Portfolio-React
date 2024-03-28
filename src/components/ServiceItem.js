import React from "react";
import "../assets/style/service-item.css";

export default function ServiceItem({ svg, title }) {
  return (
    <div className="service-item">
      {<img src={svg} alt={title} />}
      <p>{title}</p>
    </div>
  );
}
