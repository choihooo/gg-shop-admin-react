import React from "react";
import styles from "./SettlementItem01.module.css"; // CSS Module import

function SettlementItem01({ item, onRadioChange }) {
  return (
    <li className={styles.settlementItem}>
      <span className={`${styles.settlementColumn} ${styles.columnXSmall}`}>
        {item.no}
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnLarge}`}>
        {item.approvalTime}
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnXSmall}`}>
        <img
          src={
            item.approvalStatus
              ? "/images/approval.svg"
              : "/images/disapproval.svg"
          }
          alt={item.approvalStatus ? "승인됨" : "승인되지 않음"}
        />
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnMedium}`}>
        {item.pg}
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnMedium}`}>
        {item.branch}
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnMedium}`}>
        {item.distributor}
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnMedium}`}>
        {item.dealer}
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnSmall}`}>
        {item.store}
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnSmall}`}>
        {item.id}
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnXSmall}`}>
        {item.installments}
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnLarge}`}>
        {item.cardNumber}
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnMedium}`}>
        {item.cardCompany}
      </span>
      <span
        className={`${styles.settlementColumn} ${styles.columnMedium} ${styles.approvalNumber}`}
      >
        {item.approvalNumber}
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnMedium}`}>
        {item.amount}
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnSmall}`}>
        <img
          src={
            item.receipt ? "/images/approval.svg" : "/images/disapproval.svg"
          }
          alt={item.receipt ? "수령됨" : "수령되지 않음"}
        />
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnSmall}`}>
        {item.installmentExceeding}
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnXSmall}`}>
        {item.exceeding}
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnXSmall}`}>
        {item.duplicates}
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnSmall}`}>
        {item.exceedingThreshold}
      </span>
      <span className={`${styles.settlementColumn} ${styles.columnXSmall}`}>
        <input
          type="radio"
          name="selection"
          id={`radio-${item.no}`}
          checked={item.onHold}
          onChange={() => onRadioChange(item.no)}
        />
      </span>
    </li>
  );
}

export default SettlementItem01;
