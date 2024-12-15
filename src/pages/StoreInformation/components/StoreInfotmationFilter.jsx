import React from "react";
import styles from "./StoreInfotmationFilter.module.css";
import { Dropdown } from "../../../components";

function StoreInfotmationFilter() {
  const handleDropdownChange = (value) => {
    console.log("Selected Value:", value);
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.filterWrapper}>
        <div className={styles.filterItemGray}>
          <Dropdown
            options={["소속사"]}
            defaultLabel="소속사"
            onChange={handleDropdownChange}
          />
        </div>
        <div className={styles.filterItemGray}>
          <Dropdown
            options={["영업자"]}
            defaultLabel="영업자"
            onChange={handleDropdownChange}
          />
        </div>
        <div className={styles.filterItemGray}>
          <Dropdown
            options={["PG선택"]}
            defaultLabel="PG선택"
            onChange={handleDropdownChange}
          />
        </div>
        <div className={styles.filterItemGray}>
          <Dropdown
            options={["사업자"]}
            defaultLabel="사업자"
            onChange={handleDropdownChange}
          />
        </div>
        <div className={styles.filterItemGray}>
          <Dropdown
            options={["총판"]}
            defaultLabel="총판"
            onChange={handleDropdownChange}
          />
        </div>

        <div className={styles.filterItemGray}>
          <Dropdown
            options={["대리점"]}
            defaultLabel="대리점"
            onChange={handleDropdownChange}
          />
        </div>
        <div className={styles.filterItemGray}>
          <Dropdown
            options={["검색항목"]}
            defaultLabel="검색항목"
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
        </div>
      </div>
    </div>
  );
}

export default StoreInfotmationFilter;
