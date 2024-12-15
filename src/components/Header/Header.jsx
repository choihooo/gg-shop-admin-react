import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/images/ghlogo.svg";
import homeIcon from "/images/oi_home.svg";
import "./Header.css";

function Header() {
  const location = useLocation();
  const isRoot = location.pathname === "/";

  return (
    <div className="header shadow">
      {isRoot ? (
        <Link to="/">
          <img className="header__logo" src={logo} alt="gg-shop 로고" />
        </Link>
      ) : (
        <div>
          <Link to="/">
            <img className="header__home" src={homeIcon} alt="Home" />
          </Link>
          <Link to="/">
            <img className="header__logo" src={logo} alt="gg-shop 로고" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
