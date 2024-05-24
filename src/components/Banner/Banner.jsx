import React from "react";
import BannerImg from "../../assets/women/women2.jpg";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0.0.0.1)] object-cover"
            />
          </div>
          {/* text Details Section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Winter Sale upto 50% off
            </h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio soluta numquam id, exercitationem harum quae commodi
              odit doloribus architecto magni!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
