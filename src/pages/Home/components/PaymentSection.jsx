import React from "react";
import PaymentRow from "./PaymentRow";

function PaymentSection() {
  const paymentData = [
    {
      business: "사업자1",
      lastMonth: "429,630,552",
      currentMonth: "275,775,459",
    },
    {
      business: "사업자2",
      lastMonth: "429,630,552",
      currentMonth: "275,775,459",
    },
    {
      business: "사업자3",
      lastMonth: "429,630,552",
      currentMonth: "275,775,459",
    },
    {
      business: "사업자3",
      lastMonth: "429,630,552",
      currentMonth: "275,775,459",
    },
    {
      business: "사업자3",
      lastMonth: "429,630,552",
      currentMonth: "275,775,459",
    },
    {
      business: "사업자3",
      lastMonth: "429,630,552",
      currentMonth: "275,775,459",
    },
    {
      business: "사업자3",
      lastMonth: "429,630,552",
      currentMonth: "275,775,459",
    },
    {
      business: "사업자3",
      lastMonth: "429,630,552",
      currentMonth: "275,775,459",
    },
    {
      business: "사업자3",
      lastMonth: "429,630,552",
      currentMonth: "275,775,459",
    },
    {
      business: "사업자3",
      lastMonth: "429,630,552",
      currentMonth: "275,775,459",
    },
    {
      business: "사업자3",
      lastMonth: "429,630,552",
      currentMonth: "275,775,459",
    },
  ];

  return (
    <section className="content__section content__section--payments home shadow">
      <div className="section__title">사업자별 월 결제 금액</div>
      <table className="payments__table">
        <thead>
          <tr className="table__row">
            <th className="table__header table__header--business">사업자</th>
            <th className="table__header table__header--last-month">
              지난달 결제 금액
            </th>
            <th className="table__header table__header--current-month">
              이번달 결제 금액
            </th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((item, index) => (
            <PaymentRow
              key={index}
              business={item.business}
              lastMonth={item.lastMonth}
              currentMonth={item.currentMonth}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default PaymentSection;
