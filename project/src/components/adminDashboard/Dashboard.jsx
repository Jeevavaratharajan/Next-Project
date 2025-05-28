"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AdminDashboard = () => {
  const router = useRouter();
  const GoAddProperty = () => {
    router.push("/addProperty");
  };
  const GoProperties = () => {
    router.push("/properties");
  };
  return (
    <div>
      <div className="h-screen bg-[#05325c]">
        <div className=" h-[70px] sm:h-[100px] flex justify-center items-center ">
          <h3 className="font-bold text-[17px] sm:text-[30px] text-white">
            Dash Board
          </h3>
        </div>
        <div className="h-[50px] sm:h-[80px] m-y-3 flex justify-center items-center hover:bg-[#375b7d]">
          <button
            className="text-[16px] sm:text-[25px] text-white"
            onClick={GoAddProperty}
          >
            Add Property
          </button>
        </div>
        <div className="h-[50px] sm:h-[80px] m-y-3 flex justify-center items-center hover:bg-[#375b7d]">
          <button
            className="text-[16px] sm:text-[25px] text-white"
            onClick={GoProperties}
          >
            Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
