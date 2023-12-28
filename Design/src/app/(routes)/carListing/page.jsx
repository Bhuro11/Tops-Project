"use client";

import { fetchData } from "@/Structure/ApiHandler";
import Header from "@/components/user_components/Header";
import React, { useEffect, useState } from "react";
import "./carListingStyle.css";
import "react-loading-skeleton/dist/skeleton.css";
import CarSkeleton from "@/components/user_components/CarSkeleton";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";


const page = () => {
  
  const [data, setData] = useState([]);
  const [searchedData,setSearchedData] = useState([])
  const [mount, setMount] = useState(false);
  const [searchQuery,setSearchQuery] = useState('')

  useEffect(() => {
    async function dataFetch() {
      const data = await fetchData();
      setData(data);
      setSearchedData(data)
      setMount(true);
    }
    dataFetch();
  }, []);

  useEffect(()=>{
      const filteredData = data.filter((data)=>{
        const make = data.make.toLowerCase()
        return make.startsWith(searchQuery.toLowerCase())
      })
      setSearchedData(filteredData)
  },[searchQuery,data])

  return (
    <div>
      <Header />
      <div className="pt-24 min-h-screen">
        <h1 className="text-black dark:text-white text-3xl sm:text-4xl md:px-10 px-2">
          Browse Luxury Cars
        </h1>
        <input
          type="search"
          className=" py-2 sm:mx-10 w-full sm:w-96 border border-black dark:border-white  placeholder:text-black placeholder:dark:text-white outline-none px-5 rounded text-black dark:text-white mt-3  bg-white dark:bg-[#121212]"
          placeholder="Search Car"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {!mount ? (
          <span className="text-black py-10 dark:text-white gap-3  justify-evenly respnosive__Cars">
            <CarSkeleton />
            <CarSkeleton />
            <CarSkeleton />
            <CarSkeleton />
            <CarSkeleton />
            <CarSkeleton />
            <CarSkeleton />
            <CarSkeleton />
            <CarSkeleton />
          </span>
        ) : (
          <div className="respnosive__Cars py-10 justify-center md:justify-between mx-1 md:mx-10 gap-3 transition-all duration-300 p-3">
            {searchedData.length > 0 ? (
              searchedData.map((data, key) => {
                return (
                  <div key={key} className=" rounded-md">
                    <img
                      src={data.images[0]}
                      alt={data.make}
                      className="w-full rounded-md image__resp object-cover"
                      loading="lazy"
                    />
                    <p className="text-black dark:text-white text-xl font-mono text-center py-1.5">
                      {data.make + " " + data.model}
                    </p>

                    <Link
                      href={`/car-details?id=${data._id}`}
                      className="text-center w-full py-3  bg-transparent  mt-2 rounded-md text-lg font-semibold border border-emerald-400 flex items-center justify-center gap-2 text-black dark:text-white hover:transition-all hover:bg-emerald-300 duration-300 hover:dark:text-black  "
                    >
                      <FaPlus /> <p> Book Now</p>
                    </Link>
                  </div>
                );
              })
            ) : (
              <p className="text-center w-full text-2xl font-semibold">
                No Cars are matching
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
