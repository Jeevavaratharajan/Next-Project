"use client";
import AdminDashboard from "@/components/adminDashboard/Dashboard";
import ProductApi from "@/server/productApi/AddProductApi";
import React, { useEffect, useState } from "react";

const Properties = () => {
  const [property, setProperty] = useState([]);

  const getProperty=()=>{
  ProductApi.getAll().then((res) => {
    console.log("Properties Data: ", res.data);
    setProperty(res?.data);
  });
  }

  useEffect(()=>{
getProperty();
  },[])
  return (
    <div>
      <div className="h-screen flex flex-row">
        <div className="w-2/6 sm:w-3/10">
          <AdminDashboard />
        </div>
        <div className="w-4/6 sm:w-6/8 h-full bg-[#e6ebef]">
          <div className="h-[80px] sm:h-[100px] border-2 border-amber-600  flex justify-center items-center pt-2 ">
            <h3
              className="text-[25px] sm:text-[35px] font-serif text-[#05325c] text-shadow-2xs "
              style={{ textShadow: "3px 4px 3px rgba(0,0,0,0.3)" }}
            >
              Properties List
            </h3>
          </div>
          <div>
            {property && property.length > 0 ? (
              <div>data
                
              </div>
            ) : (
              <div>No Properties</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
