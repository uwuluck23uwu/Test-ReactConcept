import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addProductToCart, removeProductFromCart } from './api';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  promotion: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
};

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (product: CartItem, thunkAPI) => {
    const response = await addProductToCart(product);
    return response;
  }
);

export const removeFromCartThunk = createAsyncThunk(
  'cart/removeFromCart',
  async (id: number, thunkAPI) => {
    await removeProductFromCart(id);
    return id;
  }
);

const saveCartToLocalStorage = (items: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(items));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        const itemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (itemIndex >= 0) {
          state.items[itemIndex].quantity += 1;
        } else {
          state.items.push({ ...action.payload, quantity: 1 });
        }
        saveCartToLocalStorage(state.items);
      })
      .addCase(removeFromCartThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        saveCartToLocalStorage(state.items);
      })
  },
});

export const { removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
