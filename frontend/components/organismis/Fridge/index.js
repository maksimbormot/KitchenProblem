import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Button, Card, Input } from "antd";
import { connect } from "react-redux";
import { fridgeAction } from "../../../core/fridge";
import FridgeListItem from "../../molecules/FridgeListItem";
import * as constant from "../../../core/utils/constans";

class Fridge extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  decreaseItemAmount = item => {
    const { num } = this.props;
    this.props.dispatch(fridgeAction.decreaseItemAmount(num, item));
  };

  send = ({ target: { value } }) => {
    if (value !== "") {
      this.props.dispatch(fridgeAction.addItem(this.props.num, value));
    }
    this.setState({ value: "" });
  };

  updateValue = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { fridges, num } = this.props;
    const items = fridges[num];
    console.log(items, num);
    return (
      <Card title={<div>{`Fridge# ${num + 1}`}</div>} extra={""}>
        {items.map((item, key) => (
          <FridgeListItem
            key={key}
            item={item}
            onDecrease={this.decreaseItemAmount}
          />
        ))}
        <div>
          <Input
            value={this.state.value}
            className="shop-input"
            placeholder="What do you want to put in the fridge"
            onChange={this.updateValue}
            onPressEnter={this.send}
          />
        </div>
      </Card>
    );
  }
}

Fridge.propTypes = {
  num: PropTypes.number.isRequired,
  fridges: PropTypes.array.isRequired
};
const mapStateToProps = store => ({
  fridges: store.fridge.fridges
});
export default connect(mapStateToProps)(Fridge);
