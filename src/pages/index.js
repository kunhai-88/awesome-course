import React from "react";
import "antd/dist/antd.css";
import { Layout, Card, Row, Col, Icon } from "antd";
import HeaderBar from "../components/header";
import styles from "./style.module.less";
import Course from '../components/course'

const { Header, Content, Footer } = Layout;

export default () => (
  <Layout>
    <Header className={styles.Header}>
      <HeaderBar />
    </Header>
    <Content className={styles.Content}>
      <Card title="Javascript" className={styles.Column}>
        <Row gutter={16}>
          <Col span={8}>
            <Course
              title="李炎恢JavaScript教程 第一季"
              source="https://study.163.com"
              sourceTitle="网易云课堂"
              link="https://study.163.com/course/courseMain.htm?courseId=252008"
              cover="https://img-ph-mirror.nosdn.127.net/2r4IAK4JnA9s1T8PUaUASg==/6598173676331791619.png?imageView&quality=100&thumbnail=450y250"
            />
          </Col>
          <Col span={8} >
             
          </Col>
          <Col span={8} />
        </Row>
      </Card>
      <Card title="Jenkins" />
    </Content>
    <Footer className={styles.Footer}>Course ©2019 Created by Andy</Footer>
  </Layout>
);
