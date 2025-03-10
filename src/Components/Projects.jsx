import React, { useState, useEffect } from 'react';
import { allExperience } from '../assets/Experience/exp';

export default function Projects() {
    const exp = [...allExperience].sort((a, b) => (a.Year ? 1 : -1));
  return (
    <div className='flex flex-wrap justify-around bg-PaperBlack m-2 rounded-xl'>
        {exp.map((exp, i) => (
            <div
                className='flex flex-col m-5 p-5 border border-black rounded-lg w-96 items-center bg-gradient-to-t from-blue-300 to-lime-400 shadow-xl hover:shadow-SCLYellow hover:shadow-2xl hover:scale-105 transition duration-150 ease-in-out'
                key={i}
            >
                <div>
                    <img src={exp.icon} alt="image" className='size-60 border border-black rounded-xl shadow-xl' />
                </div>
                <div className='flex flex-1 flex-col mt-5 bg-white rounded-lg p-5 border border-black shadow-xl'>
                    <span className='flex'>
                        <h1 className='w-24 text-2xl font-semibold text-end mr-2'>Project: </h1>
                        <p className='flex-1 text-2xl'>{exp.projectTitle}</p>
                    </span>
                    <span className='flex'>
                        <h2 className='w-24 text-xl font-semibold text-end mr-2'>For: </h2>
                        <p className='flex-1 text-xl'>{exp.company}</p>
                    </span>
                    <span className='flex'>
                        <h3 className='w-24 text-lg font-semibold text-end mr-2'>Year: </h3>
                        <p className='flex-1 text-lg'>{exp.Year}</p>
                    </span>
                    <span className='flex'>
                        <h4 className='w-24 text-base font-semibold text-end mr-2'>Location: </h4>
                        <p className='flex-1 text-base'>{exp.address}</p>
                    </span>
                </div>
                {/* <button
                    className="mt-4 p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
                    onClick={()=>handleVisibility(exp)}
                >
                    View More
                </button> */}
            </div>
        ))}
    </div>
  )
}
