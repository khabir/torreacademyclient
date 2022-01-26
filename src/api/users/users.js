import axios from 'axios';

export const getUsers = async () => {
  const res = await axios.get(
    `https://torreapi.azurewebsites.net/api/User/Users/All`
  );
  return res.data;
};
