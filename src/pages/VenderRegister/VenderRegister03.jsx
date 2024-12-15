import React, { useState } from "react";
import styles from "./VenderRegister02.module.css";
import VenderNav from "../Vender/components/VenderNav";
import RegisterDropdown from "./RegisterDropdown";

const FormRow = ({ children }) => <div className={styles.row}>{children}</div>;

const FileInputWithStyle = ({ label, placeholder, value, setValue }) => {
  return (
    <div className={styles.attachItem}>
      <label className={styles.attachLabel}>{label}</label>
      <div className={styles.fileUpload}>
        <input
          type="file"
          className={styles.fileInput}
          onChange={(e) => setValue(e.target.files[0]?.name || "")}
        />
        <span
          className={styles.fileNameUploaded}
          style={{
            color: `${value ? "#0000ff" : "#757575"}`,
          }}
        >
          {value || placeholder}
        </span>
        <button className={styles.modalButtonSmall}>수정</button>
      </div>
    </div>
  );
};

const VenderRegister03 = () => {
  const [identityFile, setIdentityFile] = useState("");
  const [businessFile, setBusinessFile] = useState("");
  const [bankFile, setBankFile] = useState("");
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
        <div className={styles.title}>대리점 등록</div>

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
                상위 사업자
              </label>
              <RegisterDropdown
                options={["상위 사업자"]}
                defaultLabel="상위 사업자"
                onChange={handleDropdownChange}
                defaultWidth="300px"
              />
            </div>
            <div className={styles.flex}>
              <div style={{ marginRight: "50px" }}>사업자 수수료</div>
              <div>3.05%</div>
            </div>
          </FormRow>
          <FormRow>
            <div className={`${styles.flex} ${styles.site}`}>
              <label className={styles.attachLabel} htmlFor="identity-upload">
                상위 총판
              </label>
              <RegisterDropdown
                options={["상위 총판"]}
                defaultLabel="상위 총판"
                onChange={handleDropdownChange}
                defaultWidth="300px"
              />
            </div>
            <div className={styles.flex}>
              <div style={{ marginRight: "50px" }}>총판 수수료</div>
              <div>3.05%</div>
            </div>
          </FormRow>
          <FormRow>
            <div className={`${styles.flex} ${styles.fee}`}>
              <label className={styles.attachLabel} htmlFor="identity-upload">
                대리점 수수료
              </label>
              <input type="text" />
            </div>
            <div className={styles.flex}>
              <div>상점 수수료</div>
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
            <FileInputWithStyle
              label="신분증"
              placeholder="신분증을 첨부해 주세요."
              value={identityFile}
              setValue={setIdentityFile}
            />

            {selectedType === "사업자" && (
              <FileInputWithStyle
                label="사업자 등록증"
                placeholder="사업자 등록증을 첨부해 주세요."
                value={businessFile}
                setValue={setBusinessFile}
              />
            )}

            <FileInputWithStyle
              label="통장 사본"
              placeholder="통장 사본을 첨부해 주세요."
              value={bankFile}
              setValue={setBankFile}
            />
            <button className={styles.submitButton}>대리점 등록</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VenderRegister03;
