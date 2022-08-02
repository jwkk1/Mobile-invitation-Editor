import React, { useEffect, useRef, useState } from "react";
import styles from "./editer.module.css";
import { useLocation, useNavigate } from "react-router";
import Main_header from "../main_menu/main_header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Editor = ({ imageUploader, database }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.user.user;
  const [mainLoading, setMainLoading] = useState(false);
  const [subLoading, setSubLoading] = useState(false);
  const [subUrl, setSubUrl] = useState({});
  const [mainUrl, setMainUrl] = useState("");

  const dateRef = useRef();
  const maleNameRef = useRef();
  const weddingHallAddressRef = useRef();
  const maleBankRef = useRef();
  const malePhoneRef = useRef();
  const femaleNameRef = useRef();
  const femaleBankRef = useRef();
  const femalePhoneRef = useRef();
  const gallaryRef = useRef();
  const weddingHallNameRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: userId,
      date: dateRef.current.value || "",
      maleName: maleNameRef.current.value || "",
      femaleName: femaleNameRef.current.value || "",
      weddingHallAddress: weddingHallAddressRef.current.value || "",
      weddingHallName: weddingHallNameRef.current.value || "",
      gallary: { ...subUrl } || "",
      maleBank: maleBankRef.current.value || "",
      malePhone: malePhoneRef.current.value || "",
      femaleBank: femaleBankRef.current.value || "",
      femalePhone: femalePhoneRef.current.value || "",
      mainPhoto: mainUrl || "",
      comment: {
        1: { id: Date.now(), name: "이름", value: "안녕" },
      },
    };
    database.addCard(userId, card);

    navigate(`/${userId}/share`, { state: { cards: card } });
    // setFile({ fileName: null, fileURL: null });
    // onAdd(card);
  };

  const onMainFileChange = async (event) => {
    setMainLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setMainLoading(false);
    setMainUrl(uploaded.url);
  };

  const onSubFileChange = async (event) => {
    const length = Object.keys(event.target.files).length;
    const url = {};
    setSubLoading(true);
    for (let i = 0; i < length; i++) {
      const uploaded = await imageUploader.upload(event.target.files[i]);
      url[i] = uploaded.url;
    }
    setSubLoading(false);
    setSubUrl(url);
  };

  return (
    <section className={styles.section}>
      <Main_header />
      {(mainLoading || subLoading) && (
        <div className={styles.loding}>
          <div>
            <FontAwesomeIcon icon={faSpinner} />
          </div>
        </div>
      )}
      <form className={styles.editor}>
        <div className={styles.info}>
          <div className={styles.mainTitle}>본식 날짜</div>
          <div className={styles.subTitle}>
            <input
              ref={dateRef}
              className={styles.input}
              type="date"
              name="date"
            />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.mainTitle}>메인사진</div>
          <div className={styles.subTitle}>
            <input
              className={styles.imginput}
              type="file"
              accept="image/*"
              name="file"
              onChange={onMainFileChange}
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
          <div className={styles.mainTitle}>신부측 정보 </div>
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
                ref={weddingHallNameRef}
                className={styles.textInput}
                type="text"
                name="address"
                placeholder="결혼식장 이름"
              ></input>
            </div>
            <div className={styles.list}>
              <input
                ref={weddingHallAddressRef}
                className={styles.textInput}
                type="text"
                name="address"
                placeholder="결혼식장 상세주소"
              ></input>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.mainTitle}>갤러리 사진</div>
          <div className={styles.subTitle}>
            <input
              ref={gallaryRef}
              multiple
              className={styles.imginput}
              type="file"
              accept="image/*"
              name="file"
              onChange={onSubFileChange}
            />
          </div>
        </div>
        <div className={styles.btn}>
          <button className={styles.creatBtn} onClick={onSubmit}>
            만들기
          </button>
        </div>
      </form>
    </section>
  );
};

export default Editor;
