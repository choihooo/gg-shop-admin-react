import React from "react";
import styles from "./SettlementItem02.module.css";

function SettlementItem02({ item }) {
  return (
    <li className={styles.settlementItem}>
      <span className={styles.columnSmall}>{item.no}</span>
      <span className={styles.columnLarge}>{item.approvalTime}</span>
      <span className={styles.columnXSmall}>
        <img
          src={
            item.approvalStatus
              ? "/images/approval.svg"
              : "/images/disapproval.svg"
          }
          alt="Approval Status"
        />
      </span>
      <span className={styles.columnMedium}>{item.pg}</span>
      <span className={styles.columnMedium}>{item.branch}</span>
      <span className={styles.columnMedium}>{item.distributor}</span>
      <span className={styles.columnMedium}>{item.dealer}</span>
      <span className={styles.columnSmall}>{item.store}</span>
      <span className={styles.columnSmall}>{item.id}</span>
      <span className={styles.columnXSmall}>{item.installments}</span>
      <span className={styles.columnLarge}>{item.cardNumber}</span>
      <span className={styles.columnSmall}>{item.cardCompany}</span>
      <span className={styles.columnMedium}>{item.approvalNumber}</span>
      <span className={styles.columnMedium}>{item.amount}</span>
      <span className={styles.columnMedium}>
        <img
          src={
            item.receipt ? "/images/approval.svg" : "/images/disapproval.svg"
          }
          alt="Receipt Status"
        />
      </span>
      <span className={styles.columnLarge}>{item.holdDate}</span>
      <span className={styles.columnMedium}>{item.threshold}</span>
      <span className={styles.columnSmall}>
        <input type="radio" name={`radio-${item.no}`} id={`radio-${item.no}`} />
      </span>
    </li>
  );
}

export default SettlementItem02;
