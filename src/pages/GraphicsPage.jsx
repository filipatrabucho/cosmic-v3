import React from "react";
import logo from "../assets/LogoCosmic-Exodus 1.svg";
import content from "../assets/256 256 1.svg";
import profilePic from "../assets/THANK WITHOU BG 1.svg";
import Graphics from "../component/graphics/graphics";
import Banner from "../component/banner/banner";
import Routemap from "../component/routemap/routemap";

function GraphicsPage() {
  const routes = [
    {
      name: "Cosmic Graphics Pack",
      href: "/cosmicgraphicspack",
    },
  ];
  return (
    <>
      <Banner />
      <Routemap routes={routes} />
      <div>
        <h2 className="graphics__title">Cosmic Graphics Pack</h2>
        <Graphics
          title={"Logos"}
          img={logo}
          button={"download"}
          text={
            "Our logo is our most recognizeable asset. That's why we're so protective of it. Take a moment to think about how you apply it and take a read of our Brand Guidelines for examples of how we like to use it."
          }
        />
        <Graphics
          title={"Content"}
          img={content}
          button={"view"}
          text={
            "This pack includes banners for social media(facebook, instagram, twitter, etc), backgrounds and other useful asserts."
          }
        />
        <Graphics
          title={"Profile Pictures"}
          img={profilePic}
          button={"view"}
          text={
            "Are you excited about Cosmic Exodus?Let’s share the hype with our friends by using a Cosmic picture in our profiles online. When sharing our linktree in your bio and using one of these pictures you are making sure our brand is noticed by other members in the space."
          }
        />
      </div>
    </>
  );
}

export default GraphicsPage;
