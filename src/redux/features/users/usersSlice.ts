import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../../types/user'
import { getUsersForMeeting } from '../../../API/getUsers';
import { toast } from 'react-hot-toast'

interface State {
  isLoading: boolean,
  errorMessage: string,
  users: (User | null)[],
}

const initialState: State = {
  isLoading: false,
  errorMessage: '',
  users: [],
};

export const fetchUsers = createAsyncThunk('fetch/users', getUsersForMeeting);

export const sidebarSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchUsers.rejected, (state) => {
      state.isLoading = false;
      state.errorMessage = 'can\'t get users, try later';
      toast.error('can\'t get users, try later')
    });

    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.isLoading = false;
      state.users = action.payload;
    })
  }
})

export const {  } = sidebarSlice.actions

export default sidebarSlice.reducer