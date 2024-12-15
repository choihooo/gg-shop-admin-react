import React from "react";
import WaitingStoreItem from "./WaitingStoreItem";

function WaitingStoresSection({}) {
  const waitingStoresData = [
    {
      id: "0",
      shopName: "상점명",
      owner: "대표자명",
      type: "사업자",
      contact: "010-0000-0000",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
    {
      id: "1",
      shopName: "상점명2",
      owner: "대표자명2",
      type: "비사업자",
      contact: "010-1111-1111",
    },
  ];
  return (
    <section className="content__section content__section--waiting home shadow">
      <h2 className="section__title">대기 상점</h2>
      <div className="waiting__wrapper">
        <div className="waiting__header">
          <span className="waiting__header-id">ID</span>
          <span className="waiting__header-shop-name">상점명</span>
          <span className="waiting__header-owner">대표자명</span>
          <span className="waiting__header-type">구분</span>
          <span className="waiting__header-contact">연락처</span>
          <span className="waiting__header-details">상세</span>
        </div>
        <ul className="waiting__list">
          {waitingStoresData.map((store, index) => (
            <WaitingStoreItem key={index} {...store} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WaitingStoresSection;
