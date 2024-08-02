import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    produt: {
      loading: false,
      data: null,
      error: null,
    },
  },
  reducers: {
    is_product_loading: (state) => {
      state.produt.loading = true;
    },
    is_product_success: (state, action) => {
      state.produt.loading = false;
      state.produt.data = action.payload;
      state.produt.error = null;
    },
    is_product_error: (state, action) => {
      state.produt.error = action.payload;
    },
  },
});
export const { is_product_error, is_product_loading, is_product_success } =
  ProductSlice.actions;
export default ProductSlice.reducer;
