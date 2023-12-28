import Header from "@/components/user_components/Header";
import React from "react";
const page = () => {
  return (
    <div className="min-h-screen text-black dark:text-white">
      <Header />

      <div className="pt-24">
        <span className="sm:text-3xl text-center sm:text-start text-2xl md:text-4xl 2">
          <p className="md:mx-10 mx-2">We Value Our Clients And Want</p>
          <p className="md:mx-10 mx-2">Them To Have A Nice Experience</p>
        </span>

         <hr className="md:mx-10 my-7 mx-2 "/>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[800px] m-auto md:px-10 px-2 gap-5">

            <div className="shadow-sm shadow-black dark:shadow-slate-100 p-3">
              <h2 className="text-2xl py-2">Clean & Comfortable</h2>
              <p>Experience ultimate cleanliness and comfort in our accommodations. Discover a serene environment where every detail is designed to ensure your relaxation. From meticulously maintained spaces to a serene ambiance, unwind and enjoy tranquility throughout your stay.</p>
            </div>

            <div className="shadow-sm shadow-black dark:shadow-slate-100 p-3">
              <h2 className="text-2xl py-2">Best Price Is Assured</h2>
              <p>We guarantee the best prices for our services. Providing affordability without compromising quality is our commitment. Rest assured, you'll receive top-notch service without breaking the bank. Enjoy exceptional value for your money.</p>
            </div>

            <div className="shadow-sm shadow-black dark:shadow-slate-100 p-3">
              <h2 className="text-2xl py-2">Smooth Car Transport</h2>
              <p>Effortless and secure transportation is our specialty. Sit back and relax as we handle the smooth transit of your vehicle. Our expert team ensures a hassle-free experience, prioritizing the safety and timely delivery of your car.</p>
            </div>

            <div className="shadow-sm shadow-black dark:shadow-slate-100 p-3">
              <h2 className="text-2xl py-2">Diverse Selection</h2>
              <p>Explore a diverse range of options tailored to meet your preferences. With a variety that caters to different tastes and needs, find the perfect choice that suits you. From a wide array of selections, discover something uniquely fitting for your requirements</p>
            </div>

          </div>
      </div>
    </div>
  );
};

export default page;
