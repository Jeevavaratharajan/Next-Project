"use client";

import React, { useState } from "react";
import { GiHouseKeys } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Header = () => {
  const [drop, setDrop] = useState(false);
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
    <>
      <div className="relative mb-[0.5px] flex h-[60px] w-full flex-row bg-[#05325c] sm:h-[70px] lg:h-[75px]">
        <div className="w-2/3 flex flex-row items-center justify-start pl-8 sm:w-3/7 sm:pl-12 2xl:w-2/6 lg:pl-18">
          <div className="flex items-center justify-center">
            <span className="mb-2 flex items-center justify-center text-[#f3961a]">
              <GiHouseKeys className="text-4xl sm:text-5xl" />
            </span>
            <span className="flex items-center justify-center">
              <h1 className="font-serif text-2xl text-[#ffffff] sm:text-3xl">Rentals</h1>
            </span>
          </div>
        </div>

        <div className="flex w-1/3 flex-row items-center justify-center sm:hidden">
          <div className="text-[#ffffff]" onClick={() => setDrop(!drop)}>
            <IoMenu size={35} />
          </div>
          <div>
            <div
              className={`absolute right-0 top-[57px] z-10 flex h-screen w-[150px] flex-col bg-[#0f3963] transition-transform duration-200 ease-in-out ${
                drop ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="mt-1.5 flex h-[50px] flex-row items-center justify-center" onClick={GoHome}>
                <h1 className="text-[20px] text-white hover:underline hover:decoration-white">Home</h1>
              </div>
              <div className="flex h-[50px] flex-row items-center justify-center" onClick={GoAbout}>
                <h1 className="text-[20px] text-white hover:underline hover:decoration-white">About</h1>
              </div>
              <div className="flex h-[50px] flex-row items-center justify-center" onClick={GoProperty}>
                <h1 className="text-[20px] text-white hover:underline hover:decoration-white">Properties</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden pr-8 sm:flex sm:w-[46%] sm:flex-row sm:items-center sm:justify-end sm:gap-8 md:gap-10 lg:pr-14">
          <div className="flex items-center justify-center">
            <h2
              className="text-[20px] text-white hover:cursor-pointer hover:underline hover:decoration-white md:text-[23px]"
              onClick={GoHome}
            >
              Home
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <h2
              className="text-[20px] text-white hover:cursor-pointer hover:underline hover:decoration-white md:text-[23px]"
              onClick={GoAbout}
            >
              About
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <h2
              className="text-[20px] text-white hover:cursor-pointer hover:underline hover:decoration-white md:text-[23px]"
              onClick={GoProperty}
            >
              Properties
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
