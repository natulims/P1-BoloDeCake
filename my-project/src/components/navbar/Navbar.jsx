import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/navbar.css";
import logo from "/logo.png"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={logo}
          className="navbar__image"
          alt="logo" />
        </div>
        <div className="navbar__links">
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/products">produtos</Link>
            </li>
            <li>
              <Link to="/team">nossa equipe</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="bx bxs-cart text-2xl align-middle text-cinnabar"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
