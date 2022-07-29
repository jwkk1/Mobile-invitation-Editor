import React, { useRef } from "react";
import styles from "./editer.module.css";
import { useLocation, useNavigate } from "react-router";
import Main_header from "../main_menu/main_header";

const Editor = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const card = location.state.cards;
  // 상위 components props.location.state에 있는 card정보 가져오기
  const {
    date,
    maleName,
    feMaleName,
    address,
    gallary,
    maleBank,
    malePhone,
    femaleBank,
    femalePhone,
  } = card;

  const dateRef = useRef();
  const maleNameRef = useRef();
  const addressRef = useRef();
  const gallaryRef = useRef();
  const maleBankRef = useRef();
  const malePhoneRef = useRef();
  const femaleNameRef = useRef();
  const femaleBankRef = useRef();
  const femalePhoneRef = useRef();
  const mainPhotoRef = useRef();
  const onChange = () => {
    //  이미지 업로드, 바꾸기
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      date: dateRef.current.value || "",
      maleName: maleNameRef.current.value || "",
      femaleName: femaleNameRef.current.value || "",
      address: addressRef.current.value || "",
      gallary: gallaryRef.current.value || "",
      maleBank: maleBankRef.current.value || "",
      malePhone: malePhoneRef.current.value || "",
      femaleBank: femaleBankRef.current.value || "",
      femalePhone: femalePhoneRef.current.value || "",
      mainPhoto: mainPhotoRef.current.value || "",
    };
    navigate("/share", { state: { cards: card } });
    // setFile({ fileName: null, fileURL: null });
    // onAdd(card);
  };

  return (
    <section className={styles.section}>
      <Main_header />
      <form className={styles.editor}>
        <div className={styles.info}>
          <div className={styles.mainTitle}>본식 날짜</div>
          <div>
            <input
              ref={dateRef}
              className={styles.input}
              type="date"
              name="date"
            />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.mainTitle}>메인 사진 </div>
          <div>
            <input
              ref={mainPhotoRef}
              className={styles.input}
              type="file"
              accept="image/*"
              name="file"
              onChange={onChange}
            />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.mainTitle}>신랑측 정보 </div>
          <div className={styles.subTitle}>
            <div className={styles.list}>
              <input
                ref={maleNameRef}
                className={styles.textInput}
                type="text"
                name="maleName"
                placeholder="신랑님 이름"
              ></input>
            </div>
            <div className={styles.list}>
              <input
                ref={malePhoneRef}
                className={styles.textInput}
                type="text"
                name="malePhone"
                placeholder="신랑님 전화번호"
              ></input>
            </div>
            <div className={styles.list}>
              <input
                ref={maleBankRef}
                className={styles.textInput}
                type="text"
                name="maleBank"
                placeholder="신랑님 계좌번호"
              ></input>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.mainTitle}>신랑측 정보 </div>
          <div className={styles.subTitle}>
            <div className={styles.list}>
              <input
                ref={femaleNameRef}
                className={styles.textInput}
                type="text"
                name="femaleName"
                placeholder="신부님 이름"
              ></input>
            </div>
            <div className={styles.list}>
              <input
                ref={femalePhoneRef}
                className={styles.textInput}
                type="text"
                name="femalePhone"
                placeholder="신부님 전화번호"
              ></input>
            </div>
            <div className={styles.list}>
              <input
                ref={femaleBankRef}
                className={styles.textInput}
                type="text"
                name="femaleBank"
                placeholder="신부님 계좌번호"
              ></input>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.mainTitle}> 결혼식장</div>
          <div className={styles.subTitle}>
            <div className={styles.list}>
              <input
                ref={addressRef}
                className={styles.textInput}
                type="text"
                name="address"
                placeholder="결혼식장 정보"
              ></input>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.mainTitle}>갤러리 사진</div>
          <div>
            <input
              ref={gallaryRef}
              className={styles.input}
              type="file"
              accept="image/*"
              name="file"
              onChange={onChange}
            />
          </div>
        </div>
        <button onClick={onSubmit}> asd</button>
      </form>
    </section>
  );
};

export default Editor;
