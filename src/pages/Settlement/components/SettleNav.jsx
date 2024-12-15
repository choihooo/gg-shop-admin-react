import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./SettleNav.module.css"; // CSS Module import

function SettleNav() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className={styles.pageNavWrapper}>
      <div className={styles.pageNav}>
        <Link
          to="/settlement/1"
          className={`${styles.pageNavButton} ${
            isActive("/settlement/1") ? styles.pageNavButtonActive : ""
          }`}
        >
          중복 및 초과목록
        </Link>
        <Link
          to="/settlement/2"
          className={`${styles.pageNavButton} ${
            isActive("/settlement/2") ? styles.pageNavButtonActive : ""
          }`}
        >
          보류 목록
        </Link>
        <Link
          to="/settlement/3"
          className={`${styles.pageNavButton} ${
            isActive("/settlement/3") ? styles.pageNavButtonActive : ""
          }`}
        >
          정산 목록(미정산 결제목록)
        </Link>
        <Link
          to="/settlement/4"
          className={`${styles.pageNavButton} ${
            isActive("/settlement/4") ? styles.pageNavButtonActive : ""
          }`}
        >
          가맹점 정산
        </Link>
      </div>
    </div>
  );
}

export default SettleNav;
