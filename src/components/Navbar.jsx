// src/components/Navbar.jsx
import React from 'react';
import "../styles/Navbar.css";
import { Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Sprout size={28} style={{ marginRight: "8px", color: "#2e7d32" }} />
        <span>AgriMarket</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="#">Services</Link></li>
          <li><Link to="#">Project</Link></li>
          <li><Link to="/shop">Shop</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
