import React, { useState } from "react";
import styles from "./StoreInfotmationItem.module.css";

function StoreInfotmationItem({ item, onOpenModal, isTermination = false }) {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive((prevState) => !prevState);
  };

  // 적용할 스타일 클래스 동적으로 설정
  const textStyle = isTermination ? styles.textWithUnderline : "";

  return (
    <li className={styles.item}>
      <span className={textStyle}>{item.No}</span>
      <span className={textStyle}>{item.id}</span>
      <span className={textStyle}>{item.store}</span>
      <span className={textStyle}>{item.owner}</span>
      <span className={textStyle}>{item.type}</span>
      <span className={textStyle}>{item.contact}</span>
      <span className={textStyle}>{item.date}</span>
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

export default StoreInfotmationItem;
