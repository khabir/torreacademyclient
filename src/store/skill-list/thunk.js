import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSkills } from '../../api/skills/skills';

export const getSkillList = createAsyncThunk('skills', async () => {
  const response = await getSkills();
  // The value we return becomes the `fulfilled` action payload
  return response;
});