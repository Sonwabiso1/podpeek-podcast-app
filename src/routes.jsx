import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Podcast from './pages/Podcast';
import Header from './components/Header';
import Footer from './components/Footer';
import PodcastPlayer from './components/PodcastPlayer';

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/podcast/:id" element={<Podcast />} />
      </Routes>
      <PodcastPlayer />
      <Footer />
    </Router>
  );
};

export default AppRoutes;
