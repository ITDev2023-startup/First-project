// import React from "react";
// import Navigationbar from "./First-Web/Components/Navigationbar";
// import { useState } from "react";
import { Link, Outlet } from "react-router";

export default function Web() {
  // const [inputValue, setInputValue] = useState([
  //   {
  //     email: "",
  //     password: "",
  //   },
  // ]);

  return (
    <>
      <div className="bg-[#93c5fd]">
        <div className=" p-3 flex justify-start w-full border-b-3 border-b-gray-400">
          <h1 className="text-4xl font-bold text-indigo-900 w-[60%] tracking-wide drop-shadow-md font-sans">
            Pro-Tech
          </h1>
          <Link
            to={"/Home"}
            className="w-[10%] text-xl text-blue-800 transform cursor-pointer border-b-2 border-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-600 hover:shadow-md hover:text-blue-800 hover:font-bold"
          >
            Home
          </Link>
          <Link
            to={"/About"}
            className="w-[10%] text-xl text-blue-800 transform cursor-pointer border-b-2 border-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-600 hover:shadow-md hover:text-blue-800 hover:font-bold"
          >
            About
          </Link>
          {/* <Link
            to={"/Service"}
            className="w-[10%] text-xl text-blue-800 transform cursor-pointer border-b-2 border-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-600 hover:shadow-md hover:text-blue-800 hover:font-bold"
          >
            Service
          </Link> */}
          <Link
            to={"/Contact"}
            className="w-[10%] text-xl text-blue-800 transform cursor-pointer border-b-2 border-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-600 hover:shadow-md hover:text-blue-800 hover:font-bold"
          >
            Contact
          </Link>
          <Link
            to={"/Login"}
            className="w-[10%] text-xl text-blue-800 transform cursor-pointer border-b-2 border-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-600 hover:shadow-md hover:text-blue-800 hover:font-bold"
          >
            Login
          </Link>
        </div>
        {/* <Navigationbar/> */}
        <Outlet></Outlet>
      </div>
      <footer className="bg-blue-400 sticky w-full flex">
        <div className="px-6 py-4 flex flex-col w-[40%] gap-2">
          <h3 className="text-xl py-2 font-bold">ProTech</h3>
          <p className="font-medium">Address: Something something</p>
          <p className="font-medium font-sans">Contact: 91+ 8655213676</p>
        </div>
        <div className="px-6 py-4 flex flex-col w-[35%] gap-2">
          <li className="font-medium font-sans">Instagram</li>
          <li className="font-medium font-sans">Telegram</li>
          <li className="font-medium font-sans">Youtube</li>
          <li className="font-medium font-sans">Facebook</li>
        </div>
        <div className="px-6 py-4 flex flex-col w-[35%] gap-4">
          <a href="/">
            <li className="font-bold">Terms & conditions</li>
          </a>
          <a href="/">
            <li className="font-bold">Policy</li>
          </a>
          <a href="/">
            <li className="font-bold">Expertise</li>
          </a>
        </div>
      </footer>
      <div className="text-center bg-blue-600">
        Copy right &copy; www.ProTech.com | All rights reserved.
      </div>
    </>
  );
}
