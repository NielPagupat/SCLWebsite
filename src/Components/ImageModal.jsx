import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import React, {useState} from 'react';
import { trainings } from '../assets/Experience/training';


export default function ImageModal({content = 0, ...rest }) {
    const cont = trainings[content]
    const items = cont.Images
    console.log(items);
    console.log(content);
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
                {cont.System} - {cont.Org} 
            </h1>
            <button className='m-5 border text-white rounded-full p-5' onClick={CloseModal}><X /></button>
        </div>
        <div className='flex w-full flex-1 justify-between items-center'>
            <button className='m-5 border text-white rounded-full p-5' onClick={decrement}><ChevronLeft /></button>
            <img src={trainings[0].Images} alt={cont.Images[index]} className=' border text-white' />
            <button className='m-5 border text-white rounded-full p-5' onClick={increment}><ChevronRight /></button>
        </div>
        <div className='flex h-52 w-full justify-center overflow-x-auto'>
            {items.map((item, i) =>
            <div className=''>
                {console.log(item)}
                <img src={item} alt={item} className='border size-32 m-5' />
            </div>
            )}
        </div>
      </div>
    </div>
  );
}