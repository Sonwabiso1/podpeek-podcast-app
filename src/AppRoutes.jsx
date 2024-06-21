import React, { useContext, useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Podcast from './pages/Podcast';
import Header from './components/Header';
import Footer from './components/Footer';
import Favorites from './pages/Favorites';
import PodcastList from './components/PodcastList';
import Search from './pages/Search';
import { AuthContext } from './context/AuthContext';

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoginPage && isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {!isLoginPage && <Header />}
      <main className="flex-grow">{children}</main>
      {!isLoginPage && <Footer />}
    </div>
  );
};

const AppRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch('https://podcast-api.netlify.app/shows');
      const data = await response.json();
      setShows(data);
    };

    fetchShows();
  }, []);

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/favorites"
        element={
          <Layout>
            <Favorites />
          </Layout>
        }
      />
      <Route
        path="/podcast/:id"
        element={
          <Layout>
            <Podcast />
          </Layout>
        }
      />
      <Route
        path="/podcasts"
        element={
          <Layout>
            <PodcastList />
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <Search shows={shows} />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
