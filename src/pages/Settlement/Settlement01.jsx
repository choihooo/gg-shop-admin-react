import React from "react";
import SeltteNav from "./components/SettleNav";
import SettlementItem01 from "./components/SettlementItem01";
import styles from "./Settlement01.module.css";
import SettleFilter01 from "./components/SettleFilter01";
import Pagenation from "../../components/Pagenation";

function Settlement01() {
  const [selectedRadio, setSelectedRadio] = React.useState(null);

  const handleRadioChange = (no) => {
    setSelectedRadio(no);
  };
  const items = [
    {
      no: "1",
      approvalTime: "2024/11/18 19:21",
      approvalStatus: true,
      pg: "케이페이먼츠",
      branch: "김정수 지사",
      distributor: "N이현철 총판",
      dealer: "N이현철 대리점",
      store: "썸",
      id: "sub123",
      installments: "10",
      cardNumber: "13792******1412",
      cardCompany: "카드사",
      approvalNumber: "49908225",
      amount: "1,900,000",
      receipt: true,
      installmentExceeding: "초과",
      exceeding: "-",
      duplicates: "2",
      exceedingThreshold: "3000000",
      onHold: false,
    },
    {
      no: "2",
      approvalTime: "2024/11/18 19:21",
      approvalStatus: true,
      pg: "케이페이먼츠",
      branch: "김정수 지사",
      distributor: "N이현철 총판",
      dealer: "N이현철 대리점",
      store: "썸",
      id: "sub123",
      installments: "10",
      cardNumber: "13792******1412",
      cardCompany: "카드사",
      approvalNumber: "49908225",
      amount: "1,900,000",
      receipt: true,
      installmentExceeding: "초과",
      exceeding: "-",
      duplicates: "2",
      exceedingThreshold: "3000000",
      onHold: false,
    },
    {
      no: "3",
      approvalTime: "2024/11/18 19:21",
      approvalStatus: true,
      pg: "케이페이먼츠",
      branch: "김정수 지사",
      distributor: "N이현철 총판",
      dealer: "N이현철 대리점",
      store: "썸",
      id: "sub123",
      installments: "10",
      cardNumber: "13792******1412",
      cardCompany: "카드사",
      approvalNumber: "49908225",
      amount: "1,900,000",
      receipt: true,
      installmentExceeding: "초과",
      exceeding: "-",
      duplicates: "2",
      exceedingThreshold: "3000000",
      onHold: false,
    },
    {
      no: "4",
      approvalTime: "2024/11/18 19:21",
      approvalStatus: true,
      pg: "케이페이먼츠",
      branch: "김정수 지사",
      distributor: "N이현철 총판",
      dealer: "N이현철 대리점",
      store: "썸",
      id: "sub123",
      installments: "10",
      cardNumber: "13792******1412",
      cardCompany: "카드사",
      approvalNumber: "49908225",
      amount: "1,900,000",
      receipt: true,
      installmentExceeding: "초과",
      exceeding: "-",
      duplicates: "2",
      exceedingThreshold: "3000000",
      onHold: false,
    },
    {
      no: "5",
      approvalTime: "2024/11/18 19:21",
      approvalStatus: true,
      pg: "케이페이먼츠",
      branch: "김정수 지사",
      distributor: "N이현철 총판",
      dealer: "N이현철 대리점",
      store: "썸",
      id: "sub123",
      installments: "10",
      cardNumber: "13792******1412",
      cardCompany: "카드사",
      approvalNumber: "49908225",
      amount: "1,900,000",
      receipt: true,
      installmentExceeding: "초과",
      exceeding: "-",
      duplicates: "2",
      exceedingThreshold: "3000000",
      onHold: false,
    },
    {
      no: "6",
      approvalTime: "2024/11/18 19:21",
      approvalStatus: true,
      pg: "케이페이먼츠",
      branch: "김정수 지사",
      distributor: "N이현철 총판",
      dealer: "N이현철 대리점",
      store: "썸",
      id: "sub123",
      installments: "10",
      cardNumber: "13792******1412",
      cardCompany: "카드사",
      approvalNumber: "49908225",
      amount: "1,900,000",
      receipt: false,
      installmentExceeding: "초과",
      exceeding: "-",
      duplicates: "2",
      exceedingThreshold: "3000000",
      onHold: false,
    },
  ];

  return (
    <div>
      <SeltteNav />
      <SettleFilter01 />
      <section className={`${styles.contentSection} ${styles.settlement}`}>
        <div className={styles.settlementWrapper}>
          <div className={styles.settlementHeader}>
            <span
              className={`${styles.settlementColumn} ${styles.columnXSmall}`}
            >
              No
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnLarge}`}
            >
              승인일시
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnXSmall}`}
            >
              승인
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnMedium}`}
            >
              PG
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnMedium}`}
            >
              사업자
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnMedium}`}
            >
              총판
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnMedium}`}
            >
              대리점
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnSmall}`}
            >
              가맹점
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnSmall}`}
            >
              ID
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnXSmall}`}
            >
              할부
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnLarge}`}
            >
              카드번호
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnMedium}`}
            >
              카드사
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnMedium} ${styles.approvalNumber}`}
            >
              승인번호
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnMedium}`}
            >
              승인금액
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnSmall}`}
            >
              제품수령여부
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnSmall}`}
            >
              할부초과
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnXSmall}`}
            >
              초과
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnXSmall}`}
            >
              중복
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnSmall}`}
            >
              초과기준
            </span>
            <span
              className={`${styles.settlementColumn} ${styles.columnXSmall}`}
            >
              보류
            </span>
          </div>

          <ul className={styles.settlementBody}>
            {items.map((item, index) => (
              <SettlementItem01
                key={item.no}
                item={{
                  ...item,
                  onHold: selectedRadio === item.no, // Mark the selected item
                }}
                onRadioChange={handleRadioChange}
              />
            ))}
          </ul>
        </div>
      </section>
      <Pagenation />
    </div>
  );
}

export default Settlement01;
