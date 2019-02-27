import React from "react";
import "antd/dist/antd.css";
import Card from 'antd/lib/card';
import Layout from 'antd/lib/layout';

import HeaderBar from "../components/header";
import styles from "./style.module.less";

const { Header, Content, Footer } = Layout;

export default () => (
  <Layout>
    <Header className={styles.Header}>
      <HeaderBar />
    </Header>
    <Content className={styles.Content}>
      <Card title="关于" className={styles.Column}>
         
      </Card>
    </Content>
    <Footer className={styles.Footer}>Course ©2019 Created by Andy</Footer>
  </Layout>
);
