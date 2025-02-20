import React from "react";
import { aboutUs, Mission, Vision } from "../assets/Text/text";
import { Goal, Eye, HandCoinsIcon, Check, UserRoundCog } from "lucide-react";

export default function AboutUs() {
  const services = [
    {
      name: "SOFTWARE DEVELOPMENT AND PROGRAMMING",
      icon: "../src/assets/Icons/Service1.webp",
    },
    {
      name: "HARDWARE AND ICT EQUIPMENT",
      icon: "../src/assets/Icons/Service2.webp",
    },
    {
      name: "STRUCTURED CABLING AND SURVEILLANCE",
      icon: "../src/assets/Icons/Service3.webp",
    },
    {
      name: "SERVICES REPAIR AND MAINTENANCE",
      icon: "../src/assets/Icons/Service4.webp",
    },
    {
      name: "ICT CONSULTANCY AND COLLABORATION",
      icon: "../src/assets/Icons/Service5.webp",
    },
  ];
  return (
    <div id="about-us " className="p-5">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-2/5 flex justify-center p-5">
          <img
            src="../src/assets/Images/SCL_Cover.jpg"
            alt="Logo"
            className="rounded-xl border border-black shadow-xl max-w-full h-auto"
          />
        </div>
        <div className="flex-1 p-5 bg-gradient-to-b from-blue-200 to-white m-5 md:ml-0 rounded-lg shadow-xl text-center md:text-left">
          <h1 className="text-4xl font-semibold font-tomorrow text-Font ">About Us</h1>
          <p className="mt-5 font-tomorrow text-lg text-Font ">{aboutUs}</p>
        </div>
      </div>
      <div className="flex flex-col items-center m-5 text-Font">
        <div className="w-full md:w-4/5 p-5 bg-gradient-to-b from-blue-200 to-white rounded-xl shadow-xl text-center">
          <div className="flex justify-center items-center gap-2">
            <HandCoinsIcon className="size-6" />
            <h1 className="text-2xl font-extrabold font-tomorrow">Values</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-3">
            <span className="border-t border-black w-8 border-2"></span>
            <h3 className="text-2xl font-semibold font-tomorrow text-black">SCL Values the triple E's</h3>
            <span className="border-t border-black w-8 border-2"></span>
          </div>
          <ul className="flex flex-col md:flex-row justify-around items-center mt-5 space-y-3 md:space-y-0 md:space-x-5 p-3">
            {['Easy to Buy', 'Excellent Support and Service', 'Efficient to Use'].map((value, index) => (
              <li key={index} className="flex items-center space-x-2 p-3 border-blue-900 border-2 rounded-3xl duration-300 transform hover:scale-95 value-li">
                <Check className="size-6" />
                <span className="font-semibold">{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-center w-full gap-20 mt-10">
          {[{ title: 'Mission', icon: <Goal className="size-6" />, content: Mission }, { title: 'Vision', icon: <Eye className="size-6" />, content: Vision }].map((item, index) => (
            <div key={index} className="w-full md:w-2/5 p-5 bg-gradient-to-b from-blue-200 to-white rounded-xl shadow-xl text-center">
              <div className="flex justify-center items-center gap-2">
                {item.icon}
                <h1 className="text-2xl font-extrabold font-tomorrow">{item.title}</h1>
              </div>
              <p className="text-lg mt-5">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center my-10 pt-5 pb-10 bg-gradient-to-b from-blue-200 to-white rounded-xl shadow-xl text-Font font-tomorrow w-full" id='scl-services'>
        <div className="text-center w-full">
          <div className="flex justify-center items-center gap-2">
            <UserRoundCog className="size-8 mb-4" />
            <h1 className="text-4xl font-semibold mb-4">Services Offered</h1>
          </div>
          <span className="border border-b-2 border-Font w-3/4 mb-4 mx-auto"></span>
        </div>
        <div className="flex flex-wrap justify-center">
          {services.map((val, index) => (
            <div key={index} className="flex flex-col items-center m-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <img
                src={val.icon}
                alt="service"
                className="w-60 h-60 object-cover border border-black rounded-md shadow-xl hover:scale-105 transition duration-150 ease-in-out"
              />
              <p className="font-semibold mt-2 text-center">{val.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}