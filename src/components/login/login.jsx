import React from "react";
import Login_header from "./login_header";
import styles from "./login.module.css";
import Login_footer from "./login_footer";

const Login = (props) => (
  <section className={styles.login}>
    <Login_header />
    <section className={styles.section}>
      <h1>Sign In</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.btn}>Google</button>
        </li>
      </ul>
    </section>
    <Login_footer />
  </section>
);
export default Login;
