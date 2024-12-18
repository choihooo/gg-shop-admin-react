import React from "react";
import styles from "./WaitApprovalModalVender.module.css";

function WaitApprovalModalVender({ onClose, item }) {
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalTitle}>회원 상세정보</div>
        <table className={styles.detailTable}>
          <tbody>
            <tr>
              <th>회원ID</th>
              <td>{item.storeName}</td>
              <th>대표명</th>
              <td>{item.ownerName}</td>
            </tr>
            <tr>
              <th>구분</th>
              <td>{item.businessType}</td>
              <th>사업자 번호</th>
              <td>{item.businessNumber || "000000"}</td>
            </tr>
            <tr>
              <th>주민등록번호</th>
              <td>000</td>
              <th>연락처</th>
              <td>{item.contact}</td>
            </tr>
            <tr>
              <th>입금계좌</th>
              <td>은행 0000-0000-0000</td>
              <th>예금주명</th>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className={styles.dottedLine}></div>
        <div className={styles.attachWrapper}>
          <div className={styles.attachItem}>
            <label htmlFor="identity-upload">신분증</label>
            <div className={styles.fileUpload}>
              <input
                type="file"
                id="identity-upload"
                className={styles.fileInput}
              />
              <span id="identity-file" className={styles.fileName}>
                파일을 선택해주세요.
              </span>
            </div>
          </div>
          <div className={styles.attachItem}>
            <label htmlFor="business-upload">사업자 등록증</label>
            <div className={styles.fileUpload}>
              <input
                type="file"
                id="business-upload"
                className={styles.fileInput}
              />
              <span id="business-file" className={styles.fileName}>
                사업자 등록증을 첨부해 주세요.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.modalFooter}>
          {item.approvalStatus ? (
            <button className={styles.modalButton} onClick={onClose}>
              해지
            </button>
          ) : (
            <button className={styles.modalButton} onClick={onClose}>
              승인
            </button>
          )}
          <button className={styles.modalButton} onClick={onClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default WaitApprovalModalVender;
