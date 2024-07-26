import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";

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
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img className="h-20 w-20" src="https://www.hridc.co.in/img/footer-logo.png" alt="Logo" />
            </a>
          </div>
          <div className="hidden lg:flex lg:space-x-8 lg:items-center">
            <a href="/" className="text-gray-800 hover:text-gray-600 text-base font-semibold font-poppins">Home</a>
            <button id="aboutUsdropdownHoverButton" data-dropdown-toggle="aboutUsDropdownHover" data-dropdown-trigger="hover" class={`text-gray-800 duration-200 hover:bg-blue-200 px-4 py-2 rounded-xl z-50 font-poppins flex flow-row items-center hover:text-gray-600 focus:outline-none text-base font-semibold ${isAboutDropDownOpen ? 'bg-blue-200 p-2 rounded-md' : ''}`} type="button">About Us<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
            </button>
            <div id="aboutUsDropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="aboutUsdropdownHoverButton">
                  {/* <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                  </li> */}
                  <a href="/alpha" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Overview</a>
                  <a href="/beta" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Organization Structure</a>
                  <a href="/beta" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Our Values</a>
                  <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Our Policies</a>
                  <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Board of Directors</a>
                  <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Reports</a>
                </ul>
            </div>
            
            {/* <div className="relative">
              <button 
                className={`text-gray-800 font-poppins flex flow-row items-center hover:text-gray-600 focus:outline-none text-base font-semibold ${isAboutDropDownOpen ? 'bg-blue-200 p-2 rounded-md' : ''}`} 
                onClick={toggleAboutUsDropdown}
              >
                About Us
                <RiArrowDropDownLine className='text-2xl' />
              </button>
              {isAboutDropDownOpen && (
                <div className="z-20 rounded-md absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                  <a href="/alpha" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Overview</a>
                  <a href="/beta" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Organization Structure</a>
                  <a href="/beta" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Our Values</a>
                  <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Our Policies</a>
                  <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Board of Directors</a>
                  <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Reports</a>
                </div>
              )}
            </div> */}
            <Link to='/land-acquisition' className='text-gray-800 hover:text-gray-600 text-base font-semibold font-poppins'>Land Acquisition</Link>
            <Link to="/board-of-directors" className="text-gray-800 hover:text-gray-600 text-base font-semibold font-poppins">Board of Directors</Link>
            <Link to="/tender" className="text-gray-800 hover:text-gray-600 text-base font-semibold font-poppins">Tenders</Link>
            
            <button id="mediaDropdownHoverButton" data-dropdown-toggle="mediaDropdownHover" data-dropdown-trigger="hover" class={`text-gray-800 px-4 py-2 hover:bg-blue-200 rounded-xl duration-200 font-poppins flex flow-row items-center hover:text-gray-600 focus:outline-none text-base font-semibold ${isMediaDropdownOpen ? 'bg-blue-200 p-2 rounded-md' : ''}`} type="button">Media <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
            </button>
            <div id="mediaDropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="mediaDropdownHoverButton">
                  {/* <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                  </li> */}
                  <Link to='/news' className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Photo Gallery</Link>
                  <Link to="/videogallery" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Video Gallery</Link>
                </ul>
            </div>

            
            <Link to="/careers" className="text-gray-800 hover:text-gray-600 text-base font-semibold font-poppins">Careers</Link>
            {/* <div className="relative">
              <button 
                className={`text-gray-800 font-poppins flex flow-row items-center hover:text-gray-600 focus:outline-none text-base font-semibold ${isMediaDropdownOpen ? 'bg-blue-200 p-2 rounded-md' : ''}`} 
                onClick={toggleMediaDropdown}
              >
                Media
                <RiArrowDropDownLine className='text-2xl' />
              </button>
              {isMediaDropdownOpen && (
                <div className="z-20 rounded-md absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                  <Link to='/news' className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Photo Gallery</Link>
                  <Link to="/videogallery" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Video Gallery</Link>
                </div>
              )}
            </div> */}
            <Link to="/contact" className="text-gray-800 text-base font-semibold font-poppins bg-blue-400 py-2 px-4 rounded-xl hover:bg-blue-600 hover:text-white duration-200">Contact Us</Link>
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
                <a href="/gamma" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b">Board of Directors</a>
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
