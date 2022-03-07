import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav_list">
    <ul>
      <li><Link to="/"><span>Home</span>o</Link></li>
      <li><Link to="/about"><span>About Us</span>o</Link></li>
      <li><Link to="/projects"><span>Projects</span>o</Link></li>
      <li><Link to="/gallery"><span>Gallery</span>o</Link></li>
    </ul>
    </div>
  );
}
