import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserSkillDetails } from '../../api/userSkillDetails/skillDetails';

export const getSkillDetails = createAsyncThunk('skillDetails', async () => {
  const response = await getUserSkillDetails();
  // The value we return becomes the `fulfilled` action payload
  return response;
});
