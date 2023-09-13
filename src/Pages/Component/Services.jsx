import React from "react";
import "./css/Services.css";

export default function Services() {
  return (
    <div className="services">
      <div className="services--up">
        <div className="services--up--title">
          My <span>Services</span>
        </div>
        <div className="services--up--description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi error
          quam quisquam et inventore placeat.
        </div>
      </div>
      <div className="services--down">
        <div className="services--card">
          <div className="card--title">
            <div className="card--title--text">App Creation</div>
            <div className="card--title--icon">p</div>
          </div>
          <div className="card--body">
            <div className="card--body--description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, enim?
            </div>
            <div className="card--body--image"></div>
          </div>
        </div>
        <div className="services--card">
          <div className="card--title">
            <div className="card--title--text">App Creation</div>
            <div className="card--title--icon">p</div>
          </div>
          <div className="card--body">
            <div className="card--body--description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, enim?
            </div>
            <div className="card--body--image"></div>
          </div>
        </div>
        <div className="services--card">
          <div className="card--title">
            <div className="card--title--text">App Creation</div>
            <div className="card--title--icon">p</div>
          </div>
          <div className="card--body">
            <div className="card--body--description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, enim?
            </div>
            <div className="card--body--image"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
