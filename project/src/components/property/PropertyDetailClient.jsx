"use client";

import EnquiryModal from "@/components/property/EnquiryModal";
import PageLoader from "@/components/ui/PageLoader";
import ProductApi from "@/server/productApi/AddProductApi";
import React, { useEffect, useState } from "react";
import { FiMapPin } from "react-icons/fi";

const PropertyDetailClient = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState(null);
  const [error, setError] = useState("");
  const [activeImage, setActiveImage] = useState("");
  const [openEnquiry, setOpenEnquiry] = useState(false);

  useEffect(() => {
    const loadProperty = async () => {
      try {
        const response = await ProductApi.getById(id);
        const data = response.data.data;
        setProperty(data);
        setActiveImage(data?.Image?.[0] || "/image/homeaboutimage.jpg");
      } catch (err) {
        setError(err?.response?.data?.message || "Unable to load property details");
      } finally {
        setLoading(false);
      }
    };

    loadProperty();
  }, [id]);

  if (loading) {
    return <PageLoader title="Loading property details" subtitle="Please wait while we open the full property information." />;
  }

  if (error || !property) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4 text-center text-[#b42318]">
        {error || "Property not found"}
      </div>
    );
  }

  return (
    <div className="bg-[#e6ebef] py-6">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(15,57,99,0.14)]">
          <div className="grid gap-8 p-5 lg:grid-cols-[0.88fr_1.12fr] lg:p-8">
            <div className="order-1 lg:order-1">
              <div className="overflow-hidden rounded-[22px] bg-[#f7f9fc]">
                <img src={activeImage} alt={property.PropertyName} className="h-[320px] w-full object-cover sm:h-[460px]" />
              </div>

              <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">
                {property.Image?.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    onClick={() => setActiveImage(image)}
                    className={`overflow-hidden rounded-[14px] border-2 ${
                      activeImage === image ? "border-[#0f3963]" : "border-transparent"
                    }`}
                  >
                    <img src={image} alt={`${property.PropertyName}-${index}`} className="h-[82px] w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="order-2 flex flex-col justify-center lg:order-2">
              <div className="max-w-[520px]">
                <div className="w-full ">
                  <span className="rounded-[10px] bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0f3963]">
                    {property.PropertyType}
                  </span>
                  <h1 className="mt-4 text-3xl font-bold text-[#0f3963] sm:text-4xl">{property.PropertyName}</h1>
                  <p className="mt-3 flex items-center gap-2 text-sm text-[#5f7389]">
                    <FiMapPin />
                    {property.Location}
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[16px] bg-[#edf4fb] px-4 py-4">
                    <p className="text-[12px] uppercase tracking-[0.18em] text-[#7a92aa]">Parking</p>
                    <p className="mt-1 text-base font-semibold text-[#0f3963]">
                      {property.Parking ? "Available" : "Not Available"}
                    </p>
                  </div>
                  <div className="rounded-[16px] bg-[#fff4e7] px-4 py-4">
                    <p className="text-[12px] uppercase tracking-[0.18em] text-[#c18a34]">Pets</p>
                    <p className="mt-1 text-base font-semibold text-[#9a5b00]">
                      {property.Pets ? "Allowed" : "Not Allowed"}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-xl font-semibold text-[#0f3963]">Property Details</h2>
                  <div className="mt-4 space-y-4">
                    <div className="border-b border-[#e7edf4] pb-4">
                      <p className="text-[12px] uppercase tracking-[0.18em] text-[#8aa0b4]">Description</p>
                      <p className="mt-2 text-sm leading-7 text-[#566b81]">{property.Description}</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-[12px] uppercase tracking-[0.18em] text-[#8aa0b4]">Property Type</p>
                        <p className="mt-2 text-base font-semibold text-[#0f3963]">{property.PropertyType}</p>
                      </div>
                      <div>
                        <p className="text-[12px] uppercase tracking-[0.18em] text-[#8aa0b4]">Location</p>
                        <p className="mt-2 text-base font-semibold text-[#0f3963]">{property.Location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center flex-row">
                  <button className="theme-button min-w-[180px]" onClick={() => setOpenEnquiry(true)}>
                    Add Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal open={openEnquiry} onClose={() => setOpenEnquiry(false)} property={property} />
    </div>
  );
};

export default PropertyDetailClient;
