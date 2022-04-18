import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import GraphicsPage from "./pages/GraphicsPage";
import ContentPage from "./pages/ContentPage";
import ProfilePage from "./pages/ProfilePage";
import HiringPage from "./pages/HiringPage";
import PrivacyPage from "./pages/PrivacyPage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import ContactusPage from "./pages/ContactusPage";
import "./App.css";

function App() {
  return (
    <div className="main">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/cosmicgraphicspack" element={<GraphicsPage />} />

          <Route path="/content" element={<ContentPage />} />
          <Route path="/profiles" element={<ProfilePage />} />
          <Route path="/hiring" element={<HiringPage />} />
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
