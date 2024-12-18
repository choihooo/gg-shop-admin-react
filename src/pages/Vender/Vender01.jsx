import React, { useState, useEffect } from "react";
import VenderFilter from "./components/VenderFilter";
import VenderNav from "./components/VenderNav";
import VendorItem from "./components/VenderItem";
import styles from "./Vender01.module.css";
import VenderModal01 from "./components/Vendor01/VenderModal01";
import NonVenderModal01 from "./components/Vendor01/NonVenderModal01";
import CirclePagination from "../../components/CirclePagenation";
import ModifyVenderModal01 from "./components/Vendor01/ModifyVenderModal01";

function Vender01() {
  const [modalType, setModalType] = useState("vender");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState([
    {
      No: "15",
      id: "000",
      store: "상점명",
      owner: "정복순",
      type: "사업자",
      contact: "000-0000-0000",
      date: "2024-11-17 17:00",
    },
    {
      No: "14",
      id: "001",
      store: "상점명",
      owner: "정복순",
      type: "비사업자",
      contact: "000-0000-0000",
      date: "2024-11-17 17:00",
    },
  ]);

  useEffect(() => {
    const sortedItems = [...items].sort((a, b) => b.No - a.No);
    setItems(sortedItems);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModifyModal = () => {
    setModalType("modify");
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalType(item.type === "사업자" ? "vender" : "non-vender");
    setIsModalOpen(true);
  };

  return (
    <>
      <VenderNav />
      <VenderFilter />
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <span>No</span>
            <span>ID</span>
            <span>상점명</span>
            <span>대표자명</span>
            <span>사업자 구분</span>
            <span>연락처</span>
            <span>가입승인일시</span>
            <span>로그인허용</span>
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

      {modalType === "vender" && isModalOpen && (
        <VenderModal01
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          selectedItem={selectedItem}
          onModify={handleOpenModifyModal}
        ></VenderModal01>
      )}

      {modalType === "non-vender" && isModalOpen && (
        <NonVenderModal01
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          selectedItem={selectedItem}
          onModify={handleOpenModifyModal}
        ></NonVenderModal01>
      )}

      {modalType === "modify" && isModalOpen && (
        <ModifyVenderModal01
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          selectedItem={selectedItem}
        />
      )}
    </>
  );
}

export default Vender01;
