import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './thunk';

const initialState = {
  data: [],
  status: 'idle',
};

export const userSlice = createSlice({
  name: 'user',
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
      .addCase(getUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export default userSlice;
