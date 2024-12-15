import React from "react";
import styles from "./SettlementItem04.module.css";

function SettlementItem04({ item, onCheck }) {
  return (
    <li className={styles.settlementItem}>
      <span className={styles.columnSmall}>{item.no}</span>
      <span className={styles.columnXSmall}>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            id={`item-checkbox-${item.no}`}
            checked={item.checked}
            onChange={onCheck}
          />
          <label
            htmlFor={`item-checkbox-${item.no}`}
            className={styles.customCheckbox}
          ></label>
        </div>
      </span>
      <span className={styles.columnSmall}>{item.id}</span>
      <span className={styles.columnMedium}>{item.approvalDate}</span>
      <span className={styles.columnSmall}>{item.approvalCount}</span>
      <span className={styles.columnSmall}>{item.cancelCount}</span>
      <span className={styles.columnMedium}>{item.pg}</span>
      <span className={styles.columnMedium}>{item.storeName}</span>
      <span className={styles.columnLarge}>{item.settlementDate}</span>
      <span className={styles.columnMedium}>{item.approvalAmount}</span>
      <span className={styles.columnMedium}>{item.settlementAmount}</span>
      <span className={styles.columnMedium}>{item.totalFee}</span>
      <span className={styles.columnMedium}>{item.bank}</span>
      <span className={styles.columnLarge}>{item.accountNumber}</span>
      <span className={styles.columnSmall}>{item.settlementStatus}</span>
    </li>
  );
}

export default SettlementItem04;
