import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        
      // at first check product exist or not
      const { payload } = action
      const isItemExist = state.find((item) => item.id === payload.id);

      if (isItemExist) {
        return state.map((item) =>
          item.id === payload.id ? { ...item, ...payload } : item
        );
      } else {
        return [...state, payload];
      }
    },
    removeFromCart: (state, action) => {

      const { id } = action.payload;
      const filteredItems = state.filter((item) => item.id !== id);
      return filteredItems;
    },
    reset: (state) => initialState
  },
});

export const { addToCart, removeFromCart, reset } = cartSlice.actions;

export const selectTotalAmount = (state) => state.cart.reduce((acc, cur) => acc + cur.quantityPrice, 0)

export default cartSlice.reducer;
