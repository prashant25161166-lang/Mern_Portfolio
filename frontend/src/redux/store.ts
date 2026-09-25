import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./themeSlice";

// Redux Store
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },

  // Redux DevTools is enabled automatically in development.
  devTools: import.meta.env.DEV,
});

// Root State
export type RootState = ReturnType<
  typeof store.getState
>;

// Dispatch Type
export type AppDispatch = typeof store.dispatch;