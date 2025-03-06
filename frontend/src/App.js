import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateRecipe from "./pages/CreateRecipe";
import ViewRecipes from "./pages/ViewRecipe";
import Navbar from "./components/Navbar";
import "./styles/custom.css";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/view-recipes" element={<ViewRecipes />} />
      </Routes>
    </div>
  );
}

export default App;
