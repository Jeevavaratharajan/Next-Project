"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProductApi from "@/server/productApi/ProductApi";
import Spinner from "@/components/spinner/spinner";

const Properties = () => {
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(true);

  const getProduct = async () => {
    ProductApi.getAll().then((res) => {
      console.log("Product response in Property", res.data);
      if (res) {
        setProduct(res.data);
      }
      setLoad(false);
    });
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {load ? (
        <Spinner />
      ) : (
        <div
          className="h-[auto] sm:min-h-[800px] m-3 sm:m-6 rounded-t-[15px] sm:rounded-t-[20px] shadow-4xl"
          style={{ boxShadow: "0 12px 50px rgba(0, 0, 0, 0.8)" }}
        >
          <div className=" h-[59px]  sm:h-[80px] bg-[#063970]  rounded-t-[15px] sm:rounded-t-[20px] pl-[40px] sm:pl-[70px]">
            <div className=" h-full w-full flex justify-start items-center text-[25px] sm:text-[30px] text-white font-sans ">
              Properties
            </div>
          </div>
          <div className=" py-[15px] md:py-[40px] px-[10px] md:px-[50px] w-full">
                <div className="md:hidden">
                  {product.map((product, key) => (
                    <div
                      key={key}
                      className=" h-auto sm:h-[210px] mt-[10px] mx-[10px] p-[8px] rounded-xl bg-white hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-shadow duration-500 
                    max-[400px]:h-auto "
                    >
                      <Link href={`/propertyDetail/${product._id}`}>
                        <div className="h-full w-full flex flex-row gap-1 max-[400px]:flex-col ">
                          {/* Image Section */}
                          <div
                            className="w-[310px]  shadow-md max-[350px]:w-full h-auto "
                            style={{
                              boxShadow: "0 12px 50px rgba(0, 0, 0, 0.3)",
                            }}
                          >
                            <img
                              src={product.Image[0]}
                              alt="Image"
                              className="w-full h-full object-fill rounded-[5px]"
                            />
                          </div>

                          {/* Text Section */}
                          <div className="w-[360px] sm:w-[400px] flex flex-col justify-between text-[14px] text-gray-500 border-[1px] border-[#063970] rounded-lg p-3 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white max-[400px]:w-full max-[400px]:text-[12px] max-[400px]:p-2">
                            {/* Property Name */}
                            <div className="flex">
                              <span className="w-[40%] text-right font-semibold text-[#063970] pr-2 max-[400px]:text-[12px]">
                                Property:
                              </span>
                              <span className="w-[60%] text-gray-900 break-words">
                                {product.PropertyName || (
                                  <span className="text-gray-400">N/A</span>
                                )}
                              </span>
                            </div>

                            {/* Location */}
                            <div className="flex">
                              <span className="w-[40%] text-right font-semibold text-[#063970] pr-2 max-[400px]:text-[12px]">
                                Location:
                              </span>
                              <span className="w-[60%] text-gray-900 break-words">
                                {product.Location || (
                                  <span className="text-gray-400">N/A</span>
                                )}
                              </span>
                            </div>

                            {/* Type */}
                            <div className="flex">
                              <span className="w-[40%] text-right font-semibold text-[#063970] pr-2 max-[400px]:text-[12px]">
                                Type:
                              </span>
                              <span className="w-[60%] text-gray-900 break-words">
                                {product.PropertType || (
                                  <span className="text-gray-400">N/A</span>
                                )}
                              </span>
                            </div>
                            <div className="flex">
                              <span className="w-[40%] text-right font-semibold text-[#063970] pr-2 max-[400px]:text-[12px]">
                                Status :
                              </span>
                              <span className="w-[60%] text-gray-900 break-words">
                                {product.PropertType || (
                                  <span className="text-gray-400">N/A</span>
                                )}
                              </span>
                            </div>

                            {/* Description */}
                            {/* <div className="flex h-[50%] ">
                            <span className="w-[40%] text-right font-semibold text-[#063970] pr-2 max-[400px]:text-[12px]">
                              Description:
                            </span>
                            <span className="w-[60%] text-gray-900 break-words overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 ">
                              {product.Description || (
                                <span className="text-gray-400">N/A</span>
                              )}
                            </span>
                          </div> */}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* lap respone */}
                <div
                  className="hidden md:flex  flex-wrap w-full justify-center  "
                  style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
                >
                  {product.map((product, key) => (
                    <div
                      className="  h-[350px] w-[290px]  mx-[17px] my-[30px] p-[5px]"
                      style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
                      key={key}
                    >
                      <Link href={`/propertyDetail/${product._id}`}>
                        <div className="h-full w-full p-[5px] border-2 border-[#063970]">
                          <div
                            className="h-[48%] p-[2px] "
                            style={{
                              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
                            }}
                          >
                            <img
                              src={product.Image[0]}
                              alt="Image"
                              className="w-full h-full object-fill rounded-[5px]"
                            />
                          </div>
                          <div className=" h-[52%] py-[5px] px-[10px]  flex flex-col gap-1 ">
                            <div className="h-[20%] flex flex-row">
                              <div className="h-full w-[40%] flex font-semibold text-[#063970] justify-end items-center">
                                Property :
                              </div>
                              <div className="h-full w-[60%] flex  justify-start items-center pl-[8px]  text-[15px] font-semibold">
                                {product.PropertyName || (
                                  <span className="text-gray-400">N/A</span>
                                )}
                              </div>
                            </div>
                            <div className="h-[20%]   flex flex-row">
                              <div className="h-full w-[40%] flex font-semibold text-[#063970] justify-end items-center">
                                Location :
                              </div>
                              <div className="h-full w-[60%] flex  justify-start items-center pl-[8px]   text-[15px] font-semibold">
                                {product.Location || (
                                  <span className="text-gray-400">N/A</span>
                                )}
                              </div>
                            </div>
                            <div className="h-[20%]  0 flex flex-row">
                              <div className="h-full w-[40%] flex font-semibold text-[#063970]  justify-end items-center ">
                                Type :
                              </div>
                              <div className="h-full w-[60%] flex  justify-start items-center pl-[8px]  text-[15px] font-semibold">
                                {product.PropertType || (
                                  <span className="text-gray-400">N/A</span>
                                )}
                              </div>
                            </div>
                            <div className="h-[20%]  0 flex flex-row">
                              <div className="h-full w-[40%] flex font-semibold text-[#063970] justify-end items-center  ">
                                Status :
                              </div>
                              <div className="h-full w-[60%] flex  justify-start items-center pl-[8px]  text-[15px] font-semibold">
                                {product.PropertType || (
                                  <span className="text-gray-400">N/A</span>
                                )}
                              </div>
                            </div>

                            {/* <div className="h-[40%] flex flex-row ">
                            <div className="h-full w-[40%] flex font-semibold text-[#063970] justify-end items-start">
                              Description :
                            </div>
                            <div className=" whitespace-pre-wrap  leading-tight h-full w-[60%]  flex overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 justify-start items-start pl-[8px]  text-[15px] font-semibold">
                              {product.Description || (
                                <span className="text-gray-400">N/A</span>
                              )}
                            </div>
                          </div> */}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
         
          </div>
       
      )}
    </>
  );
};

export default Properties;
