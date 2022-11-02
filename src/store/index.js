import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import cartSliceReducer from "./features/cart/cartSlice";
import productSliceReducer from "./features/products/productSlice";
import todoSlice from "./features/todos/todoSlice";


const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
  blacklist: ["todo", 'products'],
};

const rootReducer = combineReducers({
  todo: todoSlice,
  products: productSliceReducer,
  cart: cartSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});
