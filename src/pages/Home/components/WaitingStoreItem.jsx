import React from "react";

function WaitingStoreItem({ id, shopName, owner, type, contact }) {
  return (
    <li className="waiting__item">
      <span className="waiting__item-id">{id}</span>
      <span className="waiting__item-shop-name">{shopName}</span>
      <span className="waiting__item-owner">{owner}</span>
      <span className="waiting__item-type">{type}</span>
      <span className="waiting__item-contact">{contact}</span>
      <span className="waiting__item-details">
        <button>상세보기</button>
      </span>
    </li>
  );
}

export default WaitingStoreItem;
