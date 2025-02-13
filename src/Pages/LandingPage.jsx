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
      <div className="flex flex-1 flex-col justify-start align-start items-start p-4 ">
        <div className="flex flex-col items-center justify-around p-2 shadow-xl  rounded-3xl border border-amber-500 flex-1 bg-gradient-to-b from-emerald-700 to-lime-400">
          <div className="flex flex-col items-center justify-center">
            <img
              src="./src/assets/backgrounds/SCL ANIMATIONS.gif"
              alt="Logo"
              className="w-32 h-20 border border-black shadow-xl m-3"
            />
            <span className="text-5xl font-semibold text-SCLBlue font-tomorrow">
              Dura Computer Services
            </span>
            <span className="text-2xl text-SCLBlue font-tomorrow">Software & Hardware Solutions</span>
          </div>
          <p className="text-justify p-4 indent-8 text-xl font-tomorrow text-SCLBlue">
            SCL, or Software & Computer Logistics, is a leading provider of
            comprehensive IT solutions. We specialize in delivering top-notch
            software and hardware services tailored to meet the unique needs of
            our clients. Our team of experts is dedicated to ensuring the
            highest level of customer satisfaction through innovative solutions
            and exceptional support.
          </p>
          <div className="flex items-center justify-start gap-5 m-3 ml-12 w-full text-center font-tomorrow text-xl text-white">
            <span className="">
              <button
                className="flex p-2 border w-36 h-16 border-black rounded-xl gap-2 justify-center items-center bg-gradient-to-r from-sky-900 to-violet-400 transition duration-400 ease-in-out transform hover:scale-110"
                onClick={goToFacebook}
              >
                Message
                <MessageCircleMore />
              </button>
            </span>
            <span className="">
              <button
                className="flex p-2 border w-36 h-16 border-black rounded-xl gap-2 justify-center items-center font-tomorrow bg-gradient-to-r from-sky-900 to-violet-400 transition duration-400 ease-in-out transform hover:scale-110"
                onClick={() => {
                  document.querySelector('.loading-screen').style.display = 'flex';
                  document.querySelector('.loading-screen').classList.add('fade-in');
                  setTimeout(() => {
                    document.querySelector('.loading-screen').classList.remove('fade-in');
                    document.querySelector('.loading-screen').classList.add('fade-out');
                    setTimeout(() => {
                      document.querySelector('.loading-screen').style.display = 'none';
                      document.querySelector('.loading-screen').classList.remove('fade-out');
                      goToMain();
                    }, 100); // Adjust the timeout as needed
                  }, 1000); // Adjust the timeout as needed
                }}
              >
                About Us
                <ChevronRight />
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="loading-screen fixed inset-0 flex items-center justify-center size-full" style={{ display: 'none' }}>
        <img src="./src/assets/backgrounds/SCL ANIMATIONS.gif" alt="Loading" className="w-32 h-32" />
      </div>
      <div className="flex flex-1 flex-col justify-start align-start items-start p-4">
        <div className="flex flex-col items-center justify-center p-2 shadow-xl flex-1 w-full text-2xl  rounded-2xl border bg-gradient-to-b border-amber-500 from-emerald-700 to-lime-400 font-semibold bg-PaperBlack">
        
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
