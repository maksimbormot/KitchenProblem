export const fridgeAction = {
  ADD_FRIDGE_ITEMS: "ADD_FRIDGE_ITEMS",
  ADD_FRIDGE_ITEM: "ADD_FRIDGE_ITEM",
  INCREASE_FRIDGE_ITEM_AMOUNT: "INCREASE_FRIDGE_ITEM_AMOUNT",
  DECREASE_FRIDGE_ITEM_AMOUNT: "DECREASE_FRIDGE_ITEM_AMOUNT",

  addItems: (number, items) => ({
    type: fridgeAction.ADD_FRIDGE_ITEMS,
    payload: {
      number,
      items
    }
  }),

  addItem: (number, name) => ({
    type: fridgeAction.ADD_FRIDGE_ITEM,
    payload: {
      number,
      item: { name, amount: 1, date: new Date() }
    }
  }),

  increaseItemAmount: (number, item) => ({
    type: fridgeAction.INCREASE_FRIDGE_ITEM_AMOUNT,
    payload: {
      number,
      item
    }
  }),

  decreaseItemAmount: (number, item) => ({
    type: fridgeAction.DECREASE_FRIDGE_ITEM_AMOUNT,
    payload: {
      number,
      item
    }
  })
};
