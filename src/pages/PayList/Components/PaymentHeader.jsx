import React from "react";

function PaymentHeader() {
  return (
    <div className="payment-list__header">
      <span className="payment-list__column payment-list__column-small">
        No
      </span>
      <span className="payment-list__column payment-list__column-large">
        승인일시
      </span>
      <span className="payment-list__column payment-list__column-small">
        승인
      </span>
      <span className="payment-list__column payment-list__column-large">
        PG
      </span>
      <span className="payment-list__column payment-list__column-large">
        사업자
      </span>
      <span className="payment-list__column payment-list__column-large">
        총판
      </span>
      <span className="payment-list__column payment-list__column-large">
        대리점
      </span>
      <span className="payment-list__column payment-list__column-large">
        가맹점
      </span>
      <span className="payment-list__column payment-list__column-large">
        ID
      </span>
      <span className="payment-list__column payment-list__column-small">
        할부
      </span>
      <span className="payment-list__column payment-list__column-extra-large">
        카드번호
      </span>
      <span className="payment-list__column payment-list__column-medium">
        카드사
      </span>
      <span className="payment-list__column payment-list__column-large">
        승인번호
      </span>
      <span className="payment-list__column payment-list__column-large">
        승인금액
      </span>
      <span className="payment-list__column payment-list__column-large">
        정산금액
      </span>
      <span className="payment-list__column payment-list__column-large">
        총수수료
      </span>
      <span className="payment-list__column payment-list__column-large">
        본사 수수료
      </span>
      <span className="payment-list__column payment-list__column-large">
        본사 수수료
      </span>
      <span className="payment-list__column payment-list__column-large">
        총판 수수료
      </span>
      <span className="payment-list__column payment-list__column-large">
        대리점 수수료
      </span>
      <span className="payment-list__column payment-list__column-large">
        상태
      </span>
      <span className="payment-list__column payment-list__column-large">
        판매내역
      </span>
      <span className="payment-list__column payment-list__column-large">
        수령확인
      </span>
    </div>
  );
}

export default PaymentHeader;
