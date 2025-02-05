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
        <div>
            Design
        </div>
        <div className='flex flex-1 justify-center items-center '>
            <div className='flex flex-col items-center border border-black rounded-xl p-5'>
                <div className='flex'>
                    <img src="" alt="logo" />
                    <span>Dura Computer Services</span>
                </div>
                <span className=''>
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
        <div>
            Design
        </div>
    </div>
  )
}
