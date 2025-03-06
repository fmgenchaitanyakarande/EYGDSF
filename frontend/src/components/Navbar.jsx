import React from "react";
import { Link } from "react-router-dom";
import "../styles/custom.css"; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/home">🍽 Recipe Sharing</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/view-recipes">View Recipes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-recipe">Create Recipe</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-danger text-white" to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
