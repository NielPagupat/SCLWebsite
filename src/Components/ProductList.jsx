import React from 'react'
import { useNavigate } from 'react-router';
import { allProducts } from '../assets/Products/products';

export default function ProductList() {
    const items = allProducts
    const navigate = useNavigate();
  return (
    <div className='grid grid-cols-3 mt-5 mx-10 rounded-lg' >
            {
                items.map((Prod, e)=> 
                <div className='flex flex-col items-center p-5 m-5 border border-black rounded-lg shadow-lg bg-PaperBlack'
                     key={e} >
                    <img src={Prod.icon} alt="picture" className='size-60 border border-black rounded-full'/>
                    <h1 className='text-center font-tomorrow font-semibold mt-5 hover:text-SCLBlue hover:cursor-pointer'
                        onClick={()=>navigate(`/SCL/Products/prod/${e}`)}
                    >
                        {Prod.projectTitle}</h1>
                </div>
                )
            }
    </div>
  )
}
