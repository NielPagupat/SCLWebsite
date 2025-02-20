import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

export default function ExperienceAll() {
    
    const navigate = useNavigate();

    const goToProjects = () => {
        navigate('/SCL/Experience');
    }
    const goToTrainings = () => {
        navigate('/SCL/Experience/Trainings');
    }

    return (
        <div>
            <div>
                <div className='flex justify-center'>
                    <button className='m-10 text-2xl font-semibold font-tomorrow' onClick={goToProjects}>Projects</button>
                    <button className='m-10 text-2xl font-semibold font-tomorrow' onClick={goToTrainings}>Trainings</button>
                </div>
            </div>
            <div>  
                <Outlet />
            </div>
        </div>
    );
}
