import axios from 'axios';

const url = '';

export const getUserSkillDetails = async () => {
  const res = await axios.get(
    'https://torreapi.azurewebsites.net/api/User/GetUsersBySkill/5B509BB8-42FE-4D5B-A957-3CB92F7E55CE'
  );
  // return res.data;
  return {
    experience: [
      {
        name: 'Founding mem',
        organizationName: 'The execut comp',
        duration: 'Feb 15 -  Dec 17',
      },
      {
        name: 'Senior Soft Eng',
        organizationName: 'Testing Inc',
        duration: 'Mar 10 -  Jan 15',
      },
    ],
    userName: 'Alexender Torrenegra',
    name: 'Software Development',
    profi: 'Master',
    peopleWithSameSkill: [
      {
        name: 'Khan',
        designation: 'Web Dev',
        isVerified: true,
        image:
          'https://res.cloudinary.com/torre-technologies-co/image/upload/v1639488123/origin/starrgate/users/profile_11a5c5529ba466f078040470dec3ef951840c09a.jpg',
      },
      {
        name: 'Ed',
        designation: 'Sr Web Dev',
        isVerified: true,
        image:
          'https://res.cloudinary.com/torre-technologies-co/image/upload/v1639488123/origin/starrgate/users/profile_11a5c5529ba466f078040470dec3ef951840c09a.jpg',
      },
    ],
  };
};
