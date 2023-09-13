import React from "react";
import "./css/Presentation.css";

export default function Presentation() {
  return (
    <div className="presentation">
      <div className="presentation--left">
        <div className="presentation--left--greet">Hello</div>
        <div className="presentation--intro">
          <div className="presentation--intro--title">
            <span>My name is Taratra,</span> Developer Junior based in
            Madagascar
          </div>
          <div className="presentation--intro--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            hic consequuntur quidem, a corporis sit molestias, doloribus
            inventore est quo
          </div>
        </div>
        <div className="presentation--left--hire">Hire me</div>
        <div className="presentation--left--experience"></div>
      </div>
      <div className="presentation--right"></div>
    </div>
  );
}
