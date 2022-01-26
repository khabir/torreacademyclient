import { createSlice } from '@reduxjs/toolkit';
import { getUserList } from './thunk';

const initialState = {
  data: [],
  status: 'idle',
};

export const userListSlice = createSlice({
  name: 'user-list',
  initialState,
  reducers: {
    // getUserSkill: (state, action) => {
    //   state.data = {
    //     ...action.payload,
    //     durationInFrames: Math.round(action.payload.durationInSeconds * 60)
    //   };
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export default userListSlice;
