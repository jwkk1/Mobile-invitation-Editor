import React, { useEffect, useRef, useState } from "react";
import styles from "./shareBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Comment from "./comment";
import ImageSlider from "./imageSlider";
import KakaoMap from "./kakaoMap";
import Aos from "aos";
import "aos/dist/aos.css";

const ShareBox = ({ database, card, onSubmit }) => {
  const {
    id,
    date,
    mainPhoto,
    maleName,
    femaleName,
    weddingHallAddress,
    weddingHallName,
    gallary,
    maleBank,
    malePhone,
    femaleBank,
    femalePhone,
  } = card;

  const year = date.split("-")[0];
  const month = date.split("-")[1];
  const day = date.split("-")[2];
  const defaultPhoto = "../image/thumb.png";

  const [menuOpen, setMenuOpen] = useState(false);
  const [femaleMenuOpen, setFemaleMenuOpen] = useState(false);

  const shareKakao = () => {
    window.Kakao.Link.sendCustom({
      templateId: 80535,
      templateArgs: {
        domain: window.location.origin,
        path: window.location.pathname.replace("/", ""),
        mainPhoto: mainPhoto,
        maleName: maleName,
        femaleName: femaleName,
      },
    });
  };

  const formRef = useRef();
  const commentNameRef = useRef();
  const commentValueRef = useRef();

  const onCommentClick = (event) => {
    event.preventDefault();
    let commentLength = Object.keys(card.comment).length + 1;
    card.comment[commentLength] = {
      id: Date.now(),
      name: commentNameRef.current.value,
      value: commentValueRef.current.value,
    };
    formRef.current.reset();
    onSubmit(card);
    database.addComment(id, card);
    database.syncData(id, (card) => {
      onSubmit(card);
    });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className={styles.section}>
      <div data-aos="fade-up" className={styles.mainTitle}>
        <div className={styles.mainTitleDiv}>{maleName}</div>
        <div className={styles.mainTitleDiv}>
          <div>{month}</div>
          <div className={styles.line}></div>
          <div>{day}</div>
        </div>
        <div className={styles.mainTitleDiv}>{femaleName}</div>
      </div>
      <div data-aos="fade-up" className={styles.img}>
        <img src={mainPhoto || defaultPhoto} />
      </div>
      <div data-aos="fade-up" className={styles.info}>
        <div>{`${year}??? ${month}??? ${day}???`}</div>
        <div>{weddingHallName}</div>
      </div>
      <div data-aos="fade-up" className={styles.img}>
        <ImageSlider img={gallary} />
      </div>
      <div data-aos="fade-up" className={styles.info}>
        <img src="../image/flower.png" />
        <div>?????? ????????? ???</div>
        <div>
          ????????? ???????????? ????????? <br />
          ????????? ????????? ????????? ?????????.
        </div>
        <div
          data-aos="fade-up"
          className={styles.menu}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <div className={styles.bank}>????????? ????????????</div>
          <div className={menuOpen ? styles.iconClick : styles.icon}>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
        <div className={menuOpen ? styles.menuClick : styles.menuNotClick}>
          <div className={styles.bankBox}>
            <div>{maleBank}</div>
            <p>{maleName}</p>
          </div>
          <div className={styles.bankBtn}>
            <button
              onClick={() => {
                navigator.clipboard.writeText(femaleBank);
                alert("?????????????????????.");
              }}
            >
              ????????????
            </button>
            <button>
              <a className={styles.phone} href={`tel:${malePhone}`}>
                ????????????
              </a>
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className={styles.menu}
          onClick={() => {
            setFemaleMenuOpen(!femaleMenuOpen);
          }}
        >
          <div className={styles.bank}>????????? ????????????</div>
          <div className={femaleMenuOpen ? styles.iconClick : styles.icon}>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
        <div
          className={femaleMenuOpen ? styles.menuClick : styles.menuNotClick}
        >
          <div className={styles.bankBox}>
            <div>{femaleBank}</div>
            <p>{femaleName}</p>
          </div>
          <div className={styles.bankBtn}>
            <button
              onClick={() => {
                navigator.clipboard.writeText(femaleBank);
                alert("?????????????????????.");
              }}
            >
              ????????????
            </button>
            <button>
              <a className={styles.phone} href={`tel:${femalePhone}`}>
                ????????????
              </a>
            </button>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className={styles.info}>
        <div data-aos="fade-up">{weddingHallName}</div>
        <KakaoMap
          data-aos="fade-up"
          address={weddingHallAddress}
          name={weddingHallName}
        />
      </div>
      <div data-aos="fade-up" className={styles.info}>
        <div>?????? ?????????</div>
        <form ref={formRef} className={styles.board}>
          <input
            ref={commentNameRef}
            type="text"
            className={styles.commentName}
            placeholder="??????"
          ></input>
          <input
            ref={commentValueRef}
            type="text"
            className={styles.commentValue}
            placeholder="??????"
          ></input>
          <button className={styles.commentBtn} onClick={onCommentClick}>
            ??????
          </button>
        </form>
      </div>
      <div data-aos="fade-up" className={styles.info}>
        <Comment card={card} />
      </div>
      <div data-aos="fade-up" className={styles.info}>
        <div className={styles.shareBtn} onClick={shareKakao}>
          ???????????? ????????????
          <img src="../image/kakao_btn.png" />
        </div>
      </div>
    </section>
  );
};

export default ShareBox;
