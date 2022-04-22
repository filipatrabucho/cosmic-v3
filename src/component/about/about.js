import React from "react";
import { team } from "../utils/team";
import about_icon from "../../assets/about_icon.png";
import linkedin_icon from "../../assets/linkedin_icon.png";
import behance_icon from "../../assets/behance_icon.png";
import www_icon from "../../assets/www_icon.png";
import "./about.css";

function About() {
  return (
    <>
      <div className="about__grid">
        {team.map((team) => {
          const { name, department, info, linkedin, behance, www } = team;
          return (
            <div className="about__flex">
              <img src={about_icon} alt="logo" className="about__logo" />
              <div className="about__wrapper">
                <h3 className="about__name">{name}</h3>
                <p className="about__departement">{department}</p>
                <p className="about__description">{info}</p>
              </div>
              <div className="about__icons">
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
                  <img
                    src={www_icon}
                    className="about__social"
                    alt="Www icon"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default About;
