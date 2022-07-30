import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import Main_header from "./main_header";
import styles from "./main_menu.module.css";

const Main_menu = ({ authService }) => {
  const navigate = useNavigate();

  //   const [cards, setCard] = useState({
  //     1: {
  //       date: "09/01",
  //       maleName: "김진우",
  //       pemailName: "정누리",
  //       gallary: ["url", "url"],
  //       address: "약현",
  //       malePhone: "010-2900-1006",
  //       pemalePhone: "010-3386-0296",
  //       maleBank: "1002-250",
  //       pemaleBank: "1002-222",
  //     },
  //     2: {
  //       date: "09/01",
  //       maleName: "김진우2",
  //       pemailName: "정누리2",
  //       gallary: ["url", "url"],
  //       address: "약현",
  //       malePhone: "010-2900-1006",
  //       pemalePhone: "010-3386-0296",
  //       maleBank: "1002-250",
  //       pemaleBank: "1002-222",
  //     },
  //     3: {
  //       date: "09/01",
  //       maleName: "김진우3",
  //       pemailName: "정누리3",
  //       gallary: ["url", "url"],
  //       address: "약현",
  //       malePhone: "010-2900-1006",
  //       pemalePhone: "010-3386-0296",
  //       maleBank: "1002-250",
  //       pemaleBank: "1002-222",
  //     },
  //   });

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <section className={styles.section}>
      <Main_header />
      <button className={styles.logoutbtn} onClick={onLogout}>
        Logout
      </button>
      <div className={styles.container}>
        <Preview />
      </div>
    </section>
  );
};

export default Main_menu;
