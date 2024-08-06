import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../components/api/productsSlice";
import cartReducer from "../components/api/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
