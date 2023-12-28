"use client";

import React, { useState } from "react";
import Sidebar from "../../../components/admin_components/Sidebar";
import { useSelector } from "react-redux";

const page = () => {
  const menuStatus = useSelector((state) => state.menuStatus);

  return (
    <div className="text-black darK:text-white min-h-screen">
      <Sidebar />

      <div
        className={`${
          menuStatus ? "sm:ml-52" : "ml-20"
        } text-black dark:text-white min-h-screen flex items-center justify-center text-5xl  `}
      >
        <p>Welcome Admin !</p>
      </div>
    </div>
  );
};

export default page;
