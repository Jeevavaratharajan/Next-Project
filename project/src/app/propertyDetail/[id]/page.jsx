"use client";
import Spinner from "@/components/spinner/spinner";
import EnquiryAPI from "@/server/EnquiryAPI/EnquiryApi";
import ProductApi from "@/server/productApi/ProductApi";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PropertyDetail = () => {
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(true);
  const [popup, setPopup] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    propertyname: "",
    location: "",
    propertytype: "",
    db_id: "",
  });
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

  const handlechange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
      propertyname: product.PropertyName,
      location: product.Location,
      propertytype: product.PropertyType,
      db_id: product._id,
    }));
  };
  const SendMailData = () => {
    const res = EnquiryAPI.create(contact);
    console.log("response of api", res);

    setContact({
      name: "",
      phone: "",
      email: "",
      propertyname: "",
      location: "",
      propertytype: "",
      db_id: "",
    });
  };
  useEffect(() => {
    console.log("Contact Info Updated:", contact);
  }, [contact]);

  return (
    <div className={`min-h-screen  flex justify-center items-center py-[60px]`}>
      {load ? (
        <Spinner />
      ) : (
        <>
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
                  🏡 Property Name :
                </div>
                <div className="w-[55%] pl-3 text-[19px] font-medium text-gray-800">
                  {product.PropertyName}
                </div>
              </div>

              <div className="flex w-full min-h-[36px] mb-2">
                <div className="w-[45%] flex justify-end items-center pr-2 text-[18px] font-semibold text-[#063970]">
                 📍 Location :
                </div>
                <div className="w-[55%] pl-3 text-[19px] font-medium text-gray-800">
                  {product.Location}
                </div>
              </div>

              <div className="flex w-full min-h-[36px] mb-2">
                <div className="w-[45%] flex justify-end items-center pr-2 text-[18px] font-semibold text-[#063970]">
                 🏷️ Property Type :
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
                 🐾 Pets Allowed :
                </div>
                <div className="w-[55%] pl-3 text-[19px] font-medium text-gray-800">
                  {product.Pets ? "Yes" : "No"}
                </div>
              </div>

              <div className="flex w-full min-h-[36px] mb-2">
                <div className="w-[45%] flex justify-end items-center pr-2 text-[18px] font-semibold text-[#063970]">
                  ✅ Status :
                </div>
                <div className="w-[55%] pl-3 text-[19px] font-medium text-green-600">
                  Available
                </div>
              </div>

              <div className="flex w-full min-h-[36px]">
                <div className="w-[45%] flex justify-end items-start pr-2 text-[18px] font-semibold text-[#063970]">
                 📝 Description :
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

          {popup && (
            <div
              className={` absolute  z-40 top-43 sm:top-70 left-1/2 transform transition-all duration-700 ease-in-out -translate-x-1/2`}
            >
              <div className="h-[400px] lg:h-[400px] border-4  border-[#05325c] bg-white w-[320px] sm:w-[390px] rounded-[15px] p-5">
                <div className="w-full h-[20%] sm:h-[23%]">
                  <h2 className="h-full w-full font-semibold flex justify-center items-center text-[23px] sm:text-[30px] text-[#05325c] ">
                    Drop Your Contact Info
                  </h2>
                </div>
                <div className="h-[18%] flex justify-center items-center">
                  <input
                    name="name"
                    value={contact.name}
                    type="text"
                    onChange={handlechange}
                    placeholder="Name"
                    className="w-full h-[38px] text-[22px] text-gray-800 sm:text-[27px] text-center sm:h-[44px]  rounded-[5px] border-2 placeholder:text-center sm:placeholder:text-[25px] placeholder:text-gray-400"
                  />
                </div>
                <div className="h-[18%]  flex justify-center items-center ">
                  <input
                    type="text"
                    name="phone"
                    value={contact.phone}
                    onChange={handlechange}
                    placeholder="Phone Number"
                    className="w-full text-[22px] text-gray-800 sm:text-[27px] text-center h-[38px] sm:h-[44px]  rounded-[5px] border-2 placeholder:text-center sm:placeholder:text-[25px] placeholder:text-gray-400"
                  />
                </div>
                <div className="h-[18%] flex justify-center items-center">
                  <input
                    name="email"
                    value={contact.email}
                    type="text"
                    onChange={handlechange}
                    placeholder="Email"
                    className="w-full h-[38px] text-[22px] text-gray-800 sm:text-[27px] text-center sm:h-[44px]  rounded-[5px] border-2 placeholder:text-center sm:placeholder:text-[25px] placeholder:text-gray-400"
                  />
                </div>
                <div className="h-[20%]  my-[5px] w-full flex justify-center items-center">
                  <button
                    onClick={() => {
                      SendMailData();
                      setPopup(false);
                    }}
                    className=" bg-[#05325c] text-white  h-[90%] w-[80%]  my-[29px] mx-[25px] rounded-[20px] text-[24px] sm:text-[25px] hover:shadow-[0_12px_50px_rgba(0,0,0,0.4)] transition-all"
                  >
                    Send Enquiry
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PropertyDetail;
