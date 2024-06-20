import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Podcast from './pages/Podcast';
import Header from './components/Header';
import Footer from './components/Footer';
import Favourites from './components/Favourites';

const AppRoutes = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/podcast/:id" element={<Podcast />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
};

export default AppRoutes
