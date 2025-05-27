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

        {/* carsoul */}
        <div className="flex flex-col justify-center items-center mt-0.5">
          <div className="relative overflow-hidden h-[550px] ">
            <div
              className="flex transition-transform duration-1500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Carousel image ${index + 1}`}
                  className="  w-full h-[550px] object-cover flex-shrink-0"
                />
              ))}
            </div>
            <div  className="background-overlay absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/50"
            >
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                  Find Your Perfect House 
                </h1>
                <p className="text-white text-lg sm:text-xl mt-2 font-medium drop-shadow-md">
                   Discover the best properties to buy or rent.
                </p>
             </div>
          </div>
        </div>
        
        {/* Explore */}
        
        <section className=" py-14  bg-white  text-zinc-900 ">
            <div className="px-4 lg:px-28">
              <div className="grid grid-cols-12 mb-12">
                <div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:px-14 text-center">
                  <h2 className="text-[25px] md:text-[45px] text-[#0f3963] leading-none font-bold ">Explore The Rental Types</h2>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-6 text-center">

                <div className="col-span-6 sm:col-span-4 md:col-span-2 group  ">
                  <div className="bg-blue-50 group-hover:bg-[#0f3963] rounded-[20px] border-2 border-blue-600/50 relative p-4 justify-items-center w-full ">
                    <IoHome className="text-[#0f3963] group-hover:text-blue-50 size-6 sm:size-18 " />
                    <h4 className="text-2xl text-[#0f3963] group-hover:text-blue-50 leading-6 font-bold mt-4">1 BHK</h4>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-4 md:col-span-2 group  ">
                  <div className="bg-blue-50 group-hover:bg-[#0f3963] rounded-[20px] border-2 border-blue-600/50 relative p-4 justify-items-center w-full ">
                    <IoHome className="text-[#0f3963] group-hover:text-blue-50 size-6 sm:size-18 " />
                    <h4 className="text-2xl text-[#0f3963] group-hover:text-blue-50 leading-6 font-bold mt-4">2 BHK</h4>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-4 md:col-span-2 group  ">
                  <div className="bg-blue-50 group-hover:bg-[#0f3963] rounded-[20px] border-2 border-blue-600/50 relative p-4 justify-items-center w-full ">
                    <IoHome className="text-[#0f3963] group-hover:text-blue-50 size-6 sm:size-18 " />
                    <h4 className="text-2xl text-[#0f3963] group-hover:text-blue-50 leading-6 font-bold mt-4">studio</h4>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-4 md:col-span-2 group  ">
                  <div className="bg-blue-50 group-hover:bg-[#0f3963] rounded-[20px] border-2 border-blue-600/50 relative p-4 justify-items-center w-full ">
                    <IoHome className="text-[#0f3963] group-hover:text-blue-50 size-6 sm:size-18 " />
                    <h4 className="text-2xl text-[#0f3963] group-hover:text-blue-50 leading-6 font-bold mt-4">office</h4>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-4 md:col-span-2 group  ">
                  <div className="bg-blue-50 group-hover:bg-[#0f3963] rounded-[20px] border-2 border-blue-600/50 relative p-4 justify-items-center w-full ">
                    <IoHome className="text-[#0f3963] group-hover:text-blue-50 size-6 sm:size-18 " />
                    <h4 className="text-2xl text-[#0f3963] group-hover:text-blue-50 leading-6 font-bold mt-4">villa</h4>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-4 md:col-span-2 group  ">
                  <div className="bg-blue-50 group-hover:bg-[#0f3963] rounded-[20px] border-2 border-blue-600/50 relative p-4 justify-items-center w-full ">
                    <IoHome className="text-[#0f3963] group-hover:text-blue-50 size-6 sm:size-18 " />
                    <h4 className="text-xl text-[#0f3963] group-hover:text-blue-50 leading-6 font-bold mt-4">Appartment</h4>
                  </div>
                </div>

              </div>
                
            </div>
        </section> 

        


        {/* About*/}
        <div className=" h-[130px] fs:h-[140px] sm:h-[210px] md:h-[240px] lg:h-[310px] xl:h-[345px]  flex flex-row  w-full">
          {/* Home Page About  remeber to do response i height */}
          <div className="w-6/10 sm:w-3/5  h-full sm:ml-10 sm:rounded-l-2xl bg-[#0f3963]">
            <div className="px-2 sm:px-4 sm:py-3 py-1 md:p-6 lg:p-8 xl:p-11 w-full h-full flex flex-col">
              <div className="w-full h-2/10 pt-0.5">
                <h3 className="font-bold text-[15px] sm:text-[18px] md:text-[22px] lg:text-[25px] xl:text-[35px] text-white sm:flex sm:items-center">
                  About Us
                </h3>
              </div>
              <div className="w-full h-6/10 pt-1 sm:hidden flex items-center">
                <p className="text-[12px] text-white ">
                  We offer a variety of rental homes, from 1BHK to family
                  apartments. Find homes for your budget and preferences easily
                </p>
              </div>
              <div className="w-full h-6/10 pt-1 hidden sm:flex items-center">
                <p className="text-[1.5vw] text-white  ">
                  We offer a wide range of rental homes, including 1BHK, 2BHK,
                  and family apartments. Our platform helps you find homes that
                  fit your budget and preferences. Enjoy a smooth and secure
                  rental process. Experience peace of mind with our verified
                  listings and easy navigation.
                </p>
              </div>
              <div className="w-full decoration-0  items-center">
                  <a className="text-blue-500 hover:text-blue-600 text-[12px] sm:text-[1.5vw]">Learn more about us
                    <span className="ml-2">&#8594;</span>
                  </a>
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


        {/* cards product */}
        <section className=" py-14  bg-white  text-zinc-900 ">
            <div className="px-4 lg:px-28">
              <div className="grid grid-cols-12 mb-12">
                <div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:px-14 text-center">
                  <h2 className="text-[25px] md:text-[45px] text-[#0f3963] leading-none font-bold mb-6">Discover Your Dream House Today</h2>
                   <p className="text-lg text-[#0f3963] leading-6">
                      Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-6 text-center">

                <div className="col-span-12 md:col-span-3 ">
                  <div className="bg-blue-50  rounded-[20px] hover:border-2 border-blue-600/50 relative p-4 ">
                    <img  src="https://cdn.easyfrontend.com/pictures/featured/featured_13_1.png"  alt="" className="h-auto max-w-full rounded-xl mx-auto mb-6"/>
                    <h4 className="text-2xl text-[#0f3963] leading-6 font-bold mb-4">Product Design</h4>
                    <p className="opacity-70 text-[#0f3963]">
                      Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
                    </p>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-3 ">
                  <div className="bg-blue-50  rounded-[20px] hover:border-2 border-blue-600/50 relative p-4 ">
                    <img  src="https://cdn.easyfrontend.com/pictures/featured/featured_13_1.png"  alt="" className="h-auto max-w-full rounded-xl mx-auto mb-6"/>
                    <h4 className="text-2xl text-[#0f3963] leading-6 font-bold mb-4">Product Design</h4>
                    <p className="opacity-70 text-[#0f3963]">
                      Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
                    </p>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-3 ">
                  <div className="bg-blue-50  rounded-[20px] hover:border-2 border-blue-600/50 relative p-4 ">
                    <img  src="https://cdn.easyfrontend.com/pictures/featured/featured_13_1.png"  alt="" className="h-auto max-w-full rounded-xl mx-auto mb-6"/>
                    <h4 className="text-2xl text-[#0f3963] leading-6 font-bold mb-4">Product Design</h4>
                    <p className="opacity-70 text-[#0f3963]">
                      Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
                    </p>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-3 ">
                  <div className="bg-blue-50  rounded-[20px] hover:border-2 border-blue-600/50 relative p-4 ">
                    <img  src="https://cdn.easyfrontend.com/pictures/featured/featured_13_1.png"  alt="" className="h-auto max-w-full rounded-xl mx-auto mb-6"/>
                    <h4 className="text-2xl text-[#0f3963] leading-6 font-bold mb-4">Product Design</h4>
                    <p className="opacity-70 text-[#0f3963]">
                      Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
                    </p>
                  </div>
                </div>
                
                
              </div>
            </div>
        </section>

        {/* Testimonials */}

        <section className=" py-14  bg-blue-50  text-zinc-900 ">
            <div className="px-4 lg:px-28">
              <div className="grid grid-cols-12 mb-6">
                <div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:px-14 text-center">
                  <h2 className="text-[25px] md:text-[45px] text-[#0f3963] leading-none font-bold">Testimonials</h2>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-6">

                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                  <div className="bg-white hover:shadow-xl  rounded-2xl transition duration-300 h-full p-6">
                    <div className="mt-4">
                      <p className="mb-6">
                        <span className="fas fa-star text-yellow-500"></span>
                        <span className="fas fa-star text-yellow-500"></span>
                        <span className="fas fa-star text-yellow-500"></span>
                        <span className="fas fa-star-half-alt text-yellow-500"></span>
                        <span className="fas fa-star text-yellow-200 "></span>
                      </p>
                      <p className="opacity-70 text-[#0f3963] mb-6">
                        This is a factor in the economy of a nation, and the administration takes the major choices.This is a
                        factor of a nation.
                      </p>
                      <div className="flex items-center">
                        <div className="mr-2">
                          <img src="https://cdn.easyfrontend.com/pictures/users/user2.jpg"  alt="" 
                          className="max-w-full h-auto rounded-full border border-blue-400" width="47"/>
                        </div>
                        <div>
                         <h4 className="text-xl text-[#0f3963] font-medium">Akshay Kumar</h4>
                         <p className="text-sm"><i>Founder / CEO</i></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                  <div className="bg-white hover:shadow-xl  rounded-2xl transition duration-300 h-full p-6">
                    <div className="mt-4">
                      <p className="mb-6">
                        <span className="fas fa-star text-yellow-500"></span>
                        <span className="fas fa-star text-yellow-500"></span>
                        <span className="fas fa-star text-yellow-500"></span>
                        <span className="fas fa-star-half-alt text-yellow-500"></span>
                        <span className="fas fa-star text-yellow-200 "></span>
                      </p>
                      <p className="opacity-70 text-[#0f3963] mb-6">
                        This is a factor in the economy of a nation, and the administration takes the major choices.This is a
                        factor of a nation.
                      </p>
                      <div className="flex items-center">
                        <div className="mr-2">
                          <img src="https://cdn.easyfrontend.com/pictures/users/user2.jpg"  alt="" 
                          className="max-w-full h-auto rounded-full border border-blue-400" width="47"/>
                        </div>
                        <div>
                         <h4 className="text-xl text-[#0f3963] font-medium">Akshay Kumar</h4>
                         <p className="text-sm"><i>Founder / CEO</i></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-6 md:col-span-3 lg:col-span-2">
                  <div className="bg-white hover:shadow-xl  rounded-2xl transition duration-300 h-full p-6">
                    <div className="mt-4">
                      <p className="mb-6">
                        <span className="fas fa-star text-yellow-500"></span>
                        <span className="fas fa-star text-yellow-500"></span>
                        <span className="fas fa-star text-yellow-500"></span>
                        <span className="fas fa-star-half-alt text-yellow-500"></span>
                        <span className="fas fa-star text-yellow-200 "></span>
                      </p>
                      <p className="opacity-70 text-[#0f3963] mb-6">
                        This is a factor in the economy of a nation, and the administration takes the major choices.This is a
                        factor of a nation.
                      </p>
                      <div className="flex items-center">
                        <div className="mr-2">
                          <img src="https://cdn.easyfrontend.com/pictures/users/user2.jpg"  alt="" 
                          className="max-w-full h-auto rounded-full border border-blue-400" width="47"/>
                        </div>
                        <div>
                         <h4 className="text-xl text-[#0f3963] font-medium">Akshay Kumar</h4>
                         <p className="text-sm"><i>Founder / CEO</i></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </section>

        
      </div>
    </div>
  );
};

export default page;
