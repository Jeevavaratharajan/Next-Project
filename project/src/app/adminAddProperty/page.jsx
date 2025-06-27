"use client";
import AdminDashboard from "@/components/adminDashboard/Dashboard";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductApi from "@/server/productApi/AddProductApi";

const AddProperty = () => {
  const [Propertydata, setPropertyData] = useState({
    PropertyName: "",
    Location: "",
    PropertyType: "",
    Description: "",
    Parking: "",
    Pets: "",
    Image: [],
  });
  const handlechange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = Array.from(files);
      if (file.length > 4) {
        alert("You can Only Upload 4 Images");
      }

      file.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPropertyData((prev) => ({
            ...prev,
            Image: [...prev.Image, reader.result],
          }));
        };
        reader.readAsDataURL(file);
      });
    } else {
      setPropertyData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    ProductApi.create(Propertydata)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error("something Wrong in Adding Property", err);
      });
  };
  console.log(Propertydata);
  console.log(process.env.NEXT_PUBLIC_API_URL, "hhh");

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_URL, "hhh");
  }, []);
  return (
    <div>
      <div className="h-screen w-full flex flex-row bg-[#e6ebef]">
        <div className="w-2/6 sm:w-3/10">
          <AdminDashboard />
        </div>
        <form className="w-4/6 sm:w-6/8 text-center" onSubmit={handlesubmit}>
          <div className="h-[100px] w-full flex justify-center items-end ">
            <div className="h-[40px] w-[200px] sm:w-[360px] sm:h-[45px] rounded-[10px] flex justify-center items-center bg-[#05325c]">
              <h2 className="text-white">Add Property</h2>
            </div>
          </div>
          <div className=" h-[45px] w-full flex justify-center items-center mt-[10px] ">
            <span>
              <input
                placeholder="Property Name"
                type="text"
                name="PropertyName"
                value={Propertydata.PropertyName}
                onChange={handlechange}
                className="w-48 sm:w-[360px] sm:h-[35px] h-[32px] rounded-[4px] border-2 text-center border-[#69849d]
             placeholder:text-[#1e476c]
             focus:outline-none focus:ring-0 focus:border-[#05325c]
             transition-colors duration-300"
              />
            </span>
          </div>
          <div className=" h-[45px] sm:h-[48px] w-full flex justify-center items-center ">
            <span>
              <input
                placeholder="Location"
                type="text"
                name="Location"
                value={Propertydata.Location}
                onChange={handlechange}
                className="w-48 sm:w-[360px] sm:h-[35px] h-[32px] rounded-[4px] border-2 text-center border-[#69849d]
             placeholder:text-[#1e476c]
             focus:outline-none focus:ring-0 focus:border-[#05325c]
             transition-colors duration-300"
              />
            </span>
          </div>
          <div className=" h-[45px] flex justify-center items-center ">
            <span>
              <select
                placeholder="Property Type"
                type="select"
                name="PropertyType"
                value={Propertydata.PropertyType}
                onChange={handlechange}
                className="w-48 sm:w-[360px] sm:h-[35px] h-[32px] rounded-[4px] border-2 text-center border-[#69849d]
             placeholder:text-[#1e476c]
             focus:outline-none focus:ring-0 focus:border-[#05325c]
             transition-colors duration-300"
              >
                <option className="text-[#1e476c]">Property Type</option>
                <option value={"1BHK"}>1BHK</option>
                <option value={"2BHK"}>2BHK</option>
                <option value={"3BHK"}>3BHK</option>
                <option value={"StudioRoom"}>Studio Room</option>
                <option value={"Villa"}>Villa</option>
              </select>
            </span>
          </div>

          <div className=" h-[45px] flex justify-center items-center ">
            <span>
              <input
                placeholder="Description"
                type="text"
                name="Description"
                value={Propertydata.Description}
                onChange={handlechange}
                className="w-48 sm:w-[360px] sm:h-[35px] h-[32px] rounded-[4px] border-2 text-center border-[#69849d]
             placeholder:text-[#1e476c]
             focus:outline-none  focus:border-[#05325c]
             transition-colors duration-300"
              />
            </span>
          </div>

          <div className=" h-[45px] flex justify-center items-center ">
            <span>
              <select
                placeholder="Parking"
                type="boolean"
                name="Parking"
                value={Propertydata.Parking}
                onChange={handlechange}
                className="w-48 sm:w-[360px] sm:h-[35px] h-[32px] rounded-[4px] border-2 text-center border-[#69849d]
             placeholder:text-[#1e476c]
             focus:outline-none focus:ring-0 focus:border-[#05325c]
             transition-colors duration-300"
              >
                <option className="text-[#1e476c]">Parking</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </span>
          </div>
          <div className=" h-[45px] flex justify-center items-center ">
            <span>
              <select
                placeholder="Pets"
                type="boolean"
                name="Pets"
                value={Propertydata.Pets}
                onChange={handlechange}
                className="w-48 sm:w-[360px] sm:h-[35px] h-[32px] rounded-[4px] border-2 text-center border-[#69849d]
             placeholder:text-[#1e476c]
             focus:outline-none focus:ring-0 focus:border-[#05325c]
             transition-colors duration-300"
              >
                <option className="text-[#1e476c]">Pets</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </span>
          </div>
          <div className="h-[65px] flex flex-col justify-center items-center">
            <div className="w-[120px] h-[50px] flex justify-center items-center border-2 border-[#69849d] rounded-md shadow-sm">
              <label className="h-[28px] w-[90px] bg-[#f8c076] text-[#05325c] hover:text-white rounded-[6px] hover:bg-[#f5ab48] transition duration-200 text-[13px] flex items-center justify-center cursor-pointer">
                Choose Image
                <input
                  type="file"
                  name="Image"
                  multiple
                  accept="image/*"
                  onChange={handlechange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div className=" h-[55px] flex justify-center items-center">
            <button className=" h-[30px] sm:h-[35px] w-[170px] sm:w-[180px] bg-[#0f3963]  hover:bg-[#05325c] rounded-[7px]  transition duration-200">
              <span className="flex h-full w-full justify-center items-center font-bold text-white">
                Add
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
