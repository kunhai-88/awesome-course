import React from "react";
import "antd/dist/antd.css";
import Card from 'antd/lib/card';
import Layout from '../components/layout';
import styles from "./style.module.less";

export default () => (
  <Layout>
      <Card title="关于" className={styles.About}>
      Awesome Course 收集优秀的视频课程,主要涵盖前端技术(Javasctipt、React、Typescript等)，DevOps相关技术(Jenkien、Docker等).
      </Card>
  </Layout>
);
