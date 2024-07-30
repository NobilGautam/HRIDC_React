import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import newLogo from '../assets/RevisedHRIDC Brand Guidlines.png';

const Navbar = () => {
  const [isAboutDropDownOpen, setIsAboutDropDownOpen] = useState(false);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleAboutUsDropdown = () => {
    setIsAboutDropDownOpen(!isAboutDropDownOpen);
  };

  const toggleMediaDropdown = () => {
    setIsMediaDropdownOpen(!isMediaDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-fit p-2">
          <div className="flex-shrink-0 my-4">
            <a href="/" className="flex items-center">
              {/* <img className="h-20 w-20" src="https://www.hridc.co.in/img/footer-logo.png" alt="Logo" /> */}
              <img className='w-[11rem]' src={newLogo} alt="" />
            </a>
          </div>
          <div className="hidden lg:flex lg:space-x-8 lg:items-center">
            <a href="/" className="text-gray-800 hover:text-gray-600 text-base font-semibold font-poppins">Home</a>
            
            <div className="relative" onMouseEnter={() => setIsAboutDropDownOpen(true)} onMouseLeave={() => setIsAboutDropDownOpen(false)}>
              <button 
                className={`text-gray-800 font-poppins flex flow-row items-center hover:text-gray-600 focus:outline-none text-base font-semibold border-transparent border-2 p-2 ${isAboutDropDownOpen ? 'bg-blue-200 rounded-md border-blue-200' : ''}`} 
                // onClick={toggleAboutUsDropdown}
              >
                About Us
                <RiArrowDropDownLine className='text-2xl' />
              </button>
              {isAboutDropDownOpen && (
                <div className='absolute top-11 right-0'>
                  <div className="z-20 rounded-md absolute right-0 w-48 bg-white border border-gray-200 shadow-lg">
                    <a href="/alpha" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Overview</a>
                    <a href="/beta" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Organization Structure</a>
                    <a href="/beta" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Our Values</a>
                    <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Our Policies</a>
                    <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Reports</a>
                  </div>
                </div>
              )}
            </div>
            <Link to='/land-acquisition' className='text-gray-800 hover:text-gray-600 text-base font-semibold font-poppins'>Land Acquisition</Link>
            <Link to="/board-of-directors" className="text-gray-800 hover:text-gray-600 text-base font-semibold font-poppins">Board of Directors</Link>
            <Link to="/tender" className="text-gray-800 hover:text-gray-600 text-base font-semibold font-poppins">Tenders</Link>
            
            <Link to="/careers" className="text-gray-800 hover:text-gray-600 text-base font-semibold font-poppins">Careers</Link>
            <div className="relative" onMouseEnter={() => setIsMediaDropdownOpen(true)} onMouseLeave={() => setIsMediaDropdownOpen(false)}>
              <button 
                className={`text-gray-800 font-poppins flex flow-row items-center hover:text-gray-600 focus:outline-none text-base font-semibold border-transparent border-2 p-2 ${isMediaDropdownOpen ? 'bg-blue-200 rounded-md border-blue-200' : ''}`} 
                // onClick={toggleMediaDropdown}
              >
                Media
                <RiArrowDropDownLine className='text-2xl' />
              </button>
              {isMediaDropdownOpen && (
                <div className='absolute top-11 right-0'>
                  <div className="z-20 rounded-md absolute right-0 w-48 bg-white border border-gray-200 shadow-lg">
                    <Link to='/news' className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Photo Gallery</Link>
                    <Link to="/videogallery" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Video Gallery</Link>
                    <Link to="/pressrelease" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Press Release</Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/contact" className="text-base font-semibold font-poppins bg-[#224e9d] hover:bg-[#75a1d2] py-2 px-6 rounded-md text-white duration-200">Contact Us</Link>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {isMenuOpen ? <RiCloseLine className="text-3xl" /> : <RiMenu3Line className="text-3xl" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Home</a>
          <div className="relative">
            <button 
              className={`block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 ${isAboutDropDownOpen ? 'bg-blue-200' : ''}`} 
              onClick={toggleAboutUsDropdown}
            >
              About Us
              <RiArrowDropDownLine className='inline-block text-xl' />
            </button>
            {isAboutDropDownOpen && (
              <div className="z-20 rounded-md absolute left-0 mt-2 w-full bg-white border border-gray-200 shadow-lg">
                <a href="/alpha" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Overview</a>
                <a href="/beta" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Organization Structure</a>
                <a href="/beta" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Our Values</a>
                <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Our Policies</a>
                <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Reports</a>
              </div>
            )}
          </div>
          <Link to='/land-acquisition' className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Land Acquisition</Link>
          <Link to="/board-of-directors" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Board of Directors</Link>
          <Link to="/tender" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Tenders</Link>
          <Link to="/careers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Careers</Link>
          <div className="relative">
            <button 
              className={`block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 ${isMediaDropdownOpen ? 'bg-blue-200' : ''}`} 
              onClick={toggleMediaDropdown}
            >
              Media
              <RiArrowDropDownLine className='inline-block text-xl' />
            </button>
            {isMediaDropdownOpen && (
              <div className="z-20 rounded-md absolute left-0 mt-2 w-full bg-white border border-gray-200 shadow-lg">
                <Link to='/news' className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Photo Gallery</Link>
                <Link to="/videogallery" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Video Gallery</Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
