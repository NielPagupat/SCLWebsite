import React, {useState} from 'react'
import ImageModal from './ImageModal'
export default function Trainings() {
    const items = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]
    const [content, setContent] = useState();

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
                items.map((item, i) => 
                <div className='flex flex-col m-5 p-5 border border-black rounded-lg w-96 items-center bg-gradient-to-t from-blue-300 to-lime-400 shadow-xl hover:shadow-SCLYellow hover:shadow-2xl hover:scale-105 transition duration-150 ease-in-out'
                    key={i}>
                    <img src={item.icon} alt="image" className='size-60 border border-black rounded-xl shadow-xl' />
                    <button
                    className="mt-4 p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
                    onClick={()=>handleVisibility(item)}
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
