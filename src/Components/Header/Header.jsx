import React from "react";
import { useState } from "react";
import "./Header.css";
import NetflixLogo from "../NetflixLogo";

import { FaSearch } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";

const Header = () => {
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="logo">
            <NetflixLogo className="netflixLogo" />
          </div>
          <ul className="headerList">
            <li>Home</li>
            <li>Serie TV</li>
            <li>Film</li>
            <li>Anime</li>
            <li>Premium</li>
            <li>Richiedi un titolo</li>
          </ul>
          <div className="userBox">
            <FaSearch className="searchLens" />
            <button className="btn-1">
              <a href="#"> Accedi</a>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
