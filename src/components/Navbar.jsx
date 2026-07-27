import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="align-center">
      <div>
        <Link to="./">LOGO</Link>
        <div className="links">
          <Link to="">Home</Link>
          <Link to="">About</Link>
          <Link to="">Contact</Link>
        </div>
        <div className="btns">
          <button>
            <FaDownload />
          </button>
          <button>
            <FaHeart />
          </button>
          <button>
            <FaMoon />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
