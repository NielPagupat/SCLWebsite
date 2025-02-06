import React from 'react'

export default function TheTeam() {
    const team = [1,2,3,4]
  return (
    <div className='flex flex-col items-center mt-10'>
        <div>
            <h1 className='text-4xl font-semibold'>THE SCL TEAM</h1>
        </div>
        <div className='grid grid-cols-2'>
            {
                team.map((emp) => 
                <div className='flex flex-col m-5 items-center' key={emp}>
                    <img src="" alt="Picture" className='size-72 border border-black'/>
                    <h1 className='font-semibold'>Name</h1>
                    <p>Position</p>
                </div>
                )
            }
        </div>
    </div>
  )
}
