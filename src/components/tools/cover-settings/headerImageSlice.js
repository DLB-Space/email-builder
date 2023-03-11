import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  source: '',
  to: '',
}

export const headerImage = createSlice({
  name: 'headerImage',
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.source = action.payload;
    },
    setTo: (state, action) => {
      state.to = action.payload;
    },
  },
})

export const { setImage, setTo } = headerImage.actions

export default headerImage.reducer