import React from "react";
import { useNavigate } from "react-router-dom";
import "../Home/HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    const userId = sessionStorage.getItem("id");

    if (userId) {
      navigate("/todo");     //  logged in
    } else {
      navigate("/signin");  //  not logged in
    }
  };

  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center">
          Finally organize your <br /> work and life...
        </h1>

        <p className="text-center">
          Become focused, Organized and up-to-date <br />
          with our To-Do app
        </p>

        
        <button
          className="home-btn p-2"
          onClick={handleClick}
        >
          Make To-Do list
        </button>
      </div>
    </div>
  );
}

export default HomePage;
