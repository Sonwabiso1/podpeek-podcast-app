import React, { useContext } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Podcast from './pages/Podcast';
import Header from './components/Header';
import Footer from './components/Footer';
import Favourites from './components/Favourites';
import PodcastList from './components/PodcastList';
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
        path="/favourites"
        element={
          <Layout>
            <Favourites />
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
    </Routes>
  );
};

export default AppRoutes;
