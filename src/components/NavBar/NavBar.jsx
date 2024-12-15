import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const location = useLocation(); // 현재 위치 정보를 가져옴

  // 특정 경로를 포함하는지 확인하는 함수
  const isActive = (path) => {
    if (
      path === "/settlement" ||
      path === "/vender" ||
      path === "/store-management" ||
      path === "/store-informaion"
    ) {
      return location.pathname.includes(path);
    }
    return location.pathname === path;
  };

  return (
    <div className="nav">
      <Link
        to="/pay-list"
        className={`nav__button ${
          isActive("/pay-list") ? "nav__button--active" : ""
        }`}
      >
        결제 목록
      </Link>
      <Link
        to="/settlement/1"
        className={`nav__button ${
          isActive("/settlement") ? "nav__button--active" : ""
        }`}
      >
        정산 목록
      </Link>
      <Link
        to="/wait-approval"
        className={`nav__button ${
          isActive("/wait-approval") ? "nav__button--active" : ""
        }`}
      >
        상점등록 승인대기
      </Link>
      <Link
        to="/vender/1"
        className={`nav__button ${
          isActive("/vender") ? "nav__button--active" : ""
        }`}
      >
        영업자관리
      </Link>
      <Link
        to="/store-informaion/1"
        className={`nav__button ${
          isActive("/store-informaion") ? "nav__button--active" : ""
        }`}
      >
        상점정보 관리
      </Link>
    </div>
  );
}

export default NavBar;
