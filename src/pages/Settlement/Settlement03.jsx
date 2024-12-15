import React, { useState } from "react";
import SeltteNav from "./components/SettleNav";
import SettlementItem03 from "./components/SettlementItem03";
import SettleFilter01 from "./components/SettleFilter01";
import Pagenation from "../../components/Pagenation";
import styles from "./Settlement03.module.css";

function Settlement03() {
  const items = [
    {
      no: "3",
      approvalTime: "2024/11/16 11:56",
      approvalStatus: true,
      pg: "케이페이먼츠",
      branch: "비케이컴퍼니",
      distributor: "비케이컴퍼니 총판",
      dealer: "비케이컴퍼니 대리점",
      store: "오로라이트페이스2",
      id: "sub123",
      installments: "10",
      cardNumber: "942084******8534",
      cardCompany: "카드사",
      approvalNumber: "49908225",
      approvalAmount: "0,000",
      settlementAmount: "0,000",
      totalFee: "0,000",
      headOfficeFee: "0,000",
      branchFee: "0,000",
      distributorFee: "0,000",
      dealerFee: "0,000",
      hold: false,
    },
  ];

  return (
    <div>
      <SeltteNav />
      <SettleFilter01 />
      <section className={`${styles.contentSection} ${styles.settlement}`}>
        <div className={styles.settlementWrapper}>
          <div className={styles.settlementHeader}>
            <span className={styles.columnSmall}>No</span>
            <span className={styles.columnMedium}>승인일시</span>
            <span className={styles.columnXSmall}>승인</span>
            <span className={styles.columnMedium}>PG</span>
            <span className={styles.columnMedium}>자사</span>
            <span className={styles.columnMedium}>총판</span>
            <span className={styles.columnMedium}>대리점</span>
            <span className={styles.columnMedium}>가맹점</span>
            <span className={styles.columnSmall}>ID</span>
            <span className={styles.columnXSmall}>할부</span>
            <span className={styles.columnLarge}>카드번호</span>
            <span className={styles.columnSmall}>카드사</span>
            <span className={styles.columnMedium}>승인번호</span>
            <span className={styles.columnMedium}>승인금액</span>
            <span className={styles.columnMedium}>정산금액</span>
            <span className={styles.columnMedium}>총 수수료</span>
            <span className={styles.columnMedium}>본사 수수료</span>
            <span className={styles.columnMedium}>사업자 수수료</span>
            <span className={styles.columnMedium}>총판 수수료</span>
            <span className={styles.columnMedium}>대리점 수수료</span>
            <span className={styles.columnXSmall}>보류</span>
          </div>

          <ul className={styles.settlementBody}>
            {items.map((item, index) => (
              <SettlementItem03 key={index} item={item} />
            ))}
          </ul>
        </div>
      </section>
      <Pagenation />
    </div>
  );
}

export default Settlement03;
