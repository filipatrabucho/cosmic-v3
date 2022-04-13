import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GraphicsPage from "./component/graphicspage/graphics";
import NavBar from "./component/navbar/navbar";
import Banner from "./component/banner/banner";
import Routemap from "./component/routemap/routemap";
import logo from "./assets/LogoCosmic-Exodus 1.svg";
import content from "./assets/256 256 1.svg";
import profilePic from "./assets/THANK WITHOU BG 1.svg";

function App() {
  return (
    <div className="main">
      <Router>
        <NavBar />
        <Banner />
        <Routemap />
        <GraphicsPage
          title={"Logos"}
          img={logo}
          button={"download"}
          text={
            "Our logo is our most recognizeable asset. That's why we're so protective of it. Take a moment to think about how you apply it and take a read of our Brand Guidelines for examples of how we like to use it."
          }
        />
        <GraphicsPage
          title={"Content"}
          img={content}
          button={"view"}
          text={
            "This pack includes banners for social media(facebook, instagram, twitter, etc), backgrounds and other useful asserts."
          }
        />
        <GraphicsPage
          title={"Profile Pictures"}
          img={profilePic}
          button={"view"}
          text={
            "Are you excited about Cosmic Exodus?Let’s share the hype with our friends by using a Cosmic picture in our profiles online. When sharing our linktree in your bio and using one of these pictures you are making sure our brand is noticed by other members in the space."
          }
        />
        <Routes>
          <Route path="/cosmicgraphicspack" element={<GraphicsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
