import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-slate-200">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-sky-300 font-bold p-2">GROWING WITH DATA & ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-600 ">
          Monitor your data analytics to increases revenue for BTB, BTC, & SASS platforms.
        </p>
        <button className="bg-sky-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-slate-900">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
