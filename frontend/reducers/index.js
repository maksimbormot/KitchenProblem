import { combineReducers } from "redux";
import { shopReducer as shop } from "../core/shop";
import { fridgeReducer as fridge } from "../core/fridge";

export default combineReducers({
  shop,
  fridge
});
