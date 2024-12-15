import React from "react";

function SummaryItem({ content, amount, approved, canceled }) {
  return (
    <tr className="table__row">
      <td className="table__data table__data--content">{content}</td>
      <td className="table__data table__data--amount">{amount}</td>
      <td className="table__data table__data--approved">{approved}</td>
      <td className="table__data table__data--canceled">{canceled}</td>
    </tr>
  );
}

export default SummaryItem;
