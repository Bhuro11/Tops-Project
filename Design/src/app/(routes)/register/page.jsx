"use client";

import Header from "@/components/user_components/Header";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./style.css";
import { FaGoogle } from "react-icons/fa";
import { validateEmail } from "@/utils/ValidateEmail";
import { registerUser } from "@/Structure/ApiHandler";
import { BACKEND_URL } from "@/config";
import { ValidateForm } from "@/utils/VaidateForm";
import { validatePassword } from "@/utils/ValidatePassword";
import { FaGithub } from "react-icons/fa";

const page = () => {
  const defualtData = { full_name: "", email: "", password: "" };
  const [data, setData] = useState(defualtData);
  const [password2, setPassword2] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isBothPasswordMatch, setIsBothPasswordMatch] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    setIsValidEmail(validateEmail(data.email));

    if (validatePassword(data.password)) {
      setIsError(false);
      setError("");
    } else {
      setIsError(true);
      setError("Minimum 8 characters, at least 1 letter and 1 number Required");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("form");
    if (!ValidateForm(data) && isBothPasswordMatch && isValidEmail) {
      if (validatePassword(data.password)) {
        await registerUser(data);
        setIsError(false);
        setError("");
      } else {
        setIsError(true);
        setError(
          "Minimum 8 characters, at least 1 letter and 1 number Required"
        );
      }
    } else {
      setIsError(true);
      setError("Fill up all details correctly !");
    }
  }

  function validateBothPassword() {
    if (password2 != data.password) {
      setIsBothPasswordMatch(false);
    } else {
      setIsBothPasswordMatch(true);
    }
  }

  useEffect(() => {
    validateBothPassword();
  }, [handleChange, setPassword2, isBothPasswordMatch]);

  function handleGoogle() {
    console.log("google");
    window.open(`${BACKEND_URL}/auth/google`, "_self");
  }

  return (
    <div>
      <Header />

      <div className=" background__image hieght__resp">
        <form method="POST" onSubmit={(e) => handleSubmit(e)}>
          <div className="bg-[#00000085] hieght__resp min-h-screen text-white  pt-24 pb-[40.5px]">
            <div className="bg-[#000000ba] rounded-md w-full md:w-96 mx-auto py-5 px-3 md:px-10">
              <h1 className="text-3xl font-semibold py-5">Register</h1>

              <div className="grid gap-3 ">
                <input
                  type="text"
                  className="bg-[#333333] placeholder:text-gray-500 rounded-sm px-3 py-2 outline-none hover:outline-none"
                  placeholder="Fullname"
                  name="full_name"
                  onChange={handleChange}
                />

                <input
                  type="text"
                  className={`bg-[#333333] ${
                    !isValidEmail
                      ? "border border-red-500 "
                      : "border border-transparent"
                  }  outline-none hover:outline-none placeholder:text-gray-500 rounded-sm px-3 py-2`}
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  className="bg-[#333333] placeholder:text-gray-500 rounded-sm px-3 py-2 outline-none hover:outline-none"
                  placeholder="Set Password"
                  name="password"
                  onChange={handleChange}
                />

                <input
                  type="password"
                  className={`bg-[#333333] ${
                    !isBothPasswordMatch
                      ? "border border-red-500 "
                      : "border border-transparent"
                  } placeholder:text-gray-500 rounded-sm px-3 py-2 outline-none hover:outline-none`}
                  placeholder="Re-type Password"
                  name="password2"
                  onChange={(e) => setPassword2(e.target.value)}
                />
                {isError && <p className="text-red-500 ">{error}</p>}
                <button
                  type="submit"
                  className="bg-emerald-600  hover:bg-emerald-800 py-1.5 rounded-sm"
                >
                  Register
                </button>

                <div className="grid gap-2">
                  <button
                    type="button"
                    onClick={handleGoogle}
                    className="bg-transparent text-white hover:bg-white hover:text-black rounded  flex items-center gap-2 py-1 px-3 border-white border transition-all duration-300"
                  >
                    <p>
                      <FaGoogle />
                    </p>
                    <p>Continue with Google</p>
                  </button>

                  <button
                    type="button"
                    className="bg-transparent text-white hover:bg-white hover:text-black rounded  flex items-center gap-2 py-1 px-3 border-white border transition-all duration-300 "
                  >
                    <p className="text-white">
                      <FaGithub />
                    </p>
                    <p>Continue with Github</p>
                  </button>
                </div>
              </div>

              <Link href={"login"} className="flex items-center gap-2 mt-10 ">
                <p className="text-gray-400">Already User ? </p>{" "}
                <p className="hover:text-blue-500">Login</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
