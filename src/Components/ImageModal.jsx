import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import React from 'react';

export default function ImageModal({content = {}, ...rest }) {
    const CloseModal = () => {
        document.body.style.overflow = 'auto';
        const modal = document.querySelector('#Image-Modal');
        modal.style.display = 'none';
    }
    return (
    <div className={`fixed inset-0 z-30 h-screen w-screen bg-PaperBlack
                    hidden`} {...rest} id='Image-Modal'>
      <div className='flex flex-col flex-1 h-full justify-center'>
        <div className='flex w-full justify-between items-center bg-PaperDarkerBlack'>
            <h1 className='text-white text-xl font-semibold font-tomorrow ml-5'>
                {content.projectTitle} 
                <h2>{content.company}</h2>
            </h1>
            <button className='m-5 border text-white rounded-full p-5' onClick={CloseModal}><X /></button>
        </div>
        <div className='flex w-full flex-1 justify-center items-center'>
            <button className='m-5 border text-white rounded-full p-5'><ChevronLeft /></button>
            <img src='' alt='image' className='h-full w-full border object-contain' />
            <button className='m-5 border text-white rounded-full p-5'><ChevronRight /></button>
        </div>
        <div className='flex h-52 justify-center'>
            image
        </div>
      </div>
    </div>
  );
}