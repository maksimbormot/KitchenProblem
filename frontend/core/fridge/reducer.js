import { fridgeAction } from "./actions";
import { findItem, del } from "../utils";

const initialState = {
  fridges: [
    [
      { name: "Сhocolate", amount: 2, date: new Date() },
      { name: "Сorn", amount: 1, date: new Date() }
    ],
    [
      { name: "Fish", amount: 1, date: new Date() },
      { name: "Patato", amount: 1, date: new Date() },
      { name: "Tomato", amount: 1, date: new Date() }
    ]
  ]
};
export function fridgeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case fridgeAction.ADD_FRIDGE_ITEMS: {
      let fridges = [...state.fridges];
      const fridgeItems = fridges[payload.number];

      for (const item of payload.items) {
        const index = findItem(fridgeItems, item);
        if (index !== -1) fridgeItems[index].amount += item.amount;
        else fridgeItems.push(item);
      }

      return { ...state, fridges };
    }

    case fridgeAction.ADD_FRIDGE_ITEM: {
      let fridges = [...state.fridges];
      const fridgeItems = fridges[payload.number];

      const index = findItem(fridgeItems, payload.item);
      if (index !== -1) fridgeItems[index].amount++;
      else fridgeItems.push(payload.item);

      return { ...state, fridges };
    }

    case fridgeAction.INCREASE_FRIDGE_ITEM_AMOUNT: {
      const fridges = [...state.fridges];

      const fridgeItems = fridges[payload.number];
      const index = findItem(fridgeItems, payload.item);
      fridgeItems[index].amount++;

      return { ...state, fridges };
    }

    case fridgeAction.DECREASE_FRIDGE_ITEM_AMOUNT: {
      const fridges = [...state.fridges];

      let fridgeItems = fridges[payload.number];
      const index = findItem(fridgeItems, payload.item);
      fridgeItems[index].amount--;
      if (payload.item.amount <= 0) {
        fridges[payload.number] = del(fridgeItems, index);
      }
      return { ...state, fridges };
    }

    default: {
      return state;
    }
  }
}
