import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

const Preview = (user) => {
  return (
    <section className={styles.preview}>
      <ul className={styles.cards}>
        <Card user={user} />
      </ul>
    </section>
  );
};

export default Preview;
