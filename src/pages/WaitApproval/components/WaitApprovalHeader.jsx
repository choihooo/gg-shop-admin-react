import React from "react";
import styles from "./WaitApprovalHeader.module.css";

function WaitApprovalHeader() {
  return (
    <div className={styles.approvalHeader}>
      <span className={styles.approvalColumnID}>ID</span>
      <span className={styles.approvalColumnStore}>상점명</span>
      <span className={styles.approvalColumnName}>대표자명</span>
      <span className={styles.approvalColumnDivision}>사업자 구분</span>
      <span className={styles.approvalColumnContact}>연락처</span>
      <span className={styles.approvalColumnDate}>승인요청일시</span>
      <span className={styles.approvalColumnApprove}>승인여부</span>
      <span className={styles.approvalColumnDetail}>상세</span>
    </div>
  );
}

export default WaitApprovalHeader;
