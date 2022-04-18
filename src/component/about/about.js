import React from "react";
import "./about.css";
import about_icon from "../../assets/about_icon.png";
import linkedin_icon from "../../assets/linkedin_icon.png";
import behance_icon from "../../assets/behance_icon.png";
import www_icon from "../../assets/www_icon.png";

function About({ name, dep, text, linkedin, behance, www }) {
  return (
    <>
      <div className="about__flex">
        <img src={about_icon} alt="logo" className="about__logo" />
        <div className="about__wrapper">
          <h3 className="about__name">{name}</h3>
          <p className="about__departement">{dep}</p>
          <p className="about__description">{text}</p>
        </div>
        <a href={linkedin} className="about__link">
          <img
            src={linkedin_icon}
            className="about__social"
            alt="linkedin icon"
          />
        </a>
        <a href={behance} className="about__link">
          <img
            src={behance_icon}
            className="about__social"
            alt="behance icon"
          />
        </a>
        <a href={www} className="about__link">
          <img src={www_icon} className="about__social" alt="Www icon" />
        </a>
      </div>
    </>
  );
}

export default About;
