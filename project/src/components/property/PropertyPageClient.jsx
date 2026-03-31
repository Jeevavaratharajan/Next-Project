"use client";

import { fetchProperties, selectFilteredProperties } from "@/store/slices/propertySlice";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const PropertyPageClient = ({ initialType = "All" }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { status, error } = useSelector((state) => state.properties);
  const [activeType, setActiveType] = useState(initialType || "All");
  const properties = useSelector((state) => selectFilteredProperties(state, activeType));
  const propertyTypes = useMemo(() => ["All", "1BHK", "2BHK", "3BHK", "Studio", "Villa"], []);

  useEffect(() => {
    setActiveType(initialType || "All");
  }, [initialType]);

  useEffect(() => {
    dispatch(fetchProperties({ force: true }));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-[#e6ebef] py-6">
      <div className="mx-auto max-w-[1260px] px-4">
        <div className="mb-6 rounded-[18px] bg-[#063970] px-6 py-5 sm:px-8">
          <div className="text-[25px] font-sans text-white sm:text-[30px]">Properties</div>
        </div>

        <div className="mb-5 flex flex-wrap gap-3">
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`rounded-[8px] px-4 py-2 text-sm font-semibold transition ${
                activeType === type ? "bg-[#0f3963] text-white" : "bg-white text-[#0f3963]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {status === "loading" ? (
          <div className="flex h-[300px] items-center justify-center text-[#05325c]">Loading properties...</div>
        ) : error ? (
          <div className="flex h-[300px] items-center justify-center text-center text-[#b42318]">{error}</div>
        ) : properties && properties.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {properties.map((item) => (
              <button
                key={item._id}
                onClick={() => router.push(`/property/${item._id}`)}
                className="overflow-hidden rounded-[22px] bg-white text-left shadow-md transition hover:-translate-y-1"
              >
                <img
                  src={item?.Image?.[0] || "/image/homeaboutimage.jpg"}
                  alt={item?.PropertyName || "Property"}
                  className="h-[220px] w-full object-cover"
                />
                <div className="flex min-h-[132px] flex-col justify-between p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="line-clamp-2 text-[22px] font-bold text-[#0f3963]">{item?.PropertyName}</h2>
                    <span className="rounded-[8px] bg-blue-50 px-3 py-1 text-[12px] font-semibold text-[#0f3963]">
                      {item?.PropertyType}
                    </span>
                  </div>
                  <p className="mt-3 flex items-center gap-2 text-sm text-[#5f7389]">
                    <FiMapPin />
                    {item?.Location}
                  </p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[60vh] items-center justify-center text-[#05325c]">
            No properties found
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyPageClient;
