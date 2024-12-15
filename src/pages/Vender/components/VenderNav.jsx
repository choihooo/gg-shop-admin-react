import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./VenderNav.module.css";

function VenderNav() {
  const location = useLocation();

  const isActive = (basePath) => {
    return (
      location.pathname === basePath ||
      location.pathname.startsWith(`${basePath}/register`)
    );
  };

  return (
    <div className={styles.pageNavWrapper}>
      <div className={`${styles.pageNav} shadow`}>
        <Link
          to="/vender/1"
          className={`${styles.pageNavButton} ${
            isActive("/vender/1") ? styles.pageNavButtonActive : ""
          }`}
        >
          사업자 목록
        </Link>
        <Link
          to="/vender/2"
          className={`${styles.pageNavButton} ${
            isActive("/vender/2") ? styles.pageNavButtonActive : ""
          }`}
        >
          총판 목록
        </Link>
        <Link
          to="/vender/3"
          className={`${styles.pageNavButton} ${
            isActive("/vender/3") ? styles.pageNavButtonActive : ""
          }`}
        >
          대리점 목록
        </Link>
      </div>
    </div>
  );
}

export default VenderNav;
