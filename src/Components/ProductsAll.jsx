import { Search } from 'lucide-react'
import React from 'react'
import { allProducts } from '../assets/Products/products'

export default function ProductsAll() {
    const items = allProducts
  return (
    <div>
        <div className='flex justify-end mt-5 mr-5 pr-10'>
            <input type="text" className='border p-2 border-black border-r-0 rounded-l-md' placeholder='Search'/>
            <button className='border border-black border-l-0 rounded-r-md px-3'><Search /></button>
        </div>
        <div className='grid grid-cols-3 border border-black mt-5 mx-10 rounded-lg'>
            {
                items.map((Prod, e)=> 
                <div className='flex flex-col items-center p-5' key={e}>
                    <img src="" alt="picture" className='size-60 border border-black'/>
                    <h1 className='text-center font-tomorrow font-semibold'>{Prod.projectTitle}</h1>
                </div>
                )
            }
        </div>
    </div>
    
  )
}
