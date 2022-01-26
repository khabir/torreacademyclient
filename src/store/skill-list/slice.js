import { createSlice } from '@reduxjs/toolkit';
import { getSkillList } from './thunk';

const initialState = {
  data: [],
  status: 'idle',
};

export const skillListSlice = createSlice({
  name: 'skill-list',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSkillList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSkillList.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      });
  },
});

export default skillListSlice;
