import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { allProducts } from '../assets/Products/products';

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
        <div className="flex flex-col m-5 mt-10 mr-0 rounded-xl shadow-xl items-end bg-PaperBlack" id="products-portfolio">
            <div className="flex w-full justify-start p-5">
                <h1 className="font-semibold text-4xl">Product Portfolio</h1>
            </div>
            <div
                ref={scrollRef}
                className="flex items-center border border-black bg-PaperBlack shadow-xl m-5 ml-16 mr-0 rounded-tl-3xl p-5 w-11/12 overflow-x-scroll"
                onWheel={handleScroll} // Horizontal scroll
                onMouseEnter={disablePageScroll} // Stop page scrolling
                onMouseLeave={enablePageScroll} // Re-enable page scrolling
            >
                {content.map((con, i) => (
                    <div key={i} className="flex flex-col items-center size-80 mx-5">
                        <img src="" alt="Product" className="size-48 border border-black shadow-lg m-5 rounded-md" />
                        <h3 className="font-semibold text-center">{con.projectTitle}</h3>
                    </div>
                ))}
                <button className="mr-5 h-24 size-16" onClick={goToProdAll}>
                    <h1 className="w-28 underline text-blue-600">see more...</h1>
                </button>
            </div>
        </div>
    );
}
