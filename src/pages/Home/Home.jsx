import React from "react";
import {
  NoticeSection,
  PaymentSection,
  DuplicatesSection,
  WaitingStoresSection,
  SummarySection,
  MonthlyApproval,
  DailyApproval,
} from "./components";
import "./Home.css";

function Home() {
  return (
    <div className="dashboard__content">
      <div className="dashboard__wrapper dashboard__wrapper--left">
        <NoticeSection />
        <PaymentSection />
        <DuplicatesSection />
        <SummarySection />
      </div>
      <div className="dashboard__wrapper dashboard__wrapper--right">
        <WaitingStoresSection />
        <DailyApproval />
        <MonthlyApproval />
      </div>
    </div>
  );
}

export default Home;
