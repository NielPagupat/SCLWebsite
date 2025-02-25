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

  const Services = [
      { Icon: Code, text: "Software Development & Programming" },
      { Icon: Monitor, text: "Hardware & ICT Equipment" },
      { Icon: Network, text: "Structured Cabling & Surveillance" },
      { Icon: Cpu, text: "Services, Repair, & Maintenance" },
      { Icon: Cctv, text: "ICT Consultancy & Collaboration" },
    ]
  const goToMain = () => {
    navigate("/SCL");
  };
  const goToFacebook = () => {
    window.location.href =
      "https://www.facebook.com/profile.php?id=100057210141024";
  };


  return (
    <div className="min-h-screen flex flex-1 p-8 justify-center items-center">
      <div className="flex w-4/5 h-4/5 flex-col justify-center items-center shadow-2xl p-8 rounded-lg bg-gradient-to-l from-SCLBlue via-lightgreen to-SCLYellow">
        <div className="flex flex-col items-center justify-around p-2 shadow-2xl  rounded-3xl border border-amber-500 bg-gradient-to-t from-blue-200 to-lime-400">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/Icons/SCL_Logo3.png"
              alt="Logo"
              className="h-20 m-3 drop-shadow-xl"
            />
            <span className="text-5xl font-semibold text-SCLBlue font-tomorrow">
              Dura Computer Services
            </span>
            <span className="text-2xl text-SCLBlue font-tomorrow">Software & Hardware Solutions</span>
          </div>
          <p className="p-4 text-center text-xl font-tomorrow text-SCLBlue">
            SCL, or Software & Computer Logistics, is a leading provider of
            comprehensive IT solutions. We specialize in delivering top-notch
            software and hardware services tailored to meet the unique needs of
            our clients. Our team of experts is dedicated to ensuring the
            highest level of customer satisfaction through innovative solutions
            and exceptional support.
          </p>
          <h1 className="text-4xl font-tomorrow font-semibold text-SCLBlue">We Offer</h1>
          <div className="flex my-5">
              {
                Services.map(({ Icon, text }, index) => (
                  <div key={index} className="relative group mx-5">
                    {/* Tooltip */}
                    <span className="absolute bottom-14 w-60 text-lg left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                                     transition-opacity bg-gray-800 text-white text-center rounded-lg px-2 py-1">
                      {text}
                    </span>
              
                    {/* Icon with Bounce Effect */}
                    <Icon
                      className="size-10 text-SCLBlue animate-pulse group-hover:animate-none transition"
                      style={{ animationDelay: `${index * 100}ms` }}
                    />
                  </div>
                ))
              }
          </div>
          <div className="flex items-center justify-center gap-5 m-3 w-full text-center font-tomorrow text-xl text-white">
            <span className="">
              <button
                className="flex border w-36 h-16 border-black rounded-xl gap-2 justify-center items-center bg-gradient-to-r from-sky-900 to-violet-400 transition duration-400 ease-in-out transform hover:scale-110"
                onClick={goToFacebook}
              >
                Message
                <MessageCircleMore />
              </button>
            </span>
            <span className="">
              <button
                className="flex border w-36 h-16 border-black rounded-xl justify-center items-center font-tomorrow bg-gradient-to-r from-sky-900 to-violet-400 transition duration-400 ease-in-out transform hover:scale-110"
                onClick={goToMain}
              >
                About Us
                <ChevronRight />
              </button>
            </span>
          </div>
        </div>
      </div>
      {/* <div className="loading-screen fixed inset-0 flex items-center justify-center size-full" style={{ display: 'none' }}>
        <img src="./src/assets/backgrounds/SCL ANIMATIONS.gif" alt="Loading" className="w-32 h-32" />
      </div>
      <div className="flex flex-1 flex-col justify-start align-start items-start p-4">
        <div className="flex flex-col items-center justify-center p-2 shadow-xl flex-1 w-full text-2xl  rounded-2xl border bg-gradient-to-t border-amber-500 from-blue-300 to-lime-400 font-semibold bg-PaperBlack">
        
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
      </div> */}
    </div>
  );
}
