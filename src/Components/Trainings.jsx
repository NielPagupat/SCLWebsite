import React, {useState} from 'react'
import ImageModal from './ImageModal'
import { trainings } from '../assets/Experience/training';
export default function Trainings() {
    const All_Trainings = trainings;
    const [content, setContent] = useState(0);

    const handleVisibility = (e) => {
        setContent(e);
        document.body.style.overflow = 'hidden';
        const modal = document.querySelector('#Image-Modal');
        modal.style.display = 'block';
    }
    return (
    <>
        <div className='flex flex-wrap justify-around'>
            {
                All_Trainings.map((item, i) => 
                <div className='flex flex-col m-5 p-5 border border-black rounded-lg w-96 items-center bg-gradient-to-t from-blue-300 to-lime-400 shadow-xl hover:shadow-SCLYellow hover:shadow-2xl hover:scale-105 transition duration-150 ease-in-out'
                    key={i}>
                    <h1 className='my-2 h-14 text-center text-xl font-tomorrow font-bold'>{item.System}</h1>
                    <img src={item.icon} alt="image" className='size-60 border border-black rounded-xl shadow-xl' />
                    <h2 className='my-5 text-center font-semibold font-tomorrow'>{item.Org}</h2>
                    <p className='text-center font-tomorrow font-medium'>{item.description}</p>
                    <p className='my-5 text-sm font-tomorrow'>{item.Date.month} {item.Date.day}, {item.Date.year}</p>
                    <button
                    className="mt-4 p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
                    onClick={()=>handleVisibility(i)}
                    >
                        View More
                    </button>
                    
                </div>
                
                )
            }
        </div>
        <ImageModal content={content} />
    </>
  )
}
