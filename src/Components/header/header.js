import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./header.css";
const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <p>Welcome to the Contact List UI!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
