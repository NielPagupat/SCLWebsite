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
    <div className="min-h-screen flex flex-1 bg-gradient-to-b from-yellow-300 to-yellow-500">
      {/* <div className='static'>
            <div className='w-1/3 h-14 clip-trapezoid bg-gradient-to-br from-blue-800 to-cyan-100' />
        </div>   */}
      <div className="flex flex-1 flex-col justify-start align-start items-start p-4 ">
        <div className="flex flex-col items-center justify-around border border-black rounded-xl p-2 shadow-xl flex-1">
          <div className="flex flex-col items-center justify-start">
            <image
              src=""
              alt="Logo"
              className="w-32 h-20 border border-black shadow-xl m-3"
            />
            <span className="text-5xl font-semibold">
              Dura Computer Services
            </span>
            <span className="text-2xl">Software & Hardware Solutions</span>
          </div>
          <p className="text-justify p-4 indent-8 text-xl">
            SCL, or Software & Computer Logistics, is a leading provider of
            comprehensive IT solutions. We specialize in delivering top-notch
            software and hardware services tailored to meet the unique needs of
            our clients. Our team of experts is dedicated to ensuring the
            highest level of customer satisfaction through innovative solutions
            and exceptional support.
          </p>
          <div className="flex items-center justify-start gap-3 m-3 ml-12 w-full text-center text-xl">
            <span className="">
              <button
                className="flex p-2 border border-black rounded-xl"
                onClick={goToFacebook}
              >
                Message
                <MessageCircleMore />
              </button>
            </span>
            <span className="">
              <button
                className="flex p-2 border border-black rounded-xl"
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
        <div className="flex flex-row items-center justify-end border border-black rounded-xl p-2 shadow-xl flex-1 w-full text-2xl font-semibold">
          <div className="flex flex-col justify-around items-start border border-black rounded-xl p-2 shadow-xl m-2 h-full p-7">
            <div className="flex  flex-row items-center gap-4">
              <Code className=""/>
              <p>Programming</p>
            </div>
            <div className="flex  flex-row items-center gap-4">
              <Monitor />
              <p>Web Development</p>
            </div>
            <div className="flex  flex-row items-center gap-4">
              <Smartphone />
              <p>Mobile Development</p>
            </div>
            <div className="flex  flex-row items-center gap-4">
              <Cpu />
              <p>Repair & Maintenance</p>
            </div>
            <div className="flex  flex-row items-center gap-4">
              <Cctv />
              <p>CCTV & Monitoring</p>
            </div>
            <div className="flex  flex-row items-center gap-4">
              <MessageSquareMore />
              <p>ICT Consultancy</p>
            </div>
            <div className="flex  flex-row items-center gap-4">
              <Network />
              <p>Cabling & Networking</p>
            </div>
            <div className="flex  flex-row items-center gap-4">
              <Database />
              <p>System Integration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
