import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion";
import { Circle, CircleX } from "lucide-react";
import { Contacts } from '../assets/Contacts/contact';
import { div } from 'framer-motion/client';



export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className="fixed bottom-0 h-7 w-screen flex shadow-2xl rounded-t-2xl bg-gradient-to-r from-SCLBlue via-lightgreen to-SCLYellow"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className='text-b ml-5 p-1 h-5 font-semibold text-white'>Contact Us</button>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-0 left-0 w-screen shadow-2xl rounded-t-2xl p-6 border-t border-black bg-gradient-to-r from-SCLBlue via-lightgreen to-SCLYellow"
        >
        <div className='flex flex-row gap-5 justify-start items-center mx-0 w-full'>
          <div className="flex justify-between items-center">
            <div className='flex flex-col'>
                 <button onClick={() => setIsOpen(false)}>
                              <CircleX className="size-7 self-start mr-20" />
                            </button>
            </div>
          </div>
          <div className='flex justify-center text-black'>
            {Contacts.map((contact, index) => (
              <p key={index} className="flex mt-4 mr-10 font-semibold"><div className='flex flex-col'>{contact}<span className='border-b border-SCLBlue border-1 '></span></div></p>
            ))}
          </div>
        </div>   
        </motion.div>
      )}
    </div>
  )
}
