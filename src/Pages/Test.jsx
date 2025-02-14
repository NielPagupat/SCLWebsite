import React from 'react'
import { allProducts } from '../assets/Products/products'
import {
  ChevronLeft,
  ChevronRight,
  MessageCircleMore,
  Code,
  Network,
  Cpu,
  Database,
  Smartphone,
  Monitor,
  Cctv,
  MessageSquareMore,
} from "lucide-react";
export default function Test() {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
    <div className="flex my-5">
  {[
    { Icon: Code, text: "Code" },
    { Icon: Monitor, text: "Monitor" },
    { Icon: Network, text: "Network" },
    { Icon: Cpu, text: "CPU" },
    { Icon: Cctv, text: "CCTV" },
  ].map(({ Icon, text }, index) => (
    <div key={index} className="relative group mx-5">
      {/* Tooltip */}
      <span className="absolute bottom-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                       transition-opacity bg-gray-800 text-white text-xs rounded-lg px-2 py-1">
        {text}
      </span>

      {/* Icon with Bounce Effect */}
      <Icon
        className="size-10 text-SCLBlue animate-bounce group-hover:animate-none transition"
        style={{ animationDelay: `${index * 100}ms` }}
      />
    </div>
  ))}
</div>
    
    </div>
  )
}
