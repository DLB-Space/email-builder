import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  utm: '',
}

export const utmSettings = createSlice({
  name: 'utmSettings',
  initialState,
  reducers: {
    setUTM: (state, action) => {
      state.utm = action.payload;
    },
  },
})

export const { setUTM } = utmSettings.actions

export default utmSettings.reducer