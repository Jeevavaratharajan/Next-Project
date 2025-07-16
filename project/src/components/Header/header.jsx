"use client";
import React from "react";
import Link from "next/link";
import { GiHouseKeys } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [drop, setDrop] = useState(false);
  const dropdown = () => {
    setDrop(!drop);
  };
  const router = useRouter();
  const GoAbout = () => {
    router.push("/about");
  };
  const GoHome = () => {
    router.push("/");
  };
  const GoProperty = () => {
    router.push("/property");
  };
  return (
    
      <div className=" w-full flex flex-row h-[60px] sm:h-[70px] lg:h-[75px] bg-[#05325c] relative mb-[0.5px] z-50">
        <div className="w-1/2 flex justify-start items-center pl-[8%]">
          <span className=" flex justify-center items-center text-[#f3961a] mb-2">
            <GiHouseKeys className="text-4xl sm:text-5xl" />
          </span>
          <span className=" flex justify-center items-center">
            <h1 className="font-semibold text-2xl sm:text-4xl text-[#ffffff]">
              Rentals
            </h1>
          </span>
        </div>

        <div className="w-1/2 flex flex-row justify-center items-center sm:hidden">
          <div className=" text-[#ffffff]" onClick={dropdown}>
            <IoMenu size={35} />
          </div>
          <div>
            <div
              className={`flex flex-col absolute z-10 bg-[#0f3963] right-0 top-[57px] w-[150px]  h-screen transform transition-transform duration-200 ease-in-out ${
                drop ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className=" flex flex-row justify-center items-center mt-1.5 h-[50px] ">
                <Link href={"/"}>
                  <h1 className="text-[20px] text-white hover:underline hover:decoration-white">
                    Home
                  </h1>
                </Link>
              </div>
              <div className="flex flex-row justify-center items-center  h-[50px] ">
                <Link href={"/about"}>
                  <h1 className="text-[20px] text-white hover:underline hover:decoration-white">
                    About
                  </h1>
                </Link>
              </div>
              <div className="flex flex-row justify-center items-center  h-[50px]  ">
                <Link href={"/property"}>
                  <h1 className="text-[20px]  text-white hover:underline hover:decoration-white">
                    Properties
                  </h1>
                </Link>
              </div>
          
            </div>
          </div>
        </div>

        <div className=" hidden   sm:flex w-1/2 gap-[20%] justify-center sm:pr-[35px] lg:pr-[0px]">
          <div className="w-auto flex justify-center items-center">
            <Link href={"/"}>
              <h2 className=" text-[20px] md:text-[23px] text-white hover:cursor-pointer hover:underline hover:decoration-white">
                Home
              </h2>
            </Link>
          </div>
          <div className="w-auto flex justify-center items-center">
            <Link href={"/about"}>
              <h2 className=" text-[20px] md:text-[23px] text-white hover:cursor-pointer hover:underline hover:decoration-white">
                About
              </h2>
            </Link>
          </div>
          <div className="w-auto flex justify-center items-center">
            <Link href={"/property"}>
              <h2 className=" text-[20px] md:text-[23px] text-white hover:cursor-pointer hover:underline hover:decoration-white">
                Properties
              </h2>
            </Link>
          </div>
      
        </div>
      </div>
    
  );
};
export default Header;
