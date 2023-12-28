"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MdOutlineMenu } from "react-icons/md";
const Header = () => {
  const headerData = [
    {
      linkName: "Home",
      linkPath: "/",
    },
    {
      linkName: "Cars",
      linkPath: "/carListing",
    },
    {
      linkName: "About",
      linkPath: "/about",
    },
    ,
    {
      linkName: "Contact",
      linkPath: "/contact-us",
    },
    {
      linkName: "Login",
      linkPath: "/login",
    },
    {
      linkName: "Admin",
      linkPath: "/admin",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentRoute = usePathname();
  return (
    <div>
      <div className="flex items-center z-10 gap-5 bg-transparent  shadow-md  px-5 py-5  justify-between fixed w-full backdrop-blur-sm backdrop-brightness-100  text-black ">
        {/* Logo*/}
        <div className="">
          <h1 className="poppins-bold text-3xl flex items-center text-emerald-500 uppercase">
            Bhargav Cars
          </h1>
        </div>

        {/* desktop menu*/}

        <div className="hidden sm:flex gap-2 text-xl font-semibold">
          {headerData.map(({ linkName, linkPath }, i) => {
            return (
              <Link
                key={i}
                className={`hover:text-white transition-colors duration-300 text-black text-xl shadow-sm shadow-slate-400 ${
                  currentRoute === linkPath
                    ? "bg-emerald-300 px-3 rounded py-1"
                    : "bg-white bg-opacity-20 px-3 rounded py-1"
                } `}
                href={linkPath}
              >
                {linkName}
              </Link>
            );
          })}
        </div>

        {/* mobile menu*/}
        {isMenuOpen && (
          <div className="grid absolute bg-slate-100 dark:bg-[#121212]  text-center text-black left-0 justify-center top-20 w-full sm:hidden gap-5  py-3 text-xl">
            {headerData.map(({ linkName, linkPath }, i) => {
              return (
                <Link
                  key={i}
                  className={`hover:text-emerald-500 text-black dark:text-white ${
                    currentRoute === linkPath
                      ? "bg-emerald-300 px-3 rounded py-1"
                      : "bg-white bg-opacity-20 px-3 rounded py-1"
                  } `}
                  href={linkPath}
                >
                  {linkName}
                </Link>
              );
            })}
          </div>
        )}

        {/* three bar label */}

        <MdOutlineMenu
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-2xl"
        />
      </div>
    </div>
  );
};

export default Header;
