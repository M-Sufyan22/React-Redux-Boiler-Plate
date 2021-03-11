import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShowMsg from "../components/ShowMsg";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <h1>Logo</h1>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
