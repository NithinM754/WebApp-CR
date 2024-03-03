import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import "../Assets/css/Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Student Information Management System
            <i className="fas fa-code"></i>
            <div className="img-logo">
                { <img src={"https://res.cloudinary.com/dfrc94azr/image/upload/v1695392420/imgingest-4258771966650437681_a86eus.webp"} alt="l1" /> }
            </div>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/dashboard"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Dashboard
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/signup"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sign up
              </NavLink>
            </li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;