import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { FaHeart, FaMoon } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5"; // IoClose menyuni yopish ikonkasi uchun

function Navbar() {
  // 1. Menyuning ochiq/yopiqlik holati
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-50 relative">
      <div className="align-center flex justify-between items-center py-5 mb-8">
        {/* LOGO */}
        <Link to="/">
          <svg
            className="text-5xl w-10 h-10"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="12.3"
              y="12.3"
              transform="matrix(.948 .318 -.318 .948 9.725 -6.994)"
              fill="#64B5F6"
              width="28"
              height="28"
            />
            <rect
              x="15.6"
              y="15.4"
              transform="matrix(.951 .31 -.31 .951 9.176 -6.977)"
              fill="#1E88E5"
              width="22"
              height="20"
            />
            <rect
              x="8.1"
              y="8.1"
              transform="matrix(.983 .181 -.181 .983 4.385 -3.65)"
              fill="#90CAF9"
              width="28"
              height="28"
            />
            <rect
              x="11.3"
              y="11.2"
              transform="matrix(.985 .175 -.175 .985 4.048 -3.566)"
              fill="#42A5F5"
              width="22"
              height="20"
            />
            <rect x="4" y="4" fill="#BBDEFB" width="28" height="28" />
            <rect x="7" y="7" fill="#4CAF50" width="22" height="20" />
            <circle fill="#FFC107" cx="18" cy="17" r="2" />
          </svg>
        </Link>

        {/* DESKTOP MENU (Katta ekranlar uchun) */}
        <div className="hidden md:flex items-center gap-10">
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

        {/* TUGMALAR */}
        <div className="flex items-center gap-8">
          {/* 2. Mobil menu tugmasi (bosilganda isOpen qiymatini teskarisiga o'zgartiradi) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden cursor-pointer"
          >
            {/* Menyu ochiq bo'lsa 'X' ikonkasi, yopiq bo'lsa 'Hamburger' ikonkasi chiqadi */}
            {isOpen ? (
              <IoClose className="text-4xl text-blue-950" />
            ) : (
              <IoMenu className="text-4xl text-blue-950" />
            )}
          </button>

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

      {/* 3. MOBIL MENU (Faqat isOpen true bo'lganda va md ekrandan kichikda ko'rinadi) */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 pb-6 pt-2 border-t border-blue-200">
          <Link
            onClick={() => setIsOpen(false)} // Bosilganda menyu yopilishi uchun
            className="text-lg text-blue-950 hover:bg-blue-100 px-4 py-2 rounded-lg transition"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="text-lg text-blue-950 hover:bg-blue-100 px-4 py-2 rounded-lg transition"
            to="/about"
          >
            About
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="text-lg text-blue-950 hover:bg-blue-100 px-4 py-2 rounded-lg transition"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
