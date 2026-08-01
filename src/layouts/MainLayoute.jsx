import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
function MainLayoute() {
  return (
    <div>
      <header className="bg-blue-100">
        <Navbar></Navbar>
      </header>

      <Outlet></Outlet>
    </div>
  );
}

export default MainLayoute;
