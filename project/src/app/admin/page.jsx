"use client";

import AdminAuthApi from "@/server/authApi/AdminAuthApi";
import PageLoader from "@/components/ui/PageLoader";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AdminLoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [initialized] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      await AdminAuthApi.login(formData);
      alert("Admin login successful");
      router.replace("/adminAddProperty");
    } catch (error) {
      alert(error?.response?.data?.message || error?.message || "Invalid admin credentials");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!initialized && loading) {
    return <PageLoader title="Checking admin session" subtitle="Please wait while we verify the admin access." />;
  }

  return (
    <div className="bg-[#e6ebef]">
      <div className="mx-auto flex min-h-screen max-w-[700px] items-center justify-center px-4">
        <form className="w-full text-center" onSubmit={handleSubmit}>
          <div className="flex h-[100px] w-full justify-center items-end">
            <div className="flex h-[40px] w-[200px] items-center justify-center rounded-[10px] bg-[#05325c] sm:h-[45px] sm:w-[360px]">
              <h2 className="text-white">Admin Login</h2>
            </div>
          </div>

          <div className="mt-[10px] flex h-[45px] w-full items-center justify-center">
            <span className="w-48 sm:w-[360px]">
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="h-[32px] w-full rounded-[4px] border-2 border-[#69849d] text-center placeholder:text-[#1e476c] focus:border-[#05325c] focus:outline-none focus:ring-0 sm:h-[35px]"
                required
              />
            </span>
          </div>

          <div className="flex h-[45px] w-full items-center justify-center">
            <span className="w-48 sm:w-[360px]">
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="h-[32px] w-full rounded-[4px] border-2 border-[#69849d] text-center placeholder:text-[#1e476c] focus:border-[#05325c] focus:outline-none focus:ring-0 sm:h-[35px]"
                required
              />
            </span>
          </div>

          <div className="flex h-[55px] items-center justify-center">
            <button className="h-[30px] w-[170px] rounded-[7px] bg-[#0f3963] transition duration-200 hover:bg-[#05325c] sm:h-[35px] sm:w-[180px]">
              <span className="flex h-full w-full items-center justify-center font-bold text-white">
                {loading ? "Login..." : "Login"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
