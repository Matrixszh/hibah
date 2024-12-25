"use client"
import React from "react";
 // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">HIBAH</div>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#quotes">Quote</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#qualities">Qualities</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HIBAH. All rights reserved only by me.</p>
      </div>
    </footer>
  );
};

export default Footer;
