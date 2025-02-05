import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='sticky top-0 flex min-w-screen justify-between p-3 border-b border-black drop-shadow-2xl bg-white'>
      <div className='flex-1'>
        <img src="" alt="Logo" />
      </div>
      <div className='flex flex-1 justify-end items-center'>
        <div 
          className='relative' 
          ref={dropdownRef} 
          onMouseEnter={() => setIsDropdownOpen(true)} 
        >
          <button 
            className='mr-10 p-3 flex items-center gap-2' 
          >
            About Us <ChevronDown className="w-4 h-4" />
          </button>
          {isDropdownOpen && (
            <div className='absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg' onMouseLeave={()=>setIsDropdownOpen(false)}>
              <ul className='py-2 text-gray-700'>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Our Story</li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Team</li>
              </ul>
            </div>
          )}
        </div>
        <button className='mr-10 p-3'>Product Portfolio</button>
        <button className='mr-10 p-3'>Experiences</button>
      </div>
    </div>
  );
}
