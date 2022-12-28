import "./Signup.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup ">
      <nav className="navbar ">
        <h3>Food's Restaurant</h3>
      </nav>      
      <h1>
        Welcome to Food's <br /> Kitchen
      </h1>      
      <button onClick={() => navigate("/menu")}>GO TO MENU</button>
    </div>
  );
};

export default Signup;
