"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdDirectionsCar } from "react-icons/md";
import { CgMenuCheese } from "react-icons/cg";
import { RiFeedbackFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GrPowerShutdown } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from "@/app/redux/menuSlice";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const menu__Status = useSelector((state) => state.menuStatus);

  const [isMenuOpen, setIsMenuOpen] = useState(menu__Status);
  const dispatch = useDispatch();

  const currentRoute = usePathname();

  const handleHamburger = () => {
    dispatch(setStatus(!isMenuOpen));
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    {
      id: 1,
      linkPath: "/admin/manage-cars",
      icon: MdDirectionsCar,
      linkName: "Manage Cars",
      linkNameShort: "Cars",
    },
    {
      id: 2,
      linkPath: "/admin/manage-users",
      icon: FaUser,
      linkName: "Manage Users",
      linkNameShort: "Users",
    },
    {
      id: 3,
      linkPath: "/admin/manage-orders",
      icon: FaCartShopping,
      linkName: "Manage Orders",
      linkNameShort: "Orders",
    },
    {
      id: 4,
      linkPath: "/admin/feedback",
      icon: RiFeedbackFill,
      linkName: "Feedbacks",
      linkNameShort: "Feeback",
    },
    {
      id: 5,
      linkPath: "/",
      icon: GrPowerShutdown,
      linkName: "Logout",
      linkNameShort: "Logout",
    },
  ];
  return (
    <div className=" fixed h-screen">
      <div className="flex pl-5 py-3 bg-slate-100 dark:bg-gray-700 text-black dark:text-white">
        <CgMenuCheese
          onClick={handleHamburger}
          className={`cursor-pointer text-3xl`}
        />
      </div>

      <div
        className={`sidebar ${
          isMenuOpen ? "w-[200px]" : "w-[70px]"
        } bg-slate-100 dark:bg-gray-700 dark:text-white  h-screen text-black `}
      >
        <div className="menu ">
          {isMenuOpen
            ? links.map((data, i) => {
                return (
                  <div
                    key={i}
                    className={`${
                      currentRoute === data.linkPath &&
                      "bg-emerald-300 dark:text-black "
                    } hover:bg-slate-300 dark:hover:text-black flex items-center justify-between active__menu__sidebar__hover   px-3 rounded my-1`}
                  >
                    <Link
                      href={data.linkPath}
                      className={`flex items-center ${
                        data.linkName === "Logout" && "text-red-500"
                      } justify-center rounded-lg py-2 gap-2  `}
                    >
                      <p className="text-xl font-semibold">{<data.icon />}</p>
                      <p>{data.linkName} </p>
                    </Link>
                  </div>
                );
              })
            : links.map((data, i) => {
                return (
                  <div
                    key={i}
                    className={`hover:bg-slate-300 rounded my-1 dark:hover:text-black ${
                      data.linkPath === currentRoute &&
                      "bg-emerald-300 dark:text-black"
                    }`}
                  >
                    <Link
                      className={`text-[23px] ${
                        data.linkName === "Logout" && "text-red-500"
                      } justify-center font-semibold  grid p-1 `}
                      href={data.linkPath}
                    >
                      <p className="flex justify-center py-0.5">
                        <data.icon />
                      </p>
                      <p className="text-[12px]  cursor-pointer">
                        {data.linkNameShort}
                      </p>
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
