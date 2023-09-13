import React from "react";
import "./css/Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header--left">
        <div className="header--left--initial">T</div>
        <div className="header--left--name">Taratra</div>
      </div>
      <div className="header--middle">
        <ul className="header--middle">
          <li className="header--middle--item">Home</li>
          <li className="header--middle--item">Service</li>
          <li className="header--middle--item">Resume</li>
          <li className="header--middle--item">Project</li>
        </ul>
      </div>
      <div className="header--right">
        <div className="header--right--contact">Contact me</div>
      </div>
    </div>
  );
}
