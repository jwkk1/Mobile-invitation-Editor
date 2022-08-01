import React from "react";
import styles from "./main_middle.module.css";

const Main_middle = (props) => (
  <div className={styles.middle}>
    <h1 className={styles.title}>모바일 청첩장 </h1>
    <h1 className={styles.name}>직접 만들어 보세요</h1>
    <img className={styles.middleImg} src="./image/middle.png" />
  </div>
);

export default Main_middle;
