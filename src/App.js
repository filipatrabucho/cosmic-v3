import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/navbar/navbar";
import Banner from "./component/banner/banner";
import Routemap from "./component/routemap/routemap";
import Footer from "./component/footer/footer";
import GraphicsPage from "./pages/GraphicsPage";
import ContentPage from "./pages/ContentPage";
import ProfilePage from "./pages/ProfilePage";
import HiringPage from "./pages/HiringPage";
import "./App.css";

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
