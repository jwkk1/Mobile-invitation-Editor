import React from "react";
import styles from "./commentLine.module.css";

const CommentLine = (card) => {
  const { name, value } = card.card;
  return (
    <li className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.value}>{value}</div>
    </li>
  );
};

export default CommentLine;
