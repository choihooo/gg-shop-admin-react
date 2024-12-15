import React, { useState, useEffect, useRef } from "react";
import styles from "./StoreDropdown.module.css";

const StoreDropdown = ({
  options,
  defaultLabel,
  onChange,
  isBlack = false,
  width = "120px",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultLabel);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={styles.dropdown}
      ref={dropdownRef}
      style={{ width: `${width}` }}
    >
      <div
        className={styles.dropdownControl}
        onClick={toggleDropdown}
        style={{ color: isBlack ? "#000000" : "#808080" }}
      >
        <span>{selected}</span>
        <span className={styles.dropdownArrow}>&#9662;</span>
      </div>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {options.map((option, index) => (
            <div
              key={index}
              className={styles.dropdownItem}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StoreDropdown;
