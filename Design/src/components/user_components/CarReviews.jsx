'use client'

import { sendReview } from "@/Structure/ApiHandler";
import { ValidateForm } from "@/utils/VaidateForm";
import React, { useEffect, useState } from "react";
const CarReviews = () => {
  const defaultData = { name: "", email: "", review: "" };

  const [data, setData] = useState(defaultData);

  function handleSubmit(e) {
    e.preventDefault();
    if (!ValidateForm(data)) sendReview(data);
  }
  function handleInput(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <div className="w-full md:w-[600px]">
      <div>
        <p className="text-4xl py-4">Leave a Review</p>
        <p className="text-lg pb-3 text-gray-500">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <form onSubmit={handleSubmit} method="POST">
        <span className="grid gap-2">
          <label className="text-lg font-semibold">Review *</label>
          <textarea
            cols="30"
            rows="5"
            placeholder="Your Review *"
            onChange={handleInput}
            name="review"
            className="border  px-3 py-1 placeholder:text-black placeholder:dark:text-white resize-none"
          ></textarea>
        </span>
        <div className="flex py-10 justify-between w-full md:w-[500px] gap-3">
          <input
            type="text"
            onChange={handleInput}
            placeholder="Name *"
            name="name"
            className="border-b  px-3 py-1  w-full placeholder:text-black placeholder:dark:text-white"
          />

          <input
            type="text"
            onChange={handleInput}
            placeholder="Email *"
            name="email"
            className=" border-b  px-3 py-1 w-full placeholder:text-black placeholder:dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="px-10 py-2.5 text-lg border border-emerald-500 rounded-xl hover:scale-105 transition-all duration-300 "
        >
          {" "}
          + Post Review
        </button>
      </form>
    </div>
  );
};

export default CarReviews