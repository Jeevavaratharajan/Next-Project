"use client";

import { testimonials } from "@/mock/homeData";
import React, { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Page = () => {
  const images = ["/image/image1.jpg", "/image/image2.jpg", "/image/image3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const GoAbout = () => {
    router.push("/about");
  };

  const GoPropertyByType = (type) => {
    router.push(`/property?type=${encodeURIComponent(type)}`);
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <div className="relative overflow-hidden max-h-[550px]">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Carousel image ${index + 1}`}
                  className="w-full max-h-[550px] object-cover flex-shrink-0"
                />
              ))}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 px-4 text-center">
              <h1 className="text-[22px] font-bold text-white drop-shadow-2xl md:text-[45px] md:text-5xl">
                Find Your Perfect House
              </h1>
              <p className="mt-2 text-[12px] font-medium text-white drop-shadow-md md:text-[38px]">
                Discover the best properties to buy or rent.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-white py-4 text-zinc-900 sm:py-8">
          <div className="px-4 lg:px-28">
            <div className="mb-8 grid grid-cols-12 sm:mb-12">
              <div className="col-span-12 text-center lg:col-span-8 lg:col-start-3 lg:px-14">
                <h2 className="text-[22px] font-bold leading-none text-[#0f3963] md:text-[45px]">
                  Explore The Rental Types
                </h2>
              </div>
            </div>
            <div className="flex snap-x snap-mandatory justify-evenly space-x-4 overflow-x-auto pb-2">
              {["1BHK", "2BHK", "3BHK", "Studio", "Villa"].map((type) => (
                <button key={type} className="snap-start group w-36" onClick={() => GoPropertyByType(type)}>
                  <div className="relative w-full justify-items-center rounded-[20px] border-2 border-blue-600/50 bg-[#0f3963] p-4 group-hover:bg-blue-50">
                    <IoHome className="size-6 text-blue-50 group-hover:text-[#0f3963] sm:size-18" />
                    <h4 className="mt-4 text-2xl font-bold leading-6 text-blue-50 group-hover:text-[#0f3963]">{type}</h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="flex max-h-80 w-full flex-col sm:flex-row">
          <div className="w-full bg-[#0f3963] sm:ml-10 sm:w-3/5 sm:rounded-l-2xl">
            <div className="flex h-full w-full flex-col px-2 py-4 sm:px-4 sm:py-4 md:p-6 lg:p-8 xl:p-11">
              <div className="w-full pt-0.5">
                <h3 className="text-[22px] font-bold text-white md:text-[20px] lg:text-[25px] xl:text-[35px] sm:flex sm:items-center">
                  About Us
                </h3>
              </div>
              <div className="flex w-full items-center pt-1 sm:hidden">
                <p className="mt-4 text-base font-medium text-gray-100 sm:text-xl">
                  We offer a variety of rental homes, from 1BHK to family apartments. Find homes for your budget and preferences easily
                </p>
              </div>
              <div className="hidden w-full items-center pt-1 sm:flex">
                <p className="mt-4 text-base font-medium text-gray-100 sm:text-xl">
                  We offer a wide range of rental homes, including 1BHK, 2BHK, and family apartments. Our platform helps you find homes that fit your budget and preferences. Enjoy a smooth and secure rental process. Experience peace of mind with our verified listings and easy navigation.
                </p>
              </div>
              <div className="w-full items-center">
                <a className="text-[12px] text-blue-500 hover:text-blue-600 sm:text-[1.5vw]" onClick={GoAbout}>
                  Learn more about us
                  <span className="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
          </div>

          <div className="hidden h-fit max-h-fit w-4/10 sm:block sm:w-2/5">
            <img
              src="/image/homeaboutimage.jpg"
              alt="image"
              width={100}
              height={100}
              className="w-full h-auto"
            />
          </div>
        </div>

        <section className="hidden bg-white py-14 text-zinc-900 sm:block">
          <div className="px-4 lg:px-28">
            <div className="mb-12 grid grid-cols-12">
              <div className="col-span-12 text-center lg:col-span-8 lg:col-start-3 lg:px-14">
                <h2 className="mb-6 text-[22px] font-bold leading-none text-[#0f3963] md:text-[45px]">
                  Discover Your Dream House Today
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6 text-center">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="col-span-12 md:col-span-3">
                  <div className="relative rounded-[20px] border-blue-600/50 bg-blue-50 p-4 hover:border-2">
                    <img
                      src="https://cdn.easyfrontend.com/pictures/featured/featured_13_1.png"
                      alt="image"
                      className="mx-auto mb-6 h-auto max-w-full rounded-xl"
                    />
                    <h4 className="mb-4 text-2xl font-bold leading-6 text-[#0f3963]">Product Design</h4>
                    <p className="text-[#0f3963] opacity-70">
                      Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-8 text-zinc-900 sm:py-14">
          <div className="px-4 lg:px-12">
            <div className="mb-6 grid grid-cols-12">
              <div className="col-span-12 text-center lg:col-span-8 lg:col-start-3 lg:px-14">
                <h2 className="text-[22px] font-bold leading-none text-[#0f3963] md:text-[45px]">Testimonials</h2>
              </div>
            </div>
            <div className="flex snap-x snap-mandatory justify-evenly space-x-4 overflow-x-auto pb-2">
              {testimonials.map((item) => (
                <div key={item.id} className="snap-start min-w-64">
                  <div className="h-full rounded-2xl bg-white p-6 transition duration-300 hover:shadow-xl">
                    <div className="mt-4">
                      <p className="mb-6">
                        <span className="fas fa-star text-yellow-500"></span>
                        <span className="fas fa-star text-yellow-500"></span>
                        <span className="fas fa-star text-yellow-500"></span>
                        <span className="fas fa-star-half-alt text-yellow-500"></span>
                        <span className="fas fa-star text-yellow-200"></span>
                      </p>
                      <p className="mb-6 text-[#0f3963] opacity-70">{item.review}</p>
                      <div>
                        <h4 className="text-xl font-medium text-[#0f3963]">{item.name}</h4>
                        <p className="text-sm">
                          <i>{item.role}</i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
