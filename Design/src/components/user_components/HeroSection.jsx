"use client";

import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="bg-img ">
        <div className="bg-emerald-950  bg-opacity-30 h-screen w-full  text-white ">
          <div className="flex flex-col justify-center items-center h-screen gap-5">
            <p className="text-2xl sm:text-3xl lg:text-5xl  md:text-4xl font-bold font-mono uppercase">
              Drive Your Dream Car Now
            </p>

            <Link
              href={"/carListing"}
              className="bg-green-600 px-5 py-1 hover:scale-105 rounded text-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
