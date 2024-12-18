import React, { useState } from "react";
import styles from "./ModifyVenderModal03.module.css";
import VenderDropdown from "../VenderDropdown";

function ModifyVenderModal03({ isOpen, onClose }) {
  const handleFilterChange = (selectedOption) => {
    console.log("Selected Filter:", selectedOption);
  };
  const [selectedType, setSelectedType] = useState("사업자");
  const handleRadioChange = (e) => {
    setSelectedType(e.target.value);
  };
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
              <td>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    color: "black",
                  }}
                >
                  <div style={{ display: "flex", gap: "5px" }}>
                    <input
                      type="radio"
                      name="type"
                      value="사업자"
                      checked={selectedType === "사업자"}
                      onChange={handleRadioChange}
                    />
                    <div>사업자</div>
                  </div>

                  <div style={{ display: "flex", gap: "5px" }}>
                    <input
                      type="radio"
                      name="type"
                      value="비사업자"
                      checked={selectedType === "비사업자"}
                      onChange={handleRadioChange}
                    />
                    <div>비사업자</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                {selectedType == "사업자" ? "사업자 번호" : "주민등록번호"}
              </th>
              <td className={styles.inputFieldWrapper}>
                <input
                  type="text"
                  placeholder="0000000"
                  className={styles.inputField}
                ></input>
              </td>
              <th>대표</th>
              <td className={styles.inputFieldWrapper}>
                <input
                  type="text"
                  placeholder="대표자명"
                  className={styles.inputField}
                ></input>
              </td>
            </tr>
            <tr>
              <th>연락처</th>
              <td className={styles.inputFieldWrapper}>
                <input
                  type="text"
                  placeholder="0000-0000-0000"
                  className={styles.inputField}
                ></input>
              </td>
              <th>Email</th>
              <td className={styles.inputFieldWrapper}>
                <input
                  type="text"
                  placeholder="duduri@naver.com"
                  className={styles.inputField}
                ></input>
              </td>
            </tr>
            <tr>
              <th>주소</th>
              <td
                colSpan="3"
                className={`${styles.left} ${styles.inputFieldWrapper}`}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "50px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      width: "475px",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="주소정보"
                      className={styles.inputField}
                    ></input>
                    <input
                      type="text"
                      placeholder="상세주소정보"
                      className={styles.inputField}
                    ></input>
                  </div>
                  <button className={styles.modalButton}>검색</button>
                </div>
              </td>
            </tr>
            <tr>
              <th>계좌정보</th>
              <td
                colSpan="3"
                className={`${styles.left} ${styles.inputFieldWrapper}`}
              >
                <div style={{ display: "flex", gap: "5px" }}>
                  <VenderDropdown
                    options={["은행명"]}
                    defaultLabel="은행명"
                    onChange={handleFilterChange}
                  />
                  <input
                    type="text"
                    placeholder="0000-0000-0000-0000"
                    className={styles.inputField}
                    style={{
                      width: "420px",
                    }}
                  ></input>
                  <input
                    type="text"
                    placeholder="예금주명"
                    className={styles.inputField}
                    style={{
                      width: "120px",
                    }}
                  ></input>
                </div>
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
              <td className={styles.inputFieldWrapper}>
                <VenderDropdown
                  options={[" "]}
                  defaultLabel=" "
                  onChange={handleFilterChange}
                  width="200px"
                />
              </td>
              <th>사업자수수료</th>
              <td>3.05 %</td>
            </tr>
            <tr>
              <th>상위 총판</th>
              <td className={styles.inputFieldWrapper}>
                <VenderDropdown
                  options={[" "]}
                  defaultLabel=" "
                  onChange={handleFilterChange}
                  width="200px"
                />
              </td>
              <th>총판 수수료</th>
              <td>3.05 %</td>
            </tr>
            <tr>
              <th>총판수수료</th>
              <td className={styles.inputFieldWrapper}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <input
                    type="text"
                    placeholder="3.05"
                    className={styles.inputField}
                    style={{
                      width: "200px",
                    }}
                  ></input>
                  <div>%</div>
                </div>
              </td>
              <th>상점 수수료</th>
              <td className={styles.inputFieldWrapper}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <input
                    type="text"
                    placeholder="3.05"
                    className={styles.inputField}
                    style={{
                      width: "200px",
                    }}
                  ></input>
                  <div>%</div>
                </div>
              </td>
            </tr>
            <tr>
              <th>건당 결제한도</th>
              <td className={styles.inputFieldWrapper}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <input
                    type="text"
                    placeholder="2,000,000"
                    className={styles.inputField}
                    style={{
                      width: "200px",
                    }}
                  ></input>
                  <div>원</div>
                </div>
              </td>
              <th>할부 한도</th>
              <td className={styles.inputFieldWrapper}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <input
                    type="text"
                    placeholder="6"
                    className={styles.inputField}
                    style={{
                      width: "200px",
                    }}
                  ></input>
                  <div>개월</div>
                </div>
              </td>
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

          {selectedType === "사업자" && (
            <div className={styles.attachItem}>
              <label className={styles.attachLabel} htmlFor="identity-upload">
                사업자 등록증
              </label>
              <div className={styles.fileUpload}>
                <input
                  type="file"
                  id="identity-upload"
                  className={styles.fileInput}
                />
                <span id="identity-file" className={styles.fileNameUploaded}>
                  사업자 등록증.png
                </span>
                <button className={styles.modalButtonSmall}>수정</button>
              </div>
            </div>
          )}

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
          <button className={styles.modalButton} onClick={onClose}>
            저장
          </button>
          <button className={styles.modalButton} onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModifyVenderModal03;
