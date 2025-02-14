import React, { useRef } from 'react'
import { useNavigate } from 'react-router'
import{ CircleEllipsis, ChevronRightCircleIcon } from "lucide-react";
import { allExperience } from '../assets/Experience/exp';


export default function Experience() {
    
    const navigate = useNavigate()
    const scrollRef = useRef(null);

    const uniqueExperience = [];
    const titles = new Set();

    for (const exp of allExperience) {
        if (!titles.has(exp.projectTitle)) {
            titles.add(exp.projectTitle);
            uniqueExperience.push(exp);
        }
        if (uniqueExperience.length === 5) break;
    }


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
    <div className='flex flex-col mx-20 mt-10 m-5 rounded-xl shadow-xl items-end bg-gradient-to-b from-blue-200 to-white bg-PaperBlack' id='experience'>
        <div className='flex w-full justify-start p-5 font-tomorrow flex-col'>
            <h1 className='font-semibold text-4xl font-tomorrow text-Font m-5 mb-2'>Experiences/Projects</h1>
            <span className='border-b w-40 border-2 border-SCLBlue ml-5'></span>
        </div>
        <div className='flex border border-black border-r-0 bg-gradient-to-b from-blue-200 to-white shadow-xl m-5 mr-0 mt-1 rounded-tl-3xl p-5 w-11/12'
        >  
            {
                uniqueExperience.map((con, i) =>  
                <div key={i} className='flex flex-1 flex-col items-center'>
                    <img src={con.icon} alt="Project" className='w-40 h-40 object-cover border border-black shadow-lg m-5 rounded-md hover:scale-110 transition duration-150 ease-in-out'/>
                    <h3 className='font-semibold text-center w-40'>{con.projectTitle}</h3>
                </div>)
                
            }
            <button className='flex mb-16 justify-center items-center self-center' onClick={goToExp}>
                <div>
                    <ChevronRightCircleIcon className='size-12 text-black hover:scale-105 transition duration-300 ease-in-out hover:text-SCLBlue'/>
                </div>
            </button>
        </div>
    </div>
  )
}
