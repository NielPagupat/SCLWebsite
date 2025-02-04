import React from 'react'
import { useNavigate } from 'react-router'


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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
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
