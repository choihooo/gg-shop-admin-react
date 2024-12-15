import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./StoreInfotmationNav.module.css";

function StoreInfotmationNav() {
  const location = useLocation();

  const isActive = (basePath) => {
    return (
      location.pathname === basePath ||
      location.pathname.startsWith(`${basePath}/register`)
    );
  };

  return (
    <div className={styles.pageNavWrapper}>
      <div className={`${styles.pageNav} `}>
        <Link
          to="/store-informaion/1"
          className={`${styles.pageNavButton} shadow ${
            isActive("/store-informaion/1") ? styles.pageNavButtonActive : ""
          }`}
        >
          사용 가맹점
        </Link>
        <Link
          to="/store-informaion/2"
          className={`${styles.pageNavButton} shadow ${
            isActive("/store-informaion/2") ? styles.pageNavButtonActive : ""
          }`}
        >
          해지 가맹점
        </Link>
      </div>
    </div>
  );
}

export default StoreInfotmationNav;
