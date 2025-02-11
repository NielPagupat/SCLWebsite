import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { allProducts } from '../assets/Products/products';
import { ChevronRightCircleIcon } from 'lucide-react';

export default function ProductPortfolio() {
    const content = allProducts;
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const goToProdAll = () => {
        enablePageScroll()
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
        <div className="flex flex-col m-5 mt-10 mr-0 rounded-xl shadow-xl items-end border border-amber-400 bg-PaperBlack" id="products-portfolio">
            <div className="flex w-full justify-start p-5 font-tomorrow flex-col">
                <h1 className="font-semibold text-4xl text-Font mb-2">Product Portfolio</h1>
                <span className='border-b w-40 border-2 border-SCLBlue'></span>
            </div>
            <div
                ref={scrollRef}
                className="flex items-center border border-black bg-PaperBlack shadow-xl m-5 mr-0 mt-1 rounded-tl-3xl p-5 w-11/12 overflow-x-scroll"
                onWheel={handleScroll} // Horizontal scroll
                onMouseEnter={disablePageScroll} // Stop page scrolling
                onMouseLeave={enablePageScroll} // Re-enable page scrolling
            >
           
                {content.map((con, i) => (
                   
                    <div key={i} className="flex flex-col items-center size-80 mx-5 font-tomorrow">
                        <img src="" alt="Product" className="size-48 border border-black shadow-lg m-5 rounded-md" />
                        <h3 className="font-semibold text-center text-Font">{con.projectTitle}</h3>
                    </div>

                ))}
                <button className=' flex h-24 mb-16 justify-center items-center' onClick={goToProdAll}>
                    <span>
                        <ChevronRightCircleIcon className='size-12 text-black transition duration-300 ease-in-out transform hover:scale-110'/>
                    </span>
                </button>
               
            </div>
        </div>
    );
}
