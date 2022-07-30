import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";

const Card = ({ card, onAdd }) => {
  //   const { maleName, pemailName } = card;
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate("/editor");
  };

  return (
    <>
      <li className={styles.container}>
        <div className={styles.list} onClick={onCardClick}>
          <img src="./image/thumb.png" className={styles.thumbnail}></img>
          <p>템플릿</p>
        </div>
      </li>
    </>
  );
};
export default Card;
