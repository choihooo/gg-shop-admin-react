import React from "react";

function DuplicateItem({
  date,
  id,
  shopName,
  amount,
  received,
  installment,
  exceeded,
  duplicate,
}) {
  return (
    <li className="duplicates__item">
      <span className="item__date">{date}</span>
      <span className="item__id">{id}</span>
      <span className="item__shop-name">{shopName}</span>
      <span className="item__amount">{amount}</span>
      <span
        className={`item__received ${
          received === "미수령" ? "data--error" : ""
        }`}
      >
        {received}
      </span>
      <span
        className={`item__installment ${installment > 6 ? "data--error" : ""}`}
      >
        {installment}
      </span>
      <span
        className={`item__exceeded ${exceeded === "초과" ? "data--error" : ""}`}
      >
        {exceeded}
      </span>
      <span
        className={`item__duplicate ${
          duplicate === "중복" ? "data--error" : ""
        }`}
      >
        {duplicate}
      </span>
    </li>
  );
}

export default DuplicateItem;
