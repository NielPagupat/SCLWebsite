import React from 'react'
import { aboutUs, Mission, Vision } from '../assets/Text/text'


export default function AboutUs() {
    const services = ['SOFTWARE DEVELOPMENT AND PROGRAMMING',
                      'HARWARE AND ICT EQUIPMENT',
                      'STRUCTURED CABLING AND SURVILLANCE',
                      'SERVICES REPAIR AND MAINTAINANCE',
                      'ICT CONSULTANCY AND COLLABORATION']
  return (
    <div id='about-us'>
        <div className='flex'>
            <div className='p-5'>
                <img src="./src/assets/backrgounds/SCL ANIMATIONS.gif" alt="Logo" className='size-96 border border-black shadow-xl  w-screen'/>                
            </div>
            <div className='p-5 border border-amber-400 bg-PaperBlack m-5 rounded-lg shadow-xl'>
                <h1 className='text-4xl font-semibold font-tomorrow text-Font'>About Us</h1>
                <p className='mt-5 font-tomorrow text-lg text-Font'>{aboutUs}</p>
            </div>
        </div>
        <div className='bg-PaperBlack border border-amber-400 m-5 rounded-xl shadow-xl text-Font'>
            <div className='flex flex-col justify-center items-center mt-10 p-3'>
                <div className='flex justify-center items-center border border-amber-400 rounded-lg bg-SCLLightBlue size-12 w-24'>
                    <h1 className='text-2xl font-semibold font-tomorrow'>Values</h1>
                </div>
                <h3 className='text-xl font-tomorrow'>SCL Values the triple E's</h3>
                <ul className='font-tomorrow text-center'> 
                    <li className='my-5 font-semibold'>Easy to Buy</li>
                    <li className='my-5 font-semibold'>Efficient to Use</li>
                    <li className='my-5 font-semibold'>Excellent Support and Service</li>
                </ul>
            </div>
            <div className='flex '>
                <div className='flex flex-col flex-1 p-5 items-center rounded-r-xl'>
                   <div className='flex justify-center items-center border border-amber-400 rounded-lg bg-SCLLightBlue size-12 w-28'>
                    <h1 className='text-2xl font-semibold font-tomorrow'>Mission</h1>
                </div>
                    <p className='text-center w-2/3 font-tomorrow text-lg mt-5'>{Mission}</p>
                </div>
                <div className='flex flex-col flex-1 p-5 items-center'>
                <div className='flex justify-center items-center border border-amber-400 rounded-lg bg-SCLLightBlue size-12 w-24'>
                    <h1 className='text-2xl font-semibold font-tomorrow'>Vision</h1>
                </div>
                    <p className='text-center w-2/3 font-tomorrow text-lg mt-5'>{Vision}</p>
                </div>
            </div>
        </div>   
        <div className='flex flex-col items-center mt-10 pt-5 pb-5 bg-PaperBlack border border-amber-400 m-5 rounded-xl shadow-xl text-Font font-tomorrow'>
            <h1 className='text-4xl font-semibold mb-10'>Services Offered</h1>
            <div className='grid grid-cols-3 justify-center'>
                {
                    services.map((val, index) => 
                        <div key={index} className={`flex flex-col items-center m-2`}>
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
