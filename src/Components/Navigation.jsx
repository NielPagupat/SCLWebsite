import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronUp } from "lucide-react";
import { useLocation, useNavigate } from 'react-router';

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const goToAboutUs = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  const goToProductsPortfolio = () => {
    const element = document.getElementById('products-portfolio');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  }

  const goToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  }

  const goToTeam = () => {
    const element = document.getElementById('the-team');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  }

  const back = () => {
    navigate(-1)
  }

  const backToBanner = () => {
    navigate('/')
  }

  return (
    <div className='sticky top-0 flex min-w-screen justify-between p-3 drop-shadow-xl bg-SCLBlue'>
      <div className='flex-1'>
        <img src="" alt="Logo" onClick={backToBanner} className='border size-14'/>
      </div>
      {location.pathname === '/SCL'?
        <div className='flex flex-1 justify-end items-center'>
          <div 
            className='relative' 
            ref={dropdownRef} 
            onMouseEnter={() => setIsDropdownOpen(true)} 
          >
            <button 
              className='mr-10 p-3 flex items-center gap-2 text-white font-semibold' 
            >
              About Us {isDropdownOpen?<ChevronUp className="w-4 h-4" />:<ChevronDown className="w-4 h-4" />}
              
            </button>
            {isDropdownOpen && (
              <div className='absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg' onMouseLeave={()=>setIsDropdownOpen(false)}>
                <ul className='py-2 text-gray-700'>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={goToAboutUs}>Our Story</li>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={goToTeam}>Team</li>
                </ul>
              </div>
            )}
          </div>
          <button className='mr-10 p-3 text-white font-semibold' onClick={goToProductsPortfolio}>Product Portfolio</button>
          <button className='mr-10 p-3 text-white font-semibold' onClick={goToExperience}>Experiences</button>
        </div> : 
        location.pathname === "/SCL/Products"?
          <div className='flex items-center'>
            <button onClick={back} className='text-white font-semibold'><ChevronLeft/></button>
            <h1 className='font-semibold mr-10 p-3 text-white'>Products</h1>
          </div>:
          <div className='flex items-center'>
            <button onClick={back} className='text-white font-semibold'><ChevronLeft/></button>
            <h1 className='font-semibold mr-10 p-3 text-white'>Experiences</h1>
          </div>
      }
      
    </div>
  );
}
