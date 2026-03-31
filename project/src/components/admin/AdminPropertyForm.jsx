"use client";

import PageLoader from "@/components/ui/PageLoader";
import { compressImages } from "@/lib/imageUpload";
import { propertyTypes } from "@/lib/propertyTypes";
import ProductApi from "@/server/productApi/AddProductApi";
import { fetchProperties } from "@/store/slices/propertySlice";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const emptyState = {
  PropertyName: "",
  Location: "",
  PropertyType: "",
  Description: "",
  Parking: "false",
  Pets: "false",
  Image: [],
};

const AdminPropertyForm = ({ propertyId = null }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isEdit = Boolean(propertyId);
  const { items, status } = useSelector((state) => state.properties);
  const currentProperty = useMemo(() => items.find((item) => item._id === propertyId) || null, [items, propertyId]);
  const [formData, setFormData] = useState(emptyState);
  const [imageLoading, setImageLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  useEffect(() => {
    if (isEdit && currentProperty) {
      setFormData({
        PropertyName: currentProperty.PropertyName || "",
        Location: currentProperty.Location || "",
        PropertyType: currentProperty.PropertyType || "",
        Description: currentProperty.Description || "",
        Parking: currentProperty.Parking ? "true" : "false",
        Pets: currentProperty.Pets ? "true" : "false",
        Image: currentProperty.Image || [],
      });
    }
  }, [currentProperty, isEdit]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (event) => {
    const files = event.target.files;
    if (!files?.length) {
      return;
    }

    setImageLoading(true);

    try {
      const compressed = await compressImages(files);
      setFormData((prev) => ({
        ...prev,
        Image: compressed,
      }));
      alert("Images compressed and ready to upload");
    } catch (error) {
      alert("Unable to process images");
    } finally {
      setImageLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.Image.length) {
      alert("Please add at least one property image");
      return;
    }

    const payload = {
      ...formData,
      Parking: formData.Parking === "true",
      Pets: formData.Pets === "true",
    };

    try {
      setSaving(true);
      if (isEdit) {
        await ProductApi.update({ id: propertyId, data: payload });
        alert("Property updated successfully");
      } else {
        await ProductApi.create(payload);
        alert("Property added successfully");
        setFormData(emptyState);
      }
      await dispatch(fetchProperties({ force: true }));
      router.push("/adminPropertyList");
    } catch (error) {
      alert(error?.response?.data?.message || error?.message || "Unable to save property");
    } finally {
      setSaving(false);
    }
  };

  if (isEdit && status === "loading" && !currentProperty) {
    return <PageLoader title="Loading property" subtitle="Preparing the property details for editing." />;
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
            Property List
          </button>
        </div>

        <div className="theme-card rounded-[32px] p-5 sm:p-8">
          <div className="mb-8 flex flex-col gap-2">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#f3961a]">Admin property form</p>
            <h1 className="text-3xl font-bold text-[#0f3963]">{isEdit ? "Edit Property" : "Add Property"}</h1>
            <p className="text-sm text-[#5f7389]">Use the same clean input style and keep images compressed before the API call.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5 lg:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-[#0f3963]">Property Name</span>
              <input className="theme-input" name="PropertyName" value={formData.PropertyName} onChange={handleChange} placeholder="Enter property name" required />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-[#0f3963]">Location</span>
              <input className="theme-input" name="Location" value={formData.Location} onChange={handleChange} placeholder="Enter location" required />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-[#0f3963]">Property Type</span>
              <input
                className="theme-input"
                list="property-type-list"
                name="PropertyType"
                value={formData.PropertyType}
                onChange={handleChange}
                placeholder="Choose property type"
                required
              />
              <datalist id="property-type-list">
                {propertyTypes.map((type) => (
                  <option key={type} value={type} />
                ))}
              </datalist>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-[#0f3963]">Parking</span>
              <select className="theme-input" name="Parking" value={formData.Parking} onChange={handleChange}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-[#0f3963]">Pets</span>
              <select className="theme-input" name="Pets" value={formData.Pets} onChange={handleChange}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </label>

            <label className="space-y-2 lg:col-span-2">
              <span className="text-sm font-semibold text-[#0f3963]">Description</span>
              <textarea className="theme-textarea" name="Description" value={formData.Description} onChange={handleChange} placeholder="Describe the property" required />
            </label>

            <div className="space-y-3 lg:col-span-2">
              <div className="flex flex-wrap items-center gap-4">
                <label className="theme-button theme-button-secondary cursor-pointer">
                  {imageLoading ? "Compressing Images..." : "Choose Images"}
                  <input type="file" className="hidden" accept="image/*" multiple onChange={handleImageUpload} />
                </label>
                <p className="text-sm text-[#5f7389]">Up to 4 images. They will be compressed before saving.</p>
              </div>

              {formData.Image.length > 0 && (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {formData.Image.map((image, index) => (
                    <img key={`${image}-${index}`} src={image} alt={`Preview ${index + 1}`} className="h-28 w-full rounded-[22px] object-cover" />
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-4 lg:col-span-2">
              <button className="theme-button" disabled={saving || imageLoading}>
                {saving ? "Saving..." : isEdit ? "Update Property" : "Add Property"}
              </button>
              <button type="button" className="theme-button theme-button-secondary" onClick={() => router.push("/adminPropertyList")}>
                Go To Property List
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPropertyForm;
