"use client";
import AdminDashboard from "@/components/adminDashboard/Dashboard";
import Spinner from "@/components/spinner/spinner";
import ProductApi from "@/server/productApi/ProductApi";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
const Properties = () => {
  const [propertyies, setPropertyies] = useState([]);
  const [load, setLoad] = useState(false);

  const getProperty = () => {
    ProductApi.getAll().then((res) => {
      console.log("Properties Data: ", res.data);
      setPropertyies(res?.data);
      setLoad(false);
    });
  };

  useEffect(() => {
    getProperty();
  }, []);
  return (
    <div className="h-screen flex flex-row">
      <div className="w-2/6 sm:w-3/10">
        <AdminDashboard />
      </div>
      <div className="w-4/6 sm:w-6/8 h-full bg-[#e6ebef]">
        <div className="h-[80px] sm:h-[100px]  flex justify-center items-center pt-2 shadow-lg ">
          <h3
            className="text-[25px] sm:text-[35px] font-sans text-[#05325c]  "
            style={{ textShadow: "3px 4px 3px rgba(0,0,0,0.2)" }}
          >
            Properties List
          </h3>
        </div>
        <div>
          {load ? (
            <Spinner />
          ) : (
            <div>
              {propertyies.map((property, key) => (
<div className="flex flex-col sm:flex-row sm:h-[90px] sm:items-center w-full px-4 py-2  shadow-md gap-2 sm:gap-0 sm:text-left text-center my-[5px] mx-[]">

  <div className="text-[14px] sm:text-[18px] sm:text-center  font-semibold text-[#05325c] w-full sm:w-1/5">
    🏡 {property.PropertyName}
  </div>

 
  <div className="text-[14px] sm:text-[18px] sm:text-center  text-gray-700 w-full sm:w-1/5">
    🏷️ {property.PropertyType}
  </div>

  
  <div className="text-[14px] sm:text-[18px] sm:text-center  text-gray-700 w-full sm:w-1/5">
    📍 {property.Location}
  </div>

  <div className="text-[14px] sm:text-[18px] sm:text-center  text-green-600 font-medium w-full sm:w-1/5">
    ✅ Available
  </div>

  <div className="w-full sm:w-1/5 flex justify-center">
    <button className=" border-4 border-red-600 text-red-900 hover:text-white px-4 py-1 rounded hover:bg-red-700 w-full sm:w-auto">
    Delete 
    </button>
  </div>
</div>



              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;
