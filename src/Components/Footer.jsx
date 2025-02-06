import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion";
import { X } from "lucide-react";



export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
    className="fixed bottom-0 w-full flex p-4 border-t border-gray-200 shadow-2xl bg-gradient-to-t from-sky-400 to-lime-100"
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
  >
    <button className='text-lg font-semibold'>Contact Us</button>
    {isOpen && (
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-0 left-0 w-full bg-cyan-500 shadow-2xl rounded-t-2xl p-6 border-t border-black"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <p className="mt-4 text-gray-600">Contact Info Here</p>
      </motion.div>
    )}
  </div>
  )
}
