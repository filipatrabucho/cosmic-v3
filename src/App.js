import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/navbar/navbar";
import Banner from "./component/banner/banner";
import Routemap from "./component/routemap/routemap";
import Footer from "./component/footer/footer";
import GraphicsPage from "./pages/GraphicsPage";

function App() {
  return (
    <div className="main">
      <Router>
        <NavBar />
        <Banner />
        <Routemap />
        <Routes>
          <Route path="/cosmicgraphicspack" element={<GraphicsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
