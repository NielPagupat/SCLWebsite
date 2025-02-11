import React, { useRef } from 'react'
import { useNavigate } from 'react-router'
import{ CircleEllipsis, ChevronRightCircleIcon } from "lucide-react";


export default function Experience() {
    const content = [1,2,3,4,5]
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
    <div className='flex flex-col mt-10 rounded-xl shadow-xl m-5 items-end border border-amber-400 bg-PaperBlack' id='experience'>
        <div className='flex w-full justify-start p-5 flex-col'>
            <h1 className='font-semibold text-4xl font-tomorrow text-Font mb-2'>Experience</h1>
            <span className='border-b w-40 border-2 border-SCLBlue'></span>
        </div>
        <div className='flex border border-black  bg-PaperBlack shadow-xl m-5 ml-16 mr-0 rounded-tl-3xl p-5 w-11/12 items-center'
        >  
            {
                content.map((con) =>  
                <div key={con} className='flex flex-col items-center'>
                    <img src="" alt="Project" className='size-48 border border-black rounded-lg m-5 shadow-xl'/>
                    <h3 className='font-semibold font-tomorrow text-Font'>Project Name</h3>
                </div>)
                
            }
            <button className='flex mr-5 h-24 size-16 w-96 justify-center items-center ' onClick={goToExp}>
                <span>
                    <ChevronRightCircleIcon className='size-12 text-black ml-5 hover:scale-110 hover:text-SCLBlue transition duration-300 ease-in-out '/>
                </span>
            </button>
        </div>
    </div>
  )
}
