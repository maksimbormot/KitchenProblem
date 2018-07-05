import React, { Component } from "react";
import { Button, Col, Row } from "antd";
import { Icon } from "semantic-ui-react";
import moment from "moment";
import PropTypes from "prop-types";
import FridgeLinks from "../../molecules/FridgeLinks";
import * as constant from "../../../core/utils/constans";

class ShopListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBought: false
    };
  }
  itemPurchase = fridge => {
    this.props.itemPurchase(fridge, this.props.item);
    this.setState({ isBought: false });
  };
  buy = () => {
    this.setState({ isBought: true });
  };
  render() {
    const { item = {}, onIncrease, onDecrease } = this.props;
    return (
      <Row gutter={8} className="b-item">
        <Col xs={24} md={12} lg={12}>
          <Row>{`(x${item.amount})${item.name}`}</Row>
          <Row>
            <small>{moment(item.date).fromNow()}</small>
          </Row>
        </Col>
        <Col xs={24} md={4} lg={4} className="b-button">
          <Col span={12}>
            <Icon
              name="plus square"
              size="large"
              className="cursor"
              style={{ color: "green" }}
              onClick={() => onIncrease(item)}
            />
          </Col>
          <Col span={12}>
            <Icon
              name="minus circle"
              size="large"
              className="cursor"
              style={{ color: "green" }}
              onClick={() => onDecrease(item)}
            />
          </Col>
        </Col>
        <Col xs={24} md={8} lg={8} className="b-button">
          {this.state.isBought ? (
            <FridgeLinks onClick={this.itemPurchase} items={constant.fridges} />
          ) : (
            <Icon
              name="credit card"
              size="large"
              className="fa-shopping-cart fa-2x cursor"
              onClick={this.buy}
            />
          )}
        </Col>
      </Row>
    );
  }
}

ShopListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
  itemPurchase: PropTypes.func
};

export default ShopListItem;
