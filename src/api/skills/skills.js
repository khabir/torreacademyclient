import axios from 'axios';

export const getSkills = async () => {
  const res = await axios.get(
    `https://torreapi.azurewebsites.net/api/Skill/Skills/All`
  );
  return res.data;
};
