import React from "react";
import { useNavigate } from "react-router";
import {
  ChevronRight,
  MessageCircleMore,
  Code,
  Network,
  Cpu,
  Monitor,
  Cctv,
} from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  const Services = [
    { Icon: Code, text: "Software Development & Programming" },
    { Icon: Monitor, text: "Hardware & ICT Equipment" },
    { Icon: Network, text: "Structured Cabling & Surveillance" },
    { Icon: Cpu, text: "Services, Repair, & Maintenance" },
    { Icon: Cctv, text: "ICT Consultancy & Collaboration" },
  ];

  const goToMain = () => {
    navigate("/SCL");
  };

  const goToFacebook = () => {
    window.location.href =
      "https://www.facebook.com/profile.php?id=100057210141024";
  };

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-8 justify-center items-center">
      <div className="flex w-full md:w-4/5 h-full md:h-4/5 flex-col justify-center items-center shadow-2xl p-4 md:p-8 rounded-lg bg-gradient-to-l from-SCLBlue via-lightgreen to-SCLYellow">
        <div className="flex flex-col items-center justify-around p-2 shadow-2xl rounded-3xl border border-amber-500 bg-gradient-to-t from-blue-200 to-lime-400">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/Icons/SCL_Logo3.png"
              alt="Logo"
              className="h-16 md:h-20 m-3 drop-shadow-xl"
            />
            <span className="text-xl md:text-5xl font-semibold text-SCLBlue font-tomorrow">
              Dura Computer Services
            </span>
            <span className="text-lg md:text-2xl text-SCLBlue font-tomorrow">
              Software & Hardware Solutions
            </span>
          </div>
          <p className="p-4 text-center text-md md:text-xl font-tomorrow text-SCLBlue">
            SCL, or Software & Computer Logistics, is a leading provider of
            comprehensive IT solutions. We specialize in delivering top-notch
            software and hardware services tailored to meet the unique needs of
            our clients. Our team of experts is dedicated to ensuring the
            highest level of customer satisfaction through innovative solutions
            and exceptional support.
          </p>
          <h1 className="text-2xl md:text-4xl font-tomorrow font-semibold text-SCLBlue">
            We Offer
          </h1>
          <div className="flex flex-wrap justify-center my-5">
            {Services.map(({ Icon, text }, index) => (
              <div key={index} className="relative group mx-2 md:mx-5 my-2">
                {/* Tooltip */}
                <span className="absolute bottom-14 w-40 md:w-60 text-sm md:text-lg left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-center rounded-lg px-2 py-1">
                  {text}
                </span>

                {/* Icon with Bounce Effect */}
                <Icon
                  className="size-8 md:size-10 text-SCLBlue animate-pulse group-hover:animate-none transition"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 m-3 w-full text-center font-tomorrow text-sm md:text-xl text-white">
            <button
              className="flex border w-28 md:w-36 h-12 md:h-16 border-black rounded-xl gap-2 justify-center items-center bg-gradient-to-r from-sky-900 to-violet-400 transition duration-400 ease-in-out transform hover:scale-110"
              onClick={goToFacebook}
            >
              Message
              <MessageCircleMore />
            </button>
            <button
              className="flex border w-28 md:w-36 h-12 md:h-16 border-black rounded-xl justify-center items-center font-tomorrow bg-gradient-to-r from-sky-900 to-violet-400 transition duration-400 ease-in-out transform hover:scale-110"
              onClick={goToMain}
            >
              About Us
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
