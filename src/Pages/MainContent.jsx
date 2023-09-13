import React from "react";
import Header from "./Component/Header";
import Presentation from "./Component/Presentation";
import Services from "./Component/Services";
import Experience from "./Component/Experience";

export default function MainContent() {
  return (
    <div className="main">
      <div className="main--header">
        <Header />
      </div>
      <div className="main--presentation">
        <Presentation />
      </div>
      <div className="main--services">
        <Services />
      </div>
      <div className="main--experience">
        <Experience />
      </div>
    </div>
  );
}
