import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className=" bg-blue-50 ">
      <div className="align-center flex justify-between items-center py-5 mb-8">
        <Link to="/">
          <svg
            className="text-5xl"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            version="1"
            viewBox="0 0 48 48"
            enable-background="new 0 0 48 48"
            class="w-10 h-10"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="12.3"
              y="12.3"
              transform="matrix(.948 .318 -.318 .948 9.725 -6.994)"
              fill="#64B5F6"
              width="28"
              height="28"
            ></rect>
            <rect
              x="15.6"
              y="15.4"
              transform="matrix(.951 .31 -.31 .951 9.176 -6.977)"
              fill="#1E88E5"
              width="22"
              height="20"
            ></rect>
            <rect
              x="8.1"
              y="8.1"
              transform="matrix(.983 .181 -.181 .983 4.385 -3.65)"
              fill="#90CAF9"
              width="28"
              height="28"
            ></rect>
            <rect
              x="11.3"
              y="11.2"
              transform="matrix(.985 .175 -.175 .985 4.048 -3.566)"
              fill="#42A5F5"
              width="22"
              height="20"
            ></rect>
            <rect x="4" y="4" fill="#BBDEFB" width="28" height="28"></rect>
            <rect x="7" y="7" fill="#4CAF50" width="22" height="20"></rect>
            <path
              fill="#fff"
              d="M16,13c0-1.1,0.9-2,2-2s2,0.9,2,2s-2,4-2,4S16,14.1,16,13z"
            ></path>
            <path
              fill="#fff"
              d="M20,21c0,1.1-0.9,2-2,2s-2-0.9-2-2s2-4,2-4S20,19.9,20,21z"
            ></path>
            <path
              fill="#fff"
              d="M13.5,16.7c-1-0.6-1.3-1.8-0.7-2.7c0.6-1,1.8-1.3,2.7-0.7c1,0.6,2.5,3.7,2.5,3.7S14.5,17.3,13.5,16.7z"
            ></path>
            <path
              fill="#fff"
              d="M22.5,17.3c1,0.6,1.3,1.8,0.7,2.7c-0.6,1-1.8,1.3-2.7,0.7C19.5,20.2,18,17,18,17S21.5,16.7,22.5,17.3z"
            ></path>
            <path
              fill="#fff"
              d="M22.5,16.7c1-0.6,1.3-1.8,0.7-2.7c-0.6-1-1.8-1.3-2.7-0.7C19.5,13.8,18,17,18,17S21.5,17.3,22.5,16.7z"
            ></path>
            <path
              fill="#fff"
              d="M13.5,17.3c-1,0.6-1.3,1.8-0.7,2.7c0.6,1,1.8,1.3,2.7,0.7c1-0.6,2.5-3.7,2.5-3.7S14.5,16.7,13.5,17.3z"
            ></path>
            <circle fill="#FFC107" cx="18" cy="17" r="2"></circle>
          </svg>
        </Link>
        <div className="flex items-center gap-10">
          <Link className="text-xl text-blue-950" to="/">
            Home
          </Link>
          <Link className="text-xl text-blue-950" to="/about">
            About
          </Link>
          <Link className="text-xl text-blue-950" to="/contact">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <button className="cursor-pointer">
            <FaDownload className="text-3xl text-blue-950" />
          </button>
          <button className="cursor-pointer">
            <FaHeart className="text-3xl text-blue-950" />
          </button>
          <button className="cursor-pointer">
            <FaMoon className="text-3xl text-blue-950" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
