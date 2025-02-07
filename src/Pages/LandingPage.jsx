import React from 'react'
import { useNavigate } from 'react-router'
import { ChevronLeft, ChevronRight,MessageCircleMore } from 'lucide-react'

export default function LandingPage() {
    const navigate = useNavigate()

    const goToMain = () => {
        navigate("/SCL")
    }
const goToFacebook = () => {
    window.location.href = "https://www.facebook.com/profile.php?id=100057210141024";
}

return (
    <div className='min-h-screen flex flex-1 flex-col'>
            <div className='static'>
                    <div className='w-1/3 h-14 clip-trapezoid bg-gradient-to-br from-blue-800 to-cyan-100' />
            </div>
            <div className='flex flex-1 justify-start items-start p-4'>
                    <div className='flex flex-col items-center border border-black rounded-xl p-2 shadow-xl'>
                            <div className='flex items-center justify-start'>
                                    <span className='text-4xl font-semibold'>Dura Computer Services</span>
                            </div>
                            <span className='text-xl'>
                                    Software & Hardware Solutions
                            </span>
                            <div className='flex flex-row items-center justify-center mt-5 gap-3'>   
                                    <span className='mt-5'>
                                            <button className='flex p-2 border border-black rounded-xl' onClick={goToFacebook}>
                                                    Message
                                                    <MessageCircleMore />
                                            </button> 
                                    </span>
                                    <span className='mt-5'>
                                            <button className='flex p-2 border border-black rounded-xl' onClick={goToMain}>
                                                    About Us
                                                    <ChevronRight />
                                            </button> 
                                    </span>
                            </div>     
                    </div>
            </div>
            <div className='flex justify-end'>
                    <div className='w-1/3 h-14 clip-trapezoid-reverse bg-gradient-to-tl from-blue-800 to-cyan-100'/>
            </div>
    </div>
)
}
