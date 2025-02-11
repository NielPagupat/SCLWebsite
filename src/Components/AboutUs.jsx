import React from 'react'
import { aboutUs, Mission, Vision } from '../assets/Text/text'


export default function AboutUs() {
    const services = [
        { name: 'SOFTWARE DEVELOPMENT AND PROGRAMMING', icon: "../src/assets/Icons/Service1.webp" },
        { name: 'HARDWARE AND ICT EQUIPMENT', icon: "../src/assets/Icons/Service2.webp" },
        { name: 'STRUCTURED CABLING AND SURVEILLANCE', icon: "../src/assets/Icons/Service3.webp" },
        { name: 'SERVICES REPAIR AND MAINTENANCE', icon: "../src/assets/Icons/Service4.webp" },
        { name: 'ICT CONSULTANCY AND COLLABORATION', icon: "../src/assets/Icons/Service5.webp" }
    ]
  return (
    <div id='about-us'>
        <div className='flex'>
            <div className='p-5'>
                <img src="../src/assets/Images/SCL_Cover.jpg" alt="Logo" className='rounded-xl border border-black shadow-xl'/>                
            </div>
            <div className='flex-1 p-5 border border-amber-400 bg-PaperBlack m-5 ml-0 rounded-lg shadow-xl'>
                <h1 className='text-4xl font-semibold font-tomorrow text-Font'>About Us</h1>
                <p className='mt-5 font-tomorrow text-lg text-Font '>{aboutUs}</p>
            </div>
        </div>
        <div className='flex flex-col-reverse m-5 text-Font items-center'>
            <div className='flex flex-col flex-1 justify-center items-center mt-10 p-3 bg-PaperBlack w-4/5 rounded-xl shadow-xl'>
                <div className='flex justify-center items-center rounded-lg  size-12 w-24'>
                    <h1 className='text-2xl font-semibold font-tomorrow'>Values</h1>
                </div>
                <h3 className='text-xl font-tomorrow'>SCL Values the triple E's</h3>
                <ul className='flex font-tomorrow text-center '> 
                    <li className='m-5 font-semibold'>Easy to Buy</li>
                    <li className='m-5 font-semibold'>Efficient to Use</li>
                    <li className='m-5 font-semibold'>Excellent Support and Service</li>
                </ul>
            </div>
            <div className='flex flex-1 pb-10 justify-around'>
                <div className='flex flex-col w-2/5 p-5 items-center rounded-xl bg-PaperBlack shadow-xl'>
                   <div className='flex justify-center items-center size-12 w-28'>
                        <h1 className='text-2xl font-semibold font-tomorrow'>Mission</h1>
                    </div>
                    <p className='text-center font-tomorrow text-lg mt-5'>{Mission}</p>
                </div>
                <div className='flex flex-col w-2/5 p-5 items-center bg-PaperBlack rounded-xl shadow-xl'>
                    <div className='flex justify-center items-center size-12 w-24'>
                        <h1 className='text-2xl font-semibold font-tomorrow'>Vision</h1>
                    </div>
                    <p className='text-center font-tomorrow text-lg mt-5'>{Vision}</p>
                </div>
            </div>
        </div>   
        <div className='flex flex-col items-center mt-10 pt-5 pb-5 bg-PaperBlack border border-amber-400 m-5 rounded-xl shadow-xl text-Font font-tomorrow'>
            <h1 className='text-4xl font-semibold mb-10'>Services Offered</h1>
            <div className='flex flex-wrap justify-center'>
                {
                    services.map((val, index) => 
                        <div key={index} className={`flex flex-col items-center m-5`}>
                            <img src={val.icon} alt="service" className='size-80 border border-black rounded-md shadow-xl' />
                            <p className='font-semibold mt-2'>{val.name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}
