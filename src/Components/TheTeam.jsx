import React from 'react'

export default function TheTeam() {
    const team = [1,2,3,4]
  return (
    <div className='flex flex-col items-center mt-10 bg-PaperBlack m-5 rounded-xl shadow-xl pt-5 pb-5' id='the-team'>
        <div>
            <h1 className='text-4xl font-semibold'>THE SCL TEAM</h1>
        </div>
        <div className='grid grid-cols-2'>
            {
                team.map((emp) => 
                <div className='flex flex-col m-5 items-center' key={emp}>
                    <img src="" alt="Picture" className='size-72 border border-black rounded-lg shadow-lg'/>
                    <h1 className='font-semibold'>Name</h1>
                    <p>Position</p>
                </div>
                )
            }
        </div>
    </div>
  )
}
