import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserSkillDetails } from '../../api/userSkillDetails/skillDetails';

export const getSkillDetails = createAsyncThunk('skillDetails', async (ids) => {
  const response = await getUserSkillDetails(ids);
  // The value we return becomes the `fulfilled` action payload
  return response;
});
