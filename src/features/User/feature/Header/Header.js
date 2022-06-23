import React from "react";

import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar-hambuger">
      <div className="navbar-hambuger-container container-hambuger">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <h1 className="logo-hambuger">I'mM Store</h1>
      </div>
    </nav>
  );
};

export default Header;
