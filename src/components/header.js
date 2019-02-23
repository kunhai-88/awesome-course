import React from "react";
import styles from './style.module.less';
import logo from '../../static/logo.png';

console.log(styles);

export default () => (
  <header>
  Hello world!
  <img className={styles.logo} src ={logo}  alt="course" />
  </header>
);