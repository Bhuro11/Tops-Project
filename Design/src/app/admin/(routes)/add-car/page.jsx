"use client";
import React, { useState } from "react";
import {
  carClassData,
  carSeats,
  carYear,
  cylinderCount,
  driveTypes,
  fuelTypes,
} from "@/config";
import { MdError } from "react-icons/md";
import { addCar } from "@/Structure/ApiHandler";
import { useRouter } from "next/navigation";
import { ValidateForm } from "@/utils/VaidateForm";

const page = () => {
  const router = useRouter();
  const defaultData = {
    make: "",
    model: "",
    price: "",
    seats: 4,
    year: 1980,
    class: "Classic",
    mpg: "",
    displacement: "",
    drive: "front-wheel drive (FWD)",
    fuel_type: "Diesel",
    highwayMPG: "",
    images: [],
    cylinders: 2,
  };

  const [data, setData] = useState(defaultData);
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImage = (key, value) => {
    data.images[key] = value;
    setData(data);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setError(false);
    setData(defaultData);
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!ValidateForm(data)) {
      await addCar(data);
      router.push("/admin/manage-cars");
    } else {
      setError(true);
    }
  };

  return (
    <form
      onSubmit={handleAdd}
      method="POST"
      className="dark:bg-[#121212] text-black dark:text-white py-0.5 min-h-screen"
    >
      <div>
        <h1 className="font-bold text-3xl p-3">Add Car</h1>
      </div>

      <div className="grid px-3 py-3 gap-3 my-1  bg-slate-100 rounded-md dark:bg-[#121212] dark:text-gray-300 mx-1 md:mx-10">
        <p className="font-semibold">Car Details</p>
        <div className="grid grid-cols-1  md:grid-cols-3  justify-between gap-2 ">
          <span className="grid w-full gap-1">
            <label className="px-2">Make</label>
            <input
              type="text"
              placeholder="Company of Car"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="make"
              value={data.make}
              onChange={handleInput}
            />
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Model</label>
            <input
              type="text"
              placeholder="Model of Car"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="model"
              value={data.model}
              onChange={handleInput}
            />
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Rent</label>
            <input
              type="number"
              placeholder="Enter Rent / Hour $"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="price"
              value={data.price}
              onChange={handleInput}
            />
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  justify-between gap-2 ">
          <span className="grid w-full gap-1">
            <label className="px-2">Car Seats</label>
            <select
              name="seats"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              onChange={handleInput}
            >
              {carSeats.map((carSeats, i) => {
                return (
                  <option key={i} value={carSeats}>
                    {carSeats}
                  </option>
                );
              })}
            </select>
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Make Year</label>
            <select
              name="year"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              onChange={handleInput}
              value={data.carYear}
            >
              {carYear.map((carYear, i) => {
                return (
                  <option key={i} value={carYear}>
                    {carYear}
                  </option>
                );
              })}
            </select>
          </span>

          <span className="grid w-full gap-1">
            <label className="px-2">Car Class</label>
            <select
              name="class"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              onChange={handleInput}
              value={data.carClass}
            >
              {carClassData.map((className, i) => {
                return (
                  <option key={i} value={className}>
                    {className}
                  </option>
                );
              })}
            </select>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  justify-between gap-2 ">
          <span className="grid w-full gap-1">
            <label className="px-2">Mpg</label>
            <input
              type="number"
              placeholder="Enter MPG (miles per gallon)*"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="mpg"
              value={data.carMPG}
              onChange={handleInput}
            />
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Cylinders</label>
            <select
              name="cylinders"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              onChange={handleInput}
            >
              {cylinderCount.map((cylinderCount, i) => {
                return (
                  <option key={i} value={cylinderCount}>
                    {cylinderCount}
                  </option>
                );
              })}
            </select>
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Displacement</label>
            <input
              type="number"
              placeholder="Enter Displacement"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="displacement"
              value={data.displacement}
              onChange={handleInput}
            />
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  justify-between gap-2 ">
          <span className="grid w-full gap-1">
            <label className="px-2">Drive</label>
            <select
              name="drive"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              onChange={handleInput}
            >
              {driveTypes.map((driveTypes, i) => {
                return (
                  <option key={i} value={driveTypes}>
                    {driveTypes}
                  </option>
                );
              })}
            </select>
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Fuel</label>
            <select
              name="fuel_type"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              onChange={handleInput}
            >
              {fuelTypes.map((fuelTypes, i) => {
                return (
                  <option key={i} value={fuelTypes}>
                    {fuelTypes}
                  </option>
                );
              })}
            </select>
          </span>

          <span className="grid w-full gap-1">
            <label className="px-2">Highway Mileage</label>
            <input
              type="number"
              placeholder="Enter Highway Mileage"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="highwayMPG"
              value={data.highwayMPG}
              onChange={handleInput}
            />
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  justify-between gap-2 ">
          <span className="grid w-full gap-1">
            <label className="px-2">Main Car Image</label>
            <input
              type="text"
              placeholder="Enter Main Car Image Link"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="mainCarImage"
              value={data.images[0]}
              onChange={(e) => handleImage(0, e.target.value)}
            />
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Front Car Image</label>
            <input
              type="text"
              placeholder="Enter Front Car Image Link"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="frontCarImage"
              value={data.images[1]}
              onChange={(e) => handleImage(1, e.target.value)}
            />
          </span>
          <span className="grid w-full gap-1">
            <label className="px-2">Side Car Image</label>
            <input
              type="text"
              placeholder="Enter Side Car Image Link"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="sideCarImage"
              value={data.images[2]}
              onChange={(e) => handleImage(2, e.target.value)}
            />
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center  justify-between gap-2 ">
          <span className="grid w-full gap-1">
            <label className="px-2">Inner Car Image</label>
            <input
              type="text"
              placeholder="Enter Inner Car Image Link"
              className="border border-gray-400 rounded px-3 py-2  placeholder:text-sm "
              name="innerCarImage"
              value={data.images[3]}
              onChange={(e) => handleImage(3, e.target.value)}
            />
          </span>
        </div>

        {error && (
          <p className="text-red-500 font-semibold text-lg flex items-center gap-1">
            <MdError className="text-xl" />
            Please Fill Up All Details !!
          </p>
        )}
        <span className="md:mt-3 flex justify-between md:gap-3 md:w-60 w-full gap-1">
          <button
            className="w-full bg-emerald-500 py-2 rounded text-center  text-white  "
            type="submit"
          >
            Add
          </button>

          <button
            className="w-full bg-red-500 py-2 rounded text-center  text-white"
            onClick={handleReset}
          >
            Reset
          </button>
        </span>
      </div>
    </form>
  );
};

export default page;
