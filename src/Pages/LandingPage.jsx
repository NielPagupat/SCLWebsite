import React from "react";
import { useNavigate } from "react-router";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircleMore,
  Code,
  Network,
  Cpu,
  Database,
  Smartphone,
  Monitor,
  Cctv,
  MessageSquareMore,
} from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/SCL");
  };
  const goToFacebook = () => {
    window.location.href =
      "https://www.facebook.com/profile.php?id=100057210141024";
  };

  return (
    <div className="min-h-screen flex flex-1 p-8">
      {/* <div className='static'>
            <div className='w-1/3 h-14 clip-trapezoid bg-gradient-to-br from-blue-800 to-cyan-100' />
        </div>   */}
      <div className="flex flex-1 flex-col justify-start align-start items-start p-4 ">
        <div className="flex flex-col items-center justify-around p-2 shadow-xl border border-gradient-to-r from-stone-600 to-gray-700 flex-1 bg-PaperBlack">
          <div className="flex flex-col items-center justify-start">
            <img
              src="./src/assets/backrgounds/SCL ANIMATIONS.gif"
              alt="Logo"
              className="w-32 h-20 border border-black shadow-xl m-3"
            />
            <span className="text-5xl font-semibold text-SCLBlue">
              Dura Computer Services
            </span>
            <span className="text-2xl text-SCLBlue">Software & Hardware Solutions</span>
          </div>
          <p className="text-justify p-4 indent-8 text-xl font-tomorrow text-SCLBlue">
            SCL, or Software & Computer Logistics, is a leading provider of
            comprehensive IT solutions. We specialize in delivering top-notch
            software and hardware services tailored to meet the unique needs of
            our clients. Our team of experts is dedicated to ensuring the
            highest level of customer satisfaction through innovative solutions
            and exceptional support.
          </p>
          <div className="flex items-center justify-start gap-5 m-3 ml-12 w-full text-center text-xl text-SCLYellow">
            <span className="">
              <button
                className="flex p-2 border w-36 h-16 border-black rounded-xl gap-2 justify-center items-center bg-SCLBlue" 
                onClick={goToFacebook}
              >
                Message
                <MessageCircleMore />
              </button>
            </span>
            <span className="">
              <button
                className="flex p-2 border w-36 h-16 border-black rounded-xl gap-2 justify-center items-center bg-SCLBlue"
                onClick={goToMain}
              >
                About Us
                <ChevronRight />
              </button>
            </span>
          </div>
        </div>
      </div>
      {/* <div className='flex justify-end'>
            <div className='w-1/3 h-14 clip-trapezoid-reverse bg-gradient-to-tl from-blue-800 to-cyan-100'/>
        </div> */}
      <div className="flex flex-1 flex-col justify-start align-start items-start p-4">
        <div className="flex flex-col items-center justify-center p-2 shadow-xl flex-1 w-full text-2xl border border-gradient-to-r from-stone-600 to-gray-700 font-semibold bg-PaperBlack">
        
        <div className="flex flex-row justify-center items-center text-3xl  w-full font-tomorrow text-SCLBlue mt-6">
              <p>SERVICES</p>
            </div>
          
          <div className="flex flex-col justify-around items-start h-full font-tomorrow text-SCLBlue text-xl">
            <div className="flex  flex-row items-center gap-4">
              <Code className="size-9"/>
              <p>SOFTWARE DEVELOPMENT AND PROGRAMMING</p>
            </div>
            <div className="flex  flex-row items-center gap-4">
              <Monitor className="size-9"/>
              <p>HARWARE AND ICT EQUIPMENT</p>
            </div>
            <div className="flex  flex-row items-center gap-4">
              <Network className="size-9"/>
              <p>STRUCTURED CABLING AND SURVILLANCE</p>
            </div>
            <div className="flex  flex-row items-center gap-4">
              <Cpu className="size-9"/>
              <p>SERVICES REPAIR AND MAINTAINANCE</p>
            </div>
            <div className="flex  flex-row items-center gap-4">
              <Cctv className="size-9"/>
              <p>ICT CONSULTANCY AND COLLABORATION</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
