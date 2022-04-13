import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GraphicsPage from './component/graphicspage/graphics';
import NavBar from './component/navbar/navbar';
import './App.css';

function App() {
  return (
    <div className="main">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/cosmicgraphicspack" element={<GraphicsPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
