const { createSlice } = require("@reduxjs/toolkit");

const initalState = {
  colorTheme : "lightMode",
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState: initalState,
  reducers: {
    setThemeColor: (state, { payload }) => {
      state.colorTheme = payload;
    },
  },
});

export const COLOR_THEME_ACTIONS = ThemeSlice.actions;
export default ThemeSlice;
