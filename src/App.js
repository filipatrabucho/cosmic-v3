import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/navbar/navbar";
import Banner from "./component/banner/banner";
import Routemap from "./component/routemap/routemap";
<<<<<<< HEAD
import logo from "./assets/COSMIC-EXODUS-FINAL 2.png";
import content from "./assets/256 256 1.svg";
import profilePic from "./assets/THANK WITHOU BG 1.svg";
import Footer from './component/footer/footer';
=======
import Footer from "./component/footer/footer";
import GraphicsPage from "./pages/GraphicsPage";
import ContentPage from "./pages/ContentPage";
import ProfilePage from "./pages/ProfilePage";
import HiringPage from "./pages/HiringPage";
>>>>>>> 364167a58d36a35c6f8a70cd7e8571b62d172a7a

function App() {
  return (
    <div className="main">
      <Router>
        <NavBar />
        <Banner />
        <Routemap />
        <Routes>
          <Route path="/cosmicgraphicspack" element={<GraphicsPage />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/profiles" element={<ProfilePage />} />
          <Route path="/hiring" element={<HiringPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;