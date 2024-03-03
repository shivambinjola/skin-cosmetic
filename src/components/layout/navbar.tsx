"use client";
import React, { useState } from "react";
import Image from "next/image";
import bellIcon from "@/assets/bell.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saterday",
  ];

  return (
    <header className={`fixed w-screen `}>
      <nav className="flex bg-white backdrop-blur-md p-1 px-5 lg:px-10 absolute w-full justify-between">
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center flex-shrink-0 text- mr-6 ">
          <Image
            src="/logo.png"
            width={136}
            height={24}
            className=""
            alt="Logo"
          />
        </div>

        {/* <div
          className={`w-full block  lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        > */}
        <div className=" flex items-center lg:space-x-10 text-sm ">
          <div className="lg:flex hidden space-x-10">
            <p className="block mt-4 lg:inline-block lg:mt-0 text-[#4C4D4F] ">
              {weeks[date.getDay()]}, {months[date.getDate()]} {date.getMonth()}
            </p>
            <p className="block mt-4 lg:inline-block lg:mt-0 text-[#4C4D4F] ">
              1:50 PM
            </p>
          </div>

          <div className="rounded-[14px] w-[48px] h-[48px] flex items-center justify-center bg-[#F8F8F8]">
            <Image src={bellIcon} alt="" />
          </div>
        </div>
        {/* </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
