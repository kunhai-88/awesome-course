import React from "react"
import 'antd/dist/antd.css'; 
import { Layout, Menu, Breadcrumb } from 'antd';
import HeaderBar from '../components/header';

const { Header, Content, Footer } = Layout;

export default () => (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
     <HeaderBar />
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Course ©2019 Created by Andy
    </Footer>
  </Layout>
);
