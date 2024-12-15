import React from "react";
import SeltteNav from "./components/SettleNav";
import SettlementItem02 from "./components/SettlementItem02";
import styles from "./Settlement01.module.css";
import SettleFilter01 from "./components/SettleFilter01";
import Pagenation from "../../components/Pagenation";

function Settlement02() {
  const items = [
    {
      no: "3",
      approvalTime: "2024/11/16 11:56",
      approvalStatus: true,
      pg: "케이페이먼츠",
      branch: "김정수 지사",
      distributor: "N이현철 총판",
      dealer: "N이현철 대리점",
      store: "썸",
      id: "sub123",
      installments: "10",
      cardNumber: "942084******8534",
      cardCompany: "카드사",
      approvalNumber: "49908225",
      amount: "1,900,000",
      receipt: true,
      holdDate: "2024/11/18 19:21",
      threshold: "3000000",
    },
    {
      no: "3",
      approvalTime: "2024/11/16 11:56",
      approvalStatus: true,
      pg: "케이페이먼츠",
      branch: "김정수 지사",
      distributor: "N이현철 총판",
      dealer: "N이현철 대리점",
      store: "썸",
      id: "sub123",
      installments: "10",
      cardNumber: "942084******8534",
      cardCompany: "카드사",
      approvalNumber: "49908225",
      amount: "1,900,000",
      receipt: true,
      holdDate: "2024/11/18 19:21",
      threshold: "3000000",
    },
    {
      no: "3",
      approvalTime: "2024/11/16 11:56",
      approvalStatus: true,
      pg: "케이페이먼츠",
      branch: "김정수 지사",
      distributor: "N이현철 총판",
      dealer: "N이현철 대리점",
      store: "썸",
      id: "sub123",
      installments: "10",
      cardNumber: "942084******8534",
      cardCompany: "카드사",
      approvalNumber: "49908225",
      amount: "1,900,000",
      receipt: true,
      holdDate: "2024/11/18 19:21",
      threshold: "3000000",
    },
    {
      no: "3",
      approvalTime: "2024/11/16 11:56",
      approvalStatus: true,
      pg: "케이페이먼츠",
      branch: "김정수 지사",
      distributor: "N이현철 총판",
      dealer: "N이현철 대리점",
      store: "썸",
      id: "sub123",
      installments: "10",
      cardNumber: "942084******8534",
      cardCompany: "카드사",
      approvalNumber: "49908225",
      amount: "1,900,000",
      receipt: true,
      holdDate: "2024/11/18 19:21",
      threshold: "3000000",
    },
    {
      no: "3",
      approvalTime: "2024/11/16 11:56",
      approvalStatus: true,
      pg: "케이페이먼츠",
      branch: "김정수 지사",
      distributor: "N이현철 총판",
      dealer: "N이현철 대리점",
      store: "썸",
      id: "sub123",
      installments: "10",
      cardNumber: "942084******8534",
      cardCompany: "카드사",
      approvalNumber: "49908225",
      amount: "1,900,000",
      receipt: true,
      holdDate: "2024/11/18 19:21",
      threshold: "3000000",
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
            <span className={styles.columnLarge}>승인일시</span>
            <span className={styles.columnXSmall}>승인</span>
            <span className={styles.columnMedium}>PG</span>
            <span className={styles.columnMedium}>사업자</span>
            <span className={styles.columnMedium}>총판</span>
            <span className={styles.columnMedium}>대리점</span>
            <span className={styles.columnSmall}>가맹점</span>
            <span className={styles.columnSmall}>ID</span>
            <span className={styles.columnXSmall}>할부</span>
            <span className={styles.columnLarge}>카드번호</span>
            <span className={styles.columnSmall}>카드사</span>
            <span className={styles.columnMedium}>승인번호</span>
            <span className={styles.columnMedium}>승인금액</span>
            <span className={styles.columnMedium}>제품수령여부</span>
            <span className={styles.columnLarge}>보류일시</span>
            <span className={styles.columnMedium}>초과기준</span>
            <span className={styles.columnSmall}>보류해제</span>
          </div>

          <ul className={styles.settlementBody}>
            {items.map((item, index) => (
              <SettlementItem02 key={index} item={item} />
            ))}
          </ul>
        </div>
      </section>
      <Pagenation />
    </div>
  );
}

export default Settlement02;
