import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import headerimg from '../assets/images/Podpeek-logo.png';

const activeStyles = {
  fontWeight: 'bold',
  color: '#e60000'
};

const Header = () => {
  return (
    <header className="bg-white text-sm text-[#e60000]">
      <div className="flex items-start pt-4 pr-16">
        <Link to="/">
          <img src={headerimg} alt="podpeek logo image" className="w-[85px] h-[85px]" />
        </Link>
        <div className="pt-3 ml-7 flex-1">
          <div className="py-1">
            <nav className="flex space-x-10">
              <Link to="/">About</Link>
              <Link to="/">Contact</Link>
            </nav>
          </div>
          <hr className="w-full h-[1.5px] bg-red-600" />
          <div className="py-1">
            <nav>
              <Link to="/">Subscribe to our newsletter</Link>
            </nav>
          </div>
        </div>
      </div>
      {/* secondary navigation */}
      <div className="flex justify-between items-baseline -mt-[10px] pr-16">
        <nav className="flex space-x-10 pl-[85px] ml-7 pb-4 font-bold">
          <Link to="/">All Podcasts</Link>
          <Link to="/favourites">Favourites</Link>
          <Link to="/search">Search</Link>
        </nav>
        <button className="bg-red-600 text-white px-3 py-1 rounded-lg">
          <Link to="/login">Log-out</Link>
        </button>
      </div>
      <div className="pl-[85px] ml-7 pr-16">
        <hr className="w-full h-0.5 bg-red-600" />
      </div>
    </header>
  );
};

export default Header;
