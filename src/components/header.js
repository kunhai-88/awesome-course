import React from "react";
import styles from "./style.module.less";
import logo from "../../static/logo.png";

// if (typeof window !== `undefined`) {
//   window.document.title = "Awesome Course";
// }

export default () => (
  <header className={styles.Headerbar}>
    <img className={styles.Logo} src={logo} alt="course" />
  </header>
);
