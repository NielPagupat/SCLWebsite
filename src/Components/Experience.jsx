import React, { useRef } from 'react'
import { useNavigate } from 'react-router'

export default function Experience() {
    const content = [1,2,3,4,5,6,7]
    const navigate = useNavigate()
    const scrollRef = useRef(null);

    const goToExp = () => {
        enablePageScroll()
        navigate('/SCL/Experience')
    }

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
    <div className='flex flex-col mt-10 items-end bg-PaperBlack m-5 mr-0 rounded-xl shadow-xl' id='experience'>
        <div className='flex w-full justify-start p-5'>
            <h1 className='font-semibold text-4xl'>Experience</h1>
        </div>
        <div className='flex border border-black bg-PaperBlack shadow-xl m-5 ml-16 mr-0 rounded-tl-3xl p-5 w-11/12 overflow-x-scroll items-center'
             ref={scrollRef}
             onWheel={handleScroll} // Horizontal scroll
             onMouseEnter={disablePageScroll} // Stop page scrolling
             onMouseLeave={enablePageScroll} // Re-enable page scrolling
        >  
            {
                content.map((con) => 
                <div key={con} className='flex flex-col items-center'>
                    <img src="" alt="Project" className='size-48 border border-black rounded-lg m-5 shadow-xl'/>
                    <h3 className='font-semibold'>Project Name</h3>
                </div>)
                
            }
            <button className='mr-5 h-24 size-16' onClick={goToExp}>
                <h1 className='w-28 underline text-blue-600'>see more...</h1>
            </button>
        </div>
    </div>
  )
}
