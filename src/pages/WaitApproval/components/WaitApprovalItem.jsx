import React from "react";
import styles from "./WaitApprovalItem.module.css";

function WaitApprovalItem({ item, onOpenModal }) {
  return (
    <li className={styles.approvalItem}>
      <span className={styles.approvalColumnID}>{item.id}</span>
      <span className={styles.approvalColumnStore}>{item.storeName}</span>
      <span className={styles.approvalColumnName}>{item.ownerName}</span>
      <span className={styles.approvalColumnDivision}>{item.businessType}</span>
      <span className={styles.approvalColumnContact}>{item.contact}</span>
      <span className={styles.approvalColumnDate}>{item.approvalDate}</span>
      <span className={styles.approvalColumnApprove}>
        <img
          src={
            item.approvalStatus
              ? "/images/approval.svg"
              : "/images/disapproval.svg"
          }
          alt={item.approvalStatus ? "승인됨" : "비승인됨"}
        />
      </span>
      <span className={styles.columnDetail}>
        <button className={styles.detailButton} onClick={onOpenModal}>
          상세보기
        </button>
      </span>
    </li>
  );
}

export default WaitApprovalItem;
