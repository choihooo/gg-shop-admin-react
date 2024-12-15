import React, { useState } from "react";
import {
  WaitApprovalFilter,
  WaitApprovalHeader,
  WaitApprovalItem,
  WaitApprovalModalVender,
  WaitApprovalModal,
} from "./components";
import styles from "./WaitApproval.module.css";
import CirclePagination from "../../components/CirclePagenation";

function WaitApproval() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVenderModal, setIsVenderModal] = useState(false); // 사업자 모달 여부
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 아이템 데이터

  const openModal = (item) => {
    setSelectedItem(item);
    if (item.businessType === "사업자") {
      setIsVenderModal(true);
    } else {
      setIsVenderModal(false);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const items = [
    {
      id: "001",
      storeName: "상점명 A",
      ownerName: "김철수",
      businessType: "사업자",
      contact: "010-1234-5678",
      approvalDate: "2024-12-01 10:00",
      approvalStatus: true,
    },
    {
      id: "002",
      storeName: "상점명 B",
      ownerName: "이영희",
      businessType: "비사업자",
      contact: "010-5678-1234",
      approvalDate: "2024-12-02 14:30",
      approvalStatus: false,
    },
  ];

  return (
    <>
      <WaitApprovalFilter />
      <section className={`${styles.contentSection} ${styles.approval}`}>
        <div className={styles.approvalWrapper}>
          <WaitApprovalHeader />
          <ul className={styles.approvalBody}>
            {items.map((item, index) => (
              <WaitApprovalItem
                key={index}
                item={item}
                onOpenModal={() => openModal(item)}
              />
            ))}
          </ul>
        </div>
      </section>
      <CirclePagination />
      {isModalOpen &&
        (isVenderModal ? (
          <WaitApprovalModalVender onClose={closeModal} item={selectedItem} />
        ) : (
          <WaitApprovalModal onClose={closeModal} item={selectedItem} />
        ))}
    </>
  );
}

export default WaitApproval;
