import React, { useState } from "react";
import styles from "./ModifyVenderModal01.module.css";
import VenderDropdown from "../VenderDropdown";

function ModifyVenderModal01({ isOpen, onClose }) {
  const [color, setColor] = useState("#F3F3F3");

  const handleTextChange = (event) => {
    const value = event.target.value;

    if (/^#[0-9A-Fa-f]{0,6}$/.test(value)) {
      setColor(value);
    }
  };

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
        <div className={styles.modalTitle}>사업자 상세정보</div>
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
              <th>사업자 번호</th>
              <td>
                <input
                  type="text"
                  placeholder="0000000"
                  style={{
                    border: "solid 0.5px #808080",
                    padding: "8px",
                    width: "100%",
                    borderRadius: "2px",
                    fontSize: "16px",
                    color: "black",
                  }}
                ></input>
              </td>
              <th>대표</th>
              <td>
                <input
                  type="text"
                  placeholder="대표자명"
                  style={{
                    border: "solid 0.5px #808080",
                    padding: "8px",
                    width: "100%",
                    borderRadius: "2px",
                    fontSize: "16px",
                    color: "black",
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <th>연락처</th>
              <td>
                <input
                  type="text"
                  placeholder="0000-0000-0000"
                  style={{
                    border: "solid 0.5px #808080",
                    padding: "8px",
                    width: "100%",
                    borderRadius: "2px",
                    fontSize: "16px",
                    color: "black",
                  }}
                ></input>
              </td>
              <th>Email</th>
              <td>
                <input
                  type="text"
                  placeholder="duduri@naver.com"
                  style={{
                    border: "solid 0.5px #808080",
                    padding: "8px",
                    width: "100%",
                    borderRadius: "2px",
                    fontSize: "16px",
                    color: "black",
                  }}
                ></input>
              </td>
            </tr>
            <tr>
              <th>주소</th>
              <td colSpan="3" className={styles.left}>
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
                      style={{
                        border: "solid 0.5px #808080",
                        padding: "8px",
                        width: "100%",
                        borderRadius: "2px",
                        fontSize: "16px",
                        color: "black",
                      }}
                    ></input>
                    <input
                      type="text"
                      placeholder="상세주소정보"
                      style={{
                        border: "solid 0.5px #808080",
                        padding: "8px",
                        width: "100%",
                        borderRadius: "2px",
                        fontSize: "16px",
                        color: "black",
                      }}
                    ></input>
                  </div>
                  <button className={styles.modalButton}>검색</button>
                </div>
              </td>
            </tr>
            <tr>
              <th>계좌정보</th>
              <td colSpan="3" className={styles.left}>
                <div style={{ display: "flex", gap: "5px" }}>
                  <VenderDropdown
                    options={["은행명"]}
                    defaultLabel="은행명"
                    onChange={handleFilterChange}
                  />
                  <input
                    type="text"
                    placeholder="0000-0000-0000-0000"
                    style={{
                      border: "solid 0.5px #808080",
                      padding: "8px",
                      borderRadius: "2px",
                      fontSize: "16px",
                      color: "black",
                      width: "420px",
                    }}
                  ></input>
                  <input
                    type="text"
                    placeholder="예금주명"
                    style={{
                      border: "solid 0.5px #808080",
                      padding: "8px",
                      width: "120px",
                      borderRadius: "2px",
                      fontSize: "16px",
                      color: "black",
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
              <th>사이트명</th>
              <td>
                <input
                  type="text"
                  placeholder="사이트명"
                  style={{
                    border: "solid 0.5px #808080",
                    padding: "8px",
                    width: "100%",
                    borderRadius: "2px",
                    fontSize: "16px",
                    color: "black",
                  }}
                ></input>
              </td>
              <th>색상코드</th>
              <td>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  {/* 색상 선택기 */}
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "0.5px solid black",
                      backgroundColor: color,
                      cursor: "pointer",
                    }}
                  ></div>
                  {/* 텍스트 입력 필드 */}
                  <input
                    type="text"
                    value={color}
                    onChange={handleTextChange}
                    style={{
                      border: "1px solid #808080",
                      padding: "8px",
                      borderRadius: "2px",
                      fontSize: "16px",
                      width: "120px",
                    }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th>로고(컬러)</th>
              <td>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div style={{ color: "#0000ff" }}>로고(컬러).png</div>
                  <button className={styles.modalButton}>업로드</button>
                </div>
              </td>
              <th>로고(흰색)</th>
              <td>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div style={{ color: "#0000ff" }}>로고(흰색).png</div>
                  <button className={styles.modalButton}>업로드</button>
                </div>
              </td>
            </tr>
            <tr>
              <th>사업자수수료</th>
              <td>
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
                    style={{
                      border: "solid 0.5px #808080",
                      padding: "8px",
                      width: "200px",
                      borderRadius: "2px",
                      fontSize: "16px",
                      color: "black",
                    }}
                  ></input>
                  <div>%</div>
                </div>
              </td>
              <th>상점 수수료</th>
              <td>
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
                    style={{
                      border: "solid 0.5px #808080",
                      padding: "8px",
                      width: "200px",
                      borderRadius: "2px",
                      fontSize: "16px",
                      color: "black",
                    }}
                  ></input>
                  <div>%</div>
                </div>
              </td>
            </tr>
            <tr>
              <th>건당 결제한도</th>
              <td>
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
                    style={{
                      border: "solid 0.5px #808080",
                      padding: "8px",
                      width: "200px",
                      borderRadius: "2px",
                      fontSize: "16px",
                      color: "black",
                    }}
                  ></input>
                  <div>원</div>
                </div>
              </td>
              <th>할부 한도</th>
              <td>
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
                    style={{
                      border: "solid 0.5px #808080",
                      padding: "8px",
                      width: "200px",
                      borderRadius: "2px",
                      fontSize: "16px",
                      color: "black",
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

export default ModifyVenderModal01;
