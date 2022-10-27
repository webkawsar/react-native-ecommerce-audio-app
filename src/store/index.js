import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./features/products/productSlice";
import todoSlice from "./features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    products: productSliceReducer
  },
});
