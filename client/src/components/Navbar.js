// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional: for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">RideShare</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search Ride</Link></li>
        <li><Link to="/post">Post Ride</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
