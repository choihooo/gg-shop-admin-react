import React, { useState, useEffect } from "react";
import VenderFilter from "./components/VenderFilter";
import VenderNav from "./components/VenderNav";
import VendorItem from "./components/VenderItem";
import styles from "./Vender01.module.css";
import VenderModal02 from "./components/Vendor02/VenderModal02";
import ModifyVenderModal02 from "./components/Vendor02/ModifyVenderModal02";
import NonVenderModal02 from "./components/Vendor02/NonVenderModal02";
import CirclePagination from "../../components/CirclePagenation";

function Vender02() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
  const [isNonMemberModalOpen, setIsNonMemberModalOpen] = useState(false);
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

  const openModal = (item) => {
    setSelectedItem(item);
    if (item.type === "비사업자") {
      setIsNonMemberModalOpen(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsNonMemberModalOpen(false);
    setIsModifyModalOpen(false);
    setSelectedItem(null);
  };

  const openModifyModal = () => {
    setIsModalOpen(false);
    setIsNonMemberModalOpen(false);

    setIsModifyModalOpen(true);
  };

  const closeModifyModal = () => {
    setIsModifyModalOpen(false);
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

      {isModalOpen && (
        <VenderModal02
          isOpen={isModalOpen}
          onClose={closeModal}
          onModify={openModifyModal}
          selectedItem={selectedItem}
        />
      )}

      {isModifyModalOpen && (
        <ModifyVenderModal02
          isOpen={isModifyModalOpen}
          onClose={closeModifyModal}
        />
      )}

      {isNonMemberModalOpen && (
        <NonVenderModal02
          isOpen={isNonMemberModalOpen}
          onClose={closeModal}
          onModify={openModifyModal}
          selectedItem={selectedItem}
        />
      )}
    </>
  );
}

export default Vender02;
