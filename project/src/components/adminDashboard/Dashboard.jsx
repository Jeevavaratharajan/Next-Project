"use client";

import AdminAuthApi from "@/server/authApi/AdminAuthApi";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { LuHousePlus, LuHouse, LuLayoutDashboard, LuLogOut, LuTableProperties } from "react-icons/lu";

const AdminDashboard = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await AdminAuthApi.logout();
      alert("Admin logged out successfully");
      router.replace("/admin");
    } catch (error) {
      alert(error?.response?.data?.message || error?.message || "Unable to logout right now");
    }
  };

  const items = [
    { href: "/", label: "Home", icon: <LuHouse /> },
    { href: "/adminAddProperty", label: "Add Property", icon: <LuHousePlus /> },
    { href: "/adminPropertyList", label: "Property List", icon: <LuTableProperties /> },
  ];

  return (
    <aside className="h-full min-h-screen rounded-[30px] bg-gradient-to-b from-[#032746] via-[#0b3d67] to-[#0f3963] px-4 py-6 text-white shadow-[0_24px_60px_rgba(5,50,92,0.28)]">
      <div className="rounded-[28px] border border-white/10 bg-white/7 p-5 shadow-2xl">
        <div className="mb-10 flex items-center gap-3 border-b border-white/10 pb-6">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3961a] text-[#05325c] shadow-lg">
            <LuLayoutDashboard className="text-2xl" />
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">Admin Panel</p>
            <h3 className="text-xl font-semibold text-[#ffd69f]">Dashboard</h3>
          </div>
        </div>

        <div className="space-y-3">
          {items.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex h-13 items-center gap-3 rounded-2xl px-4 text-[15px] font-medium transition ${
                  active ? "bg-white text-[#05325c] shadow-lg" : "text-white/86 hover:bg-white/10"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <button
          onClick={handleLogout}
          className="mt-10 flex h-12 w-full items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/8 text-sm font-semibold text-white transition hover:bg-white/14"
        >
          <LuLogOut className="text-lg" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminDashboard;
