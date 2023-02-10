import React from "react";
import Single from "../images/single.png";
import Double from "../images/double.png";
import Triple from "../images/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-4xl text-center font-bold">$149</p>
          <div className="text-center font-medium divide-y">
            <p className="py-2 mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 mx-8">1 Granted User</p>
            <p className="py-2 mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-sky-300 text-slate-900 rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:my-0">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Double} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Double Users</h2>
          <p className="text-4xl text-center font-bold">$149</p>
          <div className="text-center font-medium divide-y">
            <p className="py-2 mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 mx-8">1 Granted User</p>
            <p className="py-2 mx-8">Send up to 2 GB</p>
          </div>
          <button className="text-sky-300 bg-slate-900 rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Multiple Users</h2>
          <p className="text-4xl text-center font-bold">$149</p>
          <div className="text-center font-medium divide-y">
            <p className="py-2 mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 mx-8">1 Granted User</p>
            <p className="py-2 mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-sky-300 text-slate-900 rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
