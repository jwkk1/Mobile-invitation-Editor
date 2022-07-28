import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./main_menu.module.css";

const Main_menu = ({ authService }) => {
  const navigate = useNavigate();

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
      <button className={styles.logoutbtn} onClick={onLogout}>
        Logout
      </button>
      <h1>aa</h1>
    </section>
  );
};

export default Main_menu;
