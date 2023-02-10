import React from "react";
import Laptop from "../images/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} className="w-[500px] mx-auto my-4" alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-sky-300 font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed optio corrupti delectus
            rerum nisi nesciunt quod ducimus nihil enim, quaerat quas eaque voluptate natus
            aspernatur ut quo debitis modi doloremque.
          </p>
          <button className="bg-slate-900 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-sky-300 md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
