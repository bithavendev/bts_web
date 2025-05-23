import React from 'react';
import JsonData from "../data/data.json";
import bsLogo from "../img/bts_logo.png";

const Navigation = ({ mobileMenuOpen, toggleMobileMenu, scrollToSection }) => {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                src={bsLogo}
                width="60"
                height="60"
                className="d-inline-block align-center"
                alt=""
              />
              <span className="ml-2 text-xl font-bold">{JsonData.orgNm ? JsonData.orgNm : "Loading"} <span className="gradient-text">Solutions</span></span>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <button onClick={() => scrollToSection('#home')} className="nav-link px-3 py-2 text-sm font-medium">Home</button>
            <button onClick={() => scrollToSection('#services')} className="nav-link px-3 py-2 text-sm font-medium">Services</button>
            <button onClick={() => scrollToSection('#about')} className="nav-link px-3 py-2 text-sm font-medium">About</button>
            <button onClick={() => scrollToSection('#portfolio')} className="nav-link px-3 py-2 text-sm font-medium">Portfolio</button>
            <button onClick={() => scrollToSection('#contact')} className="nav-link px-3 py-2 text-sm font-medium">Contact</button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button onClick={() => scrollToSection('#home')} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 w-full text-left">Home</button>
          <button onClick={() => scrollToSection('#services')} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 w-full text-left">Services</button>
          <button onClick={() => scrollToSection('#about')} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 w-full text-left">About</button>
          <button onClick={() => scrollToSection('#portfolio')} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 w-full text-left">Portfolio</button>
          <button onClick={() => scrollToSection('#contact')} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 w-full text-left">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;