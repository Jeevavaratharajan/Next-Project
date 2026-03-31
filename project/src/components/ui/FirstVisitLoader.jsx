"use client";

import React, { useEffect, useState } from "react";

const FirstVisitLoader = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("home_loader_seen");
    if (!visited) {
      setShow(true);
      sessionStorage.setItem("home_loader_seen", "true");
      const timer = setTimeout(() => {
        setShow(false);
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#e6ebef]">
      <div className="loader-ring" />
      <h3 className="mt-5 text-2xl font-semibold text-[#0f3963]">Loading Home</h3>
    </div>
  );
};

export default FirstVisitLoader;
