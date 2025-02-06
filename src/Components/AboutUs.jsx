import React from 'react'
import { aboutUs } from '../assets/Text/text'


export default function AboutUs() {
    const services = [1, 2, 3, 4]
  return (
    <div>
        <div className='flex'>
            <div className='p-5'>
                <img src="" alt="Logo" className='size-96 border '/>                
            </div>
            <div className='p-5'>
                <h1 className='text-4xl font-semibold'>About Us</h1>
                <p className='mt-5'>{aboutUs}</p>
            </div>
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-semibold'>Services Offered</h1>
            <div className='grid grid-cols-4 justify-center'>
                {
                    services.map((val) => 
                        <div key={val} className='flex flex-col items-center m-2'>
                            <img src="" alt="service" className='size-80 border' />
                            <p className='font-semibold '>Service Name</p>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}
