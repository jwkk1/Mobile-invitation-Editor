import React, { useEffect } from "react";
import Login_header from "./login_header";
import styles from "./login.module.css";
import Login_footer from "./login_footer";
import { Route, useNavigate } from "react-router-dom";

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goMainMenu = (userId, email) => {
    navigate("/main", {
      state: {
        user: userId,
        email: email,
      },
    });
  };

  const onLogin = () => {
    authService //
      .login()
      .then((data) => goMainMenu(data.user.uid, data.user.email));
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        user && goMainMenu(user.uid, user.email);
      });
  });
  return (
    <section className={styles.login}>
      <Login_header />
      <section className={styles.section}>
        <h1>Sign In</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.btn} onClick={onLogin}>
              Google
            </button>
          </li>
        </ul>
      </section>
      <Login_footer />
    </section>
  );
};
export default Login;
