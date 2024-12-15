import React, { useState } from "react";
import styles from "./VenderRegister01.module.css";
import VenderNav from "../Vender/components/VenderNav";
import RegisterDropdown from "./RegisterDropdown";

const FormRow = ({ children }) => <div className={styles.row}>{children}</div>;

const VenderRegister01 = () => {
  const [selectedType, setSelectedType] = useState("사업자");
  const handleDropdownChange = (value) => {
    console.log("Selected Value:", value);
  };
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <div className={styles.registerWrapper}>
      <VenderNav />
      <section className={styles.businessRegistration}>
        <div className={styles.title}>사업자 등록</div>

        <div className={styles.formWrapper}>
          <div className={styles.radioGroup}>
            <div className={styles.radioItem}>
              <input
                type="radio"
                name="businessType"
                checked={selectedType === "사업자"}
                onChange={() => handleTypeChange("사업자")}
              />
              <div>사업자</div>
            </div>
            <div className={styles.radioItem}>
              <input
                type="radio"
                name="businessType"
                checked={selectedType === "비사업자"}
                onChange={() => handleTypeChange("비사업자")}
              />
              <div>비사업자</div>
            </div>
          </div>

          <FormRow>
            <div className={`${styles.id} ${styles.flex}`}>
              <label className={styles.attachLabel} htmlFor="identity-upload">
                아이디
              </label>
              <input type="text" />
              <button className={styles.checkButton}>중복</button>
            </div>
            <div className={`${styles.pw} ${styles.flex}`}>
              <div>비밀번호</div>
              <input type="text" />
            </div>
          </FormRow>

          <FormRow>
            <div className={styles.flex}>
              <label className={styles.attachLabel} htmlFor="identity-upload">
                사업자번호
              </label>
              <input type="text" />
            </div>
            <div className={styles.flex}>
              <div>대표</div>
              <input type="text" />
            </div>
          </FormRow>

          <FormRow>
            <div className={`${styles.flex} ${styles.contact}`}>
              <label className={styles.attachLabel} htmlFor="identity-upload">
                연락처
              </label>
              <input type="text" />
            </div>
            <div className={styles.flex}>
              <div>Email</div>
              <input type="text" />
            </div>
          </FormRow>

          <FormRow>
            <div className={`${styles.flex} ${styles.address}`}>
              <label className={styles.attachLabel} htmlFor="identity-upload">
                주소
              </label>
              <input type="text" />
              <button className={styles.searchButton}>검색</button>
            </div>
          </FormRow>

          <FormRow>
            <div className={`${styles.flex} ${styles.addressDetail}`}>
              <input type="text" />
            </div>
          </FormRow>

          <FormRow>
            <div className={`${styles.flex} ${styles.account}`}>
              <label className={styles.attachLabel} htmlFor="identity-upload">
                계좌번호
              </label>
              <div className={styles.selectWrapper}>
                <RegisterDropdown
                  options={["은행명"]}
                  defaultLabel="은행명"
                  onChange={handleDropdownChange}
                />
              </div>
              <input type="text" className={styles.accountNum} />
              <input
                type="text"
                className={styles.accountUser}
                placeholder="계좌명의자"
              />
            </div>
          </FormRow>
        </div>

        <div className={styles.dottedLine}></div>

        <div className={styles.formWrapper2}>
          <FormRow>
            <div className={`${styles.flex} ${styles.site}`}>
              <label className={styles.attachLabel} htmlFor="identity-upload">
                사이트명
              </label>
              <input type="text" />
            </div>
            <div className={styles.flex}>
              <div>색상코드</div>
              <input type="text" />
            </div>
          </FormRow>

          <FormRow>
            <div className={`${styles.flex} ${styles.logo}`}>
              <label className={styles.attachLabel} htmlFor="identity-upload">
                로고(컬러)
              </label>
              <input type="text" />
            </div>
            <div className={styles.flex}>
              <div>로고(흰색)</div>
              <input type="text" />
            </div>
          </FormRow>

          <FormRow>
            <div className={`${styles.flex} ${styles.fee}`}>
              <label className={styles.attachLabel} htmlFor="identity-upload">
                사업자수수료
              </label>
              <input type="text" />
            </div>
            <div className={styles.flex}>
              <div>상점수수료</div>
              <input type="text" />
            </div>
          </FormRow>

          <FormRow>
            <div className={`${styles.flex} ${styles.limit}`}>
              <label className={styles.attachLabel} htmlFor="identity-upload">
                건당 결제한도
              </label>
              <input type="text" />
            </div>
            <div className={styles.flex}>
              <div>할부 한도</div>
              <input type="text" />
            </div>
          </FormRow>
        </div>

        <div className={styles.dottedLine}></div>
        <div className={styles.attach}>
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
                <label className={styles.attachLabel} htmlFor="business-upload">
                  사업자 등록증
                </label>
                <div className={styles.fileUpload}>
                  <input
                    type="file"
                    id="business-upload"
                    className={styles.fileInput}
                  />
                  <span id="business-file" className={styles.fileNameUploaded}>
                    사업자 등록증.png
                  </span>
                  <button className={styles.modalButtonSmall}>수정</button>
                </div>
              </div>
            )}

            <div className={styles.attachItem}>
              <label className={styles.attachLabel} htmlFor="bank-upload">
                통장 사본
              </label>
              <div className={styles.fileUpload}>
                <input
                  type="file"
                  id="bank-upload"
                  className={styles.fileInput}
                />
                <span id="bank-file" className={styles.fileNameUploaded}>
                  통장 사본.png
                </span>
                <button className={styles.modalButtonSmall}>수정</button>
              </div>
            </div>
            <button className={styles.submitButton}>사업자 등록</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VenderRegister01;
