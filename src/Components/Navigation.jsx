import React from 'react'

export default function Navigation() {
  return (
    <div className='flex min-w-screen justify-between p-3 border-b border-black drop-shadow-2xl'>
        <div className='flex-1'>
            <img src="" alt="Logo" />
        </div>
        <div className='flex flex-1 justify-end'>
            <button className='mr-10 p-3'>About Us</button>
            <button className='mr-10 p-3'>Product Portfolio</button>
            <button className='mr-10 p-3'>Experiences</button>
        </div>
    </div>
  )
}

