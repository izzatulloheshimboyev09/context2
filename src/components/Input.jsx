import React from "react";
import { FaSearch } from "react-icons/fa";

function Input({ search, setSearch }) {
  return (
    <div className="relative my-6 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-4 pr-10 py-2 border-2 rounded-xl outline-none focus:border-blue-700 transition"
      />
      <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
    </div>
  );
}

export default Input;
