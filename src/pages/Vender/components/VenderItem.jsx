import React, { useState } from "react";
import styles from "./VenderItem.module.css";

function VendorItem({ item, onOpenModal }) {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <li className={styles.item}>
      <span>{item.id}</span>
      <span>{item.store}</span>
      <span>{item.owner}</span>
      <span>{item.type}</span>
      <span>{item.contact}</span>
      <span>{item.date}</span>
      <span>
        <div
          className={`${styles.toggleWrapper} ${isActive ? styles.active : ""}`}
          onClick={toggleSwitch}
        >
          <div
            className={`${styles.toggle} ${
              isActive ? styles.toggleActive : ""
            }`}
          >
            <div
              className={`${styles.toggleKnob} ${
                isActive ? styles.toggleKnobActive : ""
              }`}
            ></div>
          </div>
        </div>
      </span>
      <span>
        <button className={styles.button} onClick={onOpenModal}>
          상세보기
        </button>
      </span>
    </li>
  );
}

export default VendorItem;
