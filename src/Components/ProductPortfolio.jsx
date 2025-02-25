import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { allProducts } from '../assets/Products/products';
import { ChevronRightCircleIcon, NotebookText } from 'lucide-react';

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
        <div className="flex flex-col mx-4 md:mx-20 mt-10 m-5 rounded-xl shadow-xl items-end bg-gradient-to-b from-blue-200 to-white bg-PaperBlack" id="products-portfolio">
            <div className="flex w-max self-start justify-start p-5 font-tomorrow flex-col ">
                <div className='flex flex-row w-max gap-2 items-center mt-4'>
                    <NotebookText className='size-8 m-0 text-Font' />
                    <h1 className='font-semibold text-2xl md:text-4xl font-tomorrow text-Font m-5 mr-0 mb-2 mt-0 ml-0'>Product Portfolio</h1>
                </div> 
                <span className='border-b w-full border-2 ml-5 border-SCLBlue'></span>
            </div>
            <div className='flex border border-black border-r-0 bg-gradient-to-b from-blue-200 to-white shadow-xl m-5 mr-0 mt-1 mb-14 rounded-tl-3xl p-5 w-full md:w-11/12 overflow-x-auto' ref={scrollRef} onWheel={handleScroll}> 
           
                {content.map((con, i) => (
                    <div key={i} className="flex flex-1 flex-col items-center min-w-[150px] md:min-w-[200px] ">
                        <img src={con.icon} alt="Product" className="w-20 h-20 md:w-40 md:h-40 object-cover border border-black shadow-lg m-5 rounded-md hover:scale-110 transition duration-150 ease-in-out" />
                        <h3 className="font-semibold text-center w-20 md:w-40">{con.projectTitle}</h3>
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