"use client";

import PageLoader from "@/components/ui/PageLoader";
import ProductApi from "@/server/productApi/AddProductApi";
import { fetchProperties } from "@/store/slices/propertySlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FiEdit2, FiMapPin, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const PropertyListPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { items, status } = useSelector((state) => state.properties);
  const [deletingId, setDeletingId] = React.useState("");

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      setDeletingId(id);
      await ProductApi.delete(id);
      await dispatch(fetchProperties({ force: true }));
      alert("Property deleted successfully");
    } catch (error) {
      alert(error?.response?.data?.message || error?.message || "Unable to delete property");
    } finally {
      setDeletingId("");
    }
  };

  if (status === "loading" && items.length === 0) {
    return <PageLoader title="Loading admin properties" subtitle="Fetching listings for edit and delete actions." />;
  }

  return (
    <div className="min-h-screen bg-[#e9f0f6]">
      <div className="mx-auto max-w-[1180px] px-4 py-5 sm:px-6">
        <div className="mb-4 flex flex-wrap items-center gap-3 rounded-[20px] bg-[#05325c] px-4 py-3 text-white shadow-md">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="rounded-[10px] bg-white/12 px-4 py-2 text-sm font-medium transition hover:bg-white/18"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => router.push("/adminAddProperty")}
            className="rounded-[10px] bg-white/12 px-4 py-2 text-sm font-medium transition hover:bg-white/18"
          >
            Add Property
          </button>
          <button
            type="button"
            onClick={() => router.push("/adminPropertyList")}
            className="rounded-[10px] bg-white/12 px-4 py-2 text-sm font-medium transition hover:bg-white/18"
          >
            Manage Property
          </button>
        </div>

        <div className="px-1 py-3 sm:px-2">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[620px]">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#f3961a]">Admin property list</p>
              <h1 className="mt-2 text-3xl font-bold text-[#0f3963]">Manage Properties</h1>
              <p className="mt-2 text-sm leading-6 text-[#5f7389]">Edit or delete each property from a finished admin list instead of a raw row output.</p>
            </div>
            <Link href="/adminAddProperty" className="theme-button">
              Add New Property
            </Link>
          </div>

          {items.length > 0 ? (
            <div className="grid gap-5 xl:grid-cols-2">
              {items.map((item) => (
                <div key={item._id} className="rounded-[22px] border border-[#d3dce5] bg-white p-4 shadow-sm">
                  <div className="flex min-h-[112px] gap-4">
                    <img src={item.Image?.[0]} alt={item.PropertyName} className="h-[112px] w-[112px] rounded-[18px] object-cover" />
                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h2 className="text-lg font-semibold text-[#0f3963] sm:text-xl">{item.PropertyName}</h2>
                          <p className="mt-1 flex items-center gap-2 text-sm text-[#5f7389]">
                            <FiMapPin />
                            {item.Location}
                          </p>
                        </div>
                        <span className="rounded-full bg-[#edf4fb] px-3 py-1 text-xs font-semibold text-[#0f3963]">{item.PropertyType}</span>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className={`rounded-full px-3 py-2 text-xs font-semibold ${item.Parking ? "bg-[#e4f6ed] text-[#1f8a5b]" : "bg-[#f4f6f8] text-[#5f7389]"}`}>
                          {item.Parking ? "Parking yes" : "Parking no"}
                        </span>
                        <span className={`rounded-full px-3 py-2 text-xs font-semibold ${item.Pets ? "bg-[#fff2e1] text-[#c77800]" : "bg-[#f4f6f8] text-[#5f7389]"}`}>
                          {item.Pets ? "Pets yes" : "Pets no"}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center justify-end gap-3">
                        <Link
                          href={`/adminAddProperty/${item._id}`}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef4fb] text-[#0f3963] transition hover:bg-[#dbe9f7]"
                          aria-label="Edit property"
                        >
                          <FiEdit2 />
                        </Link>
                        <button
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffe7e7] text-[#d03838] transition hover:bg-[#ffd4d4]"
                          disabled={deletingId === item._id}
                          onClick={() => handleDelete(item._id)}
                          aria-label="Delete property"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-[28px] border border-dashed border-[#b9c9d7] bg-white px-6 py-12 text-center">
              <h3 className="text-2xl font-semibold text-[#0f3963]">No properties added yet</h3>
              <p className="mt-3 text-sm text-[#5f7389]">Start by adding your first property from the admin form.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyListPage;
