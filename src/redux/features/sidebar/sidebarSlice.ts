import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  message: string,
}

const initialState: CounterState = {
  message: '12545243',
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },

    clear: (state) => {
      state.message = '';
    },
  },
})

export const { clear, setMessage } = sidebarSlice.actions

export default sidebarSlice.reducer