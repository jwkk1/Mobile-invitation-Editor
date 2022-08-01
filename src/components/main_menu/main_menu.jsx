import React, { useEffect, useState } from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import Main_header from "./main_header";
import styles from "./main_menu.module.css";

const Main_menu = ({ authService }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state.user;

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
      <div className={styles.userContainer}>
        <div className={styles.userId} onClick={onLogout}>
          {location.state.email}
        </div>
        <div className={styles.logoutbtn} onClick={onLogout}>
          Logout
        </div>
      </div>

      <div className={styles.container}>
        <Preview user={user} />
      </div>
    </section>
  );
};

export default Main_menu;
