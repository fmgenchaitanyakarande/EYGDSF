import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/custom.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-overlay"></div>
      <div className="home-content">
        <h1 className="home-title">Welcome to Recipe Sharing Platform</h1>
        <p className="home-subtitle">Explore and share your favorite recipes with the world!</p>
        <button className="btn home-cta" onClick={() => navigate("/view-recipes")}>
          Start Exploring
        </button>
      </div>
    </div>
  );
};

export default Home;
