"use client";
import React from "react";
import { useState, useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { GrFormNextLink } from "react-icons/gr";
const page = () => {
  const images = [
    "/image/image1.jpg",
    "/image/image2.jpg",
    "/image/image3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className=" flex flex-col">
        <div className="flex flex-col justify-center items-center mt-0.5">
          <div className="relative overflow-hidden h-[50%] ">
            <div
              className="flex transition-transform duration-1500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Carousel image ${index + 1}`}
                  className="  w-full h-[full] object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
        {/* carsoul */}
        <div className="bg-white h-32 sm:h-48 flex flex-col justify-center items-center">
          <div className="w-full flex justify-center items-center h-4 sm:h-6">
            <h2 className="text-[13px] font-bold sm:text-[20px] SmallBold">
              Explore The Rental Types
            </h2>
          </div>

          <div className="w-full flex flex-row justify-center items-center  h-20 sm:h-32 lg:w-[800px]">
            <div className="w-1/4 flex justify-center">
              <div className="  h-[52px] w-[56px]  sm:h-[70px] sm:w-[80px] flex flex-col justify-center items-center rounded-[4px] bg-[#0f3963]">
                <IoHome className="text-[#F3F3E0] size-6 sm:size-8 " />
                <span className="font-sans text-[15px] h-[18px] sm:text-[18px] text-[#F3F3E0]">
                  1BHK
                </span>
              </div>
            </div>
            <div className="w-1/4 flex justify-center">
              <div className="  h-[52px] w-[56px] sm:h-[70px] sm:w-[80px] flex flex-col justify-center items-center rounded-[4px] bg-[#0f3963]">
                <IoHome className="text-[#F3F3E0] size-6 sm:size-8  " />
                <span className="font-sans text-[15px] h-[18px] sm:text-[18px] text-[#F3F3E0]">
                  2BHK
                </span>
              </div>
            </div>
            <div className="w-1/4 flex justify-center">
              <div className="  h-[52px] w-[56px]  sm:h-[70px] sm:w-[80px] flex flex-col justify-center items-center rounded-[4px] bg-[#0f3963]">
                <IoHome className="text-[#F3F3E0] size-6 sm:size-8  " />
                <span className="font-sans text-[15px] h-[18px] sm:text-[18px] text-[#F3F3E0]">
                  Studio
                </span>
              </div>
            </div>
            <div className="w-1/4 flex justify-center">
              <div className="  h-[52px] w-[56px]  sm:h-[70px] sm:w-[80px] flex flex-col justify-center items-center rounded-[4px] bg-[#0f3963]">
                <IoHome className="text-[#F3F3E0] size-6 sm:size-8  " />
                <span className="font-sans text-[15px] h-[18px] sm:text-[18px] text-[#F3F3E0]">
                  Villa
                </span>
              </div>
            </div>
            <div className="w-1/4  justify-center sm:flex hidden">
              <div className="  h-14 w-14 sm:h-[70px] sm:w-[80px] flex flex-col justify-center items-center rounded-[4px] bg-[#0f3963]">
                <IoHome className="text-[#F3F3E0] size-6 sm:size-8  " />
                <span className="font-sans text-[15px] h-[18px] sm:text-[18px] text-[#F3F3E0]">
                  Appart
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* explore */}

        <div className=" h-[130px] fs:h-[140px] sm:h-[210px] md:h-[240px] lg:h-[310px] xl:h-[345px]  flex flex-row  w-full">
          {/* Home Page About  remeber to do response i height */}
          <div className="w-6/10 sm:w-3/5  h-full bg-[#0f3963] ">
            <div className="px-2 sm:px-4 sm:py-3 py-1 md:p-6 lg:p-8 xl:p-11 w-full h-full flex flex-col">
              <div className="w-full h-2/10 pt-0.5">
                <h3 className="font-bold text-[15px] sm:text-[18px] md:text-[22px] lg:text-[25px] xl:text-[35px] text-white sm:flex sm:items-center">
                  About Us
                </h3>
              </div>
              <div className="w-full h-6/10 pt-1 sm:hidden flex items-center">
                <p className="text-[12px] text text-justify text-white ">
                  We offer a variety of rental homes, from 1BHK to family
                  apartments. Find homes for your budget and preferences easily
                </p>
              </div>
              <div className="w-full h-6/10 pt-1 hidden sm:flex items-center">
                <p className="text-[14px] text text-justify text-white lg:text-[18px] xl:text-[21px] ">
                  We offer a wide range of rental homes, including 1BHK, 2BHK,
                  and family apartments. Our platform helps you find homes that
                  fit your budget and preferences. Enjoy a smooth and secure
                  rental process. Experience peace of mind with our verified
                  listings and easy navigation.
                </p>
              </div>
              <div className="w-full h-2/10 pt-[3px] hover:underline hover:decoration-white flex flex-row items-center">
                <h3 className="text-[13px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[33px] font-semibold text-white">
                  More About Us
                </h3>
                <span className="pt-[4px] sm:pt-[6px] lg:pt-[14px]">
                  <GrFormNextLink className="text-white size-5 sm:size-7 xl:size-[40px] " />
                </span>
              </div>
            </div>
          </div>

          <div className="w-4/10 sm:w-2/5 h-full">
            <img
              src="/image/homeaboutimage.jpg"
              alt="image"
              width={100}
              height={100}
              className="w-full h-full object-fill"
            />
          </div>
        </div>

        <div className=" h-[70px] md:h-[80px] w-full ">
          <div className=" h-[60px] sm:h-[75px] md:h-[90px] lg:h-[110px] flex flex-col justify-center items-center">
            <div className="flex justify-center items-center pb-0.5 ">
              <h5 className="text-[13px] sm:text-[18px] lg:text-[22px]">
                Discover Your Dream Home Today.
              </h5>
            </div>
            <div className="flex justify-center ">
              <div className="h-0.5  bg-[#0f3963] w-[220px] lg:w-[350px]"></div>
            </div>
            <div className="flex justify-center pt-1">
              <h6 className=" sm:flex sm:text-[12px] lg:text-[15px] hidden">
                Explore our latest properties and discover the perfect Blend of
                Comfort and Style
              </h6>
              <h6 className="text-[10px] sm:text-[12px] lg:text-[15px sm:hidden">
                Explore our latest properties and discover the perfect One
              </h6>
            </div>
          </div>
        </div>
        <div className=" hidden sm:flex w-full h-[300px] lg:h-[390px] xl:h-[510px]  items-center">
          <div className="w-full h-[90%]  flex flex-row justify-evenly items-center">
            <div className="w-5/17 h-full rounded-[10px] border-[2px] border-[#649ac9]"></div>
            <div className="w-5/17 h-full rounded-[10px] border-[2px] border-[#649ac9]"></div>
            <div className="w-5/17 h-full rounded-[10px] border-[2px] border-[#649ac9]"></div>
          </div>
        </div>

        <div className="w-full h-[130px] bg-white flex flex-col justify-center items-center   ">
          <span>Testimonials</span>
          <div className="flex justify-center items-center h-[80px] w-8/10 rounded-[13px] bg-[#b7c4d0] ">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
