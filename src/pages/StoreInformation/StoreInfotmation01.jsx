import React, { useState } from "react";
import styles from "./StoreInfotmation01.module.css";
import StoreInfotmationModal from "./components/StoreInfotmationModal";
import StoreInfotmationModalVender from "./components/StoreInfotmationModalVender";
import CirclePagination from "../../components/CirclePagenation";
import StoreInfotmationItem from "./components/StoreInfotmationItem";
import StoreInfotmationFilter from "./components/StoreInfotmationFilter";
import StoreInfotmationNav from "./components/StoreInfotmationNav";

function StoreInfotmation01() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVenderModal, setIsVenderModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    if (item.type === "사업자") {
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
      id: "000",
      store: "상점명",
      owner: "정복순",
      type: "사업자",
      contact: "000-0000-0000",
      date: "2024-11-17 17:00",
    },
    {
      id: "001",
      store: "상점명",
      owner: "정복순",
      type: "비사업자",
      contact: "000-0000-0000",
      date: "2024-11-17 17:00",
    },
  ];

  return (
    <>
      <StoreInfotmationNav />
      <StoreInfotmationFilter />
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <span>ID</span>
            <span>상점명</span>
            <span>대표자명</span>
            <span>사업자 구분</span>
            <span>연락처</span>
            <span>승인요청일시</span>
            <span>로그인 허용</span>
            <span>상세</span>
          </div>
          <ul className={styles.body}>
            {items.map((item, index) => (
              <StoreInfotmationItem
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
          <StoreInfotmationModalVender
            onClose={closeModal}
            item={selectedItem}
          />
        ) : (
          <StoreInfotmationModal onClose={closeModal} item={selectedItem} />
        ))}
    </>
  );
}

export default StoreInfotmation01;
