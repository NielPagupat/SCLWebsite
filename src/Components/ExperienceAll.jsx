import React, { useState, useEffect } from 'react';
import { allExperience } from '../assets/Experience/exp';
import ImageModal from './ImageModal';
import { Outlet, useNavigate } from 'react-router';

export default function ExperienceAll() {
    
    const navigate = useNavigate();

    const goToProjects = () => {
        navigate('/SCL/Experience');
    }
    const goToTrainings = () => {
        navigate('/SCL/Experience/Trainings');
    }
    // const [content, setContent] = useState('');

    // const handleVisibility = (e) => {
    //     setContent(e);
    //     document.body.style.overflow = 'hidden';
    //     const modal = document.querySelector('#Image-Modal');
    //     modal.style.display = 'block';
    // }
    return (
        <>  
            <div className='flex justify-center'>
                <button className='m-10 text-2xl font-semibold font-tomorrow' onClick={goToProjects}>Projects</button>
                <button className='m-10 text-2xl font-semibold font-tomorrow' onClick={goToTrainings}>Trainings</button>
            </div>
            
            <Outlet />

            {/* Modal */}
            {/* <ImageModal content={content} /> */}
        </>
    );
}
