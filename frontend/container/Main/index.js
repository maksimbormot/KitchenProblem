import React, { Component } from "react";
import { Layout, Col, Row } from "antd";
const { Header, Content, Footer } = Layout;

class Main extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header className="text-white text-uppercase text-bold title-page">
          <Col span={13} offset={11}>
            Product Lists
          </Col>
        </Header>
        <Layout>
          <Content className="content">{this.props.children}</Content>
        </Layout>
      </Layout>
    );
  }
}

export default Main;
