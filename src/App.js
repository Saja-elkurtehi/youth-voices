import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import StoriesPage from './pages/StoriesPage/StoriesPage';
import ConnectPage from './pages/ConnectPage/ConnectPage';
import LearnActPage from './pages/LearnActPage/LearnActPage';
import './App.css';
import VirtualCampaignBuilder from './pages/VirtualCampaignBuilder/VirtualCampaignBuilder';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="triangle-container"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/learnact" element={<LearnActPage />} />
        <Route path="/campaign" element={<VirtualCampaignBuilder />} />

      </Routes>
    </Router>
  );
}

export default App;
