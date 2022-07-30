import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

const Preview = (props) => {
  return (
    <section className={styles.preview}>
      <h1>invitation list</h1>
      <ul className={styles.cards}>
        <Card />
      </ul>
    </section>
  );
};

export default Preview;
