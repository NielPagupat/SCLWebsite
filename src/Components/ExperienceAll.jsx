import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

export default function ExperienceAll() {
    
    const navigate = useNavigate();
    const location =  useLocation();
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
                    <button className={`m-10 text-2xl font-semibold font-tomorrow rounded-xl p-5 ${location.pathname==='/SCL/Experience'?'bg-PaperBlack text-white':''}`} onClick={goToProjects}>Projects</button>
                    <button className={`m-10 text-2xl font-semibold font-tomorrow rounded-xl p-5 ${location.pathname==='/SCL/Experience/Trainings'?'bg-PaperBlack text-white':''}`} onClick={goToTrainings}>Trainings</button>
                </div>
            </div>
            <div>  
                <Outlet />
            </div>
        </div>
    );
}
