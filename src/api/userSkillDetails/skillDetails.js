import axios from 'axios';

export const getUserSkillDetails = async (ids) => {
  const { userId, skillId } = ids;
  const res = await axios.get(
    `https://torreapi.azurewebsites.net/api/User/user/${userId}/skill/${skillId}`
  );
  return res.data;
};
