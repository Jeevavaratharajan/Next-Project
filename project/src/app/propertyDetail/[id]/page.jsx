"use client";
import Spinner from "@/components/spinner/spinner";
import ProductApi from "@/server/productApi/ProductApi";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PropertyDetail = () => {
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(true);
  const [popup, setPopup] = useState(false);
  const params = useParams();
  const id = params.id;

  const getProduct = (id) => {
    ProductApi.getById(id).then((res) => {
      if (res) {
        setProduct(res?.data);
      }
      setLoad(false);
    });
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <div className={`h-auto flex justify-center items-center py-[60px]`}>
      {load ? (
        <Spinner />
      ) : (
        <div>
          <div
            className={`h-auto max-w-[800px] p-[1px] md:pt-[5px] mx-[60px] rounded-[15px] ${
              popup ? "blur-[8px]" : ""
            }`}
            style={{ boxShadow: "0 12px 50px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="w-full h-auto p-[3px]">
              <img
                src={product.Image}
                className="max-h-[550px] w-full object-contain rounded-[10px]"
              />
            </div>

            <div className="h-auto w-full px-[15px] py-[15px] rounded-md shadow-inner bg-gray-100">
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

            <div className="border-2 border-gray-800 h-[50px] sm:h-[60px] m-[5px] rounded-[15px] flex justify-center items-center bg-[#05325c] ">
              <button
                className="text-white w-full h-full text-[17px] sm:text-[20px]"
                onClick={() => {
                  setPopup(true);
                }}
              >
                For Enquiry
              </button>
            </div>
          </div>

          {/* ✅ Popup Section Fixed */}
          {popup && (
            <div className="fixed inset-0 z-50 bg-opacity-40 flex justify-center items-center">
              <div className="border-2 border-amber-700 h-[50%] bg-white w-[60%] sm:w-[50%] md:w-[45%] lg:w-[40%] rounded-md p-4">
                <h2 className="text-xl font-semibold text-center text-[#05325c] mb-4">
                  Enquiry Form
                </h2>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full h-[40px] mb-3 p-2 rounded-md border-2"
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-[40px] mb-3 p-2 rounded-md border-2"
                />
                <button
                  onClick={() => setPopup(false)}
                  className="w-full bg-[#05325c] text-white py-2 rounded-md mt-2"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
