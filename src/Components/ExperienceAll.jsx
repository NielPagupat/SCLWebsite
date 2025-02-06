import React from 'react'
import { aboutUs } from '../assets/Text/text'

export default function ExperienceAll() {
    const exp = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <div>
        {
            exp.map((e)=>
            <div className='flex m-5 p-5 border border-black rounded-lg'>
                <div>
                    <img src="" alt="image" className='size-80 border border-black' />
                </div>
                <div className='ml-10'>
                    <h1 className='text-2xl font-semibold'>Title</h1>
                    <p>{aboutUs}</p>
                </div>
            </div>
            )
        }
    </div>
  )
}
