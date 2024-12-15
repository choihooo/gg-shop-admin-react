import React from "react";

function NoticeItem({ title, date }) {
  return (
    <li className="notice__item">
      <span className="notice__title">{title}</span>
      <span className="notice__date">{date}</span>
    </li>
  );
}

export default NoticeItem;
