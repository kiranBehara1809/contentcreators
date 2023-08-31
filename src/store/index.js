
const { configureStore } = require("@reduxjs/toolkit");
const { default :ThemeSlice } = require("./slices/theme");
const { default: HeaderTextSlice } = require("./slices/headerText");

const store = configureStore({
  reducer: {
    theme: ThemeSlice.reducer,
    headerText: HeaderTextSlice.reducer,
  },
});

export default store;
