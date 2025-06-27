"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AdminDashboard = () => {
  const router = useRouter();
  const GoAddProperty = () => {
    router.push("/adminAddProperty");
  };
  const GoProperties = () => {
    router.push("/adminPropertyList");
  };
  return (
    <div>
      <div className="h-screen bg-[#0f3963]">
        <div className=" h-[70px] sm:h-[100px] flex justify-center items-center ">
          <h3 className="font-semibold text-[17px] sm:text-[28px] md:text-[32px] text-[#f3961a] ">
            Dash Board
          </h3>
        </div>
        <div className="h-[50px] sm:h-[80px] m-y-3 flex justify-center items-center hover:bg-[#375b7d]">
          <button
            className="text-[16px] sm:text-[22px] md:text-[24px] text-white font-semibold"
            onClick={GoAddProperty}
          >
            Add Property
          </button>
        </div>
        <div className="h-[50px] sm:h-[80px] m-y-3 flex justify-center items-center hover:bg-[#375b7d]">
          <button
            className="text-[16px] sm:text-[22px] md:text-[24px] text-white"
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
