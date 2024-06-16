import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold"><Link to="/">Podcast App</Link></h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
