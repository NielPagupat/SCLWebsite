import React from 'react'
import { aboutUs } from '../assets/Text/text'


export default function AboutUs() {
    const services = ['SOFTWARE DEVELOPMENT AND PROGRAMMING',
                      'HARWARE AND ICT EQUIPMENT',
                      'STRUCTURED CABLING AND SURVILLANCE',
                      'SERVICES REPAIR AND MAINTAINANCE',
                      'ICT CONSULTANCY AND COLLABORATION']
  return (
    <div id='about-us'>
        <div className='flex bg-'>
            <div className='p-5'>
                <img src="" alt="Logo" className='size-96 border border-black shadow-xl'/>                
            </div>
            <div className='p-5 bg-PaperBlack m-5 rounded-lg shadow-xl'>
                <h1 className='text-4xl font-semibold'>About Us</h1>
                <p className='mt-5'>{aboutUs}</p>
            </div>
        </div>
        <div className='bg-PaperBlack m-5 rounded-xl shadow-xl'>
            <div className='flex '>
                <div className='flex flex-1 p-5 justify-center '>
                    <h1 className='text-xl font-semibold font-tomorrow'>Mission</h1>
                </div>
                <div className='flex flex-1 p-5 justify-center'>
                    <h1 className='text-xl font-semibold font-tomorrow'>Vision</h1>
                </div>
            </div>
            <div className='flex justify-center'>
                <h1 className='text-xl font-semibold font-tomorrow'>Values</h1>
            </div>
        </div>   
        <div className='flex flex-col items-center mt-10 pt-5 pb-5 bg-PaperBlack m-5 rounded-xl shadow-xl'>
            <h1 className='text-4xl font-semibold mb-10'>Services Offered</h1>
            <div className='grid grid-cols-3 justify-center'>
                {
                    services.map((val, index) => 
                        <div key={val} className={`flex flex-col items-center m-2`}>
                            <img src="" alt="service" className='size-80 border border-black rounded-md shadow-xl' />
                            <p className='font-semibold '>{val}</p>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}
