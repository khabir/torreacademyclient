import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../../api/users/users';

export const getUserList = createAsyncThunk('users', async () => {
  const response = await getUsers();
  // The value we return becomes the `fulfilled` action payload
  return response;
});