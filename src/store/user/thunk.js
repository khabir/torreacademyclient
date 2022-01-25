import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserSkills } from "../../api/userSkills/skills";

export const getSkillList = createAsyncThunk("user/skill", async (id) => {
  const response = await getUserSkills(id);
  // The value we return becomes the `fulfilled` action payload
  return response;
});
