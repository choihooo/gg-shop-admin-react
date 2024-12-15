import React from "react";
import styles from "./StoreInfotmationModal.module.css";

function StoreInfotmationModal({ onClose }) {
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalTitle}>회원 상세정보</div>
        <table className={styles.detailTable}>
          <tbody>
            <tr>
              <th>회원ID</th>
              <td>상점명</td>
              <th>대표명</th>
              <td>대표자명</td>
            </tr>
            <tr>
              <th>구분</th>
              <td>사업자</td>
              <th>사업자 번호</th>
              <td>-</td>
            </tr>
            <tr>
              <th>주민등록번호</th>
              <td>000</td>
              <th>연락처</th>
              <td>000000</td>
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
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.modalButton} onClick={onClose}>
            승인
          </button>
          <button className={styles.modalButton} onClick={onClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default StoreInfotmationModal;
