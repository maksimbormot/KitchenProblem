export const shopAction = {
  ADD_SHOP_ITEM: "ADD_SHOP_ITEM",
  INCREASE_SHOP_ITEM_AMOUNT: "INCREASE_SHOP_ITEM_AMOUNT",
  DECREASE_SHOP_ITEM_AMOUNT: "DECREASE_SHOP_ITEM_AMOUNT",
  CLEAR_SHOP_ITEMS: "CLEAR_SHOP_ITEMS",
  CLEAR_SHOP_ITEM: "CLEAR_SHOP_ITEM",

  addItem: name => ({
    type: shopAction.ADD_SHOP_ITEM,
    payload: {
      items: { name, amount: 1, date: new Date() }
    }
  }),
  clearItem: item => ({
    type: shopAction.CLEAR_SHOP_ITEM,
    payload: { item }
  }),
  clearItems: () => ({
    type: shopAction.CLEAR_SHOP_ITEMS
  }),
  increaseItemAmount: item => ({
    type: shopAction.INCREASE_SHOP_ITEM_AMOUNT,
    payload: { item }
  }),
  decreaseItemAmount: item => ({
    type: shopAction.DECREASE_SHOP_ITEM_AMOUNT,
    payload: { item }
  })
};
