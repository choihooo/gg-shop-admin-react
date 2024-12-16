import React, { useState } from "react";
import styles from "./SettleFilter02.module.css";
import { Dropdown } from "../../../components";

function SettleFilter02() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDateChange = (e, type) => {
    if (type === "start") {
      setStartDate(e.target.value);
    } else if (type === "end") {
      setEndDate(e.target.value);
    }
  };

  const handleReset = () => {
    setStartDate("");
    setEndDate("");
  };

  const handleDropdownChange = (value) => {
    console.log("Selected Value:", value);
  };

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.buttonWrapper}>
        <button className={`${styles.createButton} shadow`}>
          정산 리스트 생성
        </button>
        <button className={`${styles.selectButton} shadow`}>선택 정산</button>
      </div>
      <div className={styles.filterItem}>
        <label className={styles.filterLabel}>필터</label>
        <Dropdown
          options={["전체"]}
          defaultLabel="전체"
          onChange={handleDropdownChange}
        />
      </div>
      <div className={styles.filterItem}>
        <label className={styles.filterLabel}>승인</label>
        <Dropdown
          options={["전체"]}
          defaultLabel="전체"
          onChange={handleDropdownChange}
        />
      </div>
      <div className={styles.dateInputWrapper}>
        <input
          type="date"
          className={`${styles.dateInput} ${startDate ? styles.hasValue : ""}`}
          value={startDate}
          onChange={(e) => handleDateChange(e, "start")}
        />
        <span className={styles.placeholderText}>시작일</span>
      </div>
      <div className={styles.dateInputWrapper}>
        <input
          type="date"
          className={`${styles.dateInput} ${endDate ? styles.hasValue : ""}`}
          value={endDate}
          onChange={(e) => handleDateChange(e, "end")}
        />
        <span className={styles.placeholderText}>종료일</span>
      </div>

      <div className={styles.filterItemGray}>
        <label className={styles.filterLabel}>PG선택</label>
        <Dropdown
          options={[" "]}
          defaultLabel=" "
          onChange={handleDropdownChange}
        />
      </div>

      <div className={styles.filterItemGray}>
        <label className={styles.filterLabel}>&nbsp;</label>
        <Dropdown
          options={["사업자"]}
          defaultLabel="사업자"
          onChange={handleDropdownChange}
        />
      </div>
      <div className={styles.filterItemGray}>
        <label className={styles.filterLabel}>&nbsp;</label>
        <Dropdown
          options={["총판"]}
          defaultLabel="총판"
          onChange={handleDropdownChange}
        />
      </div>

      <div className={styles.filterItemGray}>
        <label className={styles.filterLabel}>&nbsp;</label>
        <Dropdown
          options={["대리점"]}
          defaultLabel="대리점"
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
        <button className={styles.button}>검색</button>
        <button className={styles.button} onClick={handleReset}>
          초기화
        </button>
        <button className={styles.downloadButton}>
          <img src="/images/download.svg" alt="다운로드" />
        </button>
      </div>
    </div>
  );
}

export default SettleFilter02;
