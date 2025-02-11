import React from 'react';
import { useParams } from 'react-router';
import { allProducts } from '../assets/Products/products';
import { ArrowRight, Box, CornerDownRight, Grid2x2Plus } from 'lucide-react';
import { div } from 'framer-motion/client';

export default function ProductIndividual() {
    const { prod } = useParams();
    
    // Ensure `prod` is a valid index
    const item = allProducts[prod] || null;
    if (!item) {
        return <div>Product not found</div>;
    }

    console.log(item)
    return (
        <div className='p-5 font-tomorrow '>
            <h1 className='text-4xl font-semibold'>{item.projectTitle}</h1>
            <p className='text-lg my-5 font-tomorrow'>{item.projectDescription}</p>
            <h2 className='text-2xl font-semibold'>Modules Included</h2>
            <div className='grid grid-cols-3'>
                {item.modules.map((module, index) => (
                    <div key={index} className='m-5 border border-black p-5 bg-PaperBlack rounded-xl shadow-xl'>
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
                                                    <div className='flex my-2'>
                                                        <div>
                                                            <CornerDownRight className='mr-2'/>
                                                        </div>
                                                        <li key={subItemIndex}>{subItem}</li>
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
