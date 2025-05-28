"use client"
import React from "react";
import { GiHouseKeys } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/navigation";

 const Header = () => {
    const [ drop , setDrop ] = useState(false);
     const dropdown = ()=>{ setDrop(!drop) };
     const router = useRouter();
     const GoAbout =()=>{router.push("/about")}
  const GoHome =()=>{router.push("/")}
  return (
    <>
      <div className=" w-full flex flex-row h-[60px] sm:h-[70px] lg:h-[75px] bg-[#05325c] relative ">
        <div className="w-2/3 flex flex-row justify-start items-center sm:w-3/7 2xl:w-2/6 pl-8 sm:pl-12 lg:pl-18" >
          <div  className=" flex justify-center items-center ">
            <span className=" flex justify-center items-center text-[#f28a00] mb-2">
              <GiHouseKeys className="text-4xl sm:text-5xl" />
            </span>
            <span className=" flex justify-center items-center"><h1 className="font-serif text-2xl sm:text-3xl text-[#ffffff]">Rentals</h1></span>
          </div>
        </div>

        <div className="w-1/3 flex flex-row justify-center items-center sm:hidden">
            <div className=" text-[#ffffff]" onClick={dropdown}><IoMenu size={35} /></div>
            <div>
                {drop ? <div    className={`flex flex-col absolute z-10 bg-[#0f3963] right-0 top-[57px] w-[150px]  h-screen transform transition-transform duration-1500 ease-in-out ${
                drop ? "translate-x-0" : "translate-x-full"
              }`}>
          <div className=" flex flex-row justify-center items-center mt-1.5 h-[50px] " ><h1 className="text-[20px] text-white hover:underline hover:decoration-white">Home</h1></div>
          <div className="flex flex-row justify-center items-center  h-[50px] " ><h1 className="text-[20px] text-white hover:underline hover:decoration-white">About</h1></div>
          <div className="flex flex-row justify-center items-center  h-[50px]  " ><h1 className="text-[20px]  text-white hover:underline hover:decoration-white" >Properties</h1></div>
          <div className="flex flex-row justify-center items-center  h-[50px] mb-1.5  " ><h1 className="text-[20px]  text-white hover:underline hover:decoration-white">Contact</h1></div>
        </div> : null }
            </div>

        </div>

        <div className=" hidden sm:flex sm:w-4/7  sm:flex-row sm:justify-center sm:items-center pr-5  ">
          <div className="w-1/4 flex justify-center items-center"> <h2 className=" text-xl text-white hover:cursor-pointer hover:underline hover:decoration-white"onClick={GoHome}>Home</h2> </div>
          <div className="w-1/4 flex justify-center items-center"> <h2 className=" text-xl text-white hover:cursor-pointer hover:underline hover:decoration-white"onClick={GoAbout}>About</h2> </div>
          <div className="w-1/4 flex justify-center items-center"> <h2 className=" text-xl text-white hover:cursor-pointer hover:underline hover:decoration-white">Properties</h2> </div>
          <div className="w-1/4 flex justify-center items-center"> <h2 className=" text-xl text-white hover:cursor-pointer hover:underline hover:decoration-white">Contact</h2> </div>
        </div>
      </div>
    </>
  );
};
export default Header;
