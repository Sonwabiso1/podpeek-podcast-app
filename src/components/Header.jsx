import React from 'react';
import { Link } from 'react-router-dom';
import headerimg from '../assets/images/Podpeek-logo.png'

const Header = () => {
  return (
    <header className="bg-white text-sm text-[#e60000]">
      <div className="w-full py-4 flex">
        <div className="px-4"><Link to="/"><img src={headerimg} alt="podpeek logo image" className="mx-1 h-30 w-28" /></Link>
      </div>
      <div className="w-full pt-3">
        <div className='py-1'>
          <nav className='flex space-x-10'>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
          </nav>
          </div>
          <hr className="w-full h-0.5 bg-red-600"/>
        <div className="py-1">
          <nav>
            <Link>Subscribe to our newsletter</Link>
          </nav>
          </div>
      </div>
        
        {/* <nav>
          <Link to="/" className="">Home</Link>
          <Link to="/login">Login</Link>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
