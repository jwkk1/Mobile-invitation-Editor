import React from "react";
import styles from "./comment.module.css";
import CommentLine from "./commentLine";

const Comment = ({ card }) => {
  return (
    <ul className={styles.commentList}>
      {Object.keys(card.comment).map((key) => (
        <CommentLine key={key} card={card.comment[key]} />
      ))}
    </ul>
  );
};
export default Comment;
