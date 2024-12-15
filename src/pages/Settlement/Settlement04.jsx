import React, { useState } from "react";
import SeltteNav from "./components/SettleNav";
import SettlementItem04 from "./components/SettlementItem04.jsx";
import SettleFilter02 from "./components/SettleFilter02";
import Pagenation from "../../components/Pagenation";
import styles from "./Settlement04.module.css";

function Settlement04() {
  const [items, setItems] = useState([
    {
      no: "2",
      id: "dffssff",
      approvalDate: "2024/00/00",
      approvalCount: "1",
      cancelCount: "0",
      pg: "케이페이먼츠",
      storeName: "터미널노래클럽",
      settlementDate: "202400000000",
      approvalAmount: "1,000,000",
      settlementAmount: "1,000,000",
      totalFee: "1,000,000",
      bank: "카카오뱅크",
      accountNumber: "0000000000000",
      settlementStatus: "정산완료",
      checked: false,
    },
    {
      no: "3",
      id: "abc123",
      approvalDate: "2024/01/01",
      approvalCount: "2",
      cancelCount: "1",
      pg: "비케이페이먼츠",
      storeName: "가맹점A",
      settlementDate: "202400000001",
      approvalAmount: "2,000,000",
      settlementAmount: "1,800,000",
      totalFee: "200,000",
      bank: "우리은행",
      accountNumber: "1234567890123",
      settlementStatus: "미완료",
      checked: false,
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setItems(items.map((item) => ({ ...item, checked: newSelectAll })));
  };

  const handleItemCheck = (index) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);

    // Update selectAll state based on all items' checked status
    const allChecked = updatedItems.every((item) => item.checked);
    setSelectAll(allChecked);
  };

  return (
    <div>
      <SeltteNav />
      <SettleFilter02 />
      <section className={`${styles.contentSection} ${styles.settlement}`}>
        <div className={styles.settlementWrapper}>
          <div className={styles.settlementHeader}>
            <span className={styles.columnSmall}>No</span>
            <span className={styles.columnXSmall}>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  id="select-all"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
                <label
                  htmlFor="select-all"
                  className={styles.customCheckbox}
                ></label>
              </div>
            </span>
            <span className={styles.columnSmall}>ID</span>
            <span className={styles.columnMedium}>승인일</span>
            <span className={styles.columnSmall}>승인건</span>
            <span className={styles.columnSmall}>취소건</span>
            <span className={styles.columnMedium}>PG</span>
            <span className={styles.columnMedium}>가맹점명</span>
            <span className={styles.columnLarge}>정산일자</span>
            <span className={styles.columnMedium}>승인금액</span>
            <span className={styles.columnMedium}>정산금액</span>
            <span className={styles.columnMedium}>총수수료</span>
            <span className={styles.columnMedium}>은행</span>
            <span className={styles.columnLarge}>계좌번호</span>
            <span className={styles.columnSmall}>정산</span>
          </div>

          <ul className={styles.settlementBody}>
            {items.map((item, index) => (
              <SettlementItem04
                key={index}
                item={item}
                onCheck={() => handleItemCheck(index)}
              />
            ))}
          </ul>
        </div>
      </section>
      <Pagenation />
    </div>
  );
}

export default Settlement04;
