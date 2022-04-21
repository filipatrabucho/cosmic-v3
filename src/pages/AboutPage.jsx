import React from "react";
import About from "../component/about/about";
import icon from "../assets/about_icon.png";
import Routemap from "../component/routemap/routemap";
import aboutimg from "../assets/aboutus_banner.png";
import mobileBanner from "../assets/vertical_banner.png";
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
      <img
        className="about__mobilebanner"
        src={mobileBanner}
        alt="About Vertical Banner"
      />
      <Routemap routes={routes} />
      <div className="about">
        <h2 className="about__title">Everywhere Team</h2>
        <div className="about__line"></div>
        <h3 className="about__subtitle">Who we are?</h3>

        <p className="about__text">
          _Everywhere Team has been developing and innovating within the
          cryptocurrency and blockchain world since early 2021. We are a
          passionate team with highly skilled individuals that saw the potential
          and added value of being early birds in this massive game changer.
        </p>
        <p className="about__text">
          This is more than a 9 to 5 job for us.. We really care about what we
          do and put a lot of time into making sure everything we touch shines.
          This is what puts the bread on the table, pays our rents, makes us
          happy and excited to wake up everyday!
        </p>
        <div className="about__container">
          <About
            img={icon}
            name={"TOM"}
            dep={"Cosmic Pioneer"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"OSCAR"}
            dep={"Cosmic Dev"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"TRABS"}
            dep={"Cosmic Dev"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"SÉRGIO"}
            dep={"Cosmic Dev"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"FELIPE"}
            dep={"Cosmic Game Dev"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"BROTHERHOOD"}
            dep={"Cosmic Game Dev"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"SÉRGIO"}
            dep={"Cosmic Designer"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"FRANCISCO"}
            dep={"Cosmic Designer"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"DUKKHART"}
            dep={"Cosmic Composer"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"JONATHAN"}
            dep={"Cosmic 3D Artist"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"KENNEDY"}
            dep={"Cosmic 3D Artist"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"SHAWN"}
            dep={"Cosmic 3D Artist"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"YSAK"}
            dep={"Cosmic Illustrator"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"ELLIE"}
            dep={"Cosmic Illustrator"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"DÉBORA"}
            dep={"Cosmic Support"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"STEVEN"}
            dep={"Cosmic Advisor"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"JOSH"}
            dep={"Cosmic Advisor"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"JOSÉ"}
            dep={"Cosmic Advisor"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"RENATO"}
            dep={"Cosmic Advisor"}
            text={"Lorem ipsum dolor sit amet,consectetur adipiscing elit."}
            linkedin={"linkedin.com"}
            behance={"linkedin.com"}
            www={"linkedin.com"}
          />
          <About
            img={icon}
            name={"MOOTZ"}
            dep={"Cosmic Advisor"}
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
