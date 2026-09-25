import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

export type ThemeMode = "dark" | "light";

interface ThemeState {
  mode: ThemeMode;
}

const STORAGE_KEY = "portfolio-theme";

/**
 * Get theme from localStorage.
 * Falls back to dark theme.
 */
const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme =
    localStorage.getItem(STORAGE_KEY);

  if (
    savedTheme === "dark" ||
    savedTheme === "light"
  ) {
    return savedTheme;
  }

  return "dark";
};

const initialState: ThemeState = {
  mode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",

  initialState,

  reducers: {
    /**
     * Toggle between dark and light mode.
     */
    toggleTheme: (state) => {
      state.mode =
        state.mode === "dark"
          ? "light"
          : "dark";
    },

    /**
     * Set a specific theme.
     */
    setTheme: (
      state,
      action: PayloadAction<ThemeMode>
    ) => {
      state.mode = action.payload;
    },

    /**
     * Reset theme to dark mode.
     */
    resetTheme: (state) => {
      state.mode = "dark";
    },
  },
});

export const {
  toggleTheme,
  setTheme,
  resetTheme,
} = themeSlice.actions;

export default themeSlice.reducer;