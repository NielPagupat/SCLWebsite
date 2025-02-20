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
import { trainings } from '../assets/Experience/training';
export default function Test() {
  const training = trainings
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <img src={training[0].Images[0]}/>
    </div>
  )
}
