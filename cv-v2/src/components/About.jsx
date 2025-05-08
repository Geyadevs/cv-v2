import React from "react";
import { useNavigate } from "react-router-dom";


function About() {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(-1);
    };

  return (
    <div className="about">
      <h1>About Page</h1>
      <p>This is a simple about page component.</p>
      <button onClick={handleNavigation}>Go Back</button>
    </div>
  );
}

export default About;