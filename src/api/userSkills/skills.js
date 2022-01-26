import axios from 'axios';

export const getUserSkills = async (id) => {
  const res = await axios.get(
    `https://torreapi.azurewebsites.net/api/Skill/GetSkillsByUser/${id}`
  );
  return res.data;
};
