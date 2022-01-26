import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetSkillsByUser } from '../../api/userSkills/skills';

export const getSkillsByUser = createAsyncThunk('user/skill', async (id) => {
  const response = await GetSkillsByUser(id);
  // The value we return becomes the `fulfilled` action payload
  return response;
});
