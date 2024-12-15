import React from "react";
import styles from "./SettlementItem03.module.css";

function SettlementItem03({ item }) {
  return (
    <li className={styles.settlementItem}>
      <span className={styles.columnSmall}>{item.no}</span>
      <span className={styles.columnMedium}>{item.approvalTime}</span>
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
      <span className={styles.columnMedium}>{item.store}</span>
      <span className={styles.columnSmall}>{item.id}</span>
      <span className={styles.columnXSmall}>{item.installments}</span>
      <span className={styles.columnLarge}>{item.cardNumber}</span>
      <span className={styles.columnSmall}>{item.cardCompany}</span>
      <span className={styles.columnMedium}>{item.approvalNumber}</span>
      <span className={styles.columnMedium}>{item.approvalAmount}</span>
      <span className={styles.columnMedium}>{item.settlementAmount}</span>
      <span className={styles.columnMedium}>{item.totalFee}</span>
      <span className={styles.columnMedium}>{item.headOfficeFee}</span>
      <span className={styles.columnMedium}>{item.branchFee}</span>
      <span className={styles.columnMedium}>{item.distributorFee}</span>
      <span className={styles.columnMedium}>{item.dealerFee}</span>
      <span className={styles.columnXSmall}>
        <input type="radio" name="hold" checked={item.hold} readOnly />
      </span>
    </li>
  );
}

export default SettlementItem03;
