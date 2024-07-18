import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-fit p-2">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img className="h-[100px] w-[100px]" src="https://www.hridc.co.in/img/footer-logo.png" alt="Logo" />
            </a>
          </div>
          <div className="hidden md:flex md:space-x-8 md:items-center">
            <a href="/" className="text-gray-800 hover:text-gray-600 text-[1.2rem] font-semibold">Home</a>
            <div className="relative">
              <button 
                className={`text-gray-800 hover:text-gray-600 focus:outline-none text-[1.2rem] font-semibold ${isDropdownOpen ? 'bg-blue-200 p-2 rounded-md' : ''}`} 
                onClick={toggleDropdown}
              >
                About Us
              </button>
              {isDropdownOpen && (
                <div className="z-10 rounded-md absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                  <a href="/alpha" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b-2">Overview</a>
                  <a href="/beta" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b-2">Our Values</a>
                  <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b-2">Our Policies</a>
                  <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b-2">Board of Directors</a>
                  <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b-2">Reports</a>
                </div>
              )}
            </div>
            <a href="/board-of-directors" className="text-gray-800 hover:text-gray-600 text-[1.2rem] font-semibold">Board of Directors</a>
            <a href="/tenders" className="text-gray-800 hover:text-gray-600 text-[1.2rem] font-semibold">Tenders</a>
            <a href="/news" className="text-gray-800 hover:text-gray-600 text-[1.2rem] font-semibold">News</a>
          </div>
          <div className="flex items-center">
            <Link to="/contact" className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
