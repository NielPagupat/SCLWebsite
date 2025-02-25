import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { trainings } from '../assets/Experience/training';

export default function Trainings() {
    const [content, setContent] = useState(0);
    const [index, setIndex] = useState(0);

    const handleVisibility = (e) => {
        setContent(e);
        setIndex(0); // Reset index when opening a new training
        document.body.style.overflow = 'hidden';
        document.getElementById('Image-Modal').style.display = 'block';
    };

    const CloseModal = () => {
        document.body.style.overflow = 'auto';
        document.getElementById('Image-Modal').style.display = 'none';
    };

    const cont = trainings[content] || {}; 
    const items = cont.Images || [];

    const increment = () => {
        if (index < items.length - 1) {
            setIndex(index + 1);
        }
    };

    const decrement = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <div className='bg-PaperBlack m-2 rounded-xl'>
            <div className="flex flex-wrap justify-around">
                {trainings.map((item, i) => (
                    <div
                        className="flex flex-col m-5 p-5 border border-black rounded-lg w-full sm:w-96 items-center bg-gradient-to-t from-blue-300 to-lime-400 shadow-xl hover:shadow-SCLYellow hover:shadow-2xl hover:scale-105 transition duration-150 ease-in-out"
                        key={i}
                    >
                        <h1 className="my-2 h-14 text-center text-xl font-tomorrow font-bold">{item.System}</h1>
                        <img
                            src={item.Images[0]}
                            alt={item.System}
                            className="w-full sm:w-60 border  size-40 md:size-60 border-black rounded-xl shadow-xl"
                        />
                        <h2 className="my-5 text-center font-semibold font-tomorrow">{item.Org}</h2>
                        <p className="text-center font-tomorrow font-medium">{item.description}</p>
                        <p className="my-5 text-sm font-tomorrow">
                            {item.Date.month} {item.Date.day}, {item.Date.year}
                        </p>
                        <button
                            className="mt-4 p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
                            onClick={() => handleVisibility(i)}
                        >
                            View More
                        </button>
                    </div>
                ))}
            </div>

            <div className="fixed inset-0 z-30 h-screen w-screen bg-PaperBlack hidden" id="Image-Modal">
                <div className="flex flex-col h-full justify-center items-center">
                    <div className="flex w-full justify-between items-center bg-PaperDarkerBlack p-4">
                        <h1 className="text-white text-xl font-semibold font-tomorrow">
                            {cont.System} - {cont.Org}
                        </h1>
                        <button className="text-white rounded-full p-3" onClick={CloseModal}>
                            <X />
                        </button>
                    </div>
                    <div className="flex w-full flex-1 justify-between items-center">
                        <button className="text-white p-3 hover:bg-PaperBlack h-full" onClick={decrement}>
                            <ChevronLeft />
                        </button>
                        {items.length > 0 && (
                            <img src={items[index]} alt={`Training Image ${index}`} className="text-white max-h-96 size-60 md:size-auto" />
                        )}
                        <button className="text-white p-3 hover:bg-PaperBlack h-full" onClick={increment}>
                            <ChevronRight />
                        </button>
                    </div>
                    <div className="flex h-52 w-full justify-center overflow-x-auto bg-PaperBlack items-center">
                        {items.map((item, i) => (
                            <div key={i} className="cursor-pointer">
                                <img
                                    src={item}
                                    alt={`Thumbnail ${i}`}
                                    className={`border size-20 md:size-32 m-5 ${index === i ? 'border-2 border-blue-700' : ''}`}
                                    onClick={() => setIndex(i)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
