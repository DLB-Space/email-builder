import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: [],
};

export const contentSlice = createSlice({
  name: "contentSlice",
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { setImage, setTo } = contentSlice.actions;

export default contentSlice.reducer;
