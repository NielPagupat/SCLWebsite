import React from 'react'

export default function ProductPortfolio() {

    const content = [1,2,3,4,5,6,7,8]
  return (
    <div className='flex flex-col mt-10 items-end'>
        <div className='flex w-screen justify-start p-5'>
            <h1 className='font-semibold text-4xl'>Product Portfolio</h1>
        </div>
        <div className='flex border m-5 ml-16 mr-0 rounded-tl-3xl p-5 w-11/12 overflow-x-scroll items-center'>  
            {
                content.map((con) => 
                <div key={con} className='flex flex-col items-center'>
                    <img src="" alt="Product" className='size-48 border m-5'/>
                    <h3 className='font-semibold'>Product Name</h3>
                </div>)
                
            }
            <button className='mr-5 h-24 size-16'><h1 className='w-28 underline text-blue-600'>see more...</h1></button>
        </div>
    </div>
  )
}
