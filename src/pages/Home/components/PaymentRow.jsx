import React from "react";

function PaymentRow({ business, lastMonth, currentMonth }) {
  return (
    <tr className="table__row">
      <td className="table__data table__data--business">{business}</td>
      <td className="table__data table__data--last-month">{lastMonth}</td>
      <td className="table__data table__data--current-month">{currentMonth}</td>
    </tr>
  );
}

export default PaymentRow;
