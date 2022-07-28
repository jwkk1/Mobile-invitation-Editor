import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  const {
    maleName,
    pemailName,
    gallary,
    address,
    malePhone,
    pemalePhone,
    maleBank,
    pemaleBank,
  } = card;

  return (
    <>
      <li className={styles.container}>
        <div className={styles.list}>
          <img src="./image/thumb.png" className={styles.thumbnail}></img>
          <p>
            {maleName}❤️{pemailName}
          </p>
        </div>
      </li>
    </>
  );
};
export default Card;
