import React from 'react';

const Nav = () => {
  return (
    <nav className="fixed text-white top-8 bg-gray-500 left-8 right-8 z-50 flex items-center justify-between bg-opacity-50 bg-blur-md backdrop-filter backdrop-blur-md py-4 px-6 rounded-lg shadow-lg">
      <div className="flex items-center">
        {/* Logo or brand */}
        <h1 className="text-xl font-bold text-yellow-300">AIERA</h1>
      </div>
      
      
        <div className="">
          <ul className="flex space-x-4">
        {/* Navbar links */}
        <li>
          <a href="#" className="text-white">SERVIC</a>
        </li>
        <li>
          <a href="#" className="text-white">ABOUT</a>
        </li>
        <li>
          <a href="#" className="text-white">About</a>
        </li>
        <li>
           <a href="#" className="text-xl font-bold neon">Contact</a>
        </li>
      </ul>
         
        </div>
      
    </nav>
  );
};

export default Nav;