// HeaderMenu.js
import React from "react";
import { NavLink } from "react-router-dom";

const HeaderMenu = ({ openBurger }) => {
  return (
    <div className={`menu ${openBurger ? 'is-active' : ''}`} id="menu">
      <ul className="menu-inner">
        <li className="menu-item"><NavLink to="/" className="menu-link">Home</NavLink></li>
        <li className="menu-item"><NavLink to="/blog" className="menu-link">Blog</NavLink></li>
        <li className="menu-item"><NavLink to="/about" className="menu-link">About</NavLink></li>
        <li className="menu-item"><NavLink to="/contact" className="menu-link">Contact</NavLink></li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
