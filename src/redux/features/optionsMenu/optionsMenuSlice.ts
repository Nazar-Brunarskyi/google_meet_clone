import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
  isOpen: boolean,
}

const initialState: CounterState = {
  isOpen: false,
}

export const optionsMenuSlice = createSlice({
  name: 'optionsMenu',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
})

export const { toggle } = optionsMenuSlice.actions

export default optionsMenuSlice.reducer