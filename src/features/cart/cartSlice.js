import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: '@@cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // actiom.payload => newItem
      state.cart.push(action.payload);
    },
    removeItem: (state, action) => {
      // action.payload => pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    incQtyItem: (state, action) => {
      // action.payload => pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decQtyItem: (state, action) => {
      // action.payload => pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.removeItem(state, action);
    },
    clearItems: (state) => {
      state.cart = [];
    },
  },
});

export const { addItem, removeItem, incQtyItem, decQtyItem, clearItems } =
  cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (store) => store.cart.cart;
export const getQntOfPizza = (id) => (store) =>
  store.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
