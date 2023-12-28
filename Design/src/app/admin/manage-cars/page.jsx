"use client";

import React from "react";
import Sidebar from "../../../components/admin_components/Sidebar";
import { useSelector } from "react-redux";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Cars from "./components/Cars";
import Header from "./components/Header";

const page = () => {
  const menuStatus = useSelector((state) => state.menuStatus);
  return (
    <>
      <Sidebar />
      <div className={`${menuStatus ? "sm:ml-52" : "ml-20"}  `}>
        <Header />
        <Cars />
      </div>
    </>
  );
};

export default page;
