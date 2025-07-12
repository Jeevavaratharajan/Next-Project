"use client";
import ProductApi from "@/server/productApi/ProductApi";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PropertyDetail = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const id = params.id;

  const getProduct = (id) => {
    ProductApi.getById(id).then((res) => {
      if (res) {
        setProduct(res?.data);
      }
    });
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <div className="h-auto flex justify-center items-center py-[60px] ">
      <div
        className="h-auto w-[1000px] p-[1px] md:pt-[5px] mx-[60px] rounded-[15px] "
        style={{ boxShadow: "0 12px 50px rgba(0, 0, 0, 0.1)" }}
      >
        {/* Image - No Change */}
        <div className="w-full h-auto p-[3px]">
          <img
            src={product.Image}
            className="max-h-[550px] w-full object-contain rounded-[10px]"
          />
        </div>

        {/* ✅ Detail Section Design Enhanced Below */}
        <div className="h-auto w-full px-[15px] py-[20px] rounded-md shadow-inner bg-gray-100">
          <div className="flex w-full min-h-[36px] mb-2">
            <div className="w-[45%] flex justify-end items-center pr-2 text-[18px] font-semibold text-[#063970]">
              Property Name :
            </div>
            <div className="w-[55%] pl-3 text-[19px] font-medium text-gray-800">
              {product.PropertyName}
            </div>
          </div>

          <div className="flex w-full min-h-[36px] mb-2">
            <div className="w-[45%] flex justify-end items-center pr-2 text-[18px] font-semibold text-[#063970]">
              Location :
            </div>
            <div className="w-[55%] pl-3 text-[19px] font-medium text-gray-800">
              {product.Location}
            </div>
          </div>

          <div className="flex w-full min-h-[36px] mb-2">
            <div className="w-[45%] flex justify-end items-center pr-2 text-[18px] font-semibold text-[#063970]">
              Property Type :
            </div>
            <div className="w-[55%] pl-3 text-[19px] font-medium text-gray-800">
              {product.PropertyType}
            </div>
          </div>

          <div className="flex w-full min-h-[36px] mb-2">
            <div className="w-[45%] flex justify-end items-center pr-2 text-[18px] font-semibold text-[#063970]">
              Parking :
            </div>
            <div className="w-[55%] pl-3 text-[19px] font-medium text-gray-800">
              {product.Parking ? "Yes" : "No"}
            </div>
          </div>

          <div className="flex w-full min-h-[36px] mb-2">
            <div className="w-[45%] flex justify-end items-center pr-2 text-[18px] font-semibold text-[#063970]">
              Pets Allowed :
            </div>
            <div className="w-[55%] pl-3 text-[19px] font-medium text-gray-800">
              {product.Pets ? "Yes" : "No"}
            </div>
          </div>

          <div className="flex w-full min-h-[36px] mb-2">
            <div className="w-[45%] flex justify-end items-center pr-2 text-[18px] font-semibold text-[#063970]">
              Status :
            </div>
            <div className="w-[55%] pl-3 text-[19px] font-medium text-green-600">
              Available
            </div>
          </div>

          <div className="flex w-full min-h-[36px]">
            <div className="w-[45%] flex justify-end items-start pr-2 text-[18px] font-semibold text-[#063970]">
              Description :
            </div>
            <div className="w-[55%] pl-3 text-[18px] font-medium text-gray-800">
              {product.Description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
