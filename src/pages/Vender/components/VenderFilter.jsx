import React from "react";
import styles from "./VenderFilter.module.css";
import { Dropdown } from "../../../components";
import { useNavigate } from "react-router-dom";

function VenderFilter() {
  const handleDropdownChange = (value) => {
    console.log("Selected Value:", value);
  };

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    const currentUrl = window.location.pathname;
    navigate(`${currentUrl}/register`);
  };
  return (
    <div className={styles.searchWrapper}>
      <div className={styles.filterWrapper}>
        <div className={styles.filterItemGray}>
          <div className={styles.filterItemLabel}>&nbsp;</div>
          <Dropdown
            options={["소속사"]}
            defaultLabel="소속사"
            onChange={handleDropdownChange}
          />
        </div>
        <div className={styles.filterItemGray}>
          <div className={styles.filterItemLabel}>&nbsp;</div>
          <Dropdown
            options={["영업자"]}
            defaultLabel="영업자"
            onChange={handleDropdownChange}
          />
        </div>
        <div className={styles.filterItemGray}>
          <div className={styles.filterItemLabel}>항목선택</div>
          <Dropdown
            options={["상점명", "대표명", "연락처"]}
            defaultLabel="항목선택"
            onChange={handleDropdownChange}
          />
        </div>
        <div className={styles.searchItem}>
          <input
            type="text"
            className={styles.filterInput}
            placeholder="검색어"
          />
        </div>
        <div className={styles.buttonGroup}>
          <button className={`${styles.button} shadow`}>검색</button>
          <button className={`${styles.button} shadow`}>초기화</button>
          <button
            className={`${styles.button} shadow`}
            onClick={handleRegisterClick}
          >
            등록
          </button>
        </div>
      </div>
    </div>
  );
}

export default VenderFilter;
