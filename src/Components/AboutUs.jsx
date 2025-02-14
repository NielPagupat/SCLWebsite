import React from "react";
import { aboutUs, Mission, Vision } from "../assets/Text/text";
import { Goal, Eye, HandCoinsIcon, Check } from "lucide-react";

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
    <div id="about-us">
      <div className="flex">
        <div className="flex p-5 w-2/5 items-center">
          <img
            src="../src/assets/Images/SCL_Cover.jpg"
            alt="Logo"
            className="rounded-xl border border-black shadow-xl"
          />
        </div>
        <div className="flex-1 p-5 bg-gradient-to-b from-blue-200 to-white m-5 ml-0 rounded-lg shadow-xl">
          <h1 className="text-4xl font-semibold font-tomorrow text-Font">
            About Us
          </h1>
          <p className="mt-5 font-tomorrow text-lg text-Font ">{aboutUs}</p>
        </div>
      </div>
      <div className="flex flex-col-reverse m-5 text-Font items-center">
        <div className="flex flex-col flex-1 justify-center items-center  p-3 bg-gradient-to-b from-blue-200 to-white w-4/5 rounded-xl shadow-xl">
          <div className="flex justify-center items-center rounded-lg p-2 gap-1">
            <HandCoinsIcon className="size-6" />
            <h1 className="text-2xl font-extrabold font-tomorrow">Values</h1>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span className="border-t border-black w-8 border-2"></span>
            <h3 className="text-2xl font-semibold font-tomorrow text-black">
              SCL Values the triple E's
            </h3>
            <span className="border-t border-black w-8 border-2"></span>
          </div>
          <ul className="flex font-tomorrow text-center text-xl justify-around items-center">
            <Check className="size-8"/>
            <li className="m-5 mr-10 brightness ml-1 p-1.5 font-semibold  border-blue-900 border-2 rounded-3xl rounder-full text-3xl value-li">
             Easy to Buy
            </li>

            <Check className="size-8"/>
            <li className="m-5 mr-10 brightness ml-1 p-1.5 font-semibold border-blue-900  border-2 rounded-3xl text-3xl value-li">
              Excellent Support and Service
            </li>
            <Check className="size-8"/>
            <li className="m-5 mr-10 brightness ml-1 p-1.5 font-semibold border-blue-900 border-2 rounded-3xl text-3xl  value-li">
              Efficient to Use
            </li>
          </ul>
        </div>
        <div className="flex flex-1 pb-10 justify-around">
          <div className="flex flex-col w-2/5 p-5 items-center rounded-xl bg-gradient-to-b from-blue-200 to-white shadow-xl">
            <div className="flex justify-center items-center gap-1">
              <Goal className="size-6" />
              <h1 className="text-2xl font-extrabold font-tomorrow">Mission</h1>
            </div>
            <p className="text-center font-tomorrow text-lg mt-5 ">{Mission}</p>
          </div>
          <div className="flex flex-col w-2/5 p-5 items-center bg-gradient-to-b from-blue-200 to-white rounded-xl shadow-xl">
            <div className="flex justify-center items-center gap-1">
              <Eye className="size-6" />
              <h1 className="text-2xl font-extrabold font-tomorrow">Vision</h1>
            </div>
            <p className="text-center font-tomorrow text-lg mt-5">{Vision}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-10 pt-5 pb-5 m-20 bg-gradient-to-b from-blue-200 to-white rounded-xl shadow-xl text-Font font-tomorrow"
           id="scl-services">
        <h1 className="text-4xl font-semibold mb-5 mt-5">Services Offered</h1>
        <div className="flex flex-wrap justify-center">
          {services.map((val, index) => (
            <div key={index} className={`flex flex-col items-center m-5`}>
              <img
                src={val.icon}
                alt="service"
                className="size-80 border border-black rounded-md shadow-xl hover:scale-105 transition duration-150 ease-in-out   "
              />
              <p className="font-semibold mt-2">{val.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
