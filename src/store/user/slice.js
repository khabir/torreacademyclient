import { createSlice } from '@reduxjs/toolkit';
import { getSkillsByUser } from './thunk';

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
      .addCase(getSkillsByUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSkillsByUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export default userSlice;
