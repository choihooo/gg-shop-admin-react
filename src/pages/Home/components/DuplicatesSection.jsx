import React from "react";
import DuplicateItem from "./DuplicateItem";

function DuplicatesSection() {
  const duplicatesData = [
    {
      date: "2024-00-00",
      id: "yesshop",
      shopName: "예색샵",
      amount: "2,300,000",
      received: "수령",
      installment: "8",
      exceeded: "초과",
      duplicate: "중복",
    },
    {
      date: "2024-00-00",
      id: "yesshop",
      shopName: "예색샵",
      amount: "2,300,000",
      received: "미수령",
      installment: "6",
      exceeded: "-",
      duplicate: "-",
    },
    {
      date: "2024-00-00",
      id: "yesshop",
      shopName: "예색샵",
      amount: "2,300,000",
      received: "미수령",
      installment: "6",
      exceeded: "-",
      duplicate: "-",
    },
    {
      date: "2024-00-00",
      id: "yesshop",
      shopName: "예색샵",
      amount: "2,300,000",
      received: "미수령",
      installment: "6",
      exceeded: "-",
      duplicate: "-",
    },
    {
      date: "2024-00-00",
      id: "yesshop",
      shopName: "예색샵",
      amount: "2,300,000",
      received: "미수령",
      installment: "6",
      exceeded: "-",
      duplicate: "-",
    },
    {
      date: "2024-00-00",
      id: "yesshop",
      shopName: "예색샵",
      amount: "2,300,000",
      received: "미수령",
      installment: "6",
      exceeded: "-",
      duplicate: "-",
    },
    {
      date: "2024-00-00",
      id: "yesshop",
      shopName: "예색샵",
      amount: "2,300,000",
      received: "미수령",
      installment: "6",
      exceeded: "-",
      duplicate: "-",
    },
    {
      date: "2024-00-00",
      id: "yesshop",
      shopName: "예색샵",
      amount: "2,300,000",
      received: "미수령",
      installment: "6",
      exceeded: "-",
      duplicate: "-",
    },
    {
      date: "2024-00-00",
      id: "yesshop",
      shopName: "예색샵",
      amount: "2,300,000",
      received: "미수령",
      installment: "6",
      exceeded: "-",
      duplicate: "-",
    },
    {
      date: "2024-00-00",
      id: "yesshop",
      shopName: "예색샵",
      amount: "2,300,000",
      received: "미수령",
      installment: "5",
      exceeded: "-",
      duplicate: "-",
    },
    {
      date: "2024-00-00",
      id: "yesshop",
      shopName: "예색샵",
      amount: "2,300,000",
      received: "미수령",
      installment: "6",
      exceeded: "-",
      duplicate: "-",
    },
    {
      date: "2024-00-00",
      id: "yesshop",
      shopName: "예색샵",
      amount: "2,300,000",
      received: "미수령",
      installment: "6",
      exceeded: "-",
      duplicate: "-",
    },
    {
      date: "2024-00-00",
      id: "yesshop",
      shopName: "예색샵",
      amount: "2,300,000",
      received: "미수령",
      installment: "6",
      exceeded: "-",
      duplicate: "-",
    },
    {
      date: "2024-00-00",
      id: "yesshop",
      shopName: "예색샵",
      amount: "2,300,000",
      received: "미수령",
      installment: "6",
      exceeded: "-",
      duplicate: "-",
    },
    {
      date: "2024-00-00",
      id: "yesshop",
      shopName: "예색샵",
      amount: "2,300,000",
      received: "미수령",
      installment: "6",
      exceeded: "-",
      duplicate: "-",
    },
  ];
  return (
    <section className="content__section content__section--duplicates home shadow">
      <div className="section__title">중복 및 초과 목록</div>
      <div className="duplicates__wrapper">
        <div className="duplicates__header">
          <span className="header__item header__date">승인일시</span>
          <span className="header__item header__id">ID</span>
          <span className="header__item header__shop-name">상점명</span>
          <span className="header__item header__amount">승인금액</span>
          <span className="header__item header__received">제품수령여부</span>
          <span className="header__item header__installment">할부초과</span>
          <span className="header__item header__exceeded">금액초과</span>
          <span className="header__item header__duplicate">중복결제</span>
        </div>
        <ul className="duplicates__list">
          {duplicatesData.map((item, index) => (
            <DuplicateItem key={index} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DuplicatesSection;
