import React from "react";
import BannerImg from "../../assets/FAQ 1.png";
import "./accordion.css";

function Accordion() {
  return (
    <div className="faq">
      <img className="faq__img" src={BannerImg} alt={BannerImg} />
      <h2 className="faq__title">FAQ</h2>
    </div>
  );
}

export default Accordion;
