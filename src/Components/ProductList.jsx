import React from 'react'
import { useNavigate } from 'react-router';
import { allProducts } from '../assets/Products/products';

export default function ProductList() {
    const items = allProducts
    const navigate = useNavigate();
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5 mx-10 rounded-lg'>
      {
        items.map((Prod, e) => 
          <div className='flex flex-col items-center p-5 m-5 border border-black rounded-lg shadow-lg bg-gradient-to-t from-blue-300 to-lime-400 hover:scale-110 hover:shadow-2xl transition duration-150 ease-in-out'
               key={e} >
            <img src={Prod.icon} alt="picture" 
                 className='w-24 h-24 border border-black rounded-full hover:cursor-pointer hover:shadow-xl'
                 onClick={() => navigate(`/SCL/Products/prod/${e}`)}/>
            <h1 className='text-center font-tomorrow font-semibold mt-5 text-Font hover:text-SCLBlue hover:cursor-pointer'
                onClick={() => navigate(`/SCL/Products/prod/${e}`)}
            >
              {Prod.projectTitle}
            </h1>
          </div>
        )
      }
    </div>
  )
}
