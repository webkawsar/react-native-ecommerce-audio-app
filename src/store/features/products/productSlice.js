import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  message: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const fetchProducts = createAsyncThunk(
  "products/getAll",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://simple-runaway-theme-backend.herokuapp.com/api/products?populate=*"
      );
      const products = response?.data?.data;
      return products;
    } catch (error) {
      console.log(error, "fetchProducts error");
      return thunkAPI.rejectWithValue("Server Error!");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});


export const selectedHeadphones = (state) => {
    console.log(state, 'state')

  const filteredHeadphones = state.products.products.filter((product) => product?.attributes?.ecommerce_category?.data?.attributes?.name ===
      "headphones"
  );
  return filteredHeadphones;
};

export const selectedEarphones = (state) => {

  const filteredEarphones = state.products.products.filter((product) => product?.attributes?.ecommerce_category?.data?.attributes?.name ===
      "earphones"
  );
  return filteredEarphones;
};

export const selectedSpeakers = (state) => {

  const filteredSpeakers = state.products.products.filter((product) => product?.attributes?.ecommerce_category?.data?.attributes?.name ===
      "speakers"
  );
  return filteredSpeakers;
};




export default productSlice.reducer;
