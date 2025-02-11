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
      className="fixed bottom-0 w-1/2 flex p-4 border-t border-gray-200 shadow-2xl rounded-t-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 font-tomorrow"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className='text-lg font-semibold text-SCLBlue'>Contact Us</button>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-0 left-0 w-1/2 shadow-2xl rounded-t-2xl p-6 border-t border-black bg-gradient-to-r from-emerald-400 to-cyan-400"
        >
          <div className="flex justify-between items-center">
            <div className='flex flex-col'>
                <h2 className="text-lg font-semibold text-SCLBlue">Contact Us</h2>
                <span className='border-b border-SCLBlue border-1 '></span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <CircleX className="w-6 h-6 text-SCLBlue" />
            </button>
          </div>
          <div className='flex justify-center'>
            {Contacts.map((contact, index) => (
              <p key={index} className="flex mt-4 text-SCLBlue mr-10 "><div className='flex flex-col'>{contact}<span className='border-b border-SCLBlue border-1 '></span></div></p>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
