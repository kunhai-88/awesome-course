import React from "react";
import styles from './style.module.less';
import logo from '../../static/logo.png';


export default () => (
  <header>
  <img className={styles.logo} src ={logo}  alt="course" />
  </header>
);