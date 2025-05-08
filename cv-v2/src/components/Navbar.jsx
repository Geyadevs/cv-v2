import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-gray-100 text-white p-4 mb-10">
      <ul className="flex flex-col md:flex-row md:space-x-12 justify-center items-center">
        <li>
          <Link to="/" className="hover:underline text-gray-800">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline text-gray-800">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;