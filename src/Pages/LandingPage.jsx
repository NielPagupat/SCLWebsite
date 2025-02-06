import React from 'react'
import { useNavigate } from 'react-router'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function LandingPage() {
    const navigate = useNavigate()

    const goToMain = () => {
        navigate("/SCL")
    }
  return (
    <div className='min-h-screen flex flex-1 flex-col'>
        <div className='static'>
            <div className='w-1/3 h-14 clip-trapezoid bg-gradient-to-br from-blue-800 to-cyan-100' />
        </div>
        <div className='flex flex-1 justify-center items-center'>
            <div className='flex flex-col items-center border border-black rounded-xl p-5 shadow-xl'>
                <div className='flex items-center'>
                    <img src="" alt="logo" className='size-28 border'/>
                    <span className='ml-8 text-4xl font-semibold    '>Dura Computer Services</span>
                </div>
                <span className='text-xl'>
                    Software & Hardware Solutions
                </span>
                <span className='mt-5'>
                    <button className='flex p-2 border border-black rounded-xl' onClick={goToMain}>
                        About Us
                        <ChevronRight />
                    </button> 
                </span>
            </div>
        </div>
        <div className='flex justify-end'>
            <div className='w-1/3 h-14 clip-trapezoid-reverse bg-gradient-to-tl from-blue-800 to-cyan-100'/>
        </div>
    </div>
  )
}
