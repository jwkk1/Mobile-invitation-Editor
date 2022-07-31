import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";

const Card = ({ card, onAdd, user }) => {
  //   const { maleName, pemailName } = card;
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate("/editor", { state: { user: user } });
  };

  return (
    <>
      <li className={styles.container}>
        <div className={styles.list} onClick={onCardClick}>
          <img src="./image/thumb.png" className={styles.thumbnail}></img>
          <p>a</p>
        </div>
      </li>
    </>
  );
};
export default Card;
