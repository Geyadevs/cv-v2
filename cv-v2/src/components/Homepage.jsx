import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/about");
    };

  return (
    <div className="homepage">
      <h1>Welcome to the Homepage</h1>
      <p>This is a simple homepage component.</p>
      <button className="p-3 m-3 bg-gray-500 font-extrabold text-blue-900 font-serif outline-fuchsia-900" onClick={handleNavigation}>Go to About Page</button>
    </div>
  );
}

export default Homepage;