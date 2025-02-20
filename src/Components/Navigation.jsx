import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, ChevronsLeft, Menu, X } from "lucide-react";
import { useLocation, useMatch, useNavigate } from 'react-router';

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const matchProduct = useMatch("/SCL/Products/prod/:prod");

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const goToAboutUs = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const goToProductsPortfolio = () => scrollToSection('products-portfolio');
  const goToExperience = () => scrollToSection('experience');
  const goToService = () => scrollToSection('scl-services');
  const back = () => navigate(-1);
  const backToBanner = () => navigate('/');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <div className='sticky top-0 z-10 flex justify-between p-3 drop-shadow-xl bg-gradient-to-l from-SCLBlue via-lightgreen to-SCLYellow font-tomorrow rounded-b-2xl'>
      <div className='flex flex-1 items-center'>
        <img src="../src/assets/Icons/SCL_Logo.jpg" alt="Logo" onClick={backToBanner} className='h-11 rounded-2xl hover:cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95 transition-transform duration-300'/>
        <h1 className='ml-2 font-semibold text-white'>DURA COMPUTER SERVICES</h1>
      </div>
      
      {location.pathname === '/SCL' ? (
        <div className='hidden md:flex flex-1 justify-end items-center'>
          <div className='relative' ref={dropdownRef} onMouseEnter={() => setIsDropdownOpen(true)}>
            <button className='mr-10 p-3 flex items-center gap-2 text-white font-semibold hover:text-SCLLightBlue hover:scale-110 transition-transform duration-150 ease-in-out active:scale-95'>
              About Us {isDropdownOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {isDropdownOpen && (
              <div className='absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg' onMouseLeave={() => setIsDropdownOpen(false)}>
                <ul className='py-2 text-Font'>
                  <li className='px-4 py-2 hover:rounded-xl hover:bg-gray-100 cursor-pointer hover:scale-105 transition duration-150 ease-in-out active:scale-95' 
                      onClick={goToAboutUs}>
                    Our Story
                  </li>
                  <li className='px-4 py-2 hover:rounded-xl hover:bg-gray-100 cursor-pointer hover:scale-105 transition duration-150 ease-in-out active:scale-95'
                      onClick={goToService}>
                    Services
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button className='mr-10 p-3 text-white font-semibold hover:text-SCLLightBlue hover:scale-110 transition duration-150 ease-in-out active:scale-95' onClick={goToProductsPortfolio}>Product Portfolio</button>
          <button className='mr-10 p-3 text-white font-semibold hover:text-SCLLightBlue hover:scale-110 transition duration-150 ease-in-out active:scale-95' onClick={goToExperience}>Experiences</button>
        </div>
      ) : location.pathname === "/SCL/Products" || matchProduct ? (
        <div className='flex items-center'>
          <button onClick={back} className='text-white font-semibold hover:text-SCLLightBlue hover:scale-125 transition duration-150 ease-in-out active:scale-95'>
            <ChevronsLeft className='size-10'/>
          </button>
          <h1 className='font-semibold mr-10 p-3 text-white'>Products</h1>
        </div>
      ) : (
        <div className='flex items-center'>
          <button onClick={back} className='text-white font-semibold hover:text-SCLLightBlue hover:scale-125 transition duration-150 ease-in-out active:scale-95'>
            <ChevronsLeft className='size-10'/>
          </button>
          <h1 className='font-semibold mr-10 p-3 text-white'>Experiences</h1>
        </div>
      )}
      
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMobileMenu} className='text-white'>
          {isMobileMenuOpen ? <X className="w-8 h-8 transition-transform duration-300 mr-10" /> : <Menu className="w-8 h-8 transition-transform duration-300 mr-10" />}
        </button>
      </div>
      
      <div className={`absolute top-16 right-0 rounded-md bg-white mr-6 shadow-lg p-4 flex flex-col space-y-4 md:hidden transition-transform duration-300 ${isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <button className='text-Font font-semibold hover:text-SCLLightBlue hover:scale-110 transition duration-150 ease-in-out active:scale-95' onClick={goToAboutUs}>About Us</button>
        <button className='text-Font font-semibold hover:text-SCLLightBlue hover:scale-110 transition duration-150 ease-in-out active:scale-95' onClick={goToService}>Services</button>
        <button className='text-Font font-semibold hover:text-SCLLightBlue hover:scale-110 transition duration-150 ease-in-out active:scale-95' onClick={goToProductsPortfolio}>Product Portfolio</button>
        <button className='text-Font font-semibold hover:text-SCLLightBlue hover:scale-110 transition duration-150 ease-in-out active:scale-95' onClick={goToExperience}>Experiences</button>
      </div>
    </div>
  );
}
