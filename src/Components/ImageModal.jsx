import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import React, {useState} from 'react';

export default function ImageModal({content = {}, ...rest }) {
    const items = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:6}]

    const CloseModal = () => {
        document.body.style.overflow = 'auto';
        const modal = document.querySelector('#Image-Modal');
        modal.style.display = 'none';
    }

    const [index, setIndex] = useState(0);
    const increment = () => {
        if (index < items.length-1) {
            setIndex(index + 1);
        }
        
    }
    const decrement = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }
    return (
    <div className={`fixed inset-0 z-30 h-screen w-screen bg-PaperBlack
                    hidden`} {...rest} id='Image-Modal'>
      <div className='flex flex-col flex-1 h-full justify-center items-center'>
        <div className='flex w-full justify-between items-center bg-PaperDarkerBlack'>
            <h1 className='text-white text-xl font-semibold font-tomorrow ml-5'>
                {content.id} 
            </h1>
            <button className='m-5 border text-white rounded-full p-5' onClick={CloseModal}><X /></button>
        </div>
        <div className='flex w-full flex-1 justify-between items-center'>
            <button className='m-5 border text-white rounded-full p-5' onClick={decrement}><ChevronLeft /></button>
            <img src="" alt={items[index].id} className=' border object-contain' />
            <button className='m-5 border text-white rounded-full p-5' onClick={increment}><ChevronRight /></button>
        </div>
        <div className='flex h-52 w-full justify-center overflow-x-auto'>
            {items.map((item, i) =>
            <div className=''>
                <img src="" alt={item.id} className='border size-32 m-5' />
            </div>
            )}
        </div>
      </div>
    </div>
  );
}