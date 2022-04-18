import React from "react";
import About from "../component/about/about";
import icon from "../assets/about_icon.png";
import Routemap from "../component/routemap/routemap";
import aboutimg from "../assets/aboutus_banner.png";
import "../../src/component/about/about.css";
function AboutPage() {
  const routes = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/aboutus",
    },
  ];
  return (
    <>
      <img className="about__banner" alt="About Banner" src={aboutimg} />
      <Routemap routes={routes} />
      <div className="about">
        <h2 className="about__title">Everywhere Team</h2>
        <div className="about__line"></div>
        <h3 className="about__subtitle">Who we are?</h3>

        <p>
          _Everywhere Team has been developing and innovating within the
          cryptocurrency and blockchain world since early 2021. We are a
          passionate team with highly skilled individuals that saw the potential
          and added value of being early birds in this massive game changer.
        </p>
        <p>
          This is more than a 9 to 5 job for us.. We really care about what we
          do and put a lot of time into making sure everything we touch shines.
          This is what puts the bread on the table, pays our rents, makes us
          happy and excited to wake up everyday!
        </p>
        <div className="about__container">
          <About
            img={icon}
            name={"STEVEN"}
            dep={"Designer"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"STEVEN"}
            dep={"Designer"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"STEVEN"}
            dep={"Designer"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"STEVEN"}
            dep={"Designer"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"STEVEN"}
            dep={"Designer"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"STEVEN"}
            dep={"Designer"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"STEVEN"}
            dep={"Designer"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"STEVEN"}
            dep={"Designer"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"STEVEN"}
            dep={"Designer"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"STEVEN"}
            dep={"Designer"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"STEVEN"}
            dep={"Designer"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"STEVEN"}
            dep={"Designer"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
