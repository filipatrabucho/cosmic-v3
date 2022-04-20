import React from "react";
import HirinngBanner from "../assets/hiring_banner.png";
import Hiring from "../component/hiring/hiring";
import "../component/hiring/hiring.css";

function HiringPage() {
  return (
    <>
      <img src={HirinngBanner} alt="Hiring Banner" className="hiring__banner" />
      <div className="hiring__verticalbanner"></div>
      <h2>We are hiring</h2>
      <div className="hiring__line"></div>
      <h3 className="hiring__subtitle">Open Positions</h3>
      <Hiring />
    </>
  );
}

export default HiringPage;
