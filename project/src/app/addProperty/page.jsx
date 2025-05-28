import AdminDashboard from "@/components/adminDashboard/Dashboard";
import React from "react";

const AddProperty = () => {
  return (
    <div>
      <div className="h-screen flex flex-row">
        <div className="w-2/6 sm:w-2/8"><AdminDashboard/></div>
        <div className="w-4/6 sm:w-6/8">AddProperty</div>
      </div>
    </div>
  );
};

export default AddProperty;
