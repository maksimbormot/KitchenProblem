import React, { Component } from "react";
import { Layout, Col, Row } from "antd";
const { Header, Content, Footer } = Layout;
import ShopList from "../../organismis/ShopList";
import Fridge from "../../organismis/Fridge";

class Kitchen extends Component {
  render() {
    return (
      <Row>
        <Row>
          <Col xs={24} md={8} lg={8} className="block">
            <ShopList />
          </Col>
          <Col xs={24} md={8} lg={8} className="block fridge">
            <Fridge num={0} />
          </Col>
          <Col xs={24} md={8} lg={8} className="block fridge">
            <Fridge num={1} />
          </Col>
        </Row>
      </Row>
    );
  }
}

export default Kitchen;
