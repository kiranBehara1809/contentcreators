const { createSlice } = require("@reduxjs/toolkit");

const initalState = {
  headerText : "",
};
const HeaderTextSlice = createSlice({
  name: "headerText",
  initialState: initalState,
  reducers: {
    setHeaderText: (state,  {payload} ) => {
      state.headerText = payload;
    },
  },
});

export const HEADER_TEXT_ACTIONS = HeaderTextSlice.actions;
export default HeaderTextSlice;
