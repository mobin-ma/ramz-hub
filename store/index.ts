import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./articles/articlesSlice";
import authReducer from "./auth/authSlice"

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;