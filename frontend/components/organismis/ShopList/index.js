import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Card, Input } from "antd";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { shopAction } from "../../../core/shop";
import { fridgeAction } from "../../../core/fridge";
import ShopListItem from "../../molecules/ShopListItem";
import FridgeLinks from "../../molecules/FridgeLinks";
import * as constant from "../../../core/utils/constans";

class ShopList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShowFridge: false,
      value: ""
    };
  }
  increase = item => {
    this.props.dispatch(shopAction.increaseItemAmount(item));
  };
  decrease = item => {
    this.props.dispatch(shopAction.decreaseItemAmount(item));
  };
  itemToFridge = (fridge, item) => {
    this.props.dispatch(fridgeAction.addItems(fridge, [item]));
    this.props.dispatch(shopAction.clearItem(item));
  };
  allPurchase = i => {
    const { items } = this.props;
    this.props.dispatch(fridgeAction.addItems(i, items));
    this.props.dispatch(shopAction.clearItems());
    this.triggerFridges();
  };
  triggerFridges = () => {
    this.setState({ isShowFridge: !this.state.isShowFridge });
  };

  updateValue = ({ target: { value } }) => {
    this.setState({ value });
  };

  send = ({ target: { value } }) => {
    if (value !== "") {
      this.props.dispatch(shopAction.addItem(value));
    }
    this.setState({ value: "" });
  };
  render() {
    const { items } = this.props;
    const { isShowFridge, value } = this.state;
    const allButton = (
      <Button inverted color="green" onClick={this.triggerFridges}>
        Add All
      </Button>
    );
    return (
      <Card
        title={<div>Shop List</div>}
        extra={
          items.length ? (
            isShowFridge ? (
              <FridgeLinks
                onClick={this.allPurchase}
                items={constant.fridges}
              />
            ) : (
              allButton
            )
          ) : null
        }
      >
        <div>
          {items.map((item, key) => (
            <ShopListItem
              key={key}
              item={item}
              onIncrease={this.increase}
              itemPurchase={this.itemToFridge}
              onDecrease={this.decrease}
            />
          ))}
        </div>
        <Input
          className="shop-input"
          placeholder="What do you want to buy?"
          value={value}
          onChange={this.updateValue}
          onPressEnter={this.send}
        />
      </Card>
    );
  }
}

ShopList.propTypes = {};
const mapStateToProps = store => ({
  items: store.shop.items
});
ShopList.propTypes = {
  items: PropTypes.array.isRequired
};
export default connect(mapStateToProps)(ShopList);
