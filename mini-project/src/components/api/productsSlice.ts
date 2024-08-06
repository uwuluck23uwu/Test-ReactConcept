import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProducts as fetchProductsAPI,
  deleteProduct,
  updateProduct,
} from "./api";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data = await fetchProductsAPI();
    return data;
  }
);

export const deleteProductThunk = createAsyncThunk(
  "products/deleteProduct",
  async (id: string) => {
    await deleteProduct(id);
    return id;
  }
);

export const updateProductThunk = createAsyncThunk(
  "products/updateProduct",
  async (product: Product) => {
    const updatedProduct = await updateProduct(product);
    return updatedProduct;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addProduct: (state, action: PayloadAction<any>) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(updateProductThunk.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
