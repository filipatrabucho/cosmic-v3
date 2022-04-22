import React from "react";
import BannerImg from "../../assets/FAQ 1.png";
import BannerMobileImg from '../../assets/FAQ Phone Version 4.svg';
import "./accordion.css";

function Accordion() {
  return (
    <div className="faq">
      <img className="faq__img" src={BannerImg} alt={BannerImg} />
      <img className="faq__mobile" src={BannerMobileImg} alt={BannerMobileImg} />
      <h2 className="faq__title">FAQ</h2>
    </div>
  );
}

export default Accordion;
