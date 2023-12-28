"use client";

import React, { useState } from "react";
import "./style.css";
import { validateEmail } from "@/utils/ValidateEmail";

const page = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  function handleResetSend() {
    if (validateEmail(email)) {
      setIsError(false);
      setError("");
    } else {
      setIsError(true);
      setError("Please enter valid Email");
    }
  }
  return (
    <div>
      <div className=" background__image">
        <div className="bg-[#00000085] text-white h-screen pt-24">
          <div className="bg-[#000000ba] rounded-md w-full md:w-96 m-auto py-5 px-3 md:px-10">
            <h1 className="text-3xl font-semibold py-5">Reset Password</h1>

            <div className="grid gap-3 ">
              <input
                type="text"
                className="bg-[#333333] placeholder:text-gray-500 rounded-sm px-3 py-2"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {isError && (
                <p className="text-red-500 font-bold text-lg">{error}</p>
              )}
              <button
                onClick={handleResetSend}
                className="bg-emerald-600  py-1.5 rounded-sm hover:bg-emerald-800"
              >
                Send Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
