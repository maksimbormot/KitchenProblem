import { shopAction } from "./actions";
import { findItem, del } from "../utils";

const initialState = {
  items: [
    { name: "Sausages", amount: 2, date: new Date() },
    { name: "Meat", amount: 1, date: new Date() },
    { name: "Fish", amount: 1, date: new Date() }
  ]
};
export function shopReducer(state = initialState, { type, payload }) {
  switch (type) {
    case shopAction.CLEAR_SHOP_ITEMS:
      return { ...state, items: [] };

    case shopAction.CLEAR_SHOP_ITEM: {
      return {
        ...state,
        items: del(state.items, findItem(state.items, payload.item))
      };
    }
    case shopAction.ADD_SHOP_ITEM: {
      let items = [...state.items];
      const index = findItem(items, payload.item);
      if (index !== -1) items[index].amount++;
      else items.push(payload.item);

      return { ...state, items };
    }

    case shopAction.INCREASE_SHOP_ITEM_AMOUNT: {
      const items = [...state.items];
      items[findItem(items, payload.item)].amount++;

      return { ...state, items };
    }

    case shopAction.DECREASE_SHOP_ITEM_AMOUNT: {
      let items = [...state.items];
      const index = findItem(items, payload.item);
      items[index].amount--;
      if (payload.item.amount <= 0) items = del(items, index);

      return { ...state, items };
    }

    default: {
      return state;
    }
  }
}
