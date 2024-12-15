import React, { useState } from "react";
import styles from "./PayListFilter.module.css";
import { Dropdown } from "../../../components";

function PayListFilter() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDateChange = (event, type) => {
    if (type === "start") {
      setStartDate(event.target.value);
    } else if (type === "end") {
      setEndDate(event.target.value);
    }
  };

  const handleFilterChange = (selectedOption) => {
    console.log("Selected Filter:", selectedOption);
  };

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterWrapper}>
        <div className={styles.filterItem}>
          <div className="filter-label">필터</div>
          <Dropdown
            options={["전체"]}
            defaultLabel="전체"
            onChange={handleFilterChange}
            isBlack={true}
          />
        </div>
        <div className={styles.filterItem}>
          <div className="filter-label">승인</div>
          <Dropdown
            options={["전체", "승인1", "승인2"]}
            defaultLabel="승인"
            onChange={handleFilterChange}
            isBlack={true}
          />
        </div>
        <div className={styles.dateInputWrapper}>
          <input
            type="date"
            className={`${styles.dateInput} ${
              startDate ? styles.dateInputHasValue : ""
            }`}
            value={startDate}
            onChange={(e) => handleDateChange(e, "start")}
          />
          <span
            className={`${styles.placeholderText} ${
              startDate ? styles.hidden : ""
            }`}
          >
            시작일
          </span>
        </div>
        <div className={styles.dateInputWrapper}>
          <input
            type="date"
            className={`${styles.dateInput} ${
              endDate ? styles.dateInputHasValue : ""
            }`}
            value={endDate}
            onChange={(e) => handleDateChange(e, "end")}
          />
          <span
            className={`${styles.placeholderText} ${
              endDate ? styles.hidden : ""
            }`}
          >
            종료일
          </span>
        </div>
        <div className={styles.filterItemGray}>
          <div className="filter-label">PG선택</div>
          <Dropdown
            options={["가맹점명", "PG1", "PG2"]}
            defaultLabel="PG선택"
            onChange={handleFilterChange}
          />
        </div>
        <div className={styles.filterItemGray}>
          <div className="filter-label">사업자</div>
          <Dropdown
            options={["사업자1", "사업자2"]}
            defaultLabel="사업자"
            onChange={handleFilterChange}
          />
        </div>
        <div className={styles.filterItemGray}>
          <div>&nbsp;</div>
          <Dropdown
            options={["총판"]}
            defaultLabel="총판"
            onChange={handleFilterChange}
          />
        </div>
        <div className={styles.filterItemGray}>
          <div>&nbsp;</div>
          <Dropdown
            options={["대리점"]}
            defaultLabel="대리점"
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <div className={styles.searchBar}>
        <div className={styles.filterItemGray}>
          <div>&nbsp;</div>
          <Dropdown
            options={["가맹점명", "검색항목1", "검색항목2"]}
            defaultLabel="검색항목"
            onChange={handleFilterChange}
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
          <button className={styles.button}>초기화</button>
          <button className={styles.buttonDownload}>
            <img src="/images/download.svg" alt="다운로드" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PayListFilter;
