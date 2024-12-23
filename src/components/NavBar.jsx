"use client"
import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">HIBAH</div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#quotes">Quote</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#qualities">Qualities</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
