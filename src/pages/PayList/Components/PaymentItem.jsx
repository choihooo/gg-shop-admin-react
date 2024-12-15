import React from "react";

function PaymentItem({ data }) {
  return (
    <li className="payment-list__item">
      <span className="payment-list__column payment-list__column-small">
        {data.no}
      </span>
      <span className="payment-list__column payment-list__column-large">
        {data.approvalTime}
      </span>
      <span className="payment-list__column payment-list__column-small">
        <img
          src={
            data.approvalStatus
              ? "/images/approval.svg"
              : "/images/disapproval.svg"
          }
          alt="Approval Status"
        />
      </span>
      <span className="payment-list__column payment-list__column-large">
        {data.pg}
      </span>
      <span className="payment-list__column payment-list__column-large">
        {data.business}
      </span>
      <span className="payment-list__column payment-list__column-large">
        {data.distributor}
      </span>
      <span className="payment-list__column payment-list__column-large">
        {data.agent}
      </span>
      <span className="payment-list__column payment-list__column-large">
        {data.store}
      </span>
      <span className="payment-list__column payment-list__column-large">
        {data.id}
      </span>
      <span className="payment-list__column payment-list__column-small">
        {data.installments}
      </span>
      <span className="payment-list__column payment-list__column-extra-large">
        {data.cardNumber}
      </span>
      <span className="payment-list__column payment-list__column-medium">
        {data.cardCompany}
      </span>
      <span className="payment-list__column payment-list__column-large">
        {data.approvalNumber}
      </span>
      <span className="payment-list__column payment-list__column-large">
        {data.amount}
      </span>
      <span className="payment-list__column payment-list__column-large">
        {data.settlementAmount}
      </span>
      <span className="payment-list__column payment-list__column-large">
        {data.totalFee}
      </span>
      <span className="payment-list__column payment-list__column-large">
        {data.headOfficeFee}
      </span>
      <span className="payment-list__column payment-list__column-large">
        {data.distributorFee}
      </span>
      <span className="payment-list__column payment-list__column-large">
        {data.agentFee}
      </span>
      <span className="payment-list__column payment-list__column-large">
        {data.status}
      </span>
      <span className="payment-list__column payment-list__column-large">
        <button>상세보기</button>
      </span>
      <span className="payment-list__column payment-list__column-large">
        <button>상세보기</button>
      </span>
    </li>
  );
}

export default PaymentItem;
