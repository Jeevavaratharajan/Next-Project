"use client";

import EnquiryApi from "@/server/enquiryApi/EnquiryApi";
import React, { useState } from "react";

const EnquiryModal = ({ open, onClose, property }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  if (!open) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await EnquiryApi.send({
        ...formData,
        propertyname: property.PropertyName,
        location: property.Location,
        propertytype: property.PropertyType,
        db_id: property._id,
      });
      alert("Enquiry sent successfully");
      onClose();
      setFormData({
        name: "",
        phone: "",
        email: "",
      });
    } catch (error) {
      alert(error?.response?.data?.message || "Unable to send enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4">
      <div className="w-full max-w-[500px] rounded-[24px] bg-white p-5 shadow-2xl sm:p-6">
        <div className="mb-5">
          <h3 className="text-2xl font-bold text-[#0f3963]">Add Enquiry</h3>
          <p className="mt-2 text-sm text-[#5f7389]">Send your details to enquire about {property.PropertyName}.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="theme-input"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="theme-input"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            className="theme-input"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="flex flex-wrap gap-3 pt-2">
            <button className="theme-button min-w-[120px]" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
            <button type="button" className="theme-button theme-button-secondary min-w-[120px]" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
