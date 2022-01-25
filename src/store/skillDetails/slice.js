import { createSlice } from '@reduxjs/toolkit';
import { getSkillDetails } from './thunk';

const initialState = {
  data: [],
  status: 'idle',
};

export const skillDetailsSlice = createSlice({
  name: 'skillDetails',
  initialState,
  reducers: {
    // getskillDetails: (state, action) => {
    //   state.data = {
    //     ...action.payload,
    //     durationInFrames: Math.round(action.payload.durationInSeconds * 60)
    //   };
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSkillDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSkillDetails.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export default skillDetailsSlice;
