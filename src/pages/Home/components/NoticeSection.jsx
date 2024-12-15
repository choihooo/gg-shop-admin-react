import React from "react";
import NoticeItem from "./NoticeItem";
function NoticeSection() {
  const noticeData = [
    {
      title: "신용카드 2024년 11월 무이자 할부 정책 안내",
      date: "2024-11-04",
    },
    {
      title: "신용카드 2024년 11월 무이자 할부 정책 안내",
      date: "2024-11-04",
    },
    {
      title: "신용카드 2024년 11월 무이자 할부 정책 안내",
      date: "2024-11-04",
    },
    {
      title: "신용카드 2024년 11월 무이자 할부 정책 안내",
      date: "2024-11-04",
    },
    {
      title: "신용카드 2024년 11월 무이자 할부 정책 안내",
      date: "2024-11-04",
    },
    {
      title: "신용카드 2024년 11월 무이자 할부 정책 안내",
      date: "2024-11-04",
    },
    {
      title: "신용카드 2024년 11월 무이자 할부 정책 안내",
      date: "2024-11-04",
    },
  ];

  return (
    <section className="content__section content__section--notice home shadow">
      <div className="section__title">
        <div>공지사항</div>
        <button>
          <img src="/images/ic_baseline-plus.svg" alt="Add" />
        </button>
      </div>
      <div className="notice__wrapper">
        <div className="notice__header">
          <div className="notice__header-title">제목</div>
          <div className="notice__header-date">등록일</div>
        </div>
        <ul className="notice__list">
          {noticeData.map((notice, index) => (
            <NoticeItem key={index} title={notice.title} date={notice.date} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default NoticeSection;
