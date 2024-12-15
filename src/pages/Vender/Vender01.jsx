import React, { useState } from "react";
import VenderFilter from "./components/VenderFilter";
import VenderNav from "./components/VenderNav";
import VendorItem from "./components/VenderItem";
import styles from "./Vender01.module.css";
import VenderModal01 from "./components/Vendor01/VenderModal01";
import NonVenderModal from "./components/Vendor01/NonVenderModal";
import CirclePagination from "../../components/CirclePagenation";
import ModifyVenderModal01 from "./components/Vendor01/ModifyVenderModal01";

function Vender01() {
  const [modalType, setModalType] = useState("vender"); // 모달 타입 ("vender", "non-vender", "modify")
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림/닫힘 상태
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 아이템

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const handleOpenModifyModal = () => {
    setModalType("modify"); // 수정 모달로 전환
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

  const openModal = (item) => {
    setSelectedItem(item); // 선택된 아이템 설정
    setModalType(item.type === "사업자" ? "vender" : "non-vender"); // 모달 타입 결정
    setIsModalOpen(true); // 모달 열기
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
                onOpenModal={() => openModal(item)} // 선택된 아이템을 열기
              />
            ))}
          </ul>
        </div>
      </section>
      <CirclePagination />
      {/* VenderModal01 */}
      {modalType === "vender" && isModalOpen && (
        <VenderModal01
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          selectedItem={selectedItem} // 선택된 아이템 전달
          onModify={handleOpenModifyModal}
        ></VenderModal01>
      )}

      {/* NonVenderModal */}
      {modalType === "non-vender" && isModalOpen && (
        <NonVenderModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          selectedItem={selectedItem} // 선택된 아이템 전달
          onModify={handleOpenModifyModal}
        ></NonVenderModal>
      )}

      {/* ModifyVenderModal01 */}
      {modalType === "modify" && isModalOpen && (
        <ModifyVenderModal01
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          selectedItem={selectedItem} // 선택된 아이템 전달
        />
      )}
    </>
  );
}

export default Vender01;
