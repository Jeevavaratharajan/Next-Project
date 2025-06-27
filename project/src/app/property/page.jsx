"use client";
import ProductApi from "@/server/productApi/AddProductApi";
import React, { useEffect, useState } from "react";

const Properties = () => {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    ProductApi.getAll().then((res) => {
      console.log("Product response in Property", res);
      if (res) {
        setProduct(res.data);
      }
    });
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div
        className="h-screen m-3 sm:m-6 rounded-t-[15px] sm:rounded-t-[20px] shadow-4xl"
        style={{ boxShadow: "0 12px 50px rgba(0, 0, 0, 0.8)" }}
      >
        <div className=" h-[59px]  sm:h-[80px] bg-[#063970]  rounded-t-[15px] sm:rounded-t-[20px] pl-[40px] sm:pl-[70px]">
          <div className=" h-full w-full flex justify-start items-center text-[25px] sm:text-[30px] text-white font-sans ">
            Properties
          </div>
        </div>
        <div>
          {product && product.length > 0 ? <div>
          {product.map}
          </div> : <div>no hiii</div>}
        </div>
      </div>
    </>
  );
};

export default Properties;
