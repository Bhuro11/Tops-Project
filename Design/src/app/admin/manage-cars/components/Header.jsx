"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/app/redux/searchQuery";

const Header = () => {
  const dispatch = useDispatch();

  function handleSearch(e) {
    dispatch(setSearchQuery(e.target.value));
  }

  return (
    <div className="flex serachResponsive items-center justify-between  px-2">
      <div className="my-1">
        <input
          type="search"
          className="input  input-bordered input-accent w-full max-w-4xl bg-white text-black dark:bg-gray-500 dark:border-white dark:text-white dark:placeholder:text-white  rounded py-1.5 px-5"
          placeholder="Search Cars"
          onChange={handleSearch}
        />
      </div>

      <div className="my-3 flex justify-end">
        <Link
          href={"/admin/add-car"}
          className="bg-emerald-400  px-5 py-1 text-center w-full text-lg font-semibold text-black dark:text-white hover:bg-emerald-500 rounded sm:mx-3"
        >
          Add Car
        </Link>
      </div>
    </div>
  );
};

export default Header;
