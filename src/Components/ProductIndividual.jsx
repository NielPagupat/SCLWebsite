import React from 'react';
import { useParams } from 'react-router';
import { allProducts } from '../assets/Products/products';
import { ArrowRight, Box, CornerDownRight, Grid2x2Plus } from 'lucide-react';
import { div } from 'framer-motion/client';
import { Component, Package } from 'lucide-react';
 
export default function ProductIndividual() {
    const { prod } = useParams();
    
    // Ensure `prod` is a valid index
    const item = allProducts[prod] || null;
    if (!item) {
        return <div>Product not found</div>;
    }

    console.log(item)
    return (
        <div className='flex flex-col p-5 font-tomorrow text-Font'>
            <div className='bg-gradient-to-t from-blue-300 to-lime-400 rounded-md p-2 border border-black mb-5'>
                <div className='flex flex-col gap-2 items-center sm:items-start p-3'>
                    <h1 className='flex flex-col text-4xl font-semibold text-Font mt-5 items-center'>{item.projectTitle}<span className='border-b-2 border-Font w-full border-2 mt-2'></span></h1>   
                    
                </div>
                <p className='text-lg my-5 font-tomorrow text-Font indent-20 mb-5 p-2'>{item.projectDescription}</p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center border-black bg-gradient-to-t from-blue-300 to-lime-400 self-center gap-4 rounded-md p-5 border w-full md:w-13'>
                <Component className='hidden md:block'/>
                <span className='border-b-4 border-Font w-40'></span>
                <Component className='hidden md:block'/>
                <h2 className='text-2xl md:text-4xl font-semibold text-Font'>Modules Included</h2>
                <Component className='hidden md:block'/>
                <span className='border-b-4 border-Font w-40 '></span>
                <Component className='hidden md:block'/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {item.modules.map((module, index) => (
                    <div key={index} className='m-5 border border-black p-5 text-Font bg-gradient-to-t from-blue-200 to-lime-400 rounded-xl shadow-xl hover:scale-105 transition duration-150 ease-in-out'>
                        <div className='flex'>
                            <Grid2x2Plus className='mr-3'/>
                            <h2 className='text-xl font-semibold'>{module.modulename}</h2>
                        </div>
                        {module.content.map((mc, subIndex) => (
                            <div key={subIndex}>
                                {typeof mc === 'string' ? (
                                    <div className='flex ml-10 my-2'>
                                        <div>
                                            <Box className='mr-2'/>
                                        </div>
                                        <p className=''>{mc}</p>
                                    </div>
                                ) : (
                                    mc.subcontent?.map((sub, subSubIndex) => (
                                        <div key={subSubIndex} className='ml-10'>
                                            <div className='flex'>
                                                <Box className='mr-2'/> 
                                                <h3 className=''>{sub.contentName}</h3>
                                            </div>
                                            <ul className='ml-10'>
                                                {sub.sub.map((subItem, subItemIndex) => (
                                                    <div className='flex my-2' key={subItemIndex}>
                                                        <div>
                                                            <CornerDownRight className='mr-2'/>
                                                        </div>
                                                        <li>{subItem}</li>
                                                    </div>
                                                ))}
                                            </ul>
                                        </div>
                                    ))
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
