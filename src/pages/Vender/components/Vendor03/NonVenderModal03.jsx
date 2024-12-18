import React from "react";
import styles from "./NonVenderModal03.module.css";

function NonVenderModal03({ isOpen, onClose, onModify, selectedItem }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalTitle}>회원 상세정보</div>
        <table className={styles.detailTable}>
          <tbody>
            <tr>
              <th>ID</th>
              <td>duduri123</td>
              <th>구분</th>
              <td>비사업자</td>
            </tr>
            <tr>
              <th>주민등록번호</th>
              <td>00000000</td>
              <th>대표</th>
              <td>대표자명</td>
            </tr>
            <tr>
              <th>연락처</th>
              <td>000-0000-0000</td>
              <th>Email</th>
              <td>duduri@naver.com</td>
            </tr>
            <tr>
              <th>주소</th>
              <td colSpan="3" className={styles.left}>
                주소정보
              </td>
            </tr>
            <tr>
              <th>계좌정보</th>
              <td colSpan="3" className={styles.left}>
                은행명과 계좌번호, 예금주명
              </td>
            </tr>
            <tr>
              <th>메모</th>
              <td className={styles.memoWrapper} colSpan="3">
                <textarea rows="3" className={styles.memo}></textarea>
                <img src="/images/save.svg" alt="Save" />
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.dottedLine}></div>

        <table className={styles.detailTable}>
          <tbody>
            <tr>
              <th>상위사업자</th>
              <td>상위사업자</td>
              <th>사업자 수수료</th>
              <td>3.05%</td>
            </tr>
            <tr>
              <th>상위 총판</th>
              <td>상위 총판</td>
              <th>총판 수수료</th>
              <td>3.05%</td>
            </tr>
            <tr>
              <th>총판수수료</th>
              <td>3.05%</td>
              <th>상점 수수료</th>
              <td>3.87%</td>
            </tr>
            <tr>
              <th>건당 결제한도</th>
              <td>2,000,000 원</td>
              <th>할부 한도</th>
              <td>6개월</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.dottedLine}></div>

        <div className={styles.attachWrapper}>
          <div className={styles.attachItem}>
            <label className={styles.attachLabel} htmlFor="identity-upload">
              신분증
            </label>
            <div className={styles.fileUpload}>
              <input
                type="file"
                id="identity-upload"
                className={styles.fileInput}
              />
              <span id="identity-file" className={styles.fileNameUploaded}>
                신분증.png
              </span>
              <button className={styles.modalButtonSmall}>수정</button>
            </div>
          </div>

          <div className={styles.attachItem}>
            <label className={styles.attachLabel} htmlFor="identity-upload">
              통장 사본
            </label>
            <div className={styles.fileUpload}>
              <input
                type="file"
                id="identity-upload"
                className={styles.fileInput}
              />
              <span id="identity-file" className={styles.fileNameUploaded}>
                통장 사본.png
              </span>
              <button className={styles.modalButtonSmall}>수정</button>
            </div>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.modalButton} onClick={onModify}>
            수정
          </button>
          <button className={styles.modalButton} onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default NonVenderModal03;
