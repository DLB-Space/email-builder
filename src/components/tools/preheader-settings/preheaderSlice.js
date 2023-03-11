import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showLink: true,
  to: '',
}

export const preheaderSettings = createSlice({
  name: 'preheaderSettings',
  initialState,
  reducers: {
    setShowLink: (state, action) => {
      state.showLink = action.payload;
    },
    setTo: (state, action) => {
      state.to = action.payload;
    },
  },
})

export const { setShowLink, setTo } = preheaderSettings.actions

export default preheaderSettings.reducer