import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./share.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faL } from "@fortawesome/free-solid-svg-icons";
const Share = (props) => {
  const location = useLocation();
  const card = location.state.cards;
  console.log(card);
  // 상위 components props.location.state에 있는 card정보 가져오기
  const {
    date,
    mainPhoto,
    maleName,
    femaleName,
    address,
    gallary,
    maleBank,
    malePhone,
    femaleBank,
    femalePhone,
  } = card;

  const year = date.split("-")[0];
  const month = date.split("-")[1];
  const day = date.split("-")[2];
  const defaultPhoto = "./image/thumb.png";

  const [menuOpen, setMenuOpen] = useState(false);
  const [femaleMenuOpen, setFemaleMenuOpen] = useState(false);

  const shareKakao = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "모바일 청첩장",
        description: `${maleName}❤️${femaleName} 모바일 청첩장이 도착하였습니다`,
        imageUrl:
          "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        link: {
          mobileWebUrl: "http://localhost:3000/share",
        },
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: "http://localhost:3000/share",
          },
        },
      ],
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.mainTitle}>
        <div className={styles.mainTitleDiv}>{maleName}</div>
        <div className={styles.mainTitleDiv}>
          <div>{month}</div>
          <div className={styles.line}></div>
          <div>{day}</div>
        </div>
        <div className={styles.mainTitleDiv}>{femaleName}</div>
      </div>
      <div className={styles.img}>
        <img src={mainPhoto || defaultPhoto} />
      </div>
      <div className={styles.info}>
        <div>{`${year}년 ${month}월 ${day}일`}</div>
        <div>{address}</div>
      </div>
      <div className={styles.info}>gallary 들어갈 자리</div>
      <div className={styles.info}>
        <img src="./image/flower.png" />
        <div>마음 전하실 곳</div>
        <div>
          참석이 어려우신 분들은 <br />
          축하의 마음을 전달해 주세요.
        </div>
        <div
          className={styles.menu}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <div className={styles.bank}>신랑측 계좌번호</div>
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
            <button>송금하기</button>
            <button>
              <a className={styles.phone} href={`tel:${malePhone}`}>
                전화하기
              </a>
            </button>
          </div>
        </div>
        <div
          className={styles.menu}
          onClick={() => {
            setFemaleMenuOpen(!femaleMenuOpen);
          }}
        >
          <div className={styles.bank}>신부측 계좌번호</div>
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
            <button>송금하기</button>
            <button>
              <a className={styles.phone} href={`tel:${femalePhone}`}>
                전화하기
              </a>
            </button>
          </div>
        </div>
        <div className={styles.shareBtn} onClick={shareKakao}>
          카카오톡 공유하기
          <img src="./image/kakao_btn.png" />
        </div>
        <div className={styles.info}>
          <div>댓글 남기기</div>
          <form>
            <input type="text" placeholder="이름"></input>
            <input type="text" placeholder="내용"></input>
            <button>작성</button>
          </form>
          <section>
            <div>이름</div>
            <div>내용</div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Share;
