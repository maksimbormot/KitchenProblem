import React, { Component } from "react";
import { Button, Col, Row } from "antd";
import { Icon } from "semantic-ui-react";
import moment from "moment";
import PropTypes from "prop-types";
import * as constant from "../../../core/utils/constans";

class FridgeListItem extends Component {
  itemPurchase = fridge => {
    this.props.itemPurchase(fridge, this.props.item);
  };
  render() {
    const { item = {}, onIncrease, onDecrease } = this.props;
    return (
      <Row gutter={8} className="b-item">
        <Col xs={24} md={20} lg={20}>
          <Row>{`(x${item.amount})${item.name}`}</Row>
          <Row>
            <small>{moment(item.date).fromNow()}</small>
          </Row>
        </Col>
        <Col xs={24} md={4} lg={4} className="b-button">
          <Col span={12}>
            <Icon
              name="minus"
              className="cursor"
              style={{ fontSize: 24, color: "green" }}
              onClick={() => onDecrease(item)}
            />
          </Col>
        </Col>
      </Row>
    );
  }
}

FridgeListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
  itemPurchase: PropTypes.func
};

export default FridgeListItem;
