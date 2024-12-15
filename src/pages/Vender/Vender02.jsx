import React, { useState } from "react";
import VenderFilter from "./components/VenderFilter";
import VenderNav from "./components/VenderNav";
import VendorItem from "./components/VenderItem";
import styles from "./Vender01.module.css";
import VenderModal02 from "./components/Vendor02/VenderModal02";
import ModifyVenderModal02 from "./components/Vendor02/ModifyVenderModal02";
import CirclePagination from "../../components/CirclePagenation";

function Vender02() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 기본 모달 열림/닫힘 상태
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false); // 수정 모달 열림/닫힘 상태
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 아이템

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

  const openModal = (item) => {
    setSelectedItem(item); // 선택된 아이템 저장
    setIsModalOpen(true); // 기본 모달 열기
  };

  const closeModal = () => {
    setIsModalOpen(false); // 기본 모달 닫기
    setSelectedItem(null); // 선택된 아이템 초기화
  };

  const openModifyModal = () => {
    setIsModalOpen(false); // 기본 모달 닫기
    setIsModifyModalOpen(true); // 수정 모달 열기
  };

  const closeModifyModal = () => {
    setIsModifyModalOpen(false); // 수정 모달 닫기
  };

  return (
    <>
      <VenderNav />
      <VenderFilter />
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <span>ID</span>
            <span>상점명</span>
            <span>대표자명</span>
            <span>사업자 구분</span>
            <span>연락처</span>
            <span>승인요청일시</span>
            <span>승인여부</span>
            <span>상세</span>
          </div>
          <ul className={styles.body}>
            {items.map((item, index) => (
              <VendorItem
                key={index}
                item={item}
                onOpenModal={() => openModal(item)}
              />
            ))}
          </ul>
        </div>
      </section>
      <CirclePagination />
      {/* VenderModal02 */}
      {isModalOpen && (
        <VenderModal02
          isOpen={isModalOpen}
          onClose={closeModal}
          onModify={openModifyModal}
          selectedItem={selectedItem}
        />
      )}

      {/* ModifyVenderModal02 */}
      {isModifyModalOpen && (
        <ModifyVenderModal02
          isOpen={isModifyModalOpen}
          onClose={closeModifyModal}
        />
      )}
    </>
  );
}

export default Vender02;
