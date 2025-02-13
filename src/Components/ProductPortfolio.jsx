import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { allProducts } from '../assets/Products/products';
import { ChevronRightCircleIcon } from 'lucide-react';

export default function ProductPortfolio() {
    const content = allProducts.slice(0, 5);
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const goToProdAll = () => {
        enablePageScroll();
        navigate('/SCL/Products');
    };

    const handleScroll = (e) => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += e.deltaY;
            e.preventDefault(); // Stop vertical scrolling while inside the div
        }
    };

    const disablePageScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    const enablePageScroll = () => {
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="flex flex-col mt-10 m-5 rounded-xl shadow-xl items-end border border-amber-400 bg-gradient-to-b from-emerald-700 to-lime-400" id="products-portfolio">
            <div className="flex w-full justify-start p-5 font-tomorrow flex-col">
                <h1 className="font-semibold text-4xl text-Font mb-2">Product Portfolio</h1>
                <span className='border-b w-40 border-2 border-SCLBlue'></span>
            </div>
            <div    
                className="flex border border-black border-r-0 bg-gradient-to-b from-emerald-700 to-lime-400 shadow-xl m-5 mr-0 mt-1 rounded-tl-3xl p-5 w-11/12"
            >
           
                {content.map((con, i) => (
                    <div key={i} className="flex flex-col items-center mx-5">
                        <img src={con.icon} alt="Product" className="w-40 h-40 object-cover border border-black shadow-lg m-5 rounded-md hover:scale-110 transition duration-150 ease-in-out active:scale-95" />
                        <h3 className="font-semibold text-center">{con.projectTitle}</h3>
                    </div>

                ))}
                <button className='flex mb-16 justify-center items-center self-center' onClick={goToProdAll}>
                    <div>
                        <ChevronRightCircleIcon className='size-12 text-black hover:scale-105 transition duration-300 ease-in-out hover:text-SCLBlue'/>
                    </div>
                </button>
               
            </div>
        </div>
    );
}