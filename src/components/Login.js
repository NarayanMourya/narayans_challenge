import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="login-container text-center">
      <div>
        <h1 className="mt-5">LOGIN PAGE</h1>
        <div>
          <div className="mt-3">Email :</div>
          <input
            className="w-25 form-control m-auto"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="mt-2">Password :</div>
          <input
            className="w-25 form-control m-auto"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 btn btn-secondary w-25 bg-primary"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
