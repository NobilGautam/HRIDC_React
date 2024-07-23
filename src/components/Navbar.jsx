import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

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
              <img className="h-[80px] w-[80px]" src="https://www.hridc.co.in/img/footer-logo.png" alt="Logo" />
            </a>
          </div>
          <div className="hidden md:flex md:space-x-8 md:items-center">
            <a href="/" className="text-gray-800 hover:text-gray-600 text-[1rem] font-semibold font-poppins">Home</a>
            <div className="relative">
              <button 
                className={`text-gray-800 font-poppins flex flow-row items-center hover:text-gray-600 focus:outline-none text-[1rem] font-semibold ${isDropdownOpen ? 'bg-blue-200 p-2 rounded-md' : ''}`} 
                onClick={toggleDropdown}
              >
                About Us
                <RiArrowDropDownLine className='text-[2rem]' />
              </button>
              {isDropdownOpen && (
                <div className="z-20 rounded-md absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                  <a href="/alpha" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b-2">Overview</a>
                  <a href="/beta" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b-2">Organization Structure</a>
                  <a href="/beta" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b-2">Our Values</a>
                  <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b-2">Our Policies</a>
                  <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b-2">Board of Directors</a>
                  <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b-2">Reports</a>
                </div>
              )}
            </div>
            <Link to='/land-acquisition' className='text-gray-800 hover:text-gray-600 text-[1rem] font-semibold font-poppins'>Land Acquisition</Link>
            <Link to="/board-of-directors" className="text-gray-800 hover:text-gray-600 text-[1rem] font-semibold font-poppins">Board of Directors</Link>
            <Link to="/tender" className="text-gray-800 hover:text-gray-600 text-[1rem] font-semibold font-poppins">Tenders</Link>
            <Link to="/careers" className="text-gray-800 hover:text-gray-600 text-[1rem] font-semibold font-poppins">Careers</Link>
            <Link to="/news" className="text-gray-800 hover:text-gray-600 text-[1rem] font-semibold font-poppins">News</Link>
            <Link to="/contact" className="text-gray-800 hover:text-gray-600 text-[1rem] font-semibold font-poppins">Contact Us</Link>
          </div>
          <div className="flex items-center">
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
