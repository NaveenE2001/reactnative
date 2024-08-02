import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthSlice";
import ProductSlice from "./reducers/ProductSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: ProductSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ["meta.arg", "payload"],
        ignoredPaths: ["auth.login.error", "auth.signin.error"],
      },
    }),
});

export default store;
