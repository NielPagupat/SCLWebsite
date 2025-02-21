import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion";
import { X } from "lucide-react";



export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
    className="fixed bottom-0 w-full flex p-4 border-t border-gray-200 shadow-2xl bg-SCLBlue"
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
  >
    <button className='text-lg font-semibold text-white'>Contact Us</button>
    {isOpen && (
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-0 left-0 w-full shadow-2xl rounded-t-2xl p-6 border-t border-black bg-SCLBlue"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">Contact Us</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        <p className="mt-4 text-gray-600">Contact Info Here</p>
      </motion.div>
    )}
  </div>
  )
}
