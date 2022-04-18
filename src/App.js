import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import GraphicsPage from "./pages/GraphicsPage";
import PrivacyPage from "./pages/PrivacyPage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import ContactusPage from "./pages/ContactusPage";
import Footer from './component/footer/footer';
import GraphicsPage from "./pages/GraphicsPage";
import ContentPage from "./pages/ContentPage";
import ProfilePage from "./pages/ProfilePage";
import HiringPage from "./pages/HiringPage";

function App() {
  return (
    <div className="main">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/cosmicgraphicspack" element={<GraphicsPage />} />
          <Route path="/privacypage" element={<PrivacyPage />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/contactus" element={<ContactusPage />} />
          <Route path="*" element={<ErrorPage />} />
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