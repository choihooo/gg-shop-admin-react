import React, { useState } from "react";
import styles from "./SettleFilter01.module.css";
import Dropdown from "../../../components/Dropdown/Dropdown";

function SettleFilter01() {
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
    setSearchTerm("");
  };

  const handleDropdownChange = (value) => {
    console.log("Selected Value:", value);
  };

  return (
    <div className={styles.filterWrapper}>
      <div>
        {/* 필터 */}
        <div className={styles.filterItem}>
          <label className={styles.filterLabel}>필터</label>
          <Dropdown
            options={["전체", "필터1", "필터2"]}
            defaultLabel="전체"
            onChange={handleDropdownChange}
            isBlack={true}
          />
        </div>
        <div className={styles.filterItem}>
          <label className={styles.filterLabel}>승인</label>
          <Dropdown
            options={["전체", "승인1", "승인2"]}
            defaultLabel="전체"
            onChange={handleDropdownChange}
            isBlack={true}
          />
        </div>

        {/* 날짜 입력 */}
        <div className={styles.dateInputWrapper}>
          <input
            type="date"
            className={`${styles.dateInput} ${
              startDate ? styles.hasValue : ""
            }`}
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

        {/* PG선택, 총판, 대리점 */}
        <div className={styles.filterItemGray}>
          <label className={styles.filterLabel}>PG선택</label>
          <Dropdown
            options={["선택", "PG1", "PG2"]}
            defaultLabel="PG선택"
            onChange={handleDropdownChange}
          />
        </div>
        <div className={styles.filterItemGray}>
          <label className={styles.filterLabel}>총판</label>
          <Dropdown
            options={["총판1", "총판2"]}
            defaultLabel="총판"
            onChange={handleDropdownChange}
          />
        </div>
        <div className={styles.filterItemGray}>
          <label className={styles.filterLabel}>대리점</label>
          <Dropdown
            options={["대리점1", "대리점2"]}
            defaultLabel="대리점"
            onChange={handleDropdownChange}
          />
        </div>
      </div>
      {/* 검색항목 */}
      <div>
        <div className={styles.filterItemGray}>
          <label className={styles.filterLabel}>검색항목</label>
          <Dropdown
            options={["가맹점명", "검색항목1", "검색항목2"]}
            defaultLabel="가맹점명"
            onChange={handleDropdownChange}
          />
        </div>

        {/* 검색어 입력 */}
        <div className={styles.searchItem}>
          <input
            type="text"
            className={styles.filterInput}
            placeholder="검색어"
          />
        </div>

        {/* 버튼 */}
        <button className={styles.button}>검색</button>
        <button className={styles.button} onClick={handleReset}>
          초기화
        </button>
      </div>
    </div>
  );
}

export default SettleFilter01;
