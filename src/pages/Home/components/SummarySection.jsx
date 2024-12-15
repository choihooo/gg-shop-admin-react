import React from "react";
import SummaryItem from "./SummaryItem";

function SummarySection() {
  // 예시 데이터
  const paymentData = [
    {
      content: "전일 결제 금액",
      amount: "92,072,230",
      approved: "858",
      canceled: "10",
    },
    {
      content: "전일 결제 금액",
      amount: "92,072,230",
      approved: "858",
      canceled: "10",
    },
    {
      content: "전일 결제 금액",
      amount: "92,072,230",
      approved: "858",
      canceled: "10",
    },
    {
      content: "전일 결제 금액",
      amount: "92,072,230",
      approved: "858",
      canceled: "10",
    },
    {
      content: "전일 결제 금액",
      amount: "92,072,230",
      approved: "858",
      canceled: "10",
    },
    {
      content: "전일 결제 금액",
      amount: "92,072,230",
      approved: "858",
      canceled: "10",
    },
    {
      content: "전일 결제 금액",
      amount: "92,072,230",
      approved: "858",
      canceled: "10",
    },
    {
      content: "전일 결제 금액",
      amount: "92,072,230",
      approved: "858",
      canceled: "10",
    },
  ];

  return (
    <section className="content__section content__section--summary home shadow">
      <div className="section__title">결제 목록</div>
      <table className="summary__table">
        <thead>
          <tr className="table__row">
            <th className="table__header table__header--content">결제 내용</th>
            <th className="table__header table__header--amount">결제 금액</th>
            <th className="table__header table__header--approved">승인</th>
            <th className="table__header table__header--canceled">취소</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((item, index) => (
            <SummaryItem
              key={index}
              content={item.content}
              amount={item.amount}
              approved={item.approved}
              canceled={item.canceled}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default SummarySection;
